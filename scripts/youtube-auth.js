// scripts/youtube-auth.js
// 🎥 Autonomous OAuth 2.0 Authenticator for YouTube Data API v3
// Authorizes Finesse Overseas Education YouTube Channel Management

import fs from 'fs';
import path from 'path';
import http from 'http';
import { google } from 'googleapis';

const CREDENTIALS_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKENS_FILE = path.join(process.cwd(), 'youtube-tokens.json');

async function main() {
  if (!fs.existsSync(CREDENTIALS_FILE)) {
    console.error('❌ ERROR: oauth-client-secret.json not found!');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf8'));
  const web = credentials.installed || credentials.web;
  const { client_id, client_secret } = web;

  const PORT = 3000;
  const redirectUri = `http://localhost:${PORT}/oauth2callback`;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirectUri
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/youtube',
      'https://www.googleapis.com/auth/youtube.force-ssl',
      'https://www.googleapis.com/auth/youtube.readonly'
    ]
  });

  console.log('\n===============================================================');
  console.log('⚡ FINESSE YOUTUBE CHANNEL OAUTH 2.0 CONNECT ⚡');
  console.log('===============================================================\n');
  console.log('👉 Click or copy this link in your browser to authorize:\n');
  console.log(authUrl);
  console.log('\n🌐 Waiting for browser callback on port 3000...');

  const server = http.createServer(async (req, res) => {
    try {
      if (req.url.startsWith('/oauth2callback')) {
        const urlObj = new URL(req.url, `http://localhost:${PORT}`);
        const code = urlObj.searchParams.get('code');

        if (!code) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end('<h1>Auth Failed</h1>');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <html>
            <body style="font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding-top: 80px;">
              <div style="background: #1e293b; padding: 40px; border-radius: 16px; display: inline-block; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid #334155; max-width: 500px;">
                <h1 style="color: #10b981; margin-bottom: 12px;">✔ YouTube Connected Successfully!</h1>
                <p style="color: #94a3b8; font-size: 16px; line-height: 1.6;">Antigravity has securely retrieved YouTube authorization tokens for Finesse Overseas Education.</p>
                <p style="color: #64748b; font-size: 14px; margin-top: 20px;">You can close this tab and return to chat.</p>
              </div>
            </body>
          </html>
        `);

        server.close();
        console.log('\n⏳ Exchanging authorization code for tokens...');
        const { tokens } = await oauth2Client.getToken(code);
        fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
        console.log('\n🎉 SUCCESS! Securely saved YouTube OAuth tokens to: youtube-tokens.json');
        console.log('================================================================================\n');
        process.exit(0);
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error during token exchange: ' + err.message);
      console.error('❌ ERROR during token exchange:', err.message);
      process.exit(1);
    }
  }).listen(PORT);
}

main().catch(err => {
  console.error('💥 Fatal error in YouTube OAuth:', err);
  process.exit(1);
});
