import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const intelligenceCollection = defineCollection({
  // Modern Astro Loader Protocol
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/intelligence' }), 
  
  // 🛡️ The God-Level Zod Security Schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      
      // 🧠 Phase 1: AI Executive Summary (AEO Engine)
      keyTakeaways: z.array(z.string()).optional(),
      
      // 🛡️ Phase 2: Freshness Schema (YMYL Trust Signals)
      publishDate: z.date(),
      lastModifiedDate: z.date().optional(),
      
      // 🛡️ Phase 2: E-E-A-T Authority
      author: z.string().default('Rohit Kasture'),
      authorRole: z.string().default('Senior Placement Strategist'),
      category: z.enum([
        'NMC Alerts',
        'Financial Truths',
        'FMGE Data',
        'Exposé',
        'Myth Buster',
      ]),
      isFeatured: z.boolean().default(false),
      
      // 🖼️ Phase 1 & 3: Accessibility & GEO (Google Engine Optimization)
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
      
      // 💰 Phase 4: Hub-Spoke Conversion (Strict URL Validation)
      moneyPageLink: z.string().url("🚨 SEO Error: Must be a valid URL (e.g., https://finesseoverseas.com/...)").optional(),
    }),
});

export const collections = {
  intelligence: intelligenceCollection,
};