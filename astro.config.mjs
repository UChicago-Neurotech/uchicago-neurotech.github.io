import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPage = repository.endsWith('.github.io');
const computedBase = repository && !isUserOrOrgPage ? `/${repository}` : '/';
const base = process.env.PUBLIC_BASE_PATH || process.env.BASE_PATH || computedBase;
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'example-org';
const defaultSite = isUserOrOrgPage
  ? `https://${owner}.github.io`
  : `https://${owner}.github.io/${repository}`;

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || defaultSite,
  base,
  integrations: [tailwind({ applyBaseStyles: false })]
});
