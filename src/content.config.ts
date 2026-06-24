import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    tags: z.array(z.string()),
    screenshot: z.string().optional(),
    liveUrl: z.string().url(),
    outcome: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

export const collections = { portfolio };
