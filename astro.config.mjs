import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://greaderapp.com',

  build: {
    format: 'file',
  },

  integrations: [sitemap({
    // Auth/demo utilities are not authoritative product sources.
    filter: (url) => !/^\/(?:404|coming-soon|thank-you|forgot|login|signup|newsletter)(?:\.html)?\/?$/.test(new URL(url).pathname),
  })]
});