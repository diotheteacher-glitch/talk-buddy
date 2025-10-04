[README.md](https://github.com/user-attachments/files/22702890/README.md)
# English GPT Session API

This repository provides a **tiny serverless API** endpoint that powers a **Custom GPT Action**.
The Action renders clickable options (gender, age group, English level, voice, topic, and mode) and posts them here.
This endpoint echoes the selected options so the GPT can immediately start the **English speaking session**.

## 📂 Project Structure
```
english-gpt-api/
├─ package.json
└─ api/
   └─ start-session.js
```

## ▶️ Deploy to Vercel (no framework)
1. Create a new project on Vercel and import this folder (or connect GitHub and deploy).
2. Click **Deploy**.
3. Your endpoint will be available at:
   ```
   https://<your-project>.vercel.app/api/start-session
   ```

## 🔌 Connect to your Custom GPT
Use **Actions → Add Action → Import from OpenAPI** and paste `openapi.yaml` from this repo.
Replace the `servers.url` with your deployed base URL.

## 🧪 Test locally (optional)
You can test after deploying with cURL:
```bash
curl -X POST https://<your-project>.vercel.app/api/start-session     -H "Content-Type: application/json"     -d '{"gender":"man","age_group":"adult","level":"B1","voice":"johnny","topic":"travel","mode":"qa"}'
```

Response:
```json
{
  "ok": true,
  "received": {
    "gender": "man",
    "age_group": "adult",
    "level": "B1",
    "voice": "johnny",
    "topic": "travel",
    "mode": "qa"
  }
}
```

## 📜 Privacy Policy
See [PRIVACY.md](./PRIVACY.md). Use the public link to this file as your **Privacy Policy URL** in the GPT Action.

## 📝 License
MIT
