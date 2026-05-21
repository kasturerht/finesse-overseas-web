import { c as createComponent } from './astro-component_Bfv_yF32.mjs';
import 'piccolore';
import { r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './entrypoint_Cr6qC6xI.mjs';
import { $ as $$Layout } from './Layout_QX_5LIGL.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Presentation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_b || (_b = __template(["", '  <script>\n    document.addEventListener("DOMContentLoaded", (event) => {\n        gsap.registerPlugin(ScrollTrigger);\n\n        const tl = gsap.timeline();\n\n        // 1. Reveal the warning label\n        tl.to("#warning-label", { opacity: 1, y: 20, duration: 1, ease: "power3.out", delay: 0.5 })\n        \n        // 2. Smash in the main hook text\n        .to("#main-hook", { opacity: 1, y: -20, duration: 1.2, ease: "expo.out" }, "-=0.5")\n        \n        // 3. Fade in the subtext\n        .to("#sub-hook", { opacity: 1, duration: 1 }, "-=0.8")\n        \n        // 4. Reveal the bleed counter container\n        .to("#bleed-counter-container", { opacity: 1, y: -10, duration: 0.5 }, "-=0.2")\n        \n        // 5. THE MAGIC: Animate the number counting up rapidly\n        .to("#bleed-number", {\n            innerHTML: 12450,\n            duration: 2.5,\n            ease: "power4.out",\n            snap: { innerHTML: 1 },\n            onUpdate: function() {\n                document.getElementById("bleed-number").innerHTML = Math.round(this.targets()[0].innerHTML).toLocaleString();\n            }\n        }, "-=0.2")\n\n        // 6. Show the scroll instruction\n        .to("#scroll-indicator", { opacity: 1, duration: 1 }, "-=1");\n    });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Skadas | Executive Briefing", "data-astro-cid-pldlyjvy": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script> <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script> ', `<main class="bg-[#010308] text-white overflow-x-hidden selection:bg-red-500/30" data-astro-cid-pldlyjvy> <section id="act-1" class="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden" data-astro-cid-pldlyjvy> <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] z-10 pointer-events-none" data-astro-cid-pldlyjvy></div> <div class="absolute inset-0 opacity-20 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" data-astro-cid-pldlyjvy></div> <div class="relative z-20 text-center flex flex-col items-center max-w-5xl px-6" data-astro-cid-pldlyjvy> <div id="warning-label" class="opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded border border-red-500/30 text-[10px] text-red-500 font-mono tracking-widest uppercase mb-8 bg-red-500/10 backdrop-blur-sm" data-astro-cid-pldlyjvy> <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ef4444]" data-astro-cid-pldlyjvy></span>
System Alert // Inefficiency Detected
</div> <h1 id="main-hook" class="opacity-0 text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-6" data-astro-cid-pldlyjvy>
You are losing <br data-astro-cid-pldlyjvy> <span class="glitch-text text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]" data-text="40% of your revenue" data-astro-cid-pldlyjvy>40% of your revenue</span> </h1> <p id="sub-hook" class="opacity-0 text-xl md:text-2xl text-slate-400 font-light max-w-2xl mt-4" data-astro-cid-pldlyjvy>
to bloated CMS architecture, broken browser pixels, and generic agency templates.
</p> <div id="bleed-counter-container" class="opacity-0 mt-16 flex flex-col items-center" data-astro-cid-pldlyjvy> <p class="text-xs text-slate-500 font-mono tracking-widest uppercase mb-2" data-astro-cid-pldlyjvy>Estimated Monthly Signal Loss</p> <div class="text-4xl md:text-6xl font-mono font-bold text-red-500 flex items-center gap-1" data-astro-cid-pldlyjvy> <span data-astro-cid-pldlyjvy>$</span> <span id="bleed-number" data-astro-cid-pldlyjvy>0</span> </div> </div> <div id="scroll-indicator" class="opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" data-astro-cid-pldlyjvy> <span class="text-[10px] text-slate-500 font-mono tracking-widest uppercase" data-astro-cid-pldlyjvy>Scroll to Initiate Skadas Protocol</span> <div class="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" data-astro-cid-pldlyjvy></div> </div> </div> </section> <div class="h-screen bg-black" data-astro-cid-pldlyjvy></div> </main> `])), maybeRenderHead()) }));
}, "F:/Finesse/Website/Website/finesse-overseas/src/pages/presentation.astro", void 0);

const $$file = "F:/Finesse/Website/Website/finesse-overseas/src/pages/presentation.astro";
const $$url = "/presentation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Presentation,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
