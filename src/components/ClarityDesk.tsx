// src/components/ClarityDesk.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// DATA: The Unfiltered Truths (Premium FAQs)
// ============================================================================
const faqs = [
  {
    id: "01",
    question: "What about the NMC 2026 rules and NExT exam?",
    answer: "We exclusively partner with universities that strictly follow the 54+12 months NMC guideline and English-medium mandates. Furthermore, our partner institutions have some of the highest NExT passing ratios globally.",
    highlight: "100% NMC Compliant"
  },
  {
    id: "02",
    question: "Are these destinations genuinely safe for female students?",
    answer: "Absolute safety is our baseline. We only select universities located in low-crime European and Eurasian zones with secure, restricted-access international hostels and 24/7 on-ground wardens.",
    highlight: "Highest Safety Index"
  },
  {
    id: "03",
    question: "Do you assist with Education Loans?",
    answer: "Yes. Because our partner universities are highly ranked government institutions, major Indian banks readily approve loans. We provide the necessary admission letters and financial structures to fast-track your approval.",
    highlight: "Comprehensive Loan Support"
  },
  {
    id: "04",
    question: "Will there be any sudden 'Consulting Charges' midway?",
    answer: "No. We operate on a zero-surprise policy. You will receive a legally binding document on Day 1 detailing every single expense down to the visa fees. No hidden margins, period.",
    highlight: "Zero Hidden Costs"
  }
];

export default function ClarityDesk() {
  const [openFaq, setOpenFaq] = useState<string | null>("01"); // First FAQ open by default

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    // Midnight Vault Background - Deep Oxford Blue for maximum luxury contrast
    <section className="relative w-full py-24 lg:py-32 bg-[#001229] text-white overflow-hidden selection:bg-[#C5A059]/30 selection:text-white">
      
      {/* Subtle Noise Texture for that premium matte finish */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Subtle Radial Glow to draw attention to the center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: The Executive CTA (Sticky)                       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-[#C5A059]"></div>
                <span className="text-[#C5A059] font-sans font-bold tracking-[0.25em] text-[10px] uppercase">
                  The Final Step
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight mb-6">
                Ready to build a <br />
                <span className="italic font-light text-[#C5A059]">global legacy?</span>
              </h2>
              
              <p className="text-white/60 font-sans text-base lg:text-lg leading-relaxed mb-12 max-w-md">
                Stop guessing with your child's future. Get absolute clarity on budgets, universities, and NMC rules from our admission directors.
              </p>

              {/* The Premium CTA Button */}
              <button className="group relative inline-flex items-center justify-center gap-6 px-8 py-5 bg-[#C5A059] text-[#001229] overflow-hidden transition-all duration-500 hover:bg-white w-full sm:w-auto">
                <span className="font-bold text-xs uppercase tracking-[0.2em] relative z-10">
                  Request Confidential Audit
                </span>
                
                {/* Arrow Icon */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-[#001229]/20 group-hover:bg-[#001229] group-hover:text-white transition-all duration-500">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>

              <div className="mt-6 flex items-center gap-3">
                <svg className="w-4 h-4 text-[#C5A059]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">100% Privacy Guaranteed</span>
              </div>
            </motion.div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: The Clarity Desk (Premium Accordion)            */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            
            <div className="mb-10">
              <span className="text-white/40 font-serif italic text-2xl">Straight Answers. No Jargon.</span>
            </div>

            <div className="border-t border-white/10">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;

                return (
                  <div 
                    key={faq.id}
                    className="border-b border-white/10 group"
                  >
                    {/* Accordion Header (Clickable) */}
                    <button 
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full py-8 flex items-start gap-6 lg:gap-8 text-left outline-none"
                    >
                      {/* Number */}
                      <span className={`font-serif text-xl lg:text-2xl mt-1 transition-colors duration-500 ${isOpen ? 'text-[#C5A059]' : 'text-white/20'}`}>
                        {faq.id}
                      </span>
                      
                      {/* Question */}
                      <span className={`font-serif text-2xl lg:text-3xl flex-grow transition-colors duration-500 pr-8 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {faq.question}
                      </span>

                      {/* Animated Plus/Minus Icon */}
                      <div className="relative w-6 h-6 flex-shrink-0 mt-2 flex items-center justify-center">
                        <div className="absolute w-full h-[1px] bg-[#C5A059]"></div>
                        <div className={`absolute w-[1px] h-full bg-[#C5A059] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}></div>
                      </div>
                    </button>

                    {/* Accordion Content (Smooth Expand) */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pl-[3.5rem] lg:pl-[4.5rem]">
                            <p className="text-white/60 font-sans text-base leading-relaxed mb-6 max-w-2xl">
                              {faq.answer}
                            </p>
                            
                            {/* The 0-Second Highlight Tag */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                              <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">
                                {faq.highlight}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}