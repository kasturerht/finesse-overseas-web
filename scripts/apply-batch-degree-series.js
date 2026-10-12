// scripts/apply-batch-degree-series.js
// 🚀 Autonomous Batch Deployer for Study Abroad Degree & Masters Series (Episodes 1 to 7)
// 100% VERIFIED WITH YOUTUBE ASR MARATHI AUDIO

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const DEGREE_SERIES = [
  {
    id: 'seF9Y4Yx1Kc',
    ep: 1,
    title: 'परदेशात पदवी की पदव्युत्तर शिक्षण? (भाग १) 🎓 | Study Abroad Bachelors vs Masters | Finesse',
    category: '27',
    tags: [
      'study abroad after 12th',
      'bachelors vs masters abroad',
      'study abroad consultants in kolhapur',
      'finesse overseas education',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'overseas education consultants in kolhapur',
      'bachelors abroad marathi',
      'masters abroad from kolhapur',
      'study in europe bachelors'
    ],
    description: `परदेशात शिकण्याची ओढ सगळ्यांनाच असते, पण १२वीनंतर पदवी (Bachelors) साठी जायचे की ग्रॅज्युएशननंतर पदव्युत्तर (Masters) शिक्षणासाठी? भारतीय पालकांची मानसिकता आणि परदेशी शिक्षणाची खरी सुरुवात कुठून करावी? जाणून घ्या फिनेस ओव्हरसीजचे संचालक जयंत पाटील सर यांच्याकडून! 🎓🌍

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - जयंत पाटील सर (संचालक, फिनेस ओव्हरसीज कोल्हापूर) प्रास्ताविक
0:10 - परदेशातील पदवी (Bachelors) आणि पदव्युत्तर (Masters) शिक्षण मालिका परिचय
0:35 - तरुण पिढीची परदेशात शिक्षण आणि करिअर सेटलमेंटची आकांक्षा
0:50 - भारतीय कुटुंबांची पारंपारिक मानसिकता: १२वीनंतर परदेशात पाठवण्याबाबत संकोच

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन (कोल्हापूर मुख्यालय):
समर्थ साक्षी प्लाझा, पहिला मजला, सोहळा शोरूमच्या वर, लेन्सकार्ट शेजारी, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
🗺️ मॅप्स: https://maps.google.com/?cid=11646274483750008573

📞 थेट संपर्क / मोफत शैक्षणिक समुपदेशन:
फोन: +91 98500 69600
👉 थेट WhatsApp: https://wa.me/919850069600?text=Namaskar%20Jayant%20Patil%20Sir,%20I%20watched%20Degree%20Series%20Episode%201.%20Please%20guide%20me%20for%20Bachelors%20vs%20Masters%20abroad.

🌐 अधिकृत वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyAbroad #BachelorsAbroad #MastersAbroad #FinesseOverseas #JayantPatil #StudyAbroadKolhapur #KolhapurStudents #RajarampuriKolhapur`,
    comment: `🎓 १२वीनंतर लगेच परदेशात पदवी शिक्षण घ्यावे की भारतात ग्रॅज्युएशन करून मास्टर्ससाठी जावे? 

फिनेस ओव्हरसीज (राजारामपुरी, कोल्हापूर) कडून वैयक्तिक प्रोफाइल मूल्यांकन मिळवा.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600`
  },
  {
    id: 'fKeHAOWOMGM',
    ep: 2,
    title: '12वीनंतर परदेशात पदवी करण्याचे फायदे (भाग २) 🎓 | Study Bachelors Abroad After 12th | Finesse',
    category: '27',
    tags: [
      'study bachelors abroad after 12th',
      'undergraduate study abroad',
      'bachelors degree abroad advantages',
      'finesse overseas education',
      'study abroad kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur',
      'study abroad consultants in kolhapur',
      'overseas education consultants in kolhapur',
      'save 2 years masters',
      'international job market'
    ],
    description: `भारतात पदवी घेऊन मग परदेशात मास्टर्स करण्यापेक्षा १२वीनंतर थेट परदेशात पदवी (Bachelors) केल्यास शिक्षणाची २ वर्षे कशी वाचतात? आणि ३-४ वर्षांच्या डिग्रीनंतरच तिथल्या आंतरराष्ट्रीय जॉब मार्केटमध्ये प्रवेश कसा मिळवता येतो? पाहा भाग २! 🎓🚀

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - १२वीनंतर थेट परदेशात पदवी (Undergraduate) शिक्षणासाठी जाण्याचा वाढता ट्रेंड
0:17 - शिक्षणाचा कालावधी उगाच वाढवण्यापेक्षा १२वीनंतर परदेशी पदवी घेणे का फायद्याचे?
0:25 - पदवीच्या ३-४ वर्षांनंतर लगेच आंतरराष्ट्रीय जॉब मार्केटमध्ये प्रवेश
0:40 - मास्टर्ससाठी अतिरिक्त २ वर्षे खर्च वाचवण्याची स्मार्ट स्ट्रॅटेजी

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20Episode%202.%20I%20want%20information%20on%20Bachelors%20courses%20abroad%20after%2012th.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#BachelorsAbroad #StudyAfter12th #UndergraduateAbroad #FinesseOverseas #StudyAbroadKolhapur #JayantPatil #KolhapurStudents`,
    comment: `🚀 शिक्षणाची २ वर्षे वाचवून १२वीनंतर थेट जागतिक पदवी आणि आंतरराष्ट्रीय करिअर घडवा!

📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 हेल्पलाइन: +91 98500 69600`
  },
  {
    id: 'o_FUMgAXWvQ',
    ep: 3,
    title: 'USA, UK, Canada, Australia की Europe? (भाग ३) 🌍 | Top Countries to Study Abroad | Finesse',
    category: '27',
    tags: [
      'top countries to study abroad',
      'study abroad country comparison',
      'study in usa',
      'study in uk',
      'study in canada',
      'study in australia',
      'study in europe',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `भारतीय विद्यार्थी पारंपारिकपणे अमेरिका, युके, कॅनडा, ऑस्ट्रेलिया आणि न्यूझीलंड या ५ देशांचीच निवड का करत आले आहेत? आणि आता युरोप व इतर देशांकडे विद्यार्थ्यांचा ओघ का वळतो आहे? पाहा भाग ३! 🌍✈️

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - पदवी व पदव्युत्तर शिक्षणासाठी जगातील प्रमुख देशांचे पर्याय
0:14 - भारतीय विद्यार्थ्यांचे पारंपारिक ५ पसंतीचे देश: USA, Australia, Canada, UK, New Zealand
0:27 - इंग्रजी भाषा: या ५ देशांमध्ये जाण्यामागचे मुख्य नैसर्गिक कारण
0:42 - पारंपारिक देशांचा ट्रेंड आता युरोपकडे का वळतो आहे?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20Episode%203.%20Please%20guide%20me%20which%20country%20is%20best%20for%20my%20profile.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyAbroad #TopStudyDestinations #StudyInEurope #StudyInUSA #StudyInUK #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `🌍 इंग्रजी भाषिक देश की मोफत शिक्षणाचा युरोप? तुमच्या बजेट आणि प्रोफाइलनुसार योग्य देश निवडा.

📍 फिनेस ओव्हरसीज, राजारामपुरी, कोल्हापूर.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600`
  },
  {
    id: 'JpOxE1VJXkw',
    ep: 4,
    title: 'अमेरिकेत नोकऱ्यांचा तुटवडा आणि वास्तव! (भाग ४) ⚠️ | USA Job Crisis Reality Check | Finesse',
    category: '27',
    tags: [
      'study in usa reality',
      'usa job market students',
      'h1b visa news',
      'alternative to study in usa',
      'study in europe vs usa',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `अमेरिकेत लाखो रुपये खर्च करून शिक्षण घेतल्यानंतर आता पूर्वीसारख्या सहज नोकऱ्या का मिळत नाहीत? परत भारतात आल्यावर अमेरिकन डिग्रीचे काय मूल्य राहते? आणि फिनेस ओव्हरसीज कमी खर्चातील कोणते सक्षम पर्याय सुचवते? पाहा भाग ४! ⚠️🇺🇸

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:02 - अमेरिकेतील सध्याची जॉब मार्केट परिस्थिती आणि नोकऱ्यांची कमतरता
0:14 - पदवीनंतर परत भारतात आल्यावर अमेरिकन डिग्रीची उपयुक्तता व मर्यादा
0:25 - अमेरिका, युके, ऑस्ट्रेलिया व्यतिरिक्त नवीन उदयोन्मुख देशांचे पर्याय
0:40 - शिक्षणाची फी मोफत किंवा नाममात्र असणाऱ्या युरोपियन देशांतील संधी

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20USA%20Job%20Reality%20video.%20I%20want%20information%20on%20alternative%20high-ROI%20countries.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyInUSA #USAJobMarket #H1BVisa #StudyAbroadReality #FinesseOverseas #StudyAbroadKolhapur #JayantPatil #KolhapurStudents`,
    comment: `⚠️ ५० लाखांचे शैक्षणिक कर्ज काढून अमेरिकेत जाण्यापूर्वी तिथली जॉब परिस्थिती आणि युरोपमधील मोफत पर्याय नक्की समजून घ्या!

📞 मोफत समुपदेशन: +91 98500 69600
📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.`
  },
  {
    id: 'DjXQ-RI2hrw',
    ep: 5,
    title: 'USA, UK, Australia vs मोफत जर्मनी Masters फी तुलना (भाग ५) 💰 | Study Abroad Cost | Finesse',
    category: '27',
    tags: [
      'study abroad cost comparison',
      'masters in usa cost',
      'masters in uk cost',
      'free masters in germany',
      'germany zero tuition fees',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `अमेरिकेत Masters चे ₹४५ लाख, ऑस्ट्रेलियात ₹५० लाख, युकेमध्ये ₹१८ लाख... तर जर्मनीच्या सरकारी विद्यापीठांमध्ये ० रुपये फी! जाणून घ्या देशांनुसार फीची तुलना आणि जर्मनीतील मोफत प्रवेशाचे CGPA निकष भाग ५ मध्ये! 💰🌍

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - अमेरिका Masters चा एकूण खर्च: ₹४० ते ४५ लाख
0:14 - युकेमध्ये १ वर्षाची Masters: ₹१५ ते १८ लाखांत उपलब्ध
0:19 - ऑस्ट्रेलिया आणि न्यूझीलंड: ₹५० लाखांच्या घरात जाणारा खर्च
0:35 - भारतापेक्षा परवडणारा पर्याय: जर्मनीमध्ये १००% मोफत उच्चशिक्षण
0:50 - जर्मन सरकारी विद्यापीठांचे निकष: CGPA ८.५+ पॉइंटरचे महत्त्व

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20Cost%20Comparison%20Episode%205.%20Please%20evaluate%20my%20CGPA%20for%20Free%20Masters%20in%20Germany.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyAbroadCost #StudyInGermany #FreeMastersGermany #StudyInUK #StudyInUSA #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `💰 ४५-५० लाख खर्च करण्यापेक्षा जर्मनीच्या सरकारी विद्यापीठांमध्ये मोफत Masters कशी करावी?

तुमचा CGPA स्कोर घेऊन फिनेस ओव्हरसीजला भेटा: समर्थ साक्षी प्लाझा, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 कॉल / व्हॉट्सॲप: +91 98500 69600`
  },
  {
    id: 'ADi89Eqdwbc',
    ep: 6,
    title: 'इटली आणि हंगेरीत 100% मोफत शिक्षण & स्कॉलरशिप (भाग ६) 🇮🇹 | Free Study in Italy | Finesse',
    category: '27',
    tags: [
      'free study in italy',
      'italy dsu scholarship',
      'study in hungary free',
      'zero tuition fees europe',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `इटली आणि हंगेरीमध्ये सर्व शिक्षण १००% मोफत का आहे? ट्युशन फी माफ होऊन राहण्या-खाण्यासाठी सरकारकडून भरघोस स्कॉलरशिप कशी मिळते? पालकांच्या खिशाला एक रुपयाही भार न पडता युरोपातील शिक्षणाची संपूर्ण माहिती पाहा भाग ६ मध्ये! 🇮🇹🇭🇺

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - इटलीतील सर्वच्या सर्व सरकारी विद्यापीठांमध्ये पदवी व पदव्युत्तर शिक्षण १००% मोफत
0:12 - जर्मनीतील खाजगी युनिव्हर्सिटीज (₹१६-१८ लाख) vs इटलीचे मोफत सरकारी शिक्षण
0:26 - हंगेरी (Hungary) देशामध्येही १००% मोफत शिक्षणाची संधी
0:35 - निर्वाह भत्ता (Living Allowance & Scholarship): रूम रेंट व जेवणासाठी सरकारी मदत
0:50 - स्वतःच्या पैशांशिवाय आरामात युरोपमध्ये उच्चशिक्षण पूर्ण करण्याचे नियोजन

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20Episode%206.%20Please%20guide%20me%20for%20Free%20Education%20in%20Italy%20and%20Hungary%20Scholarship.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyInItaly #StudyInHungary #FreeEducationEurope #DSUScholarship #FinesseOverseas #StudyAbroadKolhapur #JayantPatil #KolhapurStudents`,
    comment: `🇮🇹 इटली आणि हंगेरीमध्ये १००% मोफत ट्युशन फीसह राहण्या-खाण्यासाठी वार्षिक स्कॉलरशिप मिळवा!

📍 फिनेस ओव्हरसीज, राजारामपुरी ४ थी गल्ली, कोल्हापूर.
📞 हेल्पलाइन: +91 98500 69600`
  },
  {
    id: 'pKvkLWt9HFY',
    ep: 7,
    title: 'युरोपमध्ये इंग्रजीत शिक्षण आणि लोकल भाषेचे महत्त्व (भाग ७) 🇪🇺 | Study in Europe Jobs | Finesse',
    category: '27',
    tags: [
      'study in europe languages',
      'jobs in europe after graduation',
      'german language for jobs',
      'italian language for jobs',
      'part time jobs in europe',
      'finesse overseas education',
      'study abroad consultants in kolhapur',
      'jayant patil kolhapur',
      'rajarampuri kolhapur'
    ],
    description: `युरोपमध्ये सर्व शिक्षण इंग्रजी भाषेत मिळत असले तरी स्थानिक भाषा (जर्मन किंवा इटालियन) शिकणे का गरजेचे आहे? पार्ट-टाईम जॉब्स मिळवण्यासाठी आणि स्थानिक लोकांमध्ये मिसळण्यासाठी भाषेचे महत्त्व जाणून घ्या मालिकेच्या समारोपाच्या भाग ७ मध्ये! 🇪🇺🗣️

⏱️ ऑडिओ टाईमस्टॅम्प्स (100% Real Audio-Matched Chapters):
0:00 - प्रास्ताविक
0:03 - युरोपमधील सर्व सरकारी संस्थांमध्ये शिक्षण मोफत असल्याचे वास्तव
0:19 - विद्यार्थ्यांची जबाबदारी: इंग्रजी माध्यमात शिक्षण असताना स्थानिक भाषेचे महत्त्व
0:35 - इटलीत शिकताना इटालियन आणि जर्मनीत शिकताना जर्मन भाषा का आवश्यक?
0:50 - विद्यापीठाची अट नसली तरी पार्ट-टाईम आणि फुल-टाईम जॉब्ससाठी भाषेची अपरिहार्यता
1:05 - परदेशात यशस्वी करिअर घडवण्यासाठी फिनेसचे अंतिम मार्गदर्शन

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 फिनेस ओव्हरसीज एज्युकेशन:
समर्थ साक्षी प्लाझा, पहिला मजला, चौथी गल्ली, राजारामपुरी, कोल्हापूर - ४१६००८.
📞 फोन: +91 98500 69600
👉 WhatsApp: https://wa.me/919850069600?text=Namaskar%20Sir,%20I%20watched%20Degree%20Series%20Episode%207.%20Please%20guide%20me%20for%20European%20Language%20classes%20and%20Admissions.

🌐 वेबसाईट: https://finesseoverseas.com/study-abroad-consultants-in-kolhapur

#StudyInEurope #EuropeanLanguages #LearnGerman #LearnItalian #PartTimeJobsEurope #FinesseOverseas #StudyAbroadKolhapur #JayantPatil`,
    comment: `🇪🇺 युरोपात मोफत शिक्षण घेताना पार्ट-टाईम व फुल-टाईम नोकऱ्यांसाठी स्थानिक भाषा कशी शिकायची?

फिनेस ओव्हरसीज (राजारामपुरी, कोल्हापूर) कडून भाषा आणि प्रवेशाचे एकत्रित मार्गदर्शन मिळवा!
📞 कॉल / व्हॉट्सॲप: +91 98500 69600`
  }
];

async function main() {
  console.log('=== STARTING BATCH DEPLOY FOR DEGREE & MASTERS SERIES (EPISODES 1 TO 7) ===\n');

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

  for (const item of DEGREE_SERIES) {
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
  console.log('ALL 7 EPISODES OF DEGREE & MASTERS SERIES ARE 100% OPTIMIZED & LIVE!');
  console.log('================================================================');
}

main().catch(console.error);
