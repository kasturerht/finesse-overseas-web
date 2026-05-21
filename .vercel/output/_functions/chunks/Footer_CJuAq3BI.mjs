import { c as createComponent } from './astro-component_CLSqusDC.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './entrypoint_BMz4ns8J.mjs';
import 'clsx';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const { hideCTA = false, theme = "light" } = Astro2.props;
  let bgClass = "bg-slate-50";
  let textClass = "text-slate-500";
  let headingClass = "text-slate-900";
  let borderClass = "border-slate-200/60";
  let badgeClass = "bg-white border border-slate-200 text-slate-700 shadow-sm";
  let iconClass = "text-teal-500";
  let linkHoverClass = "group-hover:text-teal-600";
  let ctaBg = "bg-teal-900";
  let ctaGlow = "bg-teal-500";
  if (theme === "dark") {
    bgClass = "bg-[#050B14]";
    textClass = "text-slate-400";
    headingClass = "text-white";
    borderClass = "border-white/10";
    badgeClass = "bg-white/5 border border-white/10 text-slate-300";
    iconClass = "text-amber-500";
    linkHoverClass = "group-hover:text-amber-400";
    ctaBg = "bg-[#0a1120] border border-white/10";
    ctaGlow = "bg-amber-500";
  } else if (theme === "blue") {
    bgClass = "bg-slate-950";
    textClass = "text-slate-400";
    headingClass = "text-white";
    borderClass = "border-white/10";
    badgeClass = "bg-white/5 border border-white/10 text-slate-300";
    iconClass = "text-blue-500";
    linkHoverClass = "group-hover:text-blue-400";
    ctaBg = "bg-slate-900 border border-white/10";
    ctaGlow = "bg-blue-600";
  } else if (theme === "red") {
    bgClass = "bg-[#050505]";
    textClass = "text-slate-400";
    headingClass = "text-white";
    borderClass = "border-white/5";
    badgeClass = "bg-white/5 border border-white/10 text-slate-300";
    iconClass = "text-red-500";
    linkHoverClass = "group-hover:text-red-400";
    ctaBg = "bg-[#111] border border-white/10";
    ctaGlow = "bg-red-600";
  }
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`${bgClass} pt-16 pb-8 relative overflow-hidden transition-colors duration-700`, "class")} id="footer">  <div class="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-[0.03] z-0"> <h1 class="text-[18vw] font-black leading-[0.75] tracking-tighter text-current">FINESSE</h1> </div> <div class="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">  ${!hideCTA && renderTemplate`<div${addAttribute(`relative rounded-[2rem] md:rounded-[3rem] p-10 md:p-16 mb-24 overflow-hidden shadow-2xl ${ctaBg}`, "class")}> <div${addAttribute(`absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full ${ctaGlow} blur-[120px] opacity-20 pointer-events-none animate-pulse`, "class")}></div> <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-white blur-[100px] opacity-5 pointer-events-none"></div> <div class="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div> <div class="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-white"> <div class="max-w-3xl text-center lg:text-left"> <span class="inline-flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-white/10 mb-8 shadow-xl"> <span${addAttribute(`w-2 h-2 rounded-full ${ctaGlow} animate-ping absolute`, "class")}></span> <span${addAttribute(`w-2 h-2 rounded-full ${ctaGlow} relative`, "class")}></span>
Your Global Journey
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
Stop worrying about the <br class="hidden lg:block"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">complex paperwork.</span> </h2> <p class="text-white/70 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
Let our experts build a frictionless pathway to your dream university abroad. We handle the maze, you handle the bags.
</p> </div> <a href="/contact" class="group relative inline-flex items-center justify-center px-10 py-6 font-black text-slate-900 bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] shrink-0"> <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-slate-100 rounded-full group-hover:w-full group-hover:h-56"></span> <span class="relative flex items-center gap-3 text-lg">
Book Free Consultation
<svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> </span> </a> </div> </div>`}   <div${addAttribute(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 lg:gap-x-8 ${hideCTA ? "mt-12" : ""} mb-24`, "class")}>  <div class="lg:col-span-4 flex flex-col justify-start lg:pr-8">  <div class="mb-8 relative inline-block"> <img src="/logo_finesse.png" alt="Finesse Overseas Education" loading="lazy" decoding="async" class="h-12 md:h-16 w-auto object-contain"> </div> <p${addAttribute(`${textClass} text-base md:text-lg font-medium leading-[1.8] max-w-sm mb-10 transition-colors`, "class")}>
Empowering the youth with 22+ years of on-ground expertise. We navigate the complex European education systems so you don't have to.
</p> <div class="flex flex-wrap gap-3"> <span${addAttribute(`inline-flex items-center px-4 py-2 ${badgeClass} rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors`, "class")}>
On-Ground Expertise
</span> <span${addAttribute(`inline-flex items-center px-4 py-2 ${badgeClass} rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors`, "class")}>
EST. 2004
</span> </div> </div>  <div class="lg:col-span-2"> <h4${addAttribute(`${headingClass} font-black mb-8 uppercase tracking-[0.2em] text-[11px] transition-colors opacity-80`, "class")}>Destinations</h4> <ul class="space-y-5"> ${["Study in Germany", "Study in Italy", "MBBS Abroad", "Study in Austria"].map((item) => renderTemplate`<li class="group flex"> <a href="#" class="flex items-center text-base font-bold transition-all duration-300"> <span${addAttribute(`w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out ${iconClass} flex items-center`, "class")}> <span class="block -translate-x-full group-hover:translate-x-0 transition-transform duration-300">→</span> </span> <span${addAttribute(`${textClass} ${linkHoverClass} transition-colors duration-300 group-hover:translate-x-1 whitespace-nowrap`, "class")}>${item}</span> </a> </li>`)} </ul> </div>  <div class="lg:col-span-2"> <h4${addAttribute(`${headingClass} font-black mb-8 uppercase tracking-[0.2em] text-[11px] transition-colors opacity-80`, "class")}>Our Expertise</h4> <ul class="space-y-5"> ${["University Strategy", "APS & Visa Processing", "Scholarship Filing", "Profile Audit"].map((item) => renderTemplate`<li class="group flex"> <a href="#" class="flex items-center text-base font-bold transition-all duration-300"> <span${addAttribute(`w-0 overflow-hidden group-hover:w-5 transition-all duration-300 ease-out ${iconClass} flex items-center`, "class")}> <span class="block -translate-x-full group-hover:translate-x-0 transition-transform duration-300">→</span> </span> <span${addAttribute(`${textClass} ${linkHoverClass} transition-colors duration-300 group-hover:translate-x-1 whitespace-nowrap`, "class")}>${item}</span> </a> </li>`)} </ul> </div>  <div class="lg:col-span-4"> <h4${addAttribute(`${headingClass} font-black mb-8 uppercase tracking-[0.2em] text-[11px] transition-colors opacity-80`, "class")}>Headquarters</h4> <div class="space-y-4"> <div${addAttribute(`p-5 rounded-2xl ${theme === "light" ? "bg-white border border-slate-200/60 shadow-sm" : "bg-white/5 border border-white/10"} transition-colors`, "class")}> <div class="flex items-start gap-4"> <div${addAttribute(`p-3 rounded-xl shrink-0 ${theme === "light" ? "bg-slate-50 text-slate-700" : "bg-white/10 text-white"}`, "class")}> <svg${addAttribute(`w-5 h-5 ${iconClass}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> </div> <p${addAttribute(`${textClass} text-sm font-bold leading-relaxed`, "class")}>
Sakshi Samarth Plaza, First Floor, Above Sohala Showroom, 4th Lane, Rajarampuri, Kolhapur.
</p> </div> </div> <div class="flex flex-col sm:flex-row gap-4"> <a href="tel:+919850069600"${addAttribute(`flex-1 group flex items-center justify-center sm:justify-start gap-3 p-4 rounded-2xl ${theme === "light" ? "bg-white border border-slate-200/60 hover:border-teal-300" : "bg-white/5 border border-white/10 hover:border-white/20"} transition-all duration-300`, "class")}> <svg${addAttribute(`w-5 h-5 ${iconClass} group-hover:scale-110 transition-transform`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> <span${addAttribute(`${headingClass} text-sm font-black tracking-wide`, "class")}>+91 98500 69600</span> </a> </div> </div> </div> </div>  <div${addAttribute(`pt-8 border-t ${borderClass} flex flex-col md:flex-row justify-between items-center gap-6 transition-colors`, "class")}> <div class="flex flex-col md:flex-row items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500"> <p>© ${year} Finesse Overseas Education.</p> <div class="hidden md:block w-1 h-1 rounded-full bg-slate-300/50"></div> <div class="flex gap-4"> <a href="/privacy-policy"${addAttribute(`hover:text-slate-800 ${theme !== "light" ? "hover:text-white" : ""} transition-colors`, "class")}>Privacy Policy</a> <a href="/terms-and-conditions"${addAttribute(`hover:text-slate-800 ${theme !== "light" ? "hover:text-white" : ""} transition-colors`, "class")}>Terms</a> </div> </div> <div class="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 bg-black/5 px-4 py-2 rounded-full backdrop-blur-sm"> <span>Engineered by</span> <a href="https://www.skadas.com" class="hover:scale-110 transition-transform"><svg class="w-4 h-4 text-red-500 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"></path></svg></a> <span${addAttribute(`${headingClass}`, "class")}>Finesse Overseas Education</span> </div> </div> </div> </footer>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/Footer.astro", void 0);

export { $$Footer as $ };
