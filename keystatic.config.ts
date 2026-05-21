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
      slugField: 'slug', // 👈 टायटल ऐवजी 'slug' केला!
      path: 'src/content/intelligence/*', // 👈 क्लिन पाथ!
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug (Keep same as filename without .mdoc)' } }), // 👈 नवीन स्लग फील्ड जोडले!
        title: fields.text({ label: 'Audit Title (H1 - Entity Trigger)' }), // 👈 टायटल आता साधा टेक्स्ट राहील!
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