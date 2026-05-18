import { c as createComponent } from './astro-component_B6zmqKgi.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, b as addAttribute, u as unescapeHTML, d as renderComponent } from './entrypoint_C4bLIvE5.mjs';
import { r as renderScript } from './script_27-TmE0s.mjs';
import { $ as $$Layout } from './Layout_DpwRAqdi.mjs';
import 'clsx';
import { $ as $$Footer } from './Footer_gY3mxEUh.mjs';
import { $ as $$WhatsAppWidget } from './WhatsAppWidget_S4b9ER0-.mjs';
import { $ as $$Picture } from './_astro_assets_ZxdNyy_H.mjs';

const $$ROICalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white relative overflow-hidden" id="roi-calculator"> <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center mb-16"> <span class="text-teal-600 font-bold tracking-wider uppercase mb-3 block text-sm">Financial Transparency</span> <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Calculate Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Actual Cost</span></h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">Don't guess your expenses. Use our live calculator to see exactly how part-time jobs and scholarships cover your living costs in Europe.</p> </div> <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 md:p-10 grid lg:grid-cols-2 gap-12 relative z-20"> <div class="flex flex-col justify-center space-y-8"> <div> <label class="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">1. Select Destination</label> <div class="grid grid-cols-2 gap-4"> <button id="btn-germany" data-track="roi-country-toggle" class="country-btn active bg-slate-900 text-white border-2 border-slate-900 py-3 rounded-xl font-semibold transition-all shadow-md">
Germany
</button> <button id="btn-italy" data-track="roi-country-toggle" class="country-btn bg-white text-slate-600 border-2 border-slate-200 hover:border-slate-300 py-3 rounded-xl font-semibold transition-all">
Italy
</button> </div> </div> <div> <div class="flex justify-between items-end mb-3"> <label class="block text-sm font-bold text-slate-700 uppercase tracking-wide">2. Part-Time Work</label> <span class="text-teal-600 font-bold text-xl"><span id="hours-display">20</span> <span class="text-sm text-slate-500 font-medium">hrs/week</span></span> </div> <input type="range" id="work-hours" aria-label="Part-time work hours per week" min="0" max="20" value="20" class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500..."> <div class="flex justify-between text-xs text-slate-400 mt-2 font-medium"> <span>0 hrs</span> <span>Legal Max (20 hrs)</span> </div> </div> <div id="dynamic-note" class="bg-teal-50 text-teal-800 p-4 rounded-xl text-sm font-medium border border-teal-100">
💡 In Germany, students typically earn €12 to €15 per hour working part-time.
</div> </div> <div class="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center"> <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-500/20 blur-2xl rounded-full pointer-events-none"></div> <div class="flex justify-between items-center mb-6 relative z-10 border-b border-slate-700/50 pb-4"> <h3 class="text-slate-400 text-xs sm:text-sm font-bold uppercase tracking-widest">Monthly Projection</h3> <div class="bg-slate-800 p-1 rounded-lg flex text-xs font-bold shadow-inner"> <button id="curr-eur" class="px-3 py-1.5 rounded-md bg-teal-500 text-slate-900 transition-all shadow-sm">EUR (€)</button> <button id="curr-inr" class="px-3 py-1.5 rounded-md text-slate-400 hover:text-white transition-all">INR (₹)</button> </div> </div> <div class="space-y-5 relative z-10"> <div class="flex justify-between items-center pb-4 border-b border-slate-700/50"> <span class="text-slate-300">University Tuition Fee</span> <span class="text-xl font-bold text-teal-400" id="out-tuition">€0</span> </div> <div class="flex justify-between items-center pb-4 border-b border-slate-700/50"> <span class="text-slate-300">Est. Living Expenses</span> <span class="text-xl font-bold text-rose-400" id="out-living">- €750</span> </div> <div id="scholarship-row" class="hidden flex justify-between items-center pb-4 border-b border-slate-700/50"> <span class="text-slate-300"> Scholarship Stipend</span> <span class="text-xl font-bold text-teal-400" id="out-scholarship">+ €616</span> </div> <div class="flex justify-between items-center pb-4 border-b border-slate-700/50"> <span class="text-slate-300">Part-Time Earnings</span> <span class="text-xl font-bold text-teal-400" id="out-earning">+ €960</span> </div> </div> <div class="mt-8 pt-6 border-t border-slate-600 relative z-10"> <div class="flex flex-col sm:flex-row justify-between sm:items-end gap-2 sm:gap-4"> <div> <span class="block text-slate-400 text-sm font-medium mb-1">Your Net Cost / Savings</span> <span class="text-xs text-slate-500">Per month</span> </div> <div class="text-left sm:text-right flex items-baseline sm:block"> <span class="text-4xl font-black tracking-tight" id="out-net">+ €26</span> <span class="text-lg font-bold ml-2 sm:ml-1" id="out-net-label">(Saved)</span> </div> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "F:/Finesse/Website/Website/finesse-overseas/src/components/ROICalculator.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/ROICalculator.astro", void 0);

