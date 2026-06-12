import crypto from 'node:crypto';

const MERCHANT_ID    = process.env.JAZZCASH_MERCHANT_ID;
const PASSWORD       = process.env.JAZZCASH_PASSWORD;
const INTEGRITY_SALT = process.env.JAZZCASH_INTEGRITY_SALT;
const GATEWAY_URL    = 'https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/';

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

// MM/YY  →  MM/YYYY  (e.g. "12/26" → "12/2026")
function formatExpiry(mmyy) {
  const [mm, yy] = mmyy.replace(/\s/g, '').split('/');
  return `${mm}/20${yy}`;
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
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { plan, firstName, lastName, email, cardNumber, cardExpiry, cardCvv, cardName } = req.body || {};

  const selected = PLANS[plan];
  if (!selected)                                     return res.status(400).json({ error: 'Invalid plan' });
  if (!email || !cardNumber || !cardExpiry || !cardCvv || !cardName)
                                                     return res.status(400).json({ error: 'Missing required fields' });

  const now    = new Date();
  const expiry = new Date(now.getTime() + 30 * 60 * 1000);

  const txnRefNo = `T${formatDateTime(now)}${Math.floor(Math.random() * 9000 + 1000)}`;

  const rate      = await getUsdToPkrRate();
  const pkrAmount = Math.round(selected.price * rate);
  const amount    = String(pkrAmount * 100); // paisa

  const appUrl    = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
  const returnUrl = `${appUrl}/api/payment-callback`;

  const params = {
    pp_Amount:                 amount,
    pp_BillReference:          'KestrelVPN',
    pp_CustomerCardCvv:        cardCvv.replace(/\D/g, ''),
    pp_CustomerCardExpiryDate: formatExpiry(cardExpiry),   // MM/YYYY
    pp_CustomerCardNameOnCard: cardName,
    pp_CustomerCardNumber:     cardNumber.replace(/\s/g, ''),
    pp_CustomerEmail:          email,
    pp_Description:            selected.name,
    pp_Language:               'EN',
    pp_MerchantID:             MERCHANT_ID,
    pp_Password:               PASSWORD,
    pp_ReturnURL:              returnUrl,
    pp_TxnCurrency:            'PKR',
    pp_TxnDateTime:            formatDateTime(now),
    pp_TxnExpiryDateTime:      formatDateTime(expiry),
    pp_TxnRefNo:               txnRefNo,
    pp_TxnType:                'CC',
    pp_Version:                '1.1',
  };

  params.pp_SecureHash = generateHash(params);

  console.log(
    `[jazzcash] ${txnRefNo} | $${selected.price} @ ${rate.toFixed(2)} = PKR ${pkrAmount} | expiry: ${formatExpiry(cardExpiry)}`
  );

  return res.status(200).json({
    gatewayUrl: GATEWAY_URL,
    params,
    conversion: { usdPrice: selected.price, pkrAmount, rate: Math.round(rate * 100) / 100 },
  });
}
