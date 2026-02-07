import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1)
});

const site = defineCollection({
  loader: file('src/content/site.json'),
  schema: z.object({
    name: z.string().min(1),
    short_name: z.string().min(1),
    description: z.string().min(1),
    navigation: z.array(linkSchema).min(1),
    hero: z.object({
      title: z.string().min(1),
      subtitle: z.string().min(1),
      primary_cta: linkSchema,
      secondary_cta: linkSchema
    }),
    join_links: z.object({
      interest_form: linkSchema,
      discord: linkSchema,
      mailing_list: linkSchema
    }),
    contact: z.object({
      email: z.string().email(),
      formspree_endpoint: z.string().url().optional().or(z.literal('')),
      socials: z.array(linkSchema)
    }),
    footer: z.object({
      copyright: z.string().min(1),
      address: z.string().optional().or(z.literal(''))
    }),
    partners: z
      .array(
        z.object({
          name: z.string().min(1),
          url: z.string().url()
        })
      )
      .optional()
  })
});

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

const team = defineCollection({
  loader: file('src/content/team.json'),
  schema: z.array(
    z.object({
      name: z.string().min(1),
      role: z.string().min(1),
      bio: z.string().min(1),
      headshot: z.string().optional(),
      links: z.array(linkSchema).optional()
    })
  )
});

const events = defineCollection({
  loader: file('src/content/events.json'),
  schema: z.object({
    section_title: z.string().min(1),
    calendar_embed_url: z.string().url().optional().or(z.literal('')),
    calendar_note: z.string().optional(),
    events: z.array(
      z.object({
        title: z.string().min(1),
        date: z.string().min(1),
        time: z.string().min(1),
        location: z.string().min(1),
        description: z.string().min(1),
        url: z.string().url().optional().or(z.literal(''))
      })
    )
  })
});

export const collections = {
  site,
  pages,
  projects,
  team,
  events
};
