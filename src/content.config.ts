import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// Free-form markdown pages: home.md, join.md
const pages = defineCollection({
  loader: glob({ pattern: '{home,join}.md', base: 'src/content' })
});

export const collections = { pages };
