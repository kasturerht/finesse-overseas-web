import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  cloud: { project: 'skadas-team/finesse-overseas-web' },
  
  collections: {
    intelligence: collection({
      label: 'Intelligence Audits',
      slugField: 'title',
      
      // 👈 १. फ्लॅट फाईल्स थेट वाचण्यासाठी कीस्टॅटिकचा अधिकृत पाथ फॉरमॅट!
      path: 'src/content/intelligence/[slug]', 
      entryLayout: 'content',
      
      // 👈 २. contentField ऐवजी 'data: mdoc' केल्यामुळे फ्रंटमॅटर आणि मार्कडॉक बॉडी स्वच्छ फ्लॅट फाईल म्हणून वाचली जाईल!
      format: { data: 'mdoc' }, 
      
      schema: {
        // 👈 ३. सर्वात महत्त्वाचं: टायटलला fields.slug ठेवलंय, जेणेकरून स्लग जनरेशन आणि फाईलची नावे परफेक्ट मॅप होतील!
        title: fields.slug({ name: { label: 'Audit Title (H1 - Entity Trigger)' } }),
        
        excerpt: fields.text({ 
          label: 'SEO Meta Description (AI Prompt Abstract Summary)', 
          multiline: true,
        }),
        
        keyTakeaways: fields.array(
          fields.text({ label: 'Factual Takeaway (Strict facts, no fluff)' }),
          { 
            label: 'Key Takeaways (Exactly 3 Required for AI Search Snippets)', 
            itemLabel: props => props.value || 'Takeaway Item' 
          }
        ),
        
        publishDate: fields.date({ label: 'Initial Publish Date' }),
        
        lastModifiedDate: fields.date({ 
          label: 'Last Modified Date (Update this only when auditing existing content)' 
        }),
        
        author: fields.text({ label: 'Author Name', defaultValue: 'Rohit Kasture' }),
        authorRole: fields.text({ label: 'Author Role / Designation', defaultValue: 'Senior Placement Strategist' }),
        
        category: fields.select({
          label: 'Category (Niche Context Node)',
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
          label: 'Cover Image Payload',
          directory: 'src/assets/images/audits', 
          publicPath: '../../assets/images/audits/',
        }),
        
        coverImageAlt: fields.text({ 
          label: 'Cover Image Alt Text (Strictly describe the image for Google Crawler)' 
        }),
        
        moneyPageLink: fields.url({
          label: 'Target Hub Page Link'
        }),
        
        content: fields.document({
          label: 'Audit Content Core (Enforce Strict H2 -> H3 Layout Hierarchy)',
          formatting: true,
          dividers: true,
          links: true,
          tables: true,
        }),
      },
    }),
  },
});