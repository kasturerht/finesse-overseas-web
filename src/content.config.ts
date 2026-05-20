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
      
      // 🧠 Phase 1: AI Executive Summary Matrix (Structured Target for LLM Scraping)
      keyTakeaways: z.array(z.string()).default([]),
      
      // 🛡️ Phase 2: Query Deserves Freshness (QDF) / YMYL Verification System
      publishDate: z.date(),
      lastModifiedDate: z.date().optional(),
      
      // 🛡️ Phase 2: E-E-A-T Institutional Authority Nodes
      author: z.string().default('Rohit Kasture'),
      authorRole: z.string().default('Senior Placement Strategist'), // ⚡ THE CORE 500 FIX: Allowed authorRole in schema validation
      
      category: z.enum([
        'NMC Alerts',
        'Financial Truths',
        'FMGE Data',
        'Exposé',
        'Myth Buster',
      ]),
      isFeatured: z.boolean().default(false),
      
      // 🖼️ Phase 1 & 3: Machine-Readable Computer Vision & Alt-Tree Anchors
      coverImage: image(),
      coverImageAlt: z.string().default('Finesse Overseas Education Intelligence Audit Payload'),
      
      // 💰 Phase 4: Contextual Hub-Spoke ROI Conversion Loop (Strict URL Validation)
      moneyPageLink: z.string().url("🚨 Architectural Warning: moneyPageLink must be a legally binding full URL format.").optional(),
    }),
});

export const collections = {
  intelligence: intelligenceCollection,
};