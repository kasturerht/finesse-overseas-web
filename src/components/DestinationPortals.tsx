// src/components/DestinationPortals.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// DATA: Fixed & Tested 100% Working Image URLs + Zero Budget Focus
// ============================================================================
const destinations = [
  {
    id: "IND",
    index: "01",
    country: "India",
    flag: "🇮🇳",
    headline: "The Donation-Free Pathway",
    description: "Navigate the competitive Indian medical landscape with absolute clarity. Secure merit-based admissions in top Deemed and Private institutions.",
    stats: [
      { label: "Admission", value: "100% Merit & Legal" },
      { label: "Hidden Fees", value: "Zero Donations" }
    ],
    // Tested medical professionals image
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "ITA",
    index: "02",
    country: "Italy",
    flag: "🇮🇹",
    headline: "The European Dream",
    description: "Experience Europe's finest with Zero Tuition Fees in Public Universities, fully backed by Government Living Scholarships.",
    stats: [
      { label: "Tuition", value: "100% Free (Public)" },
      { label: "Access", value: "Schengen Visa" }
    ],
    // Tested European architecture image
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "RUS",
    index: "03",
    country: "Russia",
    flag: "🇷🇺",
    headline: "Clinical Supremacy",
    description: "Gain unparalleled hands-on experience in 3000+ bed hospitals within centuries-old, globally ranked Government Medical Academies.",
    stats: [
      { label: "Exposure", value: "3000+ Bed Hospitals" },
      { label: "Legacy", value: "Centuries Old" }
    ],
    // Tested Russian classical architecture image
    img: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "ROM",
    index: "04",
    country: "Romania",
    flag: "🇷🇴",
    headline: "EU Excellence",
    description: "State-of-the-art medical infrastructure with 100% English-medium curriculums and a direct pathway to practicing across the European Union.",
    stats: [
      { label: "Curriculum", value: "Exclusive English" },
      { label: "Practice", value: "Direct EU Eligibility" }
    ],
    // Tested classic European street/university vibe
    img: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "POL",
    index: "05",
    country: "Poland",
    flag: "🇵🇱",
    headline: "Baltic Prestige",
    description: "Study in top globally ranked medical universities offering a rigorous, USMLE-aligned curriculum for students aiming for global dominance.",
    stats: [
      { label: "Ranking", value: "Top 500 Global" },
      { label: "Pathway", value: "USMLE Aligned" }
    ],
    // Tested Poland architecture image
    img: "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "BUL",
    index: "06",
    country: "Bulgaria",
    flag: "🇧🇬",
    headline: "The Balanced EU Choice",
    description: "The perfect balance of European lifestyle, featuring highly supportive academic environments and exceptional passing ratios for NExT.",
    stats: [
      { label: "Academics", value: "High NExT Ratio" },
      { label: "Environment", value: "Student Friendly" }
    ],
    // Tested Bulgaria/European building image
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: "LIT",
    index: "07",
    country: "Lithuania",
    flag: "🇱🇹",
    headline: "The Hidden Gem",
    description: "An incredibly safe European nation offering pristine campuses, low student-to-professor ratios, and a deep focus on medical research.",
    stats: [
      { label: "Safety", value: "Amongst Highest" },
      { label: "Focus", value: "Deep Clinical Research" }
    ],
    // Tested university campus image
    img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1600"
  }
];

