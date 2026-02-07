import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1)
});

const siteSchema = z.object({
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
});

const teamSchema = z.array(
  z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    bio: z.string().min(1),
    headshot: z.string().optional(),
    links: z.array(linkSchema).optional()
  })
);

const eventsSchema = z.object({
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
});

async function readTypedJson<T>(relativePath: string, schema: z.ZodSchema<T>): Promise<T> {
  const filePath = join(process.cwd(), 'src', 'content', relativePath);
  const raw = await readFile(filePath, 'utf-8');
  const parsedJson = JSON.parse(raw);
  return schema.parse(parsedJson);
}

export async function getSiteData() {
  return readTypedJson('site.json', siteSchema);
}

export async function getTeamData() {
  return readTypedJson('team.json', teamSchema);
}

export async function getEventsData() {
  return readTypedJson('events.json', eventsSchema);
}

export async function getPageById(id: string) {
  const pages = await getCollection('pages');
  const entry = pages.find((item) => item.id === id || item.id === `${id}.md` || item.slug === id);

  if (!entry) {
    throw new Error(`Missing page content: ${id}.md`);
  }

  return entry;
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects
    .map((project) => ({
      ...project,
      slug: project.id.replace(/^projects\//, '').replace(/\.md$/, '')
    }))
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
}
