import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_178cNeo0.mjs';
import { manifest } from './manifest_BZJeK27u.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/intelligence.astro.mjs');
const _page4 = () => import('./pages/mbbs-abroad.astro.mjs');
const _page5 = () => import('./pages/oauth/callback.astro.mjs');
const _page6 = () => import('./pages/oauth.astro.mjs');
const _page7 = () => import('./pages/presentation.astro.mjs');
const _page8 = () => import('./pages/study-in-austria.astro.mjs');
const _page9 = () => import('./pages/study-in-germany.astro.mjs');
const _page10 = () => import('./pages/study-in-italy.astro.mjs');
const _page11 = () => import('./pages/study-in-uk-usa.astro.mjs');
const _page12 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page13 = () => import('./pages/thank-you.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro-decap-cms-oauth/src/admin.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/intelligence/index.astro", _page3],
    ["src/pages/mbbs-abroad.astro", _page4],
    ["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page5],
    ["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page6],
    ["src/pages/presentation.astro", _page7],
    ["src/pages/study-in-austria.astro", _page8],
    ["src/pages/study-in-germany.astro", _page9],
    ["src/pages/study-in-italy.astro", _page10],
    ["src/pages/study-in-uk-usa.astro", _page11],
    ["src/pages/terms-and-conditions.astro", _page12],
    ["src/pages/thank-you.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "607f5520-c2c5-49d4-9be5-d1985087f5ca",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
