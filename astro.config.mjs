// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import decapCmsOauth from 'astro-decap-cms-oauth';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

// 🚀 FIX 1: फालतू/जुनं Vercel Serverless काढून टाकलं आणि फक्त Latest Vercel ठेवलं
import vercel from '@astrojs/vercel';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({

  output: 'server',
  adapter: vercel(),
  site: 'https://finesseoverseas.com',
  vite: {
    plugins: [tailwindcss()],
    // 🚀 THE FIX: Vite ला React नीट लोड करायला सांगणे
    optimizeDeps: {
      include: ['react', 'react-dom/client', 'react/jsx-runtime']
    }
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

  integrations: [
    react(),
    sitemap(),
    decapCmsOauth(),
    partytown({
      config: {
        // forward: ['dataLayer.push'],
      },
    }),
    keystatic(),
    markdoc()
  ]
  
});