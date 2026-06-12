import crypto from 'node:crypto';

const MERCHANT_ID    = process.env.JAZZCASH_MERCHANT_ID;
const PASSWORD       = process.env.JAZZCASH_PASSWORD;
const INTEGRITY_SALT = process.env.JAZZCASH_INTEGRITY_SALT;

// Direct Pay API — server-to-server, returns JSON, no user redirect
const DIRECT_API_URL = 'https://sandbox.jazzcash.com.pk/ApplicationAPI/API/2.0/Purchase/DoTransaction';

const PLANS = {
  monthly: { name: 'Kestrel VPN Monthly Plan', price: 4.99 },
  yearly:  { name: 'Kestrel VPN Yearly Plan',  price: 48.99 },
};

function pad(n) { return String(n).padStart(2, '0'); }

function formatDateTime(d) {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function generateHash(params) {
  const sortedValues = Object.keys(params)
    .sort()
    .map(k => params[k])
    .filter(v => v !== '' && v != null);
  const str = [INTEGRITY_SALT, ...sortedValues].join('&');
  return crypto.createHmac('sha256', INTEGRITY_SALT).update(str).digest('hex').toUpperCase();
}

// Convert user-typed "MM/YY" → "MMYYYY" required by DoTransaction API
function formatExpiry(mmyy) {
  const clean = mmyy.trim().replace(/\s/g, '');
  const [mm, yy] = clean.split('/');
  return `${mm.padStart(2, '0')}20${yy.padStart(2, '0')}`;
}

async function getUsdToPkrRate() {
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/USD', { signal: AbortSignal.timeout(5000) });
    const d = await r.json();
    if (d.result === 'success' && d.rates?.PKR) return d.rates.PKR;
  } catch {}
  try {
    const r = await fetch('https://api.exchangerate-api.com/v4/latest/USD', { signal: AbortSignal.timeout(5000) });
    const d = await r.json();
    if (d.rates?.PKR) return d.rates.PKR;
  } catch {}
  return 280;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  const { plan, firstName, lastName, email, cardNumber, cardExpiry, cardCvv, cardName } = req.body || {};

  const selected = PLANS[plan];
  if (!selected)
    return res.status(400).json({ error: 'Invalid plan' });
  if (!email || !cardNumber || !cardExpiry || !cardCvv || !cardName)
    return res.status(400).json({ error: 'Missing required fields' });

  const now    = new Date();
  const expiry = new Date(now.getTime() + 30 * 60 * 1000);

  const txnRefNo  = `T${formatDateTime(now)}${Math.floor(Math.random() * 9000 + 1000)}`;
  const rate      = await getUsdToPkrRate();
  const pkrAmount = Math.round(selected.price * rate);
  const amount    = String(pkrAmount * 100); // paisa

  const expiryFormatted = formatExpiry(cardExpiry);

  const params = {
    pp_Amount:                 amount,
    pp_BillReference:          'KestrelVPN',
    pp_CustomerCardCvv:        cardCvv.replace(/\D/g, ''),
    pp_CustomerCardExpiryDate: expiryFormatted,
    pp_CustomerCardNameOnCard: cardName,
    pp_CustomerCardNumber:     cardNumber.replace(/\s/g, ''),
    pp_CustomerEmail:          email,
    pp_Description:            selected.name,
    pp_Language:               'EN',
    pp_MerchantID:             MERCHANT_ID,
    pp_Password:               PASSWORD,
    pp_TxnCurrency:            'PKR',
    pp_TxnDateTime:            formatDateTime(now),
    pp_TxnExpiryDateTime:      formatDateTime(expiry),
    pp_TxnRefNo:               txnRefNo,
    pp_TxnType:                'CC',
    pp_Version:                '1.1',
  };

  params.pp_SecureHash = generateHash(params);

  console.log(`[jazzcash] ${txnRefNo} | $${selected.price} → PKR ${pkrAmount} | expiry: ${expiryFormatted}`);

  try {
    const jcRes = await fetch(DIRECT_API_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(params),
      signal:  AbortSignal.timeout(30000),
    });

    const result = await jcRes.json();
    console.log(`[jazzcash] response code: ${result.pp_ResponseCode} | message: ${result.pp_ResponseMessage}`);

    return res.status(200).json({
      success:         result.pp_ResponseCode === '000',
      responseCode:    result.pp_ResponseCode    || '',
      responseMessage: result.pp_ResponseMessage || '',
      txnRefNo:        result.pp_TxnRefNo        || txnRefNo,
      amount:          result.pp_Amount          || amount,
      conversion:      { usdPrice: selected.price, pkrAmount, rate: Math.round(rate * 100) / 100 },
    });
  } catch (err) {
    console.error('[jazzcash] gateway error:', err);
    return res.status(502).json({ error: 'Payment gateway unreachable. Please try again.' });
  }
}