const $$Destinations = createComponent(($$result, $$props, $$slots) => {
  const destinations = [
    {
      id: "germany",
      name: "Germany",
      // 🌟 THE FIX: Tech-Blue Theme for Germany
      badge: "Zero Tuition Fee",
      badgeColor: "bg-blue-100 text-blue-700 border border-blue-200",
      hook: "World-Class Engineering at 0 Cost.",
      usps: ["Public Universities (No Fees)", "18-Month Job Seeker Visa", "APS Assistance"],
      link: "/study-in-germany",
      isPopular: true,
      iconColor: "text-blue-500",
      // Dynamic Icon Color
      cardHoverBorder: "hover:border-blue-300",
      cardHoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)]",
      blobColor: "bg-blue-400/15",
      titleHover: "group-hover:text-blue-600",
      btnHover: "group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200"
    },
    {
      id: "italy",
      name: "Italy",
      // 🌟 Theme: Amber/Gold for Scholarship vibe
      badge: "100% Scholarship",
      badgeColor: "bg-amber-100 text-amber-700 border border-amber-200",
      hook: "Free Education + Annual Stipend.",
      usps: ["Stipend up to ₹8 Lakhs/Year", "IELTS", "Scholarship Process"],
      link: "/study-in-italy",
      isPopular: true,
      iconColor: "text-amber-500",
      // Dynamic Icon Color
      cardHoverBorder: "hover:border-amber-300",
      cardHoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]",
      blobColor: "bg-amber-400/15",
      titleHover: "group-hover:text-amber-600",
      btnHover: "group-hover:bg-amber-50 group-hover:text-amber-700 group-hover:border-amber-200"
    },
    {
      id: "austria",
      name: "Austria",
      badge: "Low Cost",
      badgeColor: "bg-slate-100 text-slate-600 border border-slate-200",
      hook: "High Quality Education at Low Cost.",
      usps: ["No Blocked Account Needed", "Affordable Fees (€736/Sem)", "High Visa Success Ratio"],
      link: "/study-in-austria",
      isPopular: false,
      // 🌟 Theme: Regular Teal/Slate
      iconColor: "text-teal-500",
      // Dynamic Icon Color
      cardHoverBorder: "hover:border-teal-400/50",
      cardHoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)]",
      blobColor: "bg-teal-500/10",
      titleHover: "group-hover:text-teal-600",
      btnHover: "group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
    },
    {
      id: "uk-usa",
      name: "UK / USA",
      badge: "Fast-Track",
      badgeColor: "bg-slate-100 text-slate-600 border border-slate-200",
      hook: "Fast-Track Masters & STEM Careers.",
      usps: ["1-Year Masters (UK)", "3-Year Work Permit (USA STEM)", "Top Ranked Unis"],
      link: "/study-in-uk-usa",
      isPopular: false,
      // 🌟 Theme: Regular Teal/Slate
      iconColor: "text-teal-500",
      // Dynamic Icon Color
      cardHoverBorder: "hover:border-teal-400/50",
      cardHoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)]",
      blobColor: "bg-teal-500/10",
      titleHover: "group-hover:text-teal-600",
      btnHover: "group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-slate-50 relative" id="destinations"> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <span class="text-teal-600 font-bold tracking-wider uppercase mb-3 block text-sm">Your Global Pathway</span> <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Where Do You Want to Study?</h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">Select your dream destination to explore tuition-free Public Universities and fully-funded scholarship programs.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${destinations.map((dest) => renderTemplate`<div${addAttribute(`relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transform hover:-translate-y-2 transition-all duration-300 ease-out will-change-transform group flex flex-col h-full overflow-hidden ${dest.cardHoverShadow} ${dest.cardHoverBorder}`, "class")}> ${dest.isPopular && renderTemplate`<div${addAttribute(`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500 ${dest.blobColor}`, "class")}></div>`} <div class="mb-6 relative z-10"> <span${addAttribute(`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 ${dest.badgeColor}`, "class")}> ${dest.badge} </span> <h3${addAttribute(`text-2xl font-black text-slate-900 transition-colors ${dest.titleHover}`, "class")}>Study in ${dest.name}</h3> </div> <p class="text-slate-700 font-medium text-sm mb-6 pb-6 border-b border-slate-100 relative z-10">${dest.hook}</p> <ul class="space-y-3 mb-8 flex-grow text-slate-600 text-sm relative z-10"> ${dest.usps.map((usp) => renderTemplate`<li class="flex items-start"> <svg${addAttribute(`w-5 h-5 mr-2.5 shrink-0 transition-colors duration-300 ${dest.iconColor}`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> <span class="font-medium">${usp}</span> </li>`)} </ul> <a${addAttribute(dest.link, "href")} data-track="destination-card-click"${addAttribute(dest.name, "data-destination")}${addAttribute(`mt-auto w-full block text-center bg-slate-50 border border-slate-200 text-slate-900 font-bold py-3.5 rounded-xl transition-colors relative z-10 ${dest.btnHover}`, "class")}>
