// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  site: 'https://www.tahoefiredancers.com',
  integrations: [preact(), sitemap(), yaml()],
  output: 'static',
});