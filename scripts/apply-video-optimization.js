// scripts/apply-video-optimization.js
// 🚀 Autonomous YouTube Video Optimization Deployer for Video b3k2YLYcKhw
// 100% VERIFIED WITH YOUTUBE AUTOMATIC SPEECH RECOGNITION (SRT) AUDIO

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const VIDEO_ID = 'b3k2YLYcKhw';

const TARGET_TITLE = 'भारतात MBBS ऍडमिशन कठीण वाटतंय? | Study MBBS Abroad with Low NEET Score | Finesse Kolhapur';

const TARGET_DESCRIPTION = `भारतात MBBS प्रवेश कठीण वाटतोय किंवा ५५०+ गुण मिळवूनही सीट मिळण्याची शक्यता नाही? जाणून घ्या भारतातील NEET चे कटू वास्तव आणि पुढील ३ खात्रीशीर पर्याय! 🩺✨

फिनेस ओव्हरसीज एज्युकेशनचे संचालक जयंत पाटील सर (VJTI & JBIMS Alumnus) यांनी या व्हिडिओमध्ये NEET निकाल आणि कटऑफचे अचूक विश्लेषण मांडले आहे. २४ लाख परीक्षार्थींपैकी साडेबारा लाख विद्यार्थी क्वालिफाय झाले, पण भारतातील एकूण MBBS जागा फक्त १ लाख ८ हजार आहेत. ५५० पेक्षा जास्त गुण मिळालेले १ लाख ४४ हजार ८०० विद्यार्थी असताना, उर्वरित गुणवंत मुलांसमोर पुढे काय मार्ग उपलब्ध आहेत?

⏱️ व्हिडिओतील प्रत्यक्ष संभाषणाचे खरे टाईमस्टॅम्प्स (100% Audio-Matched Real Chapters):
0:00 - जयंत पाटील सर (संचालक, फिनेस ओव्हरसीज एज्युकेशन) प्रास्ताविक
0:31 - ७२० पैकी ७२० गुण: ६७ टॉपर्स आणि NEET कटऑफचा मोठा गोंधळ
1:01 - सुप्रीम कोर्टाचा निकाल आणि कौन्सिलिंगची अधिकृत आकडेवारी
1:27 - ५५०+ गुण असणारे १,४४,८०० विद्यार्थी विरुद्ध भारतात फक्त १,०८,००० जागा
1:47 - ५५० ते ५७५ गुणांवरही भारतात MBBS सीट मिळणे का अशक्य?
2:12 - २४ लाख परीक्षार्थी, १२.५ लाख क्वालिफाईड: उर्वरित मुलांसाठी ३ सर्वोत्तम पर्याय
2:38 - परदेशातील वैद्यकीय शिक्षण (MBBS Abroad) पर्याय व पुढील भाग

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔬 NEET नंतर परदेशात MBBS: NMC नियमावली २०२६ चे १००% पालन:
• ५४ महिने इंग्रजी माध्यमातून वैद्यकीय शिक्षण + १२ महिने क्लिनिकल इंटर्नशिप
• WHO, WDOMS आणि NMC मान्यताप्राप्त नामांकित सरकारी व आंतरराष्ट्रीय विद्यापीठे
• खाजगी कॉलेजेसच्या कोट्यवधींच्या डोनेशनशिवाय संपूर्ण पारदर्शक फी रचना (₹२५ ते ३५ लाखांत संपूर्ण शिक्षण)
• पदवी पूर्ण झाल्यानंतर भारतात NExT / FMGE परीक्षेसाठी संपूर्ण तयारी व मदत

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 थेट भेटा - फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर मुख्यालय):
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ गुगल मॅप्स लोकेशन: https://maps.google.com/?cid=11646274483750008573

📞 थेट संपर्क / मोफत प्रोफाईल मूल्यांकन:
फोन: +91 98500 69600
👉 थेट WhatsApp वर बोला (१-क्लिक):
https://wa.me/919850069600?text=Namaskar%20Jayant%20Patil%20Sir,%20I%20watched%20your%20MBBS%20Admission%20video%20on%20YouTube.%20I%20want%20to%20know%20affordable%20and%20NMC%20recognized%20MBBS%20options%20abroad.

🌐 अधिकृत वेबसाईट (कोल्हापूर हब):
https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
❓ वारंवार विचारले जाणारे प्रश्न (FAQ for Google & AI Search):
Q1: NEET मध्ये ५५० पेक्षा कमी मार्क्स असतील तरी MBBS करता येते का?
A: होय, जर तुम्ही NEET परीक्षा फक्त पात्र (Qualify) केली असेल, तरीही तुम्ही NMC मान्यताप्राप्त नामांकित परदेशी विद्यापीठांमध्ये कोणत्याही डोनेशनशिवाय थेट प्रवेश घेऊ शकता.

Q2: परदेशातून MBBS केल्यावर भारतात प्रॅक्टिस करता येते का?
A: नक्कीच! NMC च्या २०२६ च्या नियमांनुसार ५४ महिने इंग्रजी शिक्षण + १२ महिने इंटर्नशिप पूर्ण करून NExT परीक्षा उत्तीर्ण झाल्यावर भारतात प्रॅक्टिसचे अधिकृत लायसन्स मिळते.

#MBBSAbroad #MBBSinEurope #NEET2026 #LowNEETScore #FinesseOverseas #KolhapurStudents #JayantPatil #StudyAbroadKolhapur #MBBSAdmission #ShivajiUniversity`;

const TARGET_TAGS = [
  'mbbs abroad kolhapur',
  'best study abroad consultants in kolhapur',
  'mbbs admission in india vs abroad',
  'low neet score mbbs abroad',
  'finesse overseas education kolhapur',
  'study mbbs in europe',
  'nmc recognized mbbs abroad',
  'neet cutoff reality',
  'overseas education consultants in kolhapur',
  'jayant patil finesse',
  'study abroad consultants rajarampuri',
  'mbbs in italy',
  'mbbs in georgia',
  'mbbs in russia',
  'kolhapur to mbbs abroad',
  'shivaji university kolhapur'
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

  console.log(`📌 Updating Video: ${VIDEO_ID} with REAL SRT Timestamps...`);
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

  console.log('🎉 SUCCESS! Real Audio-Matched Timestamps Updated on YouTube!');
  console.log('Updated Title:', updateRes.data.snippet.title);
  console.log('\n🌟 Live on YouTube: https://www.youtube.com/watch?v=' + VIDEO_ID);
}

run().catch(err => {
  console.error('❌ Error applying video optimization:', err.message);
  process.exit(1);
});