Explore ${dest.name} </a> </div>`)} </div> </div> </section>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/Destinations.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      step: "01",
      title: "Strategic Shortlisting",
      description: "We don't just apply; we strategize. We analyze your academic profile to target tuition-free public universities in Germany and 100% scholarship programs in Italy.",
      features: ["Profile & GAP Justification", "English-Taught Course Mapping", "Elite SOP & LOR Drafting"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      // Dark Theme for Card 1
      themeClasses: "bg-slate-900 border-slate-700 text-white",
      numberColor: "text-slate-800",
      featureIcon: "bg-slate-800 text-teal-400 border-slate-700",
      descColor: "text-slate-400",
      gradientFrom: "from-slate-900"
      // Added strictly for the smooth image fade
    },
    {
      step: "02",
      title: "APS & Visa Processing",
      description: "European paperwork is notoriously complex. We take 100% control of the bureaucratic maze, from German APS certification to Italian DOV and embassy prep.",
      features: ["APS Document Notarization", "Embassy Appointment Booking", "Mock Visa Interviews"],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      // Teal Brand Theme for Card 2
      themeClasses: "bg-teal-600 border-teal-500 text-white",
      numberColor: "text-teal-700",
      featureIcon: "bg-teal-700 text-white border-teal-500",
      descColor: "text-teal-100",
      gradientFrom: "from-teal-600"
    },
    {
      step: "03",
      title: "Financial Strategy",
      description: "Studying abroad shouldn't drain savings. We guide you through the exact financial structures required, ensuring zero blockages during your visa approval.",
      features: ["Blocked Account Setup", "Scholarship Filing", "Education Loan Assistance"],
      // 🌟 FIX 1: Changed w=2015 to w=800 (Saves ~300 KiB)
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      // Light/White Theme for Card 3
      themeClasses: "bg-white border-slate-200 text-slate-900",
      numberColor: "text-slate-100",
      featureIcon: "bg-teal-50 text-teal-600 border-teal-100",
      descColor: "text-slate-600",
      gradientFrom: "from-white"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-slate-950 relative" id="services"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16 relative z-10"> <span class="text-teal-400 font-bold tracking-wider uppercase mb-3 block text-sm">Our Blueprint</span> <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">How We Build Your Future</h2> <p class="text-lg text-slate-400 max-w-2xl mx-auto">Scroll down to see our step-by-step execution framework.</p> </div> <div class="relative pb-[10vh] space-y-12 md:space-y-16"> ${services.map((service, index) => {
    const topOffsets = ["top-[10vh]", "top-[15vh]", "top-[20vh]"];
    const zIndexes = ["z-10", "z-20", "z-30"];
    return renderTemplate`<div${addAttribute(`sticky ${topOffsets[index]} ${zIndexes[index]} w-full rounded-[2rem] overflow-hidden shadow-[0_30px_50px_-15px_rgba(0,0,0,0.5)] border ${service.themeClasses} flex flex-col md:flex-row min-h-[500px] transform transition-all duration-500 ease-out`, "class")}> <div class="p-10 md:p-16 flex flex-col justify-center w-full md:w-1/2 relative"> <span${addAttribute(`absolute top-4 right-10 text-8xl md:text-[150px] font-black opacity-50 ${service.numberColor} select-none pointer-events-none`, "class")}> ${service.step} </span> <div class="relative z-10"> <h3 class="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">${service.title}</h3> <p${addAttribute(`text-lg mb-8 leading-relaxed font-medium ${service.descColor}`, "class")}>${service.description}</p> <ul class="space-y-4"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center font-bold"> <span${addAttribute(`flex items-center justify-center w-8 h-8 rounded-full mr-4 shrink-0 border ${service.featureIcon}`, "class")}> <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg> </span> ${feature} </li>`)} </ul> </div> </div> <div class="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-slate-900"> <img${addAttribute(service.image, "src")}${addAttribute(`${service.title} illustration`, "alt")} width="800" height="800" decoding="async"${addAttribute(index === 0 ? "high" : "auto", "fetchpriority")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} class="absolute inset-0 w-full h-full object-cover"> <div${addAttribute(`absolute inset-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-r ${service.gradientFrom} to-transparent opacity-90 md:opacity-100 pointer-events-none`, "class")}></div> </div> </div>`;
  })} </div> </div> </section>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/Services.astro", void 0);

