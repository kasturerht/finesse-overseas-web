import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BhbpaGY2.mjs';
import { manifest } from './manifest_DFzKqHt1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/germany-admission.astro.mjs');
const _page4 = () => import('./pages/germany-admission01.astro.mjs');
const _page5 = () => import('./pages/intelligence.astro.mjs');
const _page6 = () => import('./pages/mbbs-abroad.astro.mjs');
const _page7 = () => import('./pages/oauth/callback.astro.mjs');
const _page8 = () => import('./pages/oauth.astro.mjs');
const _page9 = () => import('./pages/presentation.astro.mjs');
const _page10 = () => import('./pages/study-in-austria.astro.mjs');
const _page11 = () => import('./pages/study-in-germany.astro.mjs');
const _page12 = () => import('./pages/study-in-italy.astro.mjs');
const _page13 = () => import('./pages/study-in-uk-usa.astro.mjs');
const _page14 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page15 = () => import('./pages/thank-you.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro-decap-cms-oauth/src/admin.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/germany-admission.astro", _page3],
    ["src/pages/germany-admission01.astro", _page4],
    ["src/pages/intelligence/index.astro", _page5],
    ["src/pages/mbbs-abroad.astro", _page6],
    ["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page7],
    ["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page8],
    ["src/pages/presentation.astro", _page9],
    ["src/pages/study-in-austria.astro", _page10],
    ["src/pages/study-in-germany.astro", _page11],
    ["src/pages/study-in-italy.astro", _page12],
    ["src/pages/study-in-uk-usa.astro", _page13],
    ["src/pages/terms-and-conditions.astro", _page14],
    ["src/pages/thank-you.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "297914bb-357b-4ae4-98cb-3b0dc90f7d4b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
