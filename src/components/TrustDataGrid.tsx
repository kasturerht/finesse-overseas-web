// src/components/TrustDataGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TrustDataGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // 🌟 VIBRANT THEME: Pure White Background, High Contrast Text
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden selection:bg-teal-500/20 selection:text-teal-900">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 🚀 HIGH ENERGY HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mb-20 text-center mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-700">
              May 2026 Official Update
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            The 2026 Medical Admission <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Clear Reality Check.
            </span>
          </h2>
          <p className="text-slate-600 font-medium text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't sell dreams; we provide data. Before making a big decision for your child's future, read this clear comparison and our exact responsibilities.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">

          {/* The Detailed & Alive CSS Grid Table */}
            <div className="overflow-x-auto pb-6 pt-2 px-2 -mx-2">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                }}
                className="min-w-[800px] w-full border border-slate-200 bg-white rounded-2xl shadow-sm"
              >
                
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-slate-900 text-white rounded-t-2xl overflow-hidden">
                  <div className="col-span-4 p-6 font-black text-[10px] uppercase tracking-widest text-slate-400 border-r border-white/10 flex items-center">Key Parameters</div>
                  <div className="col-span-4 p-6 text-xl font-extrabold border-r border-white/10 text-center flex items-center justify-center gap-2">
                    <span className="text-2xl"></span> MBBS in India
                  </div>
                  <div className="col-span-4 p-6 text-xl font-extrabold text-teal-300 text-center bg-teal-900/20 flex items-center justify-center gap-2">
                    <span className="text-2xl"></span> MBBS Abroad
                  </div>
                </div>

                {/* Table Rows (With Icons & Micro-Interactions) */}
                {[
                  { 
                    icon: <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    p: "Financial Planning", 
                    in: "High Budget Needed", 
                    ab: "Safe & Fixed Budget",
                    inSub: "Budgets keep changing due to management rules.",
                    abSub: "100% fixed, transparent fee structure on Day 1."
                  },
                  { 
                    icon: <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    p: "Admission Rule", 
                    in: "High NEET Score or Donation", 
                    ab: "Only NEET Qualification",
                    inSub: "Fierce competition for limited govt seats.",
                    abSub: "Merit-based entry with minimum 50% in 12th PCB."
                  },
                  { 
                    icon: <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                    p: "College Type", 
                    in: "Mostly Private Trusts & Deemed", 
                    ab: "Top Government Universities",
                    inSub: "Infrastructure varies by private management.",
                    abSub: "Massive campuses subsidized by foreign governments."
                  },
                  { 
                    icon: <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                    p: "Hospital Practice", 
                    in: "Local Indian Patient Flow", 
                    ab: "Global Experience",
                    inSub: "Excellent for regional practice.",
                    abSub: "3000+ bed hospitals, but requires learning basic local language."
                  }
                ].map((row, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="grid grid-cols-12 border-b border-slate-200 last:border-b-0 bg-white relative group cursor-default transition-all duration-300 hover:z-10 hover:shadow-lg hover:-translate-y-1 hover:border-transparent rounded-lg my-1 mx-1"
                  >
                    {/* The Magic Hover Left Border Highlight */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="col-span-4 p-5 md:p-6 border-r border-slate-100 flex flex-col justify-center bg-slate-50/30 group-hover:bg-transparent transition-colors rounded-l-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors shrink-0">
                          {row.icon}
                        </div>
                        <span className="font-extrabold text-sm text-slate-800">{row.p}</span>
                      </div>
                    </div>

                    <div className="col-span-4 p-5 md:p-6 border-r border-slate-100 text-center flex flex-col justify-center transition-colors">
                      <span className="font-extrabold text-slate-900 text-base md:text-lg mb-1">{row.in}</span>
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-wide leading-snug">{row.inSub}</span>
                    </div>

                    <div className="col-span-4 p-5 md:p-6 text-center flex flex-col justify-center bg-teal-50/30 group-hover:bg-teal-50/50 transition-colors rounded-r-lg">
                      <span className="font-extrabold text-teal-700 text-base md:text-lg mb-1">{row.ab}</span>
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-wide leading-snug">{row.abSub}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* ================================================================= */}
            {/* MODULE 2: NMC 2026 COMPLIANCE */}
            {/* ================================================================= */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col bg-slate-50 rounded-3xl p-8 border border-slate-200"
            >
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-extrabold text-[10px] uppercase tracking-widest rounded-md mb-4">Strict Govt Rules</span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">NMC 2026 Official Rules</h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  The National Medical Commission has strict rules for students going abroad. We physically check colleges to ensure 100% safety.
                </p>
              </div>

              <div className="space-y-4 flex-grow">
                {[
                  { t: "The 54 + 12 Months Rule", d: "Course duration must be strictly 54 months, followed by a mandatory 12-month internship in the same foreign country." },
                  { t: "100% English Medium", d: "Bilingual (Two languages) courses are not accepted. The entire medical syllabus must be taught in English." },
                  { t: "Licensing & Registration", d: "The student must be eligible to get a valid medical practice license in that country after graduation." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
                    <div className="mt-0.5 bg-teal-100 p-2 rounded-full shrink-0">
                      <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1">{item.t}</h4>
                      <p className="text-xs font-medium text-slate-500 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ================================================================= */}
            {/* MODULE 3: SCOPE OF WORK (Split Bright Cards) */}
            {/* ================================================================= */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              
              <div className="mb-2">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Our Exact Responsibilities</h3>
                <p className="text-sm font-medium text-slate-500">
                  We are professional admission consultants, not magicians. Here is exactly what we do, and what we don't.
                </p>
              </div>

              {/* WHAT WE DO (Emerald Green Accent) */}
              <div className="bg-white rounded-3xl p-8 border-2 border-emerald-50 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="font-extrabold text-sm tracking-widest uppercase text-slate-900">Our Responsibility</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Unbiased College Selection based on NEET.",
                    "100% Guaranteed Admission Letter generation.",
                    "Complete Documentation & Visa Processing.",
                    "First-time travel escort & hostel settling."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span className="leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHAT WE DON'T DO (Rose Red Accent - The Trust Builder) */}
              <div className="bg-white rounded-3xl p-8 border-2 border-rose-50 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="font-extrabold text-sm tracking-widest uppercase text-slate-900">What We Don't Do</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "We DO NOT collect College Tuition Fees (You pay direct).",
                    "We DO NOT offer 5-year academic coaching.",
                    "We DO NOT guarantee passing degrees.",
                    "We DO NOT charge hidden consulting margins midway."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600">
                      <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="leading-snug">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}