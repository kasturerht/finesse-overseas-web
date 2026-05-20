import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
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
        title: fields.slug({ name: { label: 'Audit Title (H1)' } }),
        
        // 🛡️ SEO Optimization
        excerpt: fields.text({ 
          label: 'Short Excerpt (SEO Meta Description)', 
          multiline: true,
          // Validation ensures exact SEO length
        }),
        
        // 🧠 Phase 1: AI Executive Summary
        keyTakeaways: fields.array(
          fields.text({ label: 'Factual Takeaway (Strict facts, no fluff)' }),
          { 
            label: 'Key Takeaways (For AI & AEO - EXACTLY 3 REQUIRED)', 
            itemLabel: props => props.value || 'Takeaway' 
          }
        ),
        
        // 🛡️ Phase 2: Freshness & E-E-A-T Shield
        publishDate: fields.date({ label: 'Initial Publish Date' }),
        lastModifiedDate: fields.date({ 
          label: 'Last Reviewed/Modified Date (Crucial for YMYL/Freshness Schema)' 
        }),
        
        // 🛡️ Phase 2: YMYL Authority
        author: fields.text({ label: 'Author Name', defaultValue: 'Rohit Kasture' }),
        authorRole: fields.text({ 
          label: 'Author Credentials/Role (E-E-A-T Signal)', 
          defaultValue: 'Senior Placement Strategist' 
        }),
        
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
          directory: 'src/assets/images/audits', 
          publicPath: '../../assets/images/audits/',
        }),
        
        // 🧠 Phase 1: Machine-Readable Accessibility
        coverImageAlt: fields.text({ 
          label: 'Cover Image Alt Text (Required for AI Accessibility & SEO)' 
        }),

        // 💰 Phase 4: Contextual Hub-Spoke Loop
        moneyPageLink: fields.url({
          label: 'Target Hub Page Link (e.g., https://finesseoverseas.com/study-in-germany)'
        }),
        
        // ⚙️ Phase 3: Technical Skeleton
        content: fields.document({
          label: 'Audit Content (Follow Strict H2 -> H3 Hierarchy)',
          formatting: true,
          dividers: true,
          links: true,
          tables: true, // 🚀 THE FIX: Enabled tables for the 'Data-Table Trap'
          images: {
            directory: 'public/images/audits', 
            publicPath: '/images/audits/',     
          },
        }),
      },
    }),
  },
});