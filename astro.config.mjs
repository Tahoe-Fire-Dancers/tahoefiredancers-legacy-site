// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  site: 'https://www.tahoefiredancers.com',
  integrations: [tailwind(), preact(), sitemap(),yaml()],
  output: 'static',
});