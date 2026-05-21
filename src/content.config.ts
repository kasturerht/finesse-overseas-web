import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; 

const intelligenceCollection = defineCollection({
  // Modern Astro v5/v6 Native Glob Loader Protocol
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/intelligence' }), 
  
  // 🛡️ MAY-2026 ULTRA-PREMIUM ARCHITECTURE SCHEMA (SEO, AEO & 500 SERVER ERROR SHIELD)
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      keyTakeaways: z.array(z.string()).default([]),
      publishDate: z.date(),
      lastModifiedDate: z.date().optional(),
      author: z.string().default('Rohit Kasture'),
      authorRole: z.string().optional().default('Consulting Expert'),
      category: z.string().default('NMC Alerts'), // ⚡ FLEXIBLE FIX: Allowed dynamic string to prevent enum crashes on server
      isFeatured: z.boolean().default(false),
      coverImage: image(),
      coverImageAlt: z.string().default('Finesse Overseas Education Intelligence Audit Payload'),
      moneyPageLink: z.string().optional(), // ⚡ SAFE FIX: Relaxed validation for older legacy logs
    }),
});

export const collections = {
  intelligence: intelligenceCollection,
};