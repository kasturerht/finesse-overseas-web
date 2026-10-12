// scripts/youtube-optimizer.js
// 🚀 SILICON VALLEY YOUTUBE METADATA OPTIMIZER
// Auto-Optimizes YouTube Titles, Descriptions & Tags for SEO & AI Visibility

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m'
};

async function getYouTubeClient() {
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

  return google.youtube({ version: 'v3', auth: oauth2Client });
}

// 🎯 HIGH-CONVERTING METADATA UPGRADES FOR TOP HIGH-POTENTIAL VIDEOS
export const OPTIMIZATION_PLAN = {
  // Video 34: MBBS in India vs Abroad (Currently 2,265 views, 0 tags!)
  "b3k2YLYcKhw": {
    targetTitle: "भारतात MBBS ऍडमिशन कठीण वाटतंय? | Study MBBS Abroad with Low NEET Score | Finesse Kolhapur",
    category: "27", // Education
    tags: [
      "mbbs abroad kolhapur",
      "best study abroad consultants in kolhapur",
      "mbbs in europe",
      "low neet score mbbs",
      "finesse overseas education",
      "study abroad kolhapur",
      "nmc recognized mbbs abroad",
      "overseas education consultants in kolhapur",
      "rajarampuri kolhapur"
    ],
    generateDescription: (oldDesc) => `भारतात MBBS प्रवेश कठीण वाटतोय किंवा NEET स्कोअर कमी आहे? काळजी करू नका! 🩺✨\n\nNMC आणि WHO मान्यताप्राप्त युरोपियन आणि आंतरराष्ट्रीय विद्यापीठांमध्ये थेट आणि पारदर्शक MBBS प्रवेश प्रक्रियेबद्दल जाणून घ्या. फिनेस ओव्हरसीज एज्युकेशन (राजारामपुरी, कोल्हापूर) कडून २००४ पासून १०००+ विद्यार्थ्यांना मिळालेले खात्रीशीर मार्गदर्शन.\n\n📍 भेट द्या - फिनेस ओव्हरसीज हेडक्वार्टर, कोल्हापूर:\nसमर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.\n\n🌐 अधिकृत वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur\n💬 थेट व्हॉट्सॲप / कॉल: +91 98500 69600\n👉 थेट व्हॉट्सॲप चॅट: https://wa.me/919850069600?text=Hello%20Finesse!%20I%20saw%20your%20MBBS%20Abroad%20video.%20Can%20you%20guide%20me%20for%20admissions?\n\n#MBBSAbroad #MBBSinEurope #KolhapurStudents #FinesseOverseas #NEET2026 #StudyAbroadKolhapur #JayantPatil`
  },

  // Video 33: MBBS in Italy (Currently 926 views, 0 tags!)
  "EdLs5wAUslY": {
    targetTitle: "इटलीत 100% स्कॉलरशिपवर MBBS करायचंय? | Study MBBS in Italy with DSU Grant | Finesse Kolhapur",
    category: "27",
    tags: [
      "mbbs in italy",
      "study in italy scholarship kolhapur",
      "dsu scholarship italy",
      "imat exam guidance",
      "finesse overseas education",
      "best study abroad consultants in kolhapur",
      "overseas education consultants in kolhapur",
      "rajarampuri kolhapur"
    ],
    generateDescription: (oldDesc) => `इटलीच्या जागतिक दर्जाच्या सरकारी विद्यापीठांमध्ये १००% मोफत ट्युशन फी आणि दरवर्षी ८ ते १० लाख रुपयांच्या DSU स्कॉलरशिपवर MBBS कसे करावे? 🇮🇹🩺\n\nकोल्हापूरचे #१ युरोपियन एज्युकेशन स्पेशालिस्ट - फिनेस ओव्हरसीज कडून IMAT परीक्षा, ऍडमिशन, स्कॉलरशिप आणि व्हिसाची संपूर्ण माहिती!\n\n📍 फिनेस ओव्हरसीज एज्युकेशन:\nसमर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.\n\n🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur\n📞 संपर्क / व्हॉट्सॲप: +91 98500 69600\n👉 थेट व्हॉट्सॲप मेसेज: https://wa.me/919850069600?text=Hi%20Finesse!%20I%20want%20information%20about%20MBBS%20in%20Italy%20and%20DSU%20scholarship.\n\n#MBBSinItaly #StudyInItaly #ItalyScholarship #KolhapurToItaly #FinesseOverseas #StudyAbroadKolhapur`
  },

  // Video 32: Low Marks MBBS (Currently 484 views, 0 tags!)
  "JVe8qSxfzEY": {
    targetTitle: "कमी मार्क्स/NEET स्कोअरवर परदेशात MBBS कसं करायचं? | Low NEET Score MBBS Guide | Finesse",
    category: "27",
    tags: [
      "low marks mbbs abroad",
      "neet qualifier mbbs abroad",
      "mbbs abroad consultants kolhapur",
      "finesse overseas education",
      "best overseas education consultancy kolhapur",
      "study in europe mbbs"
    ],
    generateDescription: (oldDesc) => `NEET मध्ये कमी मार्क्स असले तरी परदेशात डॉक्टर बनण्याचे स्वप्न पूर्ण होऊ शकते! 🩺\n\nकोणत्याही डोनेशनशिवाय, पारदर्शक फी रचनेमध्ये NMC गाइडलाईन्स पूर्ण करणाऱ्या सर्वोत्तम आंतरराष्ट्रीय मेडिकल युनिव्हर्सिटीजची माहिती जाणून घ्या.\n\n📍 फिनेस ओव्हरसीज एज्युकेशन:\nसमर्थ साक्षी प्लाझा, पहिली गल्ली / चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.\n\n🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur\n📞 व्हॉट्सॲप: +91 98500 69600\n\n#MBBSAbroad #LowNEETScore #MedicalAdmissions #FinesseOverseas #Kolhapur #JayantPatil`
  },

  // Video 4: Golden Opportunity (31 views, old Pushpa tags)
  "APOHXpC8-ls": {
    targetTitle: "इटलीमध्ये मोफत शिक्षण आणि ₹10-12 लाख स्कॉलरशिप! 🇮🇹 | Study in Italy Zero Tuition | Finesse Kolhapur",
    category: "27",
    tags: [
      "study in italy free",
      "italy 100 scholarship kolhapur",
      "zero tuition masters italy",
      "dsu scholarship kolhapur",
      "best study abroad consultants in kolhapur",
      "finesse overseas education",
      "study abroad rajarampuri"
    ],
    generateDescription: (oldDesc) => `इटलीच्या टॉप सरकारी विद्यापीठांमध्ये ० रुपये ट्युशन फी आणि राहण्या-खाण्यासाठी दरवर्षी ₹१० ते १२ लाखांची सरकारी DSU स्कॉलरशिप मिळवण्याची सुवर्णसंधी! 🇮🇹✨\n\nबैचलर्स आणि मास्टर्स प्रोग्राम्ससाठी संपूर्ण माहिती, डॉक्युमेंटेशन आणि व्हिसासाठी आजच फिनेस ओव्हरसीजशी संपर्क साधा.\n\n📍 पत्ता: समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.\n🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur\n📞 व्हॉट्सॲप / कॉल: +91 98500 69600\n👉 थेट व्हॉट्सॲप: https://wa.me/919850069600?text=Hi%20Finesse!%20Tell%20me%20about%20Italy%20Zero%20Tuition%20and%20Scholarship.\n\n#StudyInItaly #ItalyScholarship #FreeEducationInEurope #FinesseOverseas #Kolhapur #ShivajiUniversity`
  }
};

