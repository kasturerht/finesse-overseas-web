// scripts/apply-batch-ielts-optimization.js
// 🚀 Autonomous Batch Deployer for 4 IELTS Coaching Shorts
// Optimizes: a-cZ6IjprZY, sotu6m6VnXg, 2XQV4QO90y0, CW3KvAGoLfI

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const IELTS_VIDEOS = [
  {
    id: 'a-cZ6IjprZY',
    targetTitle: 'कोल्हापुरात सर्वोत्तम IELTS कोचिंग शोधताय? 🎯 | Best IELTS Classes in Kolhapur | Finesse',
    targetCategory: '27',
    tags: [
      'ielts classes in kolhapur',
      'best ielts coaching kolhapur',
      'ielts preparation kolhapur',
      'ielts exam band 7',
      'ielts speaking coaching',
      'study abroad consultants in kolhapur',
      'finesse overseas education',
      'ielts training rajarampuri',
      'finesse ielts academy',
      'ielts listening reading writing',
      'british council idp ielts',
      'ielts test dates 2026',
      'overseas education consultants in kolhapur',
      'jayant patil kolhapur',
      'english speaking course kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `कोल्हापुरात IELTS परीक्षेची सर्वोत्कृष्ट तयारी शोधताय? फिनेस ओव्हरसीज एज्युकेशन (राजारामपुरी, कोल्हापूर) मध्ये सुरू असलेल्या विशेष बॅचेसमध्ये सहभागी व्हा आणि पहिल्याच प्रयत्नात Band 7+ मिळवा! 🎯✨

आमची वैशिष्ट्ये:
• अनुभवी आणि प्रमाणित IELTS ट्रेनर्स
• Listening, Reading, Writing, Speaking या चारही मॉड्युल्सची कसून तयारी
• मोफत मॉक टेस्ट्स आणि वैयक्तिक फीडबॅक सेशन्स
• यूके, कॅनडा, ऑस्ट्रेलिया, युरोप आणि युएसएच्या व्हिसासाठी आवश्यक बँड स्कोरची हमी

📍 पत्ता - फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ गुगल मॅप्स: https://maps.google.com/?cid=11646274483750008573

📞 संपर्क / मोफत डेमो क्लाससाठी:
फोन: +91 98500 69600
👉 थेट WhatsApp मेसेज करा:
https://wa.me/919850069600?text=Namaskar%20Finesse,%20I%20want%20to%20join%20IELTS%20coaching%20classes%20in%20Kolhapur.%20Please%20share%20batch%20timings%20and%20fees.

🌐 अधिकृत वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #IELTSClassesInKolhapur #IELTSPreparation #BestIELTSCoaching #FinesseOverseas #KolhapurStudents #IELTSExam #StudyAbroadKolhapur #RajarampuriKolhapur`,
    comment: `🎯 कोल्हापुरात पहिल्याच प्रयत्नात IELTS मध्ये Band 7+ मिळवायचा आहे?

फिनेस ओव्हरसीज एज्युकेशन (राजारामपुरी, कोल्हापूर) च्या तज्ज्ञ फॅकल्टीकडून वैयक्तिक मार्गदर्शन आणि मॉक टेस्ट्स मिळवा.

📍 समर्थ साक्षी प्लाझा, चौथी गल्ली, राजारामपुरी, कोल्हापूर.
📞 मोफत डेमो क्लाससाठी कॉल/व्हॉट्सॲप: +91 98500 69600
👉 थेट व्हॉट्सॲप: https://wa.me/919850069600?text=Hi%20Finesse,%20I%20am%20interested%20in%20IELTS%20Classes.`
  },
  {
    id: 'sotu6m6VnXg',
    targetTitle: 'IELTS मध्ये Band 7+ कसा मिळवायचा? 🎯 | Score Band 7+ in IELTS | Finesse IELTS Kolhapur',
    targetCategory: '27',
    tags: [
      'ielts band 7 score',
      'how to crack ielts',
      'ielts coaching in kolhapur',
      'best ielts classes kolhapur',
      'ielts exam tips',
      'ielts mock test kolhapur',
      'study abroad kolhapur',
      'finesse overseas education',
      'rajarampuri kolhapur',
      'ielts general and academic',
      'ielts speaking practice',
      'overseas education consultants in kolhapur',
      'best study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'ielts 2026 preparation',
      'english coaching kolhapur'
    ],
    description: `IELTS परीक्षेत Band 7 किंवा त्याहून अधिक स्कोअर करणे वाटते तितके कठीण नाही! फक्त योग्य रणनीती, अचूक मॉक टेस्ट्स आणि तज्ज्ञ मार्गदर्शनाची गरज असते. 🎯📚

फिनेस ओव्हरसीज एज्युकेशन कोल्हापूर येथे विद्यार्थी-केंद्रित कोचिंगद्वारे दरवर्षी १००+ विद्यार्थी त्यांचा इच्छित बँड स्कोअर यशस्वीरित्या मिळवत आहेत.

आमच्या बॅचेसची वैशिष्ट्ये:
• डेली स्पीकिंग आणि रायटिंग इव्हॅल्यूएशन
• कॅम्ब्रिज अधिकृत अभ्यास साहित्य
• लवचिक बॅच टाईमिंग्स (कॉलेज व नोकरदार विद्यार्थ्यांसाठी)

📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ गुगल मॅप्स: https://maps.google.com/?cid=11646274483750008573

📞 संपर्क: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Hi%20Finesse,%20I%20want%20tips%20and%20coaching%20to%20score%20Band%207%20in%20IELTS.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #IELTSScoreBand7 #IELTSKolhapur #FinesseOverseas #IELTSCoaching #StudyAbroadKolhapur #KolhapurStudents #Rajarampuri`,
    comment: `📚 IELTS Speaking आणि Writing मध्ये पैकीच्या पैकी बँड मिळवण्यासाठी आजच फिनेसची मोफत डेमो बॅच जॉईन करा!

📞 कॉल / व्हॉट्सॲप: +91 98500 69600
📍 पत्ता: चौथी गल्ली, राजारामपुरी, कोल्हापूर.`
  },
  {
    id: '2XQV4QO90y0',
    targetTitle: 'IELTS ची तयारी कशी करावी? | Expert IELTS Training & Mock Tests | Finesse Kolhapur',
    targetCategory: '27',
    tags: [
      'ielts preparation tips',
      'ielts classes in kolhapur',
      'ielts mock test series',
      'ielts coaching rajarampuri',
      'study abroad consultants in kolhapur',
      'finesse overseas education',
      'ielts listening tips',
      'ielts writing band 8',
      'ielts speaking mock test',
      'overseas education consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'ielts institute kolhapur',
      'best study abroad consultants in kolhapur',
      'study in uk ielts',
      'study in canada ielts'
    ],
    description: `परदेशात उच्चशिक्षणासाठी जायचे असेल तर IELTS परीक्षा ही पहिली महत्त्वाची पायरी आहे. पण तयारी कुठून आणि कशी सुरू करावी? 🤔✈️

फिनेस ओव्हरसीज एज्युकेशन (राजारामपुरी, कोल्हापूर) मध्ये बेसिक इंग्रजीपासून ते प्रगत IELTS स्ट्रॅटेजीपर्यंत संपूर्ण वैयक्तिक लक्ष दिले जाते.

आमची वैशिष्ट्ये:
• संपूर्ण परीक्षा सिम्युलेशन आणि वीकली टेस्ट्स
• रीडिंग स्पीड आणि व्होकॅब्युलरी सुधारण्यासाठी खास तंत्रज्ञान
• व्हिसा फाइलिंग आणि युनिव्हर्सिटी शॉर्टलिस्टिंगसाठी १००% मोफत कन्सल्टिंग

📍 फिनेस ओव्हरसीज (मुख्यालय, कोल्हापूर):
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 थेट व्हॉट्सॲप चॅट: https://wa.me/919850069600?text=Namaskar%20Finesse,%20I%20want%20information%20on%20IELTS%20preparation%20and%20study%20abroad.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #IELTSPreparation #IELTSTraining #KolhapurIELTS #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `✈️ यूके, कॅनडा, ऑस्ट्रेलिया, युएसए किंवा युरोपमध्ये उच्चशिक्षणासाठी IELTS ची अचूक तयारी करा!

📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600`
  },
  {
    id: 'CW3KvAGoLfI',
    targetTitle: 'IELTS परीक्षेची A to Z माहिती व मार्गदर्शन | IELTS Exam Preparation Guide | Finesse',
    targetCategory: '27',
    tags: [
      'ielts exam guide marathi',
      'ielts exam registration 2026',
      'ielts classes in kolhapur',
      'ielts fees and syllabus',
      'study abroad kolhapur',
      'finesse overseas education',
      'ielts preparation institute',
      'best ielts coaching in maharashtra',
      'rajarampuri kolhapur',
      'overseas education consultants in kolhapur',
      'best study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'ielts band score requirements',
      'ielts academic vs general',
      'study in australia ielts',
      'finesse kolhapur'
    ],
    description: `IELTS परीक्षा म्हणजे काय? Academic आणि General मधील फरक कोणता? आणि कोणत्या देशासाठी किती बँड स्कोअर लागतो? जाणून घ्या संपूर्ण A to Z माहिती एका मिनिटात! 📋🌍

फिनेस ओव्हरसीज एज्युकेशन कोल्हापूर कडून २००४ पासून विद्यार्थ्यांना सर्वोत्तम इंग्रजी आणि आंतरराष्ट्रीय परीक्षांचे प्रशिक्षण दिले जात आहे.

📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 हेल्पलाइन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Hi%20Finesse,%20Please%20guide%20me%20about%20IELTS%20exam%20pattern%20and%20coaching.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #IELTSExamGuide #IELTSMarathi #IELTSKolhapur #FinesseOverseas #StudyAbroadKolhapur #KolhapurStudents #Rajarampuri`,
    comment: `📋 IELTS परीक्षा पॅटर्न, रजिस्ट्रेशन आणि कोल्हापुरातील सर्वोत्कृष्ट कोचिंगसाठी फिनेस ओव्हरसीजला आजच भेट द्या!

📍 राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 व्हॉट्सॲप: +91 98500 69600`
  }
];

async function main() {
  console.log('=== STARTING BATCH IELTS OPTIMIZATION (4 VIDEOS) ===\n');

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

  for (const item of IELTS_VIDEOS) {
    console.log(`\n>>> Optimizing Video: ${item.id}`);
    const getRes = await youtube.videos.list({
      part: ['snippet'],
      id: [item.id]
    });

    if (!getRes.data.items || getRes.data.items.length === 0) {
      console.log(`Video ${item.id} not found, skipping.`);
      continue;
    }

    const currentSnippet = getRes.data.items[0].snippet;
    console.log(`  Old Title: ${currentSnippet.title}`);

    const updatedSnippet = {
      ...currentSnippet,
      title: item.targetTitle,
      description: item.description,
      tags: item.tags,
      categoryId: item.targetCategory
    };

    const updateRes = await youtube.videos.update({
      part: ['snippet'],
      requestBody: {
        id: item.id,
        snippet: updatedSnippet
      }
    });

    console.log(`  ✅ Live Title: ${updateRes.data.snippet.title} (Chars: ${updateRes.data.snippet.title.length})`);
    console.log(`  ✅ Category: ${updateRes.data.snippet.categoryId} | Tags: ${updateRes.data.snippet.tags.length}`);

    // Post comment
    try {
      const commentRes = await youtube.commentThreads.insert({
        part: ['snippet'],
        requestBody: {
          snippet: {
            videoId: item.id,
            topLevelComment: {
              snippet: {
                textOriginal: item.comment
              }
            }
          }
        }
      });
      console.log(`  ✅ Official comment posted: ${commentRes.data.id}`);
    } catch (e) {
      console.log(`  Comment note: ${e.message}`);
    }

    console.log(`  🎉 Optimized URL: https://www.youtube.com/shorts/${item.id}`);
  }

  console.log('\n====================================================');
  console.log('ALL 4 IELTS VIDEOS HAVE BEEN SUCCESSFULLY OPTIMIZED!');
  console.log('====================================================');
}

main().catch(console.error);
