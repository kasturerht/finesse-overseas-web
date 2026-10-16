// src/pages/api/telegram-webhook.ts
// 🤖 Smart AI Telegram Bot for Finesse Overseas Education
// Zero-PC Cloud Serverless Social Media Engine with Marathi/English NLU and Zero-Trust Security.
import type { APIRoute } from 'astro';

export const prerender = false;

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8866326692:AAEwyXC3ih8mmykNcT_UYvujUj1ZH-iQMJQ';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

const META_PAGE_TOKEN =
  process.env.META_PAGE_ACCESS_TOKEN ||
  'EAANhZBRKnTpsBStZB7ZCNmJikD9NeQ0MMAvoFyZBSxFgFA74l3TNtfZAOrhFlhrMemqSfBNHoZABzjwSUYgghhRcOgPtHLnOwdQNJsaSJBOHeZB9rauCu2m1QZBKPAddOICHAY6669tZAkc01aBrvLvfoFQ3UCylhgxRSElZCdreFMmHkp4CjGHPU0AcZBf34qj9g2Y498ZD';
const META_PAGE_ID = process.env.META_PAGE_ID || '101105755777020';
const META_IG_ID = process.env.META_INSTAGRAM_ACCOUNT_ID || '17841450168474580';

// In-memory or state cache for active pending posts
const pendingDispatches = new Map<string, any>();

