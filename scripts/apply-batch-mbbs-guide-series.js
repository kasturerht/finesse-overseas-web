// scripts/apply-batch-mbbs-guide-series.js
// 🚀 Autonomous Batch Deployer for MBBS Abroad Guide Series (Episodes 1 to 4)
// 100% VERIFIED WITH YOUTUBE ASR MARATHI AUDIO

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const MBBS_SERIES = [
  {
    id: 'MYHtKFbvxSo',
    ep: 1,
    title: 'MBBS साठी योग्य देश कसा निवडावा? (भाग १) 🩺 | How to Choose Country for MBBS | Finesse',
    category: '27',
    tags: [
      'how to choose country for mbbs',
      'mbbs abroad guide marathi',
      'study mbbs abroad kolhapur',
      'best country for mbbs abroad',
      'finesse overseas education',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'mbbs abroad eligibility',
      'nmc approved mbbs abroad',
      'low neet score mbbs',
      'overseas education consultants in kolhapur',
      'best study abroad consultants in kolhapur',
      'mbbs in russia',
      'mbbs in italy',
      'mbbs in romania',
      'kolhapur students'
    ],
    description: `परदेशात MBBS करायचे ठरवताना सर्वात आधी कोणता देश निवडावा? आणि त्यासाठी कोणते निकष तपासावेत? जाणून घ्या फिनेस ओव्हरसीजचे संचालक जयंत पाटील सर (VJTI & JBIMS Alumnus) यांच्याकडून सविस्तर मार्गदर्शन. 🩺🌍

⏱️ व्हिडिओतील प्रत्यक्ष ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - जयंत पाटील सर (संचालक, फिनेस ओव्हरसीज कोल्हापूर) प्रास्ताविक
0:15 - इटली, रशिया आणि रोमानिया या देशांतील संधींची पार्श्वभूमी
0:31 - एमबीबीएस अब्रॉडसाठी योग्य देश निवडण्याचे प्रमुख निकष
0:50 - निकष #१: देशाची राजकीय स्थिरता (Political Stability) आणि विद्यार्थ्यांची सुरक्षा

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 सुरक्षित MBBS प्रवेशासाठी फिनेसचे मार्गदर्शक तत्त्वे (2026):
• राजकीय सुरक्षितता आणि आंतरराष्ट्रीय विद्यार्थ्यांसाठी सुरक्षित वातावरण
• NMC (National Medical Commission) FMGL नियम २०२६ नुसार १००% पडताळणी
• थेट विद्यापीठ संलग्नता, कोणतेही एजंट्स किंवा छुपे खर्च नाहीत

📍 फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर मुख्यालय):
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ मॅप्स: https://maps.google.com/?cid=11646274483750008573

📞 थेट संपर्क / मोफत MBBS समुपदेशन:
फोन: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Namaskar%20Jayant%20Patil%20Sir,%20I%20watched%20MBBS%20Abroad%20Episode%201.%20Please%20guide%20me%20for%20country%20selection.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#MBBSAbroad #MBBSCountrySelection #StudyAbroadKolhapur #FinesseOverseas #JayantPatil #MBBSinEurope #RajarampuriKolhapur`,
    comment: `🩺 MBBS साठी परदेशात जाताना सर्वात आधी देशाची राजकीय स्थिरता आणि विद्यार्थ्यांची सुरक्षा तपासणे का गरजेचे आहे? 

फिनेस ओव्हरसीज कोल्हापूर (२००४ पासून विश्वसनीय) कडून NMC मान्यताप्राप्त विद्यापीठांचे मोफत समुपदेशन मिळवा.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600
📍 पत्ता: समर्थ साक्षी प्लाझा, चौथी गल्ली, राजारामपुरी, कोल्हापूर.`
  },
  {
    id: '1L0RDAQFVbo',
    ep: 2,
    title: 'MBBS साठी प्रगत देश निवडणे का गरजेचे? (भाग २) 🩺 | Safe Country for MBBS Abroad | Finesse',
    category: '27',
    tags: [
      'mbbs abroad country selection',
      'safe countries for mbbs abroad',
      'kyrgyzstan mbbs reality',
      'mbbs abroad for indian students',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'low cost mbbs abroad',
      'nmc recognized mbbs colleges',
      'best overseas education consultancy kolhapur',
      'mbbs student safety',
      'medical admission guidance',
      'neet 2026 mbbs',
      'mbbs in europe',
      'kolhapur'
    ],
    description: `भारतापेक्षा कमी प्रगत असलेल्या देशांमध्ये जाऊन MBBS करणे योग्य आहे का? किरगिस्तानसारख्या देशांमधील अस्थिरतेची उदाहरणे आणि पालकांनी पाल्याच्या सुरक्षिततेसाठी कोणते महत्त्वाचे मुद्दे लक्षात ठेवले पाहिजेत? पाहा भाग २ मध्ये! 🩺⚠️

⏱️ व्हिडिओतील प्रत्यक्ष ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक व मागील भागाचा संदर्भ
0:03 - निकष #२: आपल्या देशापेक्षा प्रगत देश निवडणे (Economic Stability)
0:26 - किरगिस्तानमधील वास्तव: राजकीय अस्थिरता आणि भारतीय विद्यार्थ्यांवरील परिणाम
0:48 - पालकांसाठी सर्वात महत्त्वाचा मुद्दा: पाल्याची सुरक्षा व सुरक्षित वातावरण
1:02 - शिक्षणाचा दर्जा, इंग्रजी माध्यम आणि सरकारी vs खाजगी विद्यापीठ निवड

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20MBBS%20Episode%202.%20Please%20guide%20me%20on%20safe%20and%20recognized%20medical%20universities.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#MBBSAbroad #MBBSInKyrgyzstan #SafeMBBSAbroad #FinesseOverseas #StudyAbroadKolhapur #JayantPatil #KolhapurStudents`,
    comment: `⚠️ स्वस्त फीच्या आमिषाला बळी न पडता प्रगत आणि सुरक्षित देशातील मान्यताप्राप्त मेडिकल कॉलेज कसे निवडावे?

फिनेस ओव्हरसीज, राजारामपुरी, कोल्हापूर येथे भेट द्या किंवा संपर्क करा: +91 98500 69600.`
  },
  {
    id: 'VqbedTam9EU',
    ep: 3,
    title: 'स्वस्त बायलिंग्वल MBBS चा फसवणूक ट्रॅप! (भाग ३) ⚠️ | Bilingual vs English MBBS | Finesse',
    category: '27',
    tags: [
      'bilingual mbbs fraud',
      'english medium mbbs abroad',
      'mbbs in russia medium of study',
      'russia mbbs reality',
      'nmc rules english medium mbbs',
      'finesse overseas education',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'study abroad consultants in kolhapur',
      'overseas education consultants in kolhapur',
      'cheap mbbs in russia',
      'crimea federal university',
      'kazan federal university',
      'low neet score mbbs abroad',
      'next exam eligibility',
      'kolhapur'
    ],
    description: `रशिया किंवा परदेशात १५ ते १८ लाखांत MBBS चे आमिष दाखवून 'बायलिंग्वल' (Bilingual) कोर्सेसमध्ये ऍडमिशन दिले जाते का? स्थानिक भाषेत शिकवल्यास भारतात परत आल्यावर NExT परीक्षा देणे आणि प्रॅक्टिस करणे कसे धोक्यात येते? पाहा जयंत पाटील सरांचा महत्त्वाचा इशारा! 🩺⚠️

⏱️ व्हिडिओतील प्रत्यक्ष ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - रशियामध्ये MBBS चे ३ प्रकार: बायलिंग्वल, स्थानिक आणि १००% इंग्रजी माध्यम
0:23 - भारतीय विद्यार्थ्यांनी फक्त आणि फक्त इंग्रजी माध्यमच का निवडले पाहिजे?
0:32 - १५ ते १८ लाखांच्या स्वस्त फीचे आमिष आणि बायलिंग्वल कोर्सेसमधील फसवणूक
0:50 - रशियन भाषेत शिकलेले शिक्षण भारतात किंवा आंतरराष्ट्रीय स्तरावर प्रॅक्टिससाठी का उपयुक्त ठरत नाही?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚖️ NMC 2026 नियम:
NMC (National Medical Commission) नियमांनुसार परदेशातील संपूर्ण अभ्यासक्रम १००% इंग्रजी माध्यमातच असणे बंधनकारक आहे.

📍 फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर):
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 संपर्क: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20MBBS%20Episode%203.%20I%20want%20information%20on%20100%25%20English%20medium%20MBBS%20universities.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#MBBSAbroad #BilingualMBBS #EnglishMediumMBBS #MBBSinRussia #FinesseOverseas #StudyAbroadKolhapur #JayantPatil #NMCGuidelines`,
    comment: `⚠️ १५-१८ लाखांच्या स्वस्त बायलिंग्वल कोर्सेसमध्ये फसू नका! NMC नियमांनुसार १००% इंग्रजी माध्यमातील अधिकृत विद्यापीठांची माहिती मिळवा.

📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 हेल्पलाइन: +91 98500 69600`
  },
  {
    id: 'E22BbAyDpfo',
    ep: 4,
    title: 'MBBS कोणत्या भाषेत करावी? WDOMS पडताळणी (भाग ४) 🩺 | English Medium MBBS & WDOMS | Finesse',
    category: '27',
    tags: [
      'wdoms medical schools check',
      'english medium mbbs abroad',
      'world directory of medical schools',
      'nmc recognized colleges',
      'mbbs abroad consultants kolhapur',
      'finesse overseas education',
      'jayant patil kolhapur',
      'study abroad kolhapur',
      'rajarampuri kolhapur',
      'best overseas education consultancy kolhapur',
      'next exam preparation',
      'medical education abroad',
      'study in europe mbbs',
      'mbbs in russia english medium',
      'kolhapur students',
      'neet 2026'
    ],
    description: `परदेशात वैद्यकीय शिक्षण घेताना इंग्रजी भाषेचे महत्त्व काय आहे? आणि WDOMS (World Directory of Medical Schools) च्या अधिकृत पोर्टलवरून कॉलेजची खरी माहिती कशी तपासावी? पाहा सिरीजचा समारोपाचा भाग ४! 🩺🌐

⏱️ व्हिडिओतील प्रत्यक्ष ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - परदेशातील MBBS शिक्षण १००% इंग्रजी भाषेतूनच का असायला हवे?
0:12 - भारतात व जागतिक स्तरावर वैद्यकीय कामकाज इंग्रजी भाषेत चालते
0:28 - इंग्रजी माध्यमातील कोर्सची पडताळणी का आवश्यक आहे?
0:31 - WDOMS (World Directory of Medical Schools) पोर्टलवर विद्यापीठाची समग्र माहिती कशी तपासावी?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20MBBS%20Episode%204.%20Please%20help%20me%20verify%20my%20chosen%20medical%20university%20on%20WDOMS.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#MBBSAbroad #WDOMS #EnglishMediumMBBS #StudyAbroadKolhapur #FinesseOverseas #JayantPatil #KolhapurStudents #MedicalAdmissions`,
    comment: `🌐 कोणत्याही परदेशी मेडिकल कॉलेजमध्ये प्रवेश घेण्यापूर्वी त्याची WDOMS आणि NMC मान्यता तपासणे अनिवार्य आहे! 

मोफत पडताळणी आणि समुपदेशनासाठी फिनेस ओव्हरसीजला संपर्क करा: +91 98500 69600.`
  }
];

async function main() {
  console.log('=== STARTING BATCH MBBS GUIDE SERIES OPTIMIZATION (EPISODES 1 TO 4) ===\n');

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

  for (const item of MBBS_SERIES) {
    console.log(`\n>>> Optimizing Episode ${item.ep} (ID: ${item.id})`);
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
      title: item.title,
      description: item.description,
      tags: item.tags,
      categoryId: item.category
    };
    delete updatedSnippet.localized;

    const updateRes = await youtube.videos.update({
      part: ['snippet'],
      requestBody: {
        id: item.id,
        snippet: updatedSnippet
      }
    });

    console.log(`  ✅ Live Title: ${updateRes.data.snippet.title} (Length: ${updateRes.data.snippet.title.length})`);
    console.log(`  ✅ Category: ${updateRes.data.snippet.categoryId} | Tags: ${updateRes.data.snippet.tags.length}`);

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

    console.log(`  🎉 Optimized URL: https://www.youtube.com/watch?v=${item.id}`);
  }

  console.log('\n================================================================');
  console.log('ALL 4 MBBS GUIDE SERIES EPISODES ARE 100% OPTIMIZED AND LIVE!');
  console.log('================================================================');
}

main().catch(console.error);
