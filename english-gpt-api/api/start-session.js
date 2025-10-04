// api/start-session.js
// Vercel Serverless Function: echoes back the selections from the Custom GPT Action.
// Deployed URL will be: https://<your-project>.vercel.app/api/start-session

export default async function handler(req, res) {
  // Vercel automatically parses JSON when Content-Type: application/json is sent.
  const body = req.body || {};
  return res.status(200).json({ ok: true, received: body });
}
