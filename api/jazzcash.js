import crypto from 'node:crypto';

const MERCHANT_ID    = process.env.JAZZCASH_MERCHANT_ID;
const PASSWORD       = process.env.JAZZCASH_PASSWORD;
const INTEGRITY_SALT = process.env.JAZZCASH_INTEGRITY_SALT;
const GATEWAY_URL    = 'https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/';

const PLANS = {
  monthly: { name: 'Kestrel VPN Monthly Plan', price: 4.99 },
  yearly:  { name: 'Kestrel VPN Yearly Plan',  price: 48.99 },
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function formatDateTime(d) {
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

// Sort all pp_ params alphabetically, take their values, prepend salt, HMAC-SHA256
function generateHash(params) {
  const sortedValues = Object.keys(params)
    .sort()
    .map(k => params[k])
    .filter(v => v !== '' && v != null);

  const str = [INTEGRITY_SALT, ...sortedValues].join('&');
  return crypto.createHmac('sha256', INTEGRITY_SALT).update(str).digest('hex').toUpperCase();
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { plan, firstName, lastName, email } = req.body || {};

  const selected = PLANS[plan];
  if (!selected) return res.status(400).json({ error: 'Invalid plan' });

  if (!email) return res.status(400).json({ error: 'Missing required fields' });

  const now    = new Date();
  const expiry = new Date(now.getTime() + 30 * 60 * 1000);

  const txnRefNo = `T${formatDateTime(now)}${Math.floor(Math.random() * 9000 + 1000)}`;
  const amount   = String(Math.round(selected.price * 100));

  const appUrl    = process.env.APP_URL || `https://${process.env.VERCEL_URL}`;
  const returnUrl = `${appUrl}/api/payment-callback`;

  // Card details are NOT sent here — the hosted checkout page collects them
  // securely on JazzCash's end (pp_TxnType CC shows their card entry form).
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

  console.log('[jazzcash] txnRef:', txnRefNo, 'amount:', amount, 'returnUrl:', returnUrl);

  return res.status(200).json({ gatewayUrl: GATEWAY_URL, params });
}
