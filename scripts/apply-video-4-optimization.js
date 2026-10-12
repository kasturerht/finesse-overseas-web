// scripts/apply-video-4-optimization.js
// 🚀 Autonomous YouTube Video Optimization Deployer for Video APOHXpC8-ls (Italy Free Tuition Short)
// Cleans up spam tags (Pushpa/AlluArjun) and transforms into High-Converting Silicon Valley SEO Short

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const VIDEO_ID = 'APOHXpC8-ls';

const TARGET_TITLE = 'इटलीत 100% मोफत शिक्षण & ₹10L स्कॉलरशिप! 🇮🇹 | Study in Italy Zero Tuition | Finesse Kolhapur';

const TARGET_DESCRIPTION = `इटलीच्या जागतिक दर्जाच्या सरकारी विद्यापीठांमध्ये ० रुपये ट्युशन फी आणि राहण्या-खाण्यासाठी दरवर्षी ₹८ ते १० लाख सरकारी DSU स्कॉलरशिप मिळवण्याची सुवर्णसंधी! 🇮🇹✨

कोणतेही शैक्षणिक कर्ज न घेता, युरोपमध्ये उच्च शिक्षण (Bachelors / Masters in English) घेण्याचे स्वप्न पूर्ण करा. फिनेस ओव्हरसीज एज्युकेशन (राजारामपुरी, कोल्हापूर) कडून संपूर्ण पारदर्शक ऍडमिशन, स्कॉलरशिप व व्हिसा मार्गदर्शन.

⏱️ महत्त्वाचे टप्पे (Shorts Key Moments):
0:00 - इटलीमध्ये मोफत शिक्षणाची सुवर्णसंधी (Zero Tuition Fees)
0:10 - दरवर्षी ₹८ ते १० लाख सरकारी DSU स्कॉलरशिप व राहण्याचा खर्च
0:20 - फिनेस ओव्हरसीज, राजारामपुरी कोल्हापूर कडून मोफत व्हिसा मार्गदर्शन

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 इटलीमध्ये शिक्षणाचे प्रमुख फायदे (E-E-A-T 2026):
• १००% इंग्रजी माध्यमातील जागतिक दर्जाचे पदवी व पदव्युत्तर कोर्सेस (Bachelors & Masters)
• टॉप सरकारी विद्यापीठे: University of Milan, Sapienza Rome, Politecnico di Milano, University of Bologna
• प्रादेशिक DSU स्कॉलरशिप: संपूर्ण ट्युशन फी माफ + दरवर्षी रोख भत्ता + मोफत कॅन्टीन भोजन
• २९ युरोपियन देशांमध्ये मुक्त प्रवासाचा शेन्गेन व्हिसा (Schengen Visa Privileges)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 थेट भेटा - फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर मुख्यालय):
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ गुगल मॅप्स लोकेशन: https://maps.google.com/?cid=11646274483750008573

📞 थेट संपर्क / मोफत प्रोफाईल मूल्यांकन:
फोन: +91 98500 69600
👉 थेट WhatsApp वर बोला (१-क्लिक):
https://wa.me/919850069600?text=Namaskar%20Jayant%20Patil%20Sir,%20I%20watched%20your%20Italy%20Zero%20Tuition%20Short.%20I%20want%20details%20for%20English-taught%20programs%20and%20DSU%20scholarship.

🌐 अधिकृत वेबसाईट (कोल्हापूर हब):
https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyInItaly #ItalyScholarship #FreeEducationInEurope #DSUScholarship #FinesseOverseas #KolhapurStudents #JayantPatil #StudyAbroadKolhapur #ShivajiUniversity`;

const TARGET_TAGS = [
  'study in italy free',
  'study in italy scholarship kolhapur',
  'italy zero tuition fees',
  'dsu scholarship italy',
  'finesse overseas education kolhapur',
  'best study abroad consultants in kolhapur',
  'masters in italy in english',
  'bachelors in italy zero tuition',
  'italy student visa kolhapur',
  'overseas education consultants in kolhapur',
  'rajarampuri kolhapur',
  'jayant patil finesse',
  'shivaji university to europe',
  'study in europe free',
  'free education in europe',
  'kolhapur study abroad'
];

async function run() {
  console.log('🚀 Connecting to YouTube API...');
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

  console.log(`📌 Updating Video 4: ${VIDEO_ID} (Italy Free Tuition Short)...`);
  const updateRes = await youtube.videos.update({
    part: ['snippet'],
    requestBody: {
      id: VIDEO_ID,
      snippet: {
        title: TARGET_TITLE,
        description: TARGET_DESCRIPTION,
        tags: TARGET_TAGS,
        categoryId: '27' // Education
      }
    }
  });

  console.log('🎉 SUCCESS! Video 4 metadata updated successfully on YouTube!');
  console.log('Updated Title:', updateRes.data.snippet.title);
  console.log('Updated CategoryId:', updateRes.data.snippet.categoryId);
  console.log('Cleaned Tags Count:', updateRes.data.snippet.tags.length);

  // Post top-level comment
  try {
    console.log('💬 Posting official comment from channel...');
    const commentText = `🇮🇹 इटलीच्या टॉप सरकारी विद्यापीठांमध्ये ० रुपये फी आणि दरवर्षी ₹८ ते १० लाख स्कॉलरशिपवर Bachelors / Masters कसे करावे? \nथेट जयंत पाटील सरांशी WhatsApp वर बोला:\n👉 https://wa.me/919850069600?text=Hello%20Jayant%20Sir,%20I%20want%20details%20for%20Italy%20Zero%20Tuition%20and%20Scholarship\n📍 फिनेस ओव्हरसीज: चौथी गल्ली, राजारामपुरी, कोल्हापूर.`;
    
    await youtube.commentThreads.insert({
      part: ['snippet'],
      requestBody: {
        snippet: {
          videoId: VIDEO_ID,
          topLevelComment: {
            snippet: {
              textOriginal: commentText
            }
          }
        }
      }
    });
    console.log('✔ Official comment successfully posted!');
  } catch (err) {
    console.log('ℹ️ Comment posting info:', err.message);
  }

  console.log('\n🌟 All changes live on YouTube: https://www.youtube.com/shorts/' + VIDEO_ID);
}

run().catch(err => {
  console.error('❌ Error applying video optimization:', err.message);
  process.exit(1);
});
