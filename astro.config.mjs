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
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react', 'react-dom/client', 'react/jsx-runtime'],
      exclude: [
        '@keystatic/astro',
        'astro-decap-cms-oauth',
        'virtual:keystatic-config',
        'virtual:decap-cms-config'
      ]
    },
    ssr: {
      external: ['virtual:keystatic-config', 'virtual:decap-cms-config']
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
    sitemap({
      filter: (page) => {
        const excluded = [
          '/admin',
          '/review',
          '/review-qr',
          '/presentation',
          '/Invitation',
          '/thank-you',
          '/germany-admission01',
        ];
        return !excluded.some((p) => page.includes(p)) && !page.includes('/_');
      },
      serialize: (item) => {
        const url = item.url;
        if (url === 'https://finesseoverseas.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          url.includes('/study-in-germany') ||
          url.includes('/study-in-italy') ||
          url.includes('/study-in-austria') ||
          url.includes('/study-in-uk-usa') ||
          url.includes('/mbbs-India-abroad') ||
          url.includes('/study-abroad-consultants-in-kolhapur')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/intelligence/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url.includes('/contact') || url.includes('/germany-admission')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'yearly';
        }
        return item;
      }
    }),
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