// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://finesseoverseas.com',
  vite: {
    plugins: [tailwindcss()]
  },

  build: {
    assets: 'media' // '_astro' च्या जागी आता 'media' किंवा 'static' नाव दिसेल
  },
  
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      { protocol: 'https' }
    ]
  },

  integrations: [react(), sitemap()]
});
