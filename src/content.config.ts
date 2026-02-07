import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '{home,about,join,contact}.md', base: 'src/content' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    what_we_do_heading: z.string().optional(),
    what_we_do_cards: z
      .array(
        z.object({
          title: z.string().min(1),
          description: z.string().min(1)
        })
      )
      .optional()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: 'projects/*.md', base: 'src/content' }),
  schema: z.object({
    title: z.string().min(1),
    status: z.enum(['current', 'past']),
    featured: z.boolean(),
    tags: z.array(z.string().min(1)).min(1),
    repo_url: z.string().url().or(z.literal('')),
    lead_names: z.array(z.string().min(1)).min(1),
    join_url: z.string().url().or(z.literal('')),
    summary: z.string().min(1).optional()
  })
});

export const collections = {
  pages,
  projects
};