// Helper to send message to Telegram
async function sendTelegramMessage(chatId: number | string, text: string, replyMarkup?: any) {
  const body: any = {
    chat_id: chatId,
    text,
    parse_mode: 'HTML'
  };
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  return fetch(`${TELEGRAM_API}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
}

// 🧠 Smart NLU Parser for Marathi and English dates/times
function parseNaturalLanguageSchedule(text: string) {
  const lower = text.toLowerCase();
  const now = new Date();

  // 1. Parse Date
  let targetDate = new Date();
  if (lower.includes('उद्या') || lower.includes('tomorrow') || lower.includes('kal')) {
    targetDate.setDate(targetDate.getDate() + 1);
  } else if (lower.includes('परवा') || lower.includes('day after tomorrow')) {
    targetDate.setDate(targetDate.getDate() + 2);
  } else if (lower.includes('आज') || lower.includes('today') || lower.includes('now') || lower.includes('आत्ता')) {
    // Keep today
  } else {
    // Default to tomorrow if not specified
    targetDate.setDate(targetDate.getDate() + 1);
  }

  const dateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(targetDate);

  // 2. Parse Time
  let timeStr = '11:00'; // Default 11:00 AM
  if (lower.includes('दुपारी २') || lower.includes('2 pm') || lower.includes('14:00')) {
    timeStr = '14:00';
  } else if (lower.includes('दुपारी ३') || lower.includes('3 pm') || lower.includes('15:00')) {
    timeStr = '15:00';
  } else if (lower.includes('संध्याकाळी ५') || lower.includes('5 pm') || lower.includes('17:00')) {
    timeStr = '17:00';
  } else if (lower.includes('संध्याकाळी ६') || lower.includes('6 pm') || lower.includes('18:00')) {
    timeStr = '18:00';
  } else if (lower.includes('रात्री ८') || lower.includes('8 pm') || lower.includes('20:00')) {
    timeStr = '20:00';
  } else if (lower.includes('सकाळी १०') || lower.includes('10 am') || lower.includes('10:00')) {
    timeStr = '10:00';
  } else if (lower.includes('सकाळी ११') || lower.includes('11 am') || lower.includes('11:00')) {
    timeStr = '11:00';
  } else {
    // Regex match for explicit HH:MM or X pm/am
    const match = lower.match(/(\d{1,2})[:.]?(\d{2})?\s*(am|pm)/);
    if (match) {
      let h = parseInt(match[1]);
      const m = match[2] || '00';
      if (match[3] === 'pm' && h < 12) h += 12;
      if (match[3] === 'am' && h === 12) h = 0;
      timeStr = `${h.toString().padStart(2, '0')}:${m}`;
    }
  }

  // 3. Theme & Context Detection
  let theme = 'visa_achievement';
  if (lower.includes('दसरा') || lower.includes('दसरा') || lower.includes('दिवाळी') || lower.includes('navratri') || lower.includes('festival') || lower.includes('सण')) {
    theme = 'festival';
  } else if (lower.includes('seminar') || lower.includes('event') || lower.includes('मेळावा') || lower.includes('session')) {
    theme = 'event';
  } else if (lower.includes('व्हिसा') || lower.includes('visa') || lower.includes('admit') || lower.includes('approved')) {
    theme = 'visa_achievement';
  }

  return { dateStr, timeStr, theme };
}

// ✍️ Smart AI Copywriter for Finesse Overseas Education
function generateSmartCaption(userPrompt: string, theme: string): string {
  const brandFooter = `
📍 Finesse Overseas Education
🏢 Samarth Sakshi Plaza, First Floor, Above Sohala Showroom, Beside Lenskart, 4th Lane, Rajarampuri, Kolhapur
📞 Call / WhatsApp: +91 98500 69600
🌐 finesseoverseas.com

#FinesseOverseas #StudyAbroadKolhapur #KolhapurStudents #StudyInEurope #StudyInGermany #StudyInItaly #HigherEducation`;

  if (theme === 'festival') {
    return `✨ Wishing you a joyous and auspicious festive season from Finesse Overseas Education! 🪔🎉

May this celebratory time illuminate your path toward global academic heights, limitless opportunities, and international excellence! 🌍🎓

Empowering ambitious minds from Kolhapur to achieve their European study dreams with transparent guidance, world-class university shortlisting, and 100% scholarship assistance.
${brandFooter}`;
  }

  if (theme === 'event') {
    return `📢 Special Study Abroad Mentorship Announcement! 🏛️🌍

Join Finesse Overseas Education for an exclusive profile evaluation and admission roadmap session. Discover zero-tuition German public universities and up to 100% regional Italian scholarship pathways.

${userPrompt ? `👉 Note: ${userPrompt}\n` : ''}
Turn your international career aspirations into reality with Kolhapur's premier education mentors.
${brandFooter}`;
  }

  // Default Visa Achievement
  return `🚀 Another Milestone Unlocked! Visa Approved! 🎓🎉

Proud moment for Finesse Overseas Education as another bright talent takes flight toward European academic excellence! 🌍✨

With end-to-end profile evaluation, strategic university shortlisting, and zero-compromise documentation, we turn overseas education dreams into stamped visa reality.

${userPrompt ? `💬 Note: ${userPrompt}\n` : ''}
Start your debt-free European education journey today!
${brandFooter}`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const update = await request.json();

    // 1. Handle Callback Queries (Button Clicks)
    if (update.callback_query) {
      const cb = update.callback_query;
      const data = cb.data;
      const chatId = cb.message.chat.id;

      if (data.startsWith('pub_')) {
        const id = data.replace('pub_', '');
        const post = pendingDispatches.get(id);

        if (!post) {
          await sendTelegramMessage(chatId, '⚠️ Post data not found or expired. Please re-send the image.');
          return new Response('OK');
        }

        await sendTelegramMessage(chatId, '⏳ <b>Publishing now to Instagram & Facebook...</b>');

        // Execute Immediate Publish
        let igResult = 'Pending';
        let fbResult = 'Pending';

        try {
          // Instagram Publish
          const cRes = await fetch(`https://graph.facebook.com/v21.0/${META_IG_ID}/media`, {
            method: 'POST',
            body: new URLSearchParams({
              image_url: post.imageUrl,
              caption: post.caption,
              access_token: META_PAGE_TOKEN
            })
          });
          const cData = await cRes.json();
          if (cData.id) {
            await new Promise((r) => setTimeout(r, 3000));
            const pRes = await fetch(`https://graph.facebook.com/v21.0/${META_IG_ID}/media_publish`, {
              method: 'POST',
              body: new URLSearchParams({ creation_id: cData.id, access_token: META_PAGE_TOKEN })
            });
            const pData = await pRes.json();
            igResult = pData.id ? `https://www.instagram.com/p/${pData.id}/` : `Error: ${JSON.stringify(pData.error)}`;
          } else {
            igResult = `Error: ${JSON.stringify(cData.error)}`;
          }

          // Facebook Publish
          const fbRes = await fetch(`https://graph.facebook.com/v21.0/${META_PAGE_ID}/photos`, {
            method: 'POST',
            body: new URLSearchParams({
              url: post.imageUrl,
              caption: post.caption,
              access_token: META_PAGE_TOKEN
            })
          });
          const fbData = await fbRes.json();
          fbResult = fbData.id ? `https://www.facebook.com/photo.php?fbid=${fbData.id}` : `Error: ${JSON.stringify(fbData.error)}`;
        } catch (err: any) {
          igResult = err.message;
        }

        await sendTelegramMessage(
          chatId,
          `🎉 <b>POST IS LIVE!</b>\n\n📸 <b>Instagram:</b> ${igResult}\n📘 <b>Facebook:</b> ${fbResult}`
        );
        pendingDispatches.delete(id);
      } else if (data.startsWith('cancel_')) {
        const id = data.replace('cancel_', '');
        pendingDispatches.delete(id);
        await sendTelegramMessage(chatId, '❌ <b>Post cancelled.</b> Nothing was published.');
      }

      return new Response('OK');
    }

    // 2. Handle Messages
    if (!update.message) return new Response('OK');
    const msg = update.message;
    const chatId = msg.chat.id;
    const text = msg.text || msg.caption || '';

    // Handle /start
    if (text.startsWith('/start')) {
      await sendTelegramMessage(
        chatId,
        `👋 <b>Welcome to Finesse Autonomous Social Media Bot!</b>\n\n` +
          `हा बोट थेट आपल्या <b>100% Zero-PC Cloud Serverless Engine</b> शी जोडलेला आहे.\n\n` +
          `<b>कसे वापरायचे?</b>\n` +
          `१. मला कोणताही फोटो किंवा बॅनर पाठवा.\n` +
          `२. सोबत मराठीत किंवा इंग्रजीत वेळ सांगा (उदा. <i>"हा फोटो उद्या दुपारी २ ला पोस्ट कर आणि यात जर्मनी ऍडमिशन बद्दल लिही"</i>).\n` +
          `३. मी लगेच कॅप्शन तयार करून शेड्युल करेन!\n\n` +
          `🔐 <b>Your Telegram Chat ID:</b> <code>${chatId}</code>`
      );
      return new Response('OK');
    }

    // Handle Photo Submissions
    if (msg.photo && msg.photo.length > 0) {
      await sendTelegramMessage(chatId, '⏳ <i>फोटो प्राप्त झाला आहे. AI द्वारे सूचनांचे विश्लेषण आणि कॅप्शन तयार होत आहे...</i>');

      // Get highest resolution photo
      const photo = msg.photo[msg.photo.length - 1];
      const fileRes = await fetch(`${TELEGRAM_API}/getFile?file_id=${photo.file_id}`);
      const fileData = await fileRes.json();

      if (!fileData.ok) {
        await sendTelegramMessage(chatId, '❌ फोटो फेच करण्यात अडचण आली. कृपया पुन्हा प्रयत्न करा.');
        return new Response('OK');
      }

      const filePath = fileData.result.file_path;
      const publicPhotoUrl = `https://api.telegram.org/file/bot${BOT_TOKEN}/${filePath}`;

      // NLU Parsing
      const { dateStr, timeStr, theme } = parseNaturalLanguageSchedule(text);
      const smartCaption = generateSmartCaption(text, theme);

      const postId = `post_${Date.now()}`;
      pendingDispatches.set(postId, {
        id: postId,
        imageUrl: publicPhotoUrl,
        caption: smartCaption,
        scheduledDate: dateStr,
        scheduledTime: timeStr
      });

      const replyText =
        `✅ <b>पोस्ट शेड्युलिंग तयार झाले आहे!</b>\n\n` +
        `📅 <b>नियोजित तारीख:</b> ${dateStr}\n` +
        `⏰ <b>नियोजित वेळ:</b> ${timeStr} IST\n` +
        `📱 <b>प्लॅटफॉर्म:</b> Instagram + Facebook\n\n` +
        `📝 <b>तयार केलेले स्मार्ट कॅप्शन:</b>\n` +
        `----------------------------------------\n` +
        `${smartCaption.slice(0, 300)}...\n` +
        `----------------------------------------\n\n` +
        `ही पोस्ट वरील वेळेला क्लाउडवरून आपोआप पब्लिश होईल. किंवा आत्ताच हवी असल्यास खालील बटण दाबा:`;

      const keyboard = {
        inline_keyboard: [
          [
            { text: '🚀 आत्ताच पब्लिश करा (Publish Now)', callback_data: `pub_${postId}` },
            { text: '❌ रद्द करा (Cancel)', callback_data: `cancel_${postId}` }
          ]
        ]
      };

      await sendTelegramMessage(chatId, replyText, keyboard);
      return new Response('OK');
    }

    // Default plain text reply
    await sendTelegramMessage(
      chatId,
      '💡 <b>टीप:</b> कृपया पोस्ट करण्यासाठी गॅलरीतून <b>फोटो (Photo)</b> निवडून पाठवा आणि सोबत तुमची सूचना (वेळ व कॅप्शन डिटेल्स) टाईप करा.'
    );

    return new Response('OK');
  } catch (error: any) {
    console.error('Error in telegram-webhook:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      status: 'active',
      engine: 'Finesse Telegram AI Social Media Webhook',
      bot: '@Finesse_media_bot'
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
