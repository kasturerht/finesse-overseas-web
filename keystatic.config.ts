import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // जेव्हा व्हीएस कोडमध्ये काम करशील तेव्हा लोकल, व्हर्सेलवर असताना क्लाउड आपोआप सिंक होईल
  },
  cloud: {
    project: 'skadas-team/finesse-overseas-web',
  },
  
  collections: {
    intelligence: collection({
      label: 'Intelligence Audits',
      slugField: 'title',
      path: 'src/content/intelligence/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Audit Title (H1 - Entity Trigger)' } }),
        
        excerpt: fields.text({ 
          label: 'SEO Meta Description (AI Prompt Abstract Summary)', 
          multiline: true,
        }),
        
        // 🧠 Phase 1: AI Executive Summary Array Input (AEO / GEO Engine Target)
        keyTakeaways: fields.array(
          fields.text({ label: 'Factual Takeaway (Strict facts, no fluff)' }),
          { 
            label: 'Key Takeaways (Exactly 3 Required for AI Search Snippets)', 
            itemLabel: props => props.value || 'Takeaway Item' 
          }
        ),
        
        publishDate: fields.date({ label: 'Initial Publish Date' }),
        
        // 🛡️ Phase 2: QDF Freshness System
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
        
        // 🖼️ Phase 1 & 3: Image AI Accessibility Ingest
        coverImageAlt: fields.text({ 
          label: 'Cover Image Alt Text (Strictly describe the image for Google Crawler)' 
        }),

        // 💰 Phase 4: Contextual Hub-Spoke ROI Loop
        moneyPageLink: fields.url({
          label: 'Target Hub Page Link (e.g., https://finesseoverseas.com/study-in-germany)'
        }),
        
        content: fields.document({
          label: 'Audit Content Core (Enforce Strict H2 -> H3 Layout Hierarchy)',
          formatting: true,
          dividers: true,
          links: true,
          tables: true, // डेटा-टेबल ट्रॅप फिक्स करण्यासाठी टेबल्स एनेबल केले आहेत
        }),
      },
    }),
  },
});