async function execute() {
  const isApply = process.argv.includes('--apply');
  console.log(`\nMode: ${isApply ? colors.green + 'LIVE UPDATE (--apply)' : colors.yellow + 'DRY RUN (Preview Only)'}${colors.reset}\n`);

  const youtube = await getYouTubeClient();

  for (const [id, opt] of Object.entries(OPTIMIZATION_PLAN)) {
    console.log(`${colors.cyan}--------------------------------------------------${colors.reset}`);
    console.log(`🎬 Processing Video ID: ${colors.bold}${id}${colors.reset}`);
    console.log(`📌 Target Title: ${colors.green}${opt.targetTitle}${colors.reset}`);
    console.log(`🏷️ Target Tags (${opt.tags.length}): ${opt.tags.join(', ')}`);

    if (isApply) {
      try {
        await youtube.videos.update({
          part: ['snippet'],
          requestBody: {
            id,
            snippet: {
              title: opt.targetTitle,
              description: opt.generateDescription(''),
              tags: opt.tags,
              categoryId: opt.category
            }
          }
        });
        console.log(`${colors.green}✔ SUCCESSFULLY UPDATED VIDEO ON YOUTUBE!${colors.reset}`);
      } catch (err) {
        console.error(`${colors.red}❌ Failed to update video ${id}:${colors.reset}`, err.message);
      }
    } else {
      console.log(`${colors.yellow}ℹ️ Dry run mode: No changes made to YouTube.${colors.reset}`);
    }
  }

  console.log(`\n${colors.cyan}--------------------------------------------------${colors.reset}`);
  if (!isApply) {
    console.log(`Run with ${colors.bold}node scripts/youtube-optimizer.js --apply${colors.reset} to push these changes to YouTube!`);
  }
}

execute().catch(err => {
  console.error('Error running optimizer:', err.message);
  process.exit(1);
});
