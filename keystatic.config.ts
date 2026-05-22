import { config, fields, collection } from '@keystatic/core';

// 👈 १. सिस्टीम लोकलहोस्टवर धावतेय की व्हर्सेलवर हे आपोआप ओळखण्यासाठी एन्व्हायर्नमेंट व्हेरिएबल चेक!
const isProd = process.env.NODE_ENV === 'production';

export default config({
  // 👈 २. सर्वात महत्त्वाचा बदल: लोकलवर असताना 'local' आणि व्हर्सेलवर गेल्यावर आपोआप 'cloud' (GitHub) मोड ऑन होईल!
  storage: isProd
    ? { kind: 'cloud' }
    : { kind: 'local' },
    
  cloud: { 
    project: 'skadas-team/finesse-overseas-web' 
  },
  
  collections: {
    intelligence: collection({
      label: 'Intelligence Audits',
      slugField: 'title', // 👈 ३. टायटलवरूनच स्लग ऑटो-जनरेट होईल!
      path: 'src/content/intelligence/*', // 👈 ४. पाथ कडक क्लीन '/*'
      format: { contentField: 'content' },
      schema: {
        // 👈 ५. टायटलवरूनच स्लग ऑटो-जनरेट होईल आणि फ्रंटमॅटरमध्ये स्ट्रिंग म्हणून सेव्ह होईल!
        title: fields.text({ label: 'Audit Title (H1 - Entity Trigger)' }), 
        excerpt: fields.text({ 
          label: 'SEO Meta Description (AI Prompt Abstract Summary)', 
          multiline: true,
        }),
        keyTakeaways: fields.array(
          fields.text({ label: 'Factual Takeaway' }),
          { label: 'Key Takeaways', itemLabel: props => props.value || 'Takeaway Item' }
        ),
        publishDate: fields.date({ label: 'Initial Publish Date' }),
        lastModifiedDate: fields.date({ label: 'Last Modified Date' }),
        author: fields.text({ label: 'Author Name', defaultValue: 'Rohit Kasture' }),
        authorRole: fields.text({ label: 'Author Role / Designation', defaultValue: 'Senior Placement Strategist' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'NMC Alerts', value: 'NMC Alerts' },
            { label: 'Financial Truths', value: 'Financial Truths' },
            { label: 'FMGE Data', value: 'FMGE Data' },
            { label: 'Exposé', value: 'Exposé' },
            { label: 'Myth Buster', value: 'Myth Buster' },
            { label: 'Study in Germany', value: 'Study in Germany' },
            { label: 'Study in Italy', value: 'Study in Italy' },
            { label: 'Study in Austria', value: 'Study in Austria' },
            { label: 'MBBS Abroad', value: 'MBBS Abroad' },
          ],
          defaultValue: 'NMC Alerts',
        }),
        isFeatured: fields.checkbox({ label: 'Feature this post?', defaultValue: false }),
        coverImage: fields.image({
          label: 'Cover Image Payload',
          directory: 'src/assets/images/audits', 
          publicPath: '../../assets/images/audits/',
        }),
        coverImageAlt: fields.text({ label: 'Cover Image Alt Text' }),
        moneyPageLink: fields.url({ label: 'Target Hub Page Link' }),
        content: fields.document({
          label: 'Audit Content Core',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
  },
});