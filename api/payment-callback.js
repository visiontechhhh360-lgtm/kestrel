// JazzCash POSTs here after payment. We read the raw body manually (Vercel does
// not auto-parse application/x-www-form-urlencoded into req.body), then redirect
// the browser to GET /payment-return with the response params in the query string.
export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.redirect(302, '/payment-return');
  }

  if (req.method !== 'POST') return res.status(405).end();

  try {
    // Collect raw body chunks
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const rawBody = Buffer.concat(chunks).toString('utf8');

    console.log('[payment-callback] raw body:', rawBody);

    const params = new URLSearchParams(rawBody);
    const qs = params.toString();

    console.log('[payment-callback] redirecting with qs:', qs);

    res.redirect(302, `/payment-return?${qs}`);
  } catch (err) {
    console.error('[payment-callback] error:', err);
    res.redirect(302, '/payment-return?pp_ResponseCode=ERR&pp_ResponseMessage=Callback+error');
  }
}
