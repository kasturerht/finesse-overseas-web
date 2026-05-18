import { config, fields, collection } from '@keystatic/core';

export default config({
  // 🚀 जुना GitHub/Local चा कोड काढून हा नवीन Cloud चा कोड टाकला:
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'skadas-team/finesse-overseas-web',
  },
  
  collections: {
    intelligence: collection({
      label: 'Intelligence Audits',
      slugField: 'title',
      path: 'src/content/intelligence/*', // इथे तुझ्या .md फाईल्स सेव्ह होतील
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Audit Title' } }),
        excerpt: fields.text({ label: 'Short Excerpt (SEO Description)', multiline: true }),
        publishDate: fields.date({ label: 'Publish Date' }),
        
        // तुझा डिफॉल्ट ऑथर म्हणून मी तुझं नाव टाकलं आहे
        author: fields.text({ label: 'Author Name', defaultValue: 'Rohit Kasture' }),
        
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'NMC Alerts', value: 'NMC Alerts' },
            { label: 'Financial Truths', value: 'Financial Truths' },
            { label: 'FMGE Data', value: 'FMGE Data' },
            { label: 'Exposé', value: 'Exposé' },
            { label: 'Myth Buster', value: 'Myth Buster' },
          ],
          defaultValue: 'NMC Alerts',
        }),
        
        isFeatured: fields.checkbox({ label: 'Feature this post?', defaultValue: false }),
        
        coverImage: fields.image({
          label: 'Cover Image',
          // 🚀 THE FIX: आपण 'audits' हा शब्द पाथमध्ये ॲड केला आहे
          directory: 'src/assets/images/audits', 
          publicPath: '../../assets/images/audits/',
        }),
        
        // हे मुख्य लेख लिहिण्याचं सेक्शन
        content: fields.document({
          label: 'Audit Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/audits', 
            publicPath: '/images/audits/',     
          },
        }),
      },
    }),
  },
});