const $$Visionaries = createComponent(($$result, $$props, $$slots) => {
  const leaders = [
    {
      initials: "JP",
      name: "Jayant Patil",
      role: "Founder & Strategic Director",
      experience: "22+ Years",
      expertise: "Global Placements & Career Strategy",
      bio: "With nearly two decades of experience shaping student careers, Jayant brings a powerful blend of top-tier corporate leadership and academic excellence. As an education reformist, he leverages his deep connections with prestigious global universities to set ambitious students on the exact path to international success in Germany, Australia, and Canada.",
      tags: ["VETERAN COUNSELLOR", "VJTI & JBIMS ALUMNI"]
    },
    {
      initials: "SP",
      name: "Sneha Pai",
      role: "Director & Lead Mentor",
      experience: "18+ Years",
      expertise: "International Career Acceleration",
      bio: "A Cambridge Certified Trainer with 18+ years of expertise, Sneha is the driving force behind the transformation of over 15,000 students. Through her charismatic mentoring and soft-skills mastery, she elevates students' potential, preparing them to seamlessly transition into top-tier universities and thrive in global careers across Germany, the UK, USA, and beyond.",
      tags: ["CAMBRIDGE CERTIFIED", "MASTER MENTOR"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-slate-50 relative overflow-hidden" id="visionaries"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="mb-20 max-w-2xl text-center mx-auto"> <span class="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-bold tracking-widest uppercase mb-4 text-[10px] shadow-sm">
The Minds Behind Your Success
</span> <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter mb-6">Meet the <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-400">Visionaries</span></h2> <p class="text-slate-600 text-lg md:text-xl font-medium">Leading with 22+ years of on-ground expertise in European education.</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-10"> ${leaders.map((leader) => renderTemplate`<div class="group relative bg-white rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-200 hover:border-teal-300 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] flex flex-col h-full"> <div class="absolute -right-6 -bottom-10 text-[200px] font-black text-slate-50 leading-none pointer-events-none group-hover:text-teal-50/50 transition-colors duration-700 z-0"> ${leader.initials} </div> <div class="absolute -left-20 -top-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl group-hover:bg-teal-500/10 transition-colors duration-700 z-0 pointer-events-none"></div> <div class="relative z-10 flex flex-col h-full"> <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"> <div class="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-500 relative overflow-hidden"> <div class="absolute top-0 right-0 w-10 h-10 bg-white/10 rounded-full blur-xl"></div> <span class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-emerald-500">${leader.initials}</span> </div> <div> <h3 class="text-3xl font-black text-slate-900 tracking-tight">${leader.name}</h3> <p class="text-teal-600 font-bold text-sm uppercase tracking-widest mt-1.5">${leader.role}</p> </div> </div> <div class="flex flex-wrap gap-2 mb-8"> ${leader.tags.map((tag) => renderTemplate`<span class="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-lg group-hover:border-teal-200 group-hover:bg-teal-50 transition-colors">${tag}</span>`)} </div> <div class="relative mb-10 flex-grow"> <svg class="absolute -top-3 -left-3 w-10 h-10 text-slate-100 transform -scale-x-100 z-0 group-hover:text-teal-100 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg> <p class="text-slate-600 leading-relaxed font-medium relative z-10 pl-5 border-l-2 border-teal-500/30"> ${leader.bio} </p> </div> <div class="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 mt-auto"> <div class="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100 group-hover:bg-white group-hover:border-teal-100 transition-colors shadow-sm"> <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1.5">Experience</p> <p class="text-slate-900 font-black text-xl">${leader.experience}</p> </div> <div class="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100 group-hover:bg-white group-hover:border-teal-100 transition-colors shadow-sm"> <p class="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1.5">Focus</p> <p class="text-slate-900 font-bold text-sm leading-tight pr-2">${leader.expertise}</p> </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/Visionaries.astro", void 0);

const $$SuccessStories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SuccessStories;
  const stories = [
    {
      id: "w0-M8cRF_fA",
      student: "Success Story 1",
      destination: "Germany",
      impact: "Secured Admission",
      thumbnail: "https://img.youtube.com/vi/w0-M8cRF_fA/maxresdefault.jpg"
    },
    {
      id: "DVHH7pBTlPE",
      student: "Success Story 2",
      destination: "Italy",
      impact: "100% Scholarship Secured",
      thumbnail: "https://img.youtube.com/vi/DVHH7pBTlPE/maxresdefault.jpg"
    },
    {
      id: "kDZpnYsxgNI",
      student: "Success Story 3",
      destination: "Germany",
      impact: "Visa Success",
      thumbnail: "https://img.youtube.com/vi/kDZpnYsxgNI/maxresdefault.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-slate-50 overflow-hidden" id="success-stories"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <span class="text-teal-600 font-bold tracking-wider uppercase mb-3 block text-sm">Real Results, Real People</span> <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Success Stories</h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">Hear directly from our students who are currently building their global careers in Europe.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${stories.map((story) => renderTemplate`<div class="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl transition-all duration-500"> <div class="relative aspect-video cursor-pointer video-container overflow-hidden"${addAttribute(story.id, "data-id")}> <img${addAttribute(story.thumbnail, "src")}${addAttribute(story.student, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"> <div class="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors"> <div class="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform"> <svg class="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg> </div> </div> </div> <div class="p-6"> <div class="flex items-center gap-2 mb-3"> <span class="px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-teal-100"> ${story.destination} </span> <span class="text-slate-400 text-xs font-bold uppercase tracking-widest">• ${story.impact}</span> </div> <h3 class="text-xl font-black text-slate-900 group-hover:text-teal-600 transition-colors"> ${story.student} </h3> </div> </div>`)} </div> </div> </section> ${renderScript($$result, "F:/Finesse/Website/Website/finesse-overseas/src/components/SuccessStories.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/SuccessStories.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Is education really free in Germany for international students?",
      answer: "Yes. The vast majority of public universities in Germany do not charge tuition fees for Bachelor's and Master's programs, even for international students. You only need to pay a small semester contribution (usually €150 - €300) which often includes a public transport ticket."
    },
    {
      question: "How does the 100% Scholarship in Italy work?",
      answer: "Italy offers the scholarship, which is a regional need-based scholarship. If you qualify, it covers your full tuition fee, provides free hostel accommodation (or allowance), free daily meals, and an annual stipend of up to €7,000 to €8,000."
    },
    {
      question: "What is an APS Certificate and why is it required?",
      answer: "The APS (Akademische Prüfstelle) certificate is a mandatory document for Indian students applying to German universities. It verifies the authenticity of your Indian academic documents. Finesse handles the entire APS notarization and application process to ensure zero delays."
    },
    {
      question: "Do I need to speak German or Italian to study there?",
      answer: "Not necessarily. We map your profile to 100% English-taught programs. However, learning the basics of the local language (A1/A2 level) is highly recommended for daily life, part-time jobs, and future post-study work opportunities."
    },
    {
      question: "What is a Blocked Account for Germany?",
      answer: "To get a German student visa, you must prove you can support yourself financially. You do this by depositing around €11,208 into a 'Blocked Account' (Sperrkonto) in Germany. This money remains yours, and you receive a monthly payout of €934 to cover your living expenses."
    }
  ];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(["", '<section class="py-24 bg-slate-50 relative overflow-hidden" id="faq"> <script type="application/ld+json">', `<\/script> <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"> <div class="lg:col-span-5 lg:sticky lg:top-32"> <span class="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-bold tracking-wider uppercase mb-6 text-xs shadow-sm">Clear Your Doubts</span> <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Got Questions?<br><span class="text-teal-600">We've Got Answers.</span></h2> <p class="text-lg text-slate-600 mb-8 leading-relaxed">Everything you need to know before starting your European education journey. Can't find what you're looking for?</p> <div class="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center gap-5 hover:border-teal-200 transition-colors group"> <div class="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors"> <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> </div> <div> <h4 class="font-bold text-slate-900 text-lg">Still have doubts?</h4> <a href="/contact" class="relative z-20 text-teal-600 font-bold text-sm hover:text-teal-700 flex items-center mt-1">
Talk to our experts
<svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> </div> </div> <div class="lg:col-span-7 space-y-5"> `, " </div> </div> </div> </section> ", ""])), maybeRenderHead(), unescapeHTML(JSON.stringify(faqSchema)), faqs.map((faq) => renderTemplate`<div class="faq-item group bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-teal-200"> <button class="faq-button w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none" aria-expanded="false"> <span class="text-lg font-bold text-slate-800 pr-8 group-hover:text-teal-600 transition-colors">${faq.question}</span> <span class="faq-icon relative shrink-0 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-500 group-hover:bg-teal-50 group-hover:text-teal-600 group-hover:border-teal-200"> <svg class="w-5 h-5 transition-transform duration-500 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg> </span> </button> <div class="faq-answer grid grid-rows-[0fr] transition-all duration-500 ease-in-out opacity-50"> <div class="overflow-hidden"> <p class="px-6 md:px-8 pb-6 text-slate-600 leading-relaxed font-medium"> ${faq.answer} </p> </div> </div> </div>`), renderScript($$result, "F:/Finesse/Website/Website/finesse-overseas/src/components/FAQ.astro?astro&type=script&index=0&lang.ts"));
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/FAQ.astro", void 0);

const $$UniversitiesMarquee = createComponent(($$result, $$props, $$slots) => {
  const universities = [
    {
      name: "TU Munich",
      style: "font-sans font-black tracking-tighter text-2xl",
      prefix: "TUM"
    },
    {
      name: "Politecnico di Milano",
      style: "font-serif font-bold italic text-xl",
      prefix: "POLIMI"
    },
    {
      name: "RWTH Aachen",
      style: "font-mono font-bold tracking-widest text-lg",
      prefix: "RWTH"
    },
    {
      name: "Uni Bologna",
      style: "font-serif font-semibold tracking-wide text-2xl uppercase",
      prefix: "UNIBO"
    },
    {
      name: "Sapienza Rome",
      style: "font-sans font-bold tracking-tight text-xl text-red-900",
      prefix: "SAPIENZA"
    },
    {
      name: "TU Berlin",
      style: "font-sans font-extrabold tracking-widest text-xl uppercase",
      prefix: "FREIE"
    }
  ];
  const doubledUnis = [...universities, ...universities];
  return renderTemplate`${maybeRenderHead()}<section class="py-12 bg-white border-b border-slate-100 overflow-hidden" data-astro-cid-kja7g2il> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8" data-astro-cid-kja7g2il> <p class="text-center text-xs font-black text-slate-400 uppercase tracking-widest" data-astro-cid-kja7g2il>Our Students Have Successfully Enrolled At</p> </div> <div class="relative flex overflow-x-hidden group" data-astro-cid-kja7g2il> <div class="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" data-astro-cid-kja7g2il></div> <div class="animate-marquee flex whitespace-nowrap items-center gap-20 md:gap-32 px-8 w-max" data-astro-cid-kja7g2il> ${doubledUnis.map((uni) => renderTemplate`<div class="flex-none flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer select-none" data-astro-cid-kja7g2il> <svg class="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-kja7g2il> <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.81-1.53M12 18.72l-5-2.73v-5l5 2.73l5-2.73v5l-5 2.73M12 5.28l7 3.82l-7 3.82l-7-3.82l7-3.82Z" data-astro-cid-kja7g2il></path> </svg> <span${addAttribute(`text-slate-800 ${uni.style}`, "class")} data-astro-cid-kja7g2il> ${uni.name} </span> </div>`)} </div> <div class="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" data-astro-cid-kja7g2il></div> </div> </section>`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/components/UniversitiesMarquee.astro", void 0);

const heroImage = new Proxy({"src":"/media/home-hero.9DHJFDmF.avif","width":2070,"height":1380,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "F:/Finesse/Website/Website/finesse-overseas/src/assets/home-hero.avif";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seoTitle = "Study in Europe for Free | Finesse Overseas Education";
  const seoDescription = "Kolhapur's most trusted study abroad consultants. Specializing in zero tuition fee public universities in Germany and 100% scholarships in Italy.";
  const siteSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Finesse Overseas Education",
    "description": seoDescription,
    "url": "https://finesseoverseas.com",
    "telephone": "+919850069600",
    "email": "info@finesseoverseas.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Samarth Sakshi Plaza, First Floor, Above Sohala Showroom, Beside Lenskart, 4th Lane, Rajarampuri",
      "addressLocality": "Kolhapur",
      "postalCode": "416008",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.instagram.com/finesseoverseas",
      "https://www.facebook.com/finesseoverseas"
    ],
    "priceRange": "$$",
    "areaServed": {
      "@type": "State",
      "name": "Maharashtra"
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "schema": siteSchema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#0A0F1C] pt-20 pb-32 lg:pt-32 lg:pb-48"> <div class="absolute inset-0 z-0 bg-[#0A0F1C]"> ${renderComponent($$result2, "Picture", $$Picture, { "src": heroImage, "alt": "Finesse Overseas Education Hero Background", "widths": [400, 800, 1200, 1920], "sizes": "(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px", "formats": ["avif", "webp"], "fallbackFormat": "webp", "quality": 40, "fetchpriority": "high", "loading": "eager", "decoding": "async", "class": "absolute inset-0 w-full h-full object-cover object-center opacity-[0.08] grayscale mix-blend-luminosity" })} <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0A0F1C]/90 via-[#0A0F1C]/40 to-[#0A0F1C]"></div> <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-[120px] pointer-events-none hidden md:block"></div> <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none hidden md:block"></div> </div> <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-12"> <div class="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/50 backdrop-blur-md shadow-2xl h-11 overflow-hidden cursor-default"> <span class="relative flex h-3 w-3 shrink-0"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span> </span> <span id="dynamic-ticker-text" class="text-sm font-medium text-slate-200 transition-opacity duration-500 opacity-100 min-w-[280px] sm:min-w-[350px] text-left">
Loading live updates...
</span> </div> <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
Unlock Free Education in Europe with <br class="hidden md:block"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Expert Visa Strategies</span> </h1> <p class="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
We cut the confusion. Get <span class="text-white font-semibold">Zero Tuition Fee</span> in Germany & <span class="text-white font-semibold">100% Scholarship</span> in Italy.
</p> <div class="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto relative z-20"> <a data-track="hero-eligibility-click" href="#consultation" class="group relative z-20 px-8 py-4 bg-teal-500 text-slate-900 font-bold rounded-lg hover:bg-teal-400 transition-all duration-300 w-full flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30_rgba(20,184,166,0.4)]">
Check Your Eligibility - Free
<svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg> </a> </div> </div> </section> ${renderScript($$result2, "F:/Finesse/Website/Website/finesse-overseas/src/pages/index.astro?astro&type=script&index=0&lang.ts")} <section class="py-10 bg-slate-900 text-white relative z-20 -mt-12 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-2xl"> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 text-center divide-x divide-slate-700/50"> <div class="px-4"> <div class="text-3xl font-black text-teal-400 mb-1">22+</div> <div class="text-sm text-slate-300 font-medium">Years Experience</div> </div> <div class="px-4"> <div class="text-3xl font-black text-teal-400 mb-1">1000+</div> <div class="text-sm text-slate-300 font-medium">Students Placed</div> </div> <div class="px-4"> <div class="text-3xl font-black text-teal-400 mb-1">99%</div> <div class="text-sm text-slate-300 font-medium">Visa Success Rate</div> </div> <div class="px-4"> <div class="text-xl font-bold text-teal-400 mb-1 mt-1">Public Uni.</div> <div class="text-sm text-slate-300 font-medium">Admission Experts</div> </div> </div> </section> ${renderComponent($$result2, "UniversitiesMarquee", $$UniversitiesMarquee, {})} ${renderComponent($$result2, "Destinations", $$Destinations, {})} ${renderComponent($$result2, "ROICalculator", $$ROICalculator, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Visionaries", $$Visionaries, {})} ${renderComponent($$result2, "SuccessStories", $$SuccessStories, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppWidget", $$WhatsAppWidget, {})} ` })}`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/pages/index.astro", void 0);

const $$file = "F:/Finesse/Website/Website/finesse-overseas/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
