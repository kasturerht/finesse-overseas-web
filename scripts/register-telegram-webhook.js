// scripts/register-telegram-webhook.js
const token = '8866326692:AAEwyXC3ih8mmykNcT_UYvujUj1ZH-iQMJQ';
const webhookUrl = 'https://finesseoverseas.com/api/telegram-webhook';

async function register() {
  console.log(`Setting webhook to: ${webhookUrl}...`);
  const res = await fetch(`https://api.telegram.org/bot${token}/setWebhook?url=${encodeURIComponent(webhookUrl)}`);
  const data = await res.json();
  console.log('setWebhook Result:', JSON.stringify(data, null, 2));

  const infoRes = await fetch(`https://api.telegram.org/bot${token}/getWebhookInfo`);
  const infoData = await infoRes.json();
  console.log('getWebhookInfo:', JSON.stringify(infoData, null, 2));
}

register();