export default function DestinationCanvas() {
  const [activeDest, setActiveDest] = useState(destinations[0]);

  

  return (
    // SEPARATION FIX: Changed to Pure White (bg-white) with a top inner shadow & border to clearly detach from the previous Ivory section.
    <section className="relative w-full min-h-[90vh] lg:h-[90vh] bg-white border-t border-slate-200 shadow-[inset_0_20px_30px_-20px_rgba(0,0,0,0.03)] flex items-center overflow-hidden py-12 lg:py-0 selection:bg-[#C5A059]/20">
      
      <div className="max-w-[1500px] w-full mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        
        {/* --- HEADER --- */}
        <div className="mb-8 lg:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6">
          <div>
            <span className="inline-block text-[#C5A059] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-3">
              The Finesse Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#002147] leading-tight tracking-tight">
              Curated <span className="italic font-light text-[#C5A059]">Destinations.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-sans text-sm max-w-sm border-l border-[#C5A059]/30 pl-4">
            We exclusively partner with institutions in these 7 audited regions. No overwhelming choices, just clear pathways.
          </p>
        </div>

        {/* --- THE MASTER CANVAS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 h-full lg:h-[65vh] items-center">
          
          {/* LEFT: Compact Royal Index */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-4">
            <div className="space-y-1">
              {destinations.map((dest) => {
                const isActive = activeDest.id === dest.id;
                return (
                  <div 
                    key={dest.id}
                    onMouseEnter={() => setActiveDest(dest)}
                    onClick={() => setActiveDest(dest)}
                    className="group cursor-pointer py-3 lg:py-[18px] border-b border-[#002147]/5 last:border-0 relative"
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      {/* Number */}
                      <span className={`font-serif text-sm transition-colors duration-200 ${isActive ? 'text-[#C5A059]' : 'text-slate-300 group-hover:text-[#C5A059]/50'}`}>
                        {dest.index}
                      </span>
                      
                      {/* Flag & Country */}
                      <div className="flex items-center gap-3">
                        <span className="text-xl opacity-90">{dest.flag}</span>
                        {/* SPEED FIX: duration-500 changed to duration-200 for snappy feel */}
                        <h3 className={`font-serif text-2xl lg:text-[1.65rem] tracking-wide transition-all duration-200 ${
                          isActive ? 'text-[#002147] translate-x-2' : 'text-slate-400'
                        }`}>
                          {dest.country}
                        </h3>
                      </div>
                    </div>

                    {/* Gold Strike Line: SPEED FIX - duration-700 to duration-300 */}
                    <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 ease-out ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: The Cinematic Master Canvas */}
          <div className="lg:col-span-8 h-[450px] lg:h-full w-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,33,71,0.12)] border border-[#002147]/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.id}
                // SPEED FIX: blur removed, opacity fade sped up from 0.6s to 0.25s for instant snappy feel
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Background Image - 🚀 PERFORMANCE FIX: Added lazy loading to save bandwidth */}
                <img 
                  src={activeDest.img} 
                  /* 🚀 SEO FIX: Dynamic and Keyword Rich Alt Text */
                  alt={`Top Government Medical University Campus for MBBS in ${activeDest.country} 2026`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[10s] ease-out"
                />
                
                {/* Clean, readable gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001229]/95 via-[#001229]/50 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#001229]/90 via-transparent to-transparent lg:hidden"></div>

                {/* Text Content inside the image */}
                <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] p-8 lg:p-14 flex flex-col justify-center">
                  
                  <motion.div
                    // Instant text entry
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[#C5A059] font-bold text-[9px] uppercase tracking-widest rounded-sm mb-6">
                      {activeDest.country} Approved Portfolio
                    </span>
                    
                    {/* 🚀 SEO FIX: DoFollow Link for internal Silo structure (Google Bot साठी) */}
                    <a 
                      href={`/mbbs-in-${activeDest.country.toLowerCase().replace(' ', '-')}`} 
                      title={`Study MBBS in ${activeDest.country} 2026`}
                      className="block hover:text-[#C5A059] transition-colors duration-300"
                    >
                      <h3 className="text-3xl lg:text-4xl font-serif text-white leading-tight mb-4 drop-shadow-lg">
                        {activeDest.headline}
                      </h3>
                    </a>
                    
                    <p className="text-slate-200 font-sans text-sm leading-relaxed mb-10 max-w-md drop-shadow-md">
                      {activeDest.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/20 max-w-md">
                      {activeDest.stats.map((stat, idx) => (
                        <div key={idx}>
                          <p className="text-[9px] text-[#C5A059] font-bold uppercase tracking-[0.2em] mb-1">
                            {stat.label}
                          </p>
                          <p className="text-white font-serif text-base tracking-wide">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}