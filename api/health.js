export default function handler(req, res) {
  // Simple health check that does not leak secrets
  const hasKey = Boolean(process.env.GEMINI_API_KEY);
  const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
  return res.status(200).json({
    ok: true,
    env: {
      GEMINI_API_KEY_present: hasKey,
      GEMINI_MODEL: model
    }
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
