// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import decapCmsOauth from 'astro-decap-cms-oauth';

// 🚀 FIX 1: फालतू/जुनं Vercel Serverless काढून टाकलं आणि फक्त Latest Vercel ठेवलं
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({

  output: 'static',
  adapter: vercel(),
  
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

  // 🚀 FIX 2: Decap CMS Oauth साठी अनिवार्य असलेले Environment Variables
  env: {
    schema: {
      OAUTH_GITHUB_CLIENT_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
      OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
      OAUTH_GITHUB_REPO_ID: envField.string({ context: 'server', access: 'secret', optional: true }),
    }
  },

  integrations: [react(), sitemap(), decapCmsOauth()]
  
});