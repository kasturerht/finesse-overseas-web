// src/components/TopIndianHubs.tsx
import React from 'react';
import { motion } from 'framer-motion';

// ============================================================================
// DATA: Top Indian Medical Hubs (No Specific Fees - Lead Generation Focus)
// ============================================================================
const indianHubs = [
  {
    id: "maharashtra",
    state: "Maharashtra (Home State)",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    highlight: "Close to Home & Culture",
    benefit1: "State Counseling Options",
    benefit2: "Marathi Speaking Patients",
    colleges: ["Top Private Colleges in Pune", "Medical Hubs in Mumbai & Navi Mumbai"]
  },
  {
    id: "karnataka",
    state: "Karnataka (Border Hubs)",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    highlight: "World-Class Infrastructure",
    benefit1: "Easy Travel from Kolhapur (Belgaum)",
    benefit2: "High Patient Flow Hospitals",
    colleges: ["Premium Institutions in Belgaum", "Top Universities in Bangalore"]
  },
  {
    id: "deemed",
    state: "All India Deemed Universities",
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    highlight: "Direct Admission Process",
    benefit1: "Options for Low NEET Scores",
    benefit2: "100% Guaranteed Seats",
    colleges: ["Top Deemed Universities Across India", "Direct Centralized Counseling"]
  }
];

export default function TopIndianHubs() {
  return (
    <section className="relative py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-extrabold text-[10px] uppercase tracking-widest rounded-full mb-6">
            MBBS in India
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Premium Private & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
              Deemed Universities
            </span>
          </h2>
          <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
            Want to study in India? We provide expert counseling for state and centralized admission rounds. We help you secure the best private or deemed college seat based on your exact NEET score and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {indianHubs.map((hub, index) => (
            <motion.div 
              key={hub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(29,78,216,0.15)] transition-all duration-500 border border-slate-200 flex flex-col h-[450px]"
            >
              <div className="relative h-[200px] overflow-hidden shrink-0">
                <img 
                  src={hub.image} 
                  alt={`MBBS in ${hub.state}`} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-4 left-5 pr-4">
                  <span className="text-2xl mb-2 block drop-shadow-md">{hub.icon}</span>
                  <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-md tracking-wide leading-tight">
                    {hub.state}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-start bg-white relative z-10 transition-transform duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-extrabold uppercase tracking-widest rounded-md">
                    {hub.highlight}
                  </span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm font-bold text-slate-700">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {hub.benefit1}
                  </li>
                  <li className="flex items-start gap-3 text-sm font-bold text-slate-700">
                    <svg className="w-5 h-5 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {hub.benefit2}
                  </li>
                </ul>
                
                <div className="mt-auto pt-4 text-center">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600/70">
                    Hover to see Options & Details
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 top-[200px] bg-slate-900 p-6 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-3 border-b border-white/10 pb-2">
                  Top Options
                </h4>
                <ul className="space-y-3 mb-6">
                  {hub.colleges.map((college, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-bold text-white">
                      <svg className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {college}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto bg-white/5 rounded-xl p-4 border border-white/10 text-center cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Fee & Admission</span>
                  <span className="text-[15px] sm:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 flex items-center justify-center gap-2">
                    Consult for Exact Details 🔒
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