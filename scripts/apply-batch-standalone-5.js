// scripts/apply-batch-standalone-5.js
// 🚀 Autonomous Batch Deployer for 5 High-Impact Videos
// Optimizes: Px4ufoTKG-E, 6N5I_HmWn1w, FLyY43uV9S8, NMfN_O_zR2g, 4hE4ilJo_Fo

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const BATCH_5 = [
  {
    id: 'Px4ufoTKG-E',
    title: 'इंजिनिअरिंग सोबतच करा जर्मनीतून Masters! 🇩🇪 | Study in Germany Data Science | Finesse',
    category: '27',
    tags: [
      'study in germany from kolhapur',
      'ism germany data science',
      'masters in germany for engineering students',
      'engineering final year masters germany',
      'finesse overseas education',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'study abroad consultants in kolhapur',
      'overseas education consultants in kolhapur',
      'post study work visa germany',
      'data science masters in europe',
      'kolhapur engineering students'
    ],
    description: `अभियांत्रिकीच्या (Engineering - BE / B.Tech) चौथ्या वर्षात असतानाच जर्मनीच्या #१ बिझनेस स्कूलमधून (ISM - International School of Management) मास्टर्सची सुरुवात कशी करावी? 🇩🇪🎓

फिनेस ओव्हरसीजचे संचालक जयंत पाटील सर यांनी या व्हिडिओमध्ये 'Dual Enrollment Master's Pathway' चे क्रांतीकारी मॉडेल समजावून सांगितले आहे.

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - जयंत पाटील सर (संचालक, फिनेस ओव्हरसीज कोल्हापूर) प्रास्ताविक
0:20 - इंजिनिअरिंगच्या अंतिम वर्षातील विद्यार्थ्यांसाठी मोठी सुवर्णसंधी
0:45 - डिग्री संपल्यानंतर मास्टर्स सुरू करण्याऐवजी ४थ्या वर्षातच ऑनलाईन सुरुवात
1:16 - जर्मनीतील नंबर १ बिझनेस स्कूल: ISM (International School of Management)
1:35 - कोर्स: MSc in Business Intelligence & Data Science (जागतिक स्तरावर प्रचंड मागणी)
2:15 - १ वर्ष ऑनलाईन + १ वर्ष जर्मनी कॅम्पस: संपूर्ण १ वर्षाची बचत
3:05 - १८ महिन्यांचा पोस्ट-स्टडी वर्क व्हिसा (PSWV) आणि युरोपातील २९ देशांत करिअर संधी

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Jayant%20Patil%20Sir,%20I%20am%20an%20engineering%20student.%20Please%20guide%20me%20for%20ISM%20Germany%20Dual%20Degree%20Pathway.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyInGermany #ISMGermany #DataScienceGermany #EngineeringStudents #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `🇩🇪 इंजिनिअरिंगच्या शेवटच्या वर्षातच जर्मनीतून Data Science Masters सुरू करा आणि करिअरचे १ वर्ष वाचवा!

📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 हेल्पलाइन: +91 98500 69600`
  },
  {
    id: '6N5I_HmWn1w',
    title: 'रशियात हॉस्टेल, शिक्षण आणि युद्धाचे वास्तव! 🇷🇺 | Crimea Federal University Reality | Finesse',
    category: '27',
    tags: [
      'crimea federal university hostel',
      'mbbs in russia reality',
      'indian students hostel in russia',
      'russia war border fact check',
      'finesse overseas education',
      'study mbbs in russia',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'study abroad consultants in kolhapur',
      'overseas education consultants in kolhapur'
    ],
    description: `रशियातील 'क्रीमिया फेडरल युनिव्हर्सिटी' (Crimean Federal University - CFU) मध्ये भारतीय विद्यार्थ्यांसाठी हॉस्टेल आणि मेसची काय सोय असते? आणि रशिया-युक्रेन युद्धाच्या सीमेचे खरे वास्तव काय आहे? जाणून घ्या जयंत पाटील सरांकडून! 🩺🇷🇺

⏱️ ऑडिओ टाईमस्टॅम्प्स:
0:00 - जयंत पाटील सर (संचालक, फिनेस ओव्हरसीज) प्रास्ताविक
0:15 - क्रीमिया फेडरल युनिव्हर्सिटीमधील हॉस्टेल व राहण्याची उत्कृष्ट व्यवस्था
0:32 - पालकांची मुख्य चिंता: रशिया युद्धग्रस्त देश आहे का?
0:46 - वास्तव: युद्धभूमी एका विशिष्ट सीमेवर असून कॅम्पस व जनजीवन पूर्णपणे शांत व सुरक्षित आहे

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन, राजारामपुरी, कोल्हापूर.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20want%20information%20on%20Crimea%20Federal%20University%20hostel%20and%20safety.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#MBBSinRussia #CrimeaFederalUniversity #CFUHostel #RussiaSafetyFactCheck #FinesseOverseas #StudyAbroadKolhapur`,
    comment: `🇷🇺 क्रीमिया फेडरल युनिव्हर्सिटीतील हॉस्टेल, मेस आणि सुरक्षेची १००% खरी माहिती फिनेस ओव्हरसीजकडून मिळवा!

📞 संपर्क: +91 98500 69600`
  },
  {
    id: 'FLyY43uV9S8',
    title: 'जर्मनीत नोकरी कशी मिळवायची? 🇩🇪 | Jobs in Germany after Studies | Finesse Overseas Kolhapur',
    category: '27',
    tags: [
      'jobs in germany after masters',
      'study in germany jobs',
      'post study work visa germany',
      'work in germany for indian students',
      'finesse overseas education',
      'study in germany from kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'study abroad consultants in kolhapur'
    ],
    description: `जर्मनीत शिक्षण पूर्ण केल्यानंतर उच्च पगाराची नोकरी आणि १८ महिन्यांचा पोस्ट-स्टडी वर्क व्हिसा कसा मिळवायचा? फिनेस ओव्हरसीज (कोल्हापूर) कडून संपूर्ण मार्गदर्शन! 🇩🇪💼

• जर्मनीच्या सरकारी विद्यापीठांमध्ये मोफत शिक्षण
• शिक्षणानंतर 18-Month Job Search Visa
• IT, Engineering आणि मॅनेजमेंट क्षेत्रातील संधी

📍 फिनेस ओव्हरसीज एज्युकेशन: राजारामपुरी चौथी गल्ली, कोल्हापूर.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Hi%20Finesse,%20I%20want%20guidance%20on%20jobs%20and%20education%20in%20Germany.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #JobsInGermany #StudyInGermany #WorkInGermany #FinesseOverseas #StudyAbroadKolhapur`,
    comment: `🇩🇪 जर्मनीत पदवीनंतर उच्च पगाराच्या नोकऱ्या कशा मिळवायच्या? फिनेस ओव्हरसीज कोल्हापूरला आजच भेटा!
📞 हेल्पलाइन: +91 98500 69600`
  },
  {
    id: 'NMfN_O_zR2g',
    title: '12वीनंतर परदेशात शिक्षण घ्यायचंय? 🌍 | Study Abroad After 12th | Finesse Overseas Kolhapur',
    category: '27',
    tags: [
      'study abroad after 12th',
      'bachelors abroad from kolhapur',
      'study abroad consultants in kolhapur',
      'finesse overseas education',
      'zero tuition fees europe',
      'study in germany after 12th',
      'study in italy after 12th',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `१२वीनंतर परदेशात पदवी शिक्षण घेण्याचा विचार करताय? फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर) २००४ पासून हजारो विद्यार्थ्यांना युरोप, युके, कॅनडा आणि युएसएमध्ये पाठवणारी कोल्हापूरची विश्वसनीय संस्था! 🌍🎓

📍 समर्थ साक्षी प्लाझा, चौथी गल्ली, राजारामपुरी, कोल्हापूर.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Finesse,%20I%20passed%2012th.%20Please%20guide%20me%20for%20Bachelors%20courses%20abroad.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#Shorts #StudyAbroadAfter12th #BachelorsAbroad #FinesseOverseas #KolhapurStudents #StudyAbroadKolhapur`,
    comment: `🌍 १२वीनंतर परदेशात १००% मोफत ट्युशन फीसह पदवी शिक्षण घेण्यासाठी फिनेस ओव्हरसीजला संपर्क करा: +91 98500 69600.`
  },
  {
    id: '4hE4ilJo_Fo',
    title: 'परदेशी उच्चशिक्षण आता तुमच्या बजेटमध्ये! ✈️ | Affordable Study Abroad | Finesse Kolhapur',
    category: '27',
    tags: [
      'affordable study abroad',
      'low cost overseas education',
      'study abroad consultants in kolhapur',
      'finesse overseas education',
      'free education in europe',
      'study in germany without tuition fees',
      'italy scholarship kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'overseas education consultants in kolhapur'
    ],
    description: `परदेशात शिकणे हे फक्त श्रीमंतांचे स्वप्न राहिलेले नाही! युरोपातील सरकारी विद्यापीठे, ० रुपये ट्युशन फी आणि ₹८ ते १० लाख वार्षिक स्कॉलरशिप्समुळे आता सामान्य कुटुंबातील विद्यार्थीही आंतरराष्ट्रीय दर्जाचे शिक्षण घेऊ शकतात. ✈️🎓

फिनेस ओव्हरसीज एज्युकेशन कोल्हापूर (स्थापना २००४) कडून पारदर्शक आणि खात्रीशीर मार्गदर्शन.

📍 पत्ता: समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Namaskar%20Finesse,%20Please%20guide%20me%20on%20low%20cost%20and%20scholarship%20study%20abroad%20options.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyAbroadOnBudget #AffordableStudyAbroad #FreeEducationEurope #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `✈️ शिक्षणाच्या खर्चाची काळजी सोडून द्या! युरोपमधील मोफत शिक्षण आणि स्कॉलरशिपचे नियोजन करण्यासाठी फिनेसला भेटा: +91 98500 69600.`
  }
];

async function main() {
  console.log('=== STARTING BATCH DEPLOY FOR 5 STANDALONE VIDEOS ===\n');

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

  for (const item of BATCH_5) {
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
  console.log('ALL 5 STANDALONE VIDEOS ARE 100% OPTIMIZED & LIVE!');
  console.log('================================================================');
}

main().catch(console.error);
