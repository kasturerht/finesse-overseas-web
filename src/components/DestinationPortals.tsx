// src/components/DestinationPortals.tsx
import React from 'react';
import { motion } from 'framer-motion';

// ============================================================================
// DATA: Top Safe Countries (No Specific Fees - Curiosity Based)
// ============================================================================
const destinations = [
  {
    id: "italy",
    country: "Italy",
    flag: "🇮🇹",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
    flight: "Flights from Mumbai/Delhi",
    food: "Pure Veg & Indian Options",
    safety: "Highest European Safety",
    colleges: ["Top Govt. Universities in Rome", "Premium Medical Colleges in Milan"]
  },
  {
    id: "russia",
    country: "Russia",
    flag: "🇷🇺",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800",
    flight: "Direct Flights from Delhi",
    food: "Indian Canteens in Campus",
    safety: "Global Superpower Safety",
    colleges: ["Kazan Federal University", "Bashkir State Medical Uni."]
  },
  {
    id: "romania",
    country: "Romania",
    flag: "🇷🇴",
    image: "https://thumbs.dreamstime.com/b/historic-university-bucharest-building-equestrian-statue-carol-i-city-center-grand-neoclassical-architecture-landmark-448739407.jpg",
    flight: "European Standard Travel",
    food: "Self-Cooking & Indian Mess",
    safety: "Extremely Safe (EU Nation)",
    colleges: ["Carol Davila Uni. of Medicine", "Victor Babes Uni. of Medicine"]
  },
  {
    id: "poland",
    country: "Poland",
    flag: "🇵🇱",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=800",
    flight: "Connecting Flights to Warsaw",
    food: "Indian Mess Available",
    safety: "Top EU Quality of Life",
    colleges: ["Medical University of Warsaw", "Jagiellonian University"]
  },
  {
    id: "bulgaria",
    country: "Bulgaria",
    flag: "🇧🇬",
    image: "https://thumbs.dreamstime.com/b/aerial-view-university-kliment-ohridski-sofia-bulgaria-aerial-view-university-kliment-ohridski-sofia-211019161.jpg",
    flight: "Easy Connecting Flights",
    food: "Indian Food Options",
    safety: "Peaceful EU Country",
    colleges: ["Sofia Medical University", "Plovdiv Medical University"]
  },
  {
    id: "lithuania",
    country: "Lithuania",
    flag: "🇱🇹",
    image: "https://thumbs.dreamstime.com/b/vilnius-university-8699353.jpg",
    flight: "Connecting Flights to Vilnius",
    food: "Self-Cooking & Indian Mess",
    safety: "High Standard Baltic Safety",
    colleges: ["Vilnius University", "Lithuanian Uni. of Health Sciences"]
  }
];

export default function DestinationPortals() {
  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-800 font-extrabold text-[10px] uppercase tracking-widest rounded-full mb-6">
            MBBS Abroad Options
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Safe European Nations & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Top Govt. Universities
            </span>
          </h2>
          <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
            Our only job is to secure your seat in the best, safest, and 100% NMC approved government universities abroad. <strong className="text-slate-900">We guide you to the right college; the hard work and studying is up to the student.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.2)] transition-all duration-500 border border-slate-100 flex flex-col h-[480px]"
            >
              <div className="relative h-[220px] overflow-hidden shrink-0">
                <img 
                  src={dest.image} 
                  alt={`MBBS in ${dest.country}`} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <span className="text-3xl drop-shadow-md">{dest.flag}</span>
                  <h3 className="text-2xl font-black text-white drop-shadow-md tracking-wide">
                    {dest.country}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-start bg-white relative z-10 transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <ul className="space-y-4 mt-2">
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">✈️</span>
                    {dest.flight}
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">🛡️</span>
                    {dest.safety}
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <span className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">🥗</span>
                    {dest.food}
                  </li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-600/70">
                    Hover to see Universities & Details
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 top-[220px] bg-slate-900 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-400 mb-3 border-b border-white/10 pb-2">
                  Top Colleges We Offer
                </h4>
                <ul className="space-y-3 mb-6">
                  {dest.colleges.map((college, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-bold text-white">
                      <svg className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {college}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto bg-white/5 rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fee Structure</span>
                  <span className="text-[15px] sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 flex items-center justify-center gap-2">
                    Request Official Details 🔒
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}