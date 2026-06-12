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

// Fetch live USD → PKR rate. Falls back to a conservative hardcoded rate if
// the exchange-rate service is unreachable.
async function getUsdToPkrRate() {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD', {
      signal: AbortSignal.timeout(5000),
    });
    const data = await response.json();
    if (data.result === 'success' && data.rates?.PKR) {
      return data.rates.PKR;
    }
  } catch {}

  // Secondary source
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
      signal: AbortSignal.timeout(5000),
    });
    const data = await response.json();
    if (data.rates?.PKR) return data.rates.PKR;
  } catch {}

  return 280; // hardcoded fallback — update periodically if needed
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { plan, firstName, lastName, email } = req.body || {};

  const selected = PLANS[plan];
  if (!selected) return res.status(400).json({ error: 'Invalid plan' });
  if (!email)    return res.status(400).json({ error: 'Missing required fields' });

  const now    = new Date();
  const expiry = new Date(now.getTime() + 30 * 60 * 1000);

  const txnRefNo = `T${formatDateTime(now)}${Math.floor(Math.random() * 9000 + 1000)}`;

  // Convert USD price to PKR at today's live rate
  const rate      = await getUsdToPkrRate();
  const pkrAmount = Math.round(selected.price * rate);   // e.g. $4.99 × 280.5 = PKR 1,400
  const amount    = String(pkrAmount * 100);              // JazzCash expects paisa (1 PKR = 100 paisa)

  const appUrl    = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
  const returnUrl = `${appUrl}/api/payment-callback`;

  const params = {
    pp_Amount:            amount,
    pp_BillReference:     'KestrelVPN',
    pp_CustomerEmail:     email,
    pp_Description:       selected.name,
    pp_Language:          'EN',
    pp_MerchantID:        MERCHANT_ID,
    pp_Password:          PASSWORD,
    pp_ReturnURL:         returnUrl,
    pp_TxnCurrency:       'PKR',
    pp_TxnDateTime:       formatDateTime(now),
    pp_TxnExpiryDateTime: formatDateTime(expiry),
    pp_TxnRefNo:          txnRefNo,
    pp_TxnType:           'CC',
    pp_Version:           '1.1',
  };

  params.pp_SecureHash = generateHash(params);

  console.log(
    `[jazzcash] txn:${txnRefNo} | $${selected.price} USD | rate:${rate.toFixed(2)} | PKR ${pkrAmount} | paisa:${amount}`
  );

  return res.status(200).json({
    gatewayUrl: GATEWAY_URL,
    params,
    // Returned so the frontend can show the user what they'll be charged
    conversion: { usdPrice: selected.price, pkrAmount, rate: Math.round(rate * 100) / 100 },
  });
}
