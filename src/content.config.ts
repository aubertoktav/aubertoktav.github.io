import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every project/post is a markdown file under src/content/projects/**.
// Work projects, learning notes, and personal posts (music, travel,
// writing) all live here together — use `tags` to tell them apart instead
// of splitting into separate collections.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      summary: z.string(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
