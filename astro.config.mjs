// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import decapCmsOauth from 'astro-decap-cms-oauth';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({

  output: 'server',
  adapter: vercel(),

  site: 'https://finesse-overseas-web.vercel.app',
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

  integrations: [react(), sitemap(), decapCmsOauth()]
  
});
