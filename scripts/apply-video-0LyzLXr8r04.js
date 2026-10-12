// scripts/apply-video-0LyzLXr8r04.js
// 🚀 Optimization Deployer for Video 0LyzLXr8r04 (Italy Free Education Short)
// Purges Spam Movie Tags & Replaces with High-Converting SEO Metadata

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const VIDEO_ID = '0LyzLXr8r04';

const TARGET_TITLE = 'इटलीमध्ये 100% मोफत उच्चशिक्षण & ₹10L स्कॉलरशिप! 🇮🇹 | Study in Italy Zero Tuition | Finesse Kolhapur';

const TARGET_DESCRIPTION = `परदेशात शिक्षण घेण्याचे तुमचे स्वप्न आहे, पण ट्युशन फीची काळजी वाटतेय? इटलीच्या सरकारी विद्यापीठांमध्ये ० रुपये ट्युशन फी आणि दरवर्षी ₹८ ते १० लाख रुपयांच्या DSU स्कॉलरशिपवर पदवी (Bachelors) व पदव्युत्तर (Masters) शिक्षण पूर्ण करण्याची सुवर्णसंधी! 🇮🇹🎓

फिनेस ओव्हरसीज एज्युकेशन कोल्हापूर कडून २०२६-२०२७ ऍकॅडमिक वर्षासाठी ॲडमिशन, स्कॉलरशिप आणि व्हिसाचे १००% खात्रीशीर मार्गदर्शन.

⏱️ क्विक हायलाइट्स (Shorts Timestamps):
0:00 - इटलीमध्ये १००% मोफत ट्युशन फी संधी (Zero Tuition Fee in Italy)
0:10 - वार्षिक ₹८ ते १० लाखांची DSU स्कॉलरशिप (राहणे व जेवण मोफत)
0:20 - फिनेस ओव्हरसीज कोल्हापूर कडून ऍडमिशन व व्हिसा मार्गदर्शन

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 इटलीतील शिक्षणाचे प्रमुख फायदे (E-E-A-T 2026):
• ० रुपये ट्युशन फी (जागतिक दर्जाची सरकारी विद्यापीठे)
• दरवर्षी ₹८ ते १० लाख DSU स्कॉलरशिप (खिशाला एक रुपयाही भार नाही)
• १००% इंग्रजी माध्यमातील इंजिनिअरिंग, मॅनेजमेंट, सायन्स व मेडिकल कोर्सेस
• IELTS शिवाय काही विद्यापीठांमध्ये प्रवेश शक्य (MOI द्वारे)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन (मुख्यालय, कोल्हापूर):
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ मॅप्स: https://maps.google.com/?cid=11646274483750008573

📞 थेट संपर्क / मोफत प्रोफाइल मूल्यांकन:
फोन: +91 98500 69600
👉 थेट WhatsApp करा: https://wa.me/919850069600?text=Namaskar%20Finesse,%20I%20saw%20your%20Italy%20Free%20Education%20video.%20I%20want%20information%20about%20Zero%20Tuition%20Fees%20and%20DSU%20scholarship.

🌐 अधिकृत वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #StudyInItaly #FreeEducation #DSUScholarship #ItalyScholarship #StudyAbroadKolhapur #FinesseOverseas #KolhapurStudents #JayantPatil #StudyInEurope`;

const TARGET_TAGS = [
  'study in italy',
  'free education in europe',
  'italy dsu scholarship',
  'study abroad kolhapur',
  'finesse overseas education',
  'zero tuition fees europe',
  'study in italy for indian students',
  'best study abroad consultants in kolhapur',
  'overseas education consultants in kolhapur',
  'rajarampuri kolhapur',
  'study abroad after 12th',
  'masters in italy',
  'bachelors in italy',
  'jayant patil kolhapur',
  'scholarship in europe',
  'study in europe free'
];

const TARGET_COMMENT = `🇮🇹 इटलीच्या टॉप सरकारी विद्यापीठांमध्ये 100% मोफत ट्युशन फी आणि ₹8 ते 10 लाखांपर्यंत DSU स्कॉलरशिप मिळवा!

फिनेस ओव्हरसीज एज्युकेशन, राजारामपुरी, कोल्हापूर कडून ऍडमिशन, स्कॉलरशिप कागदपत्रे आणि व्हिसाचे खात्रीशीर मार्गदर्शन.

📍 पत्ता: समर्थ साक्षी प्लाझा, चौथी गल्ली, राजारामपुरी, कोल्हापूर.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600
👉 थेट व्हॉट्सॲप करा: https://wa.me/919850069600?text=Hi%20Finesse,%20Please%20guide%20me%20for%20Free%20Study%20in%20Italy.`;

async function main() {
  console.log('=== OPTIMIZING VIDEO: ' + VIDEO_ID + ' (Italy Free Education Short) ===');

  const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_FILE, 'utf8'));
  const web = clientSecret.installed || clientSecret.web;
  const tokens = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));

  const oauth2Client = new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    'http://localhost:3000/oauth2callback'
  );
  oauth2Client.setCredentials(tokens);

  oauth2Client.on('tokens', (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(updated, null, 2));
  });

  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  const getRes = await youtube.videos.list({
    part: ['snippet'],
    id: [VIDEO_ID]
  });

  const currentSnippet = getRes.data.items[0].snippet;
  console.log('Old Title: ' + currentSnippet.title);
  console.log('Old Category: ' + currentSnippet.categoryId);
  console.log('Old Tags:', currentSnippet.tags);

  const updatedSnippet = {
    ...currentSnippet,
    title: TARGET_TITLE,
    description: TARGET_DESCRIPTION,
    tags: TARGET_TAGS,
    categoryId: '27' // Education
  };

  const updateRes = await youtube.videos.update({
    part: ['snippet'],
    requestBody: {
      id: VIDEO_ID,
      snippet: updatedSnippet
    }
  });

  console.log('\n✅ Video snippet updated successfully!');
  console.log('Live Title: ' + updateRes.data.snippet.title);
  console.log('Live Category: ' + updateRes.data.snippet.categoryId);
  console.log('Spam tags completely purged! New clean tags:', updateRes.data.snippet.tags.length);

  try {
    const commentRes = await youtube.commentThreads.insert({
      part: ['snippet'],
      requestBody: {
        snippet: {
          videoId: VIDEO_ID,
          topLevelComment: {
            snippet: {
              textOriginal: TARGET_COMMENT
            }
          }
        }
      }
    });
    console.log('✅ Comment posted successfully! Comment ID: ' + commentRes.data.id);
  } catch (err) {
    console.log('Comment note: ' + err.message);
  }

  console.log('\n🎉 Video ' + VIDEO_ID + ' is 100% OPTIMIZED and LIVE!');
  console.log('Link: https://www.youtube.com/shorts/' + VIDEO_ID);
}

main().catch(console.error);
