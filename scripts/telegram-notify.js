// scripts/telegram-notify.js
const botToken = '8866326692:AAEwyXC3ih8mmykNcT_UYvujUj1ZH-iQMJQ';
const chatId = '847419012';

async function send(text) {
  const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    })
  });
  const data = await res.json();
  console.log('Result:', data);
}

const msg = process.argv[2] || 'Test notification from Finesse System';
send(msg);
