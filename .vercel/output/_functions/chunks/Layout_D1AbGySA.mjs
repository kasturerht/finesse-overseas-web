import { c as createComponent } from './astro-component_DgDkKiMC.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, x as renderSlot, d as renderComponent, c as renderHead, u as unescapeHTML, b as addAttribute } from './entrypoint_U5r9_E1T.mjs';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-50 transition-all duration-300 bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-sm" id="navbar"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <a href="/" class="flex-shrink-0 flex items-center transition-all hover:scale-105 group"> <span class="sr-only">Finesse Overseas Logo</span> <img src="/logo.png" alt="Finesse Overseas Logo" class="h-10 sm:h-14 w-auto object-contain shrink-0 
                   transition-all duration-300
                   drop-shadow-[0_4px_12px_rgba(20,184,166,0.25)]
                   group-hover:drop-shadow-[0_6px_16px_rgba(20,184,166,0.4)]"> </a>  <nav class="hidden md:flex gap-8 items-center">  <a href="/mbbs-India-abroad" class="group relative flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-lg border border-teal-100 hover:bg-teal-600 hover:text-white transition-all duration-300"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span> </span> <span class="text-[11px] font-black uppercase tracking-widest font-jakarta">MBBS Guide 2026</span> </a> <a href="/#destinations" class="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors">Destinations</a> <a href="/#services" class="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors">Services</a> <a href="/#faq" class="text-sm font-bold text-slate-600 hover:text-teal-600 transition-colors">FAQ</a> <a href="/contact" onclick="window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'Contact_Click', 'contact_type': 'book_counseling', 'location': 'header_desktop'});" class="relative z-20 bg-slate-900 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 ml-2">
Book Free Counseling
</a> </nav> <button id="mobile-menu-btn" class="md:hidden text-slate-800 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors" aria-label="Toggle Menu"> <svg id="menu-icon" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg> <svg id="close-icon" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> </button> </div> </div>  <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-2xl origin-top transition-all rounded-b-3xl"> <div class="px-5 pt-6 pb-8 space-y-3 flex flex-col">  <a href="/mbbs-India-abroad" class="mobile-link group flex flex-col gap-1 px-5 py-5 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-lg shadow-teal-600/20 transition-all active:scale-95"> <div class="flex items-center justify-between"> <span class="text-xs font-black text-teal-100 uppercase tracking-widest">New for 2026</span> <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> </div> <span class="text-lg font-extrabold text-white">MBBS Admission Blueprint</span> <span class="text-[10px] text-teal-100/80 font-medium">India vs Abroad Comparison Guide</span> </a> <a href="/#destinations" class="mobile-link group flex items-center gap-4 px-4 py-4 text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-2xl transition-all"> <span class="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </span>
Explore Destinations
</a> <a href="/#services" class="mobile-link group flex items-center gap-4 px-4 py-4 text-lg font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-2xl transition-all"> <span class="w-12 h-12 bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> </span>
Our Blueprint
</a> <div class="pt-4 mt-2 border-t border-slate-100"> <a href="/contact" onclick="window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'Contact_Click', 'contact_type': 'book_counseling', 'location': 'header_mobile'});" class="relative z-20 flex justify-center items-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all shadow-md active:scale-95">
Book Free Counseling
<svg class="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> </div> </div> </header>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonical, image = "/germany-hero.avif", schema } = Astro2.props;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site).href;
  const ogImageURL = new URL(image, Astro2.site).href;
  const organizationSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": `${Astro2.site}#organization`,
        "name": "Finesse Overseas Education",
        "url": String(Astro2.site),
        "logo": {
          "@type": "ImageObject",
          "url": "https://finesseoverseas.com/logo.png",
          // e.g. https://yoursite.com/logo.png
          "width": 200,
          "height": 60
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9850069600",
          // e.g. +91-XXXXXXXXXX
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
          "https://www.facebook.com/FinesseOverseasEducation",
          // e.g. https://www.facebook.com/finesseoverseaseducation
          "https://www.instagram.com/finesseoverseaseducation/",
          // e.g. https://www.instagram.com/finesseoverseaseducation
          "https://youtube.com/@finesseoverseaseducation1272?si=BCKfbpbBlf8PM86L"
          // e.g. https://www.youtube.com/@finesseoverseaseducation
          // "PLACEHOLDER_LINKEDIN_URL"    // e.g. https://www.linkedin.com/company/finesseoverseaseducation
        ]
      }
    ]
  });
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- dataLayer must exist before GTM script executes --><script>\n      window.dataLayer = window.dataLayer || [];\n    <\/script><title>', '</title><meta name="title"', '><meta name="description"', '><link rel="canonical"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="Finesse Overseas Education"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" media="print" onload="this.media='all'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"></noscript><!-- Global Organization + EducationalOrganization schema (every page) --><script type="application/ld+json">', "<\/script><!-- Page-specific schema injected from individual pages (Article, FAQ, etc.) -->", `<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!--
      Lazy GTM loader — GTM is injected only on first user interaction.
      This eliminates GTM's render-blocking cost from initial page load
      while keeping full GTM functionality for real users.
      passive:true on scroll/touch ensures no jank on the main thread.
    --><script>
      (function () {
        var GTM_ID = 'GTM-NB6773X9';
        var TRIGGER_EVENTS = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
        var loaded = false;

        function loadGTM() {
          if (loaded) return;
          loaded = true;

          TRIGGER_EVENTS.forEach(function (evt) {
            window.removeEventListener(evt, loadGTM);
          });

          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
          document.head.appendChild(s);
        }

        TRIGGER_EVENTS.forEach(function (evt) {
          window.addEventListener(evt, loadGTM, { passive: true });
        });
      })();
    <\/script>`, '</head> <body class="font-inter bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white"> <!-- GTM noscript fallback for users with JS disabled --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NB6773X9" height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript> ', " <main> ", " </main></body></html>"])), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageURL, "content"), maybeRenderHead(), unescapeHTML(organizationSchema), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schema)), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "F:/Finesse/Website/Website/finesse-overseas/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Header as a };
