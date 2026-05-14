import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 👈 हे नवीन Loader फंक्शन

const intelligenceCollection = defineCollection({
  // जुना type: 'content' काढून टाकला आहे, त्याऐवजी आता Loader आहे
  loader: glob({ pattern: '**/*.{md,mdx,mdoc}', base: './src/content/intelligence' }), 
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      publishDate: z.date(),
      author: z.string(),
      category: z.enum([
        'NMC Alerts',
        'Financial Truths',
        'FMGE Data',
        'Exposé',
        'Myth Buster',
      ]),
      isFeatured: z.boolean(),
      coverImage: image(),
    }),
});

export const collections = {
  intelligence: intelligenceCollection,
};