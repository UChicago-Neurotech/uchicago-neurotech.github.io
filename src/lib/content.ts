import { getCollection } from 'astro:content';

function firstEntry<T>(entries: Array<{ data: T }>, label: string): T {
  if (!entries.length) {
    throw new Error(`Missing required content file for ${label}.`);
  }
  return entries[0].data;
}

export async function getSiteData() {
  const siteEntries = await getCollection('site');
  return firstEntry(siteEntries, 'site settings');
}

export async function getTeamData() {
  const teamEntries = await getCollection('team');
  return firstEntry(teamEntries, 'team');
}

export async function getEventsData() {
  const eventEntries = await getCollection('events');
  return firstEntry(eventEntries, 'events');
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
  return projects.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
