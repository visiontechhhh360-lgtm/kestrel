// JazzCash POSTs to this endpoint after payment completes.
// We convert the POST body to a GET redirect so React Router can handle /payment-return.
export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Direct browser visit — just send to payment-return
    return res.redirect(302, '/payment-return');
  }

  if (req.method !== 'POST') return res.status(405).end();

  // Vercel auto-parses application/x-www-form-urlencoded into req.body
  const params = req.body || {};
  const qs = new URLSearchParams(params).toString();

  res.redirect(302, `/payment-return?${qs}`);
}
