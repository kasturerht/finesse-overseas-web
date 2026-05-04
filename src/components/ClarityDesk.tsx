// src/components/ClarityDesk.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================================
// DATA: FAQs in Simple, Direct English (Kolhapur/Tier-2 Audience Focus)
// ============================================================================
const faqData = {
  "MBBS in India": [
    {
      q: "My child has a low NEET score. Can we still get admission in India?",
      a: "Yes. Even with a lower score, admission is possible in Deemed Universities and certain Private Colleges. We help you use smart 'Choice Filling' and state counseling rules to legally secure a seat."
    },
    {
      q: "Do you charge any hidden fees or donations?",
      a: "Not at all. We only charge a fixed consulting fee for our service. You will pay the actual college fees directly into the official bank account of the university. There are no middlemen."
    }
  ],
  "MBBS Abroad": [
    {
      q: "Is it safe to send my child abroad? What about Indian food?",
      a: "We only recommend countries (like Italy, Russia, and EU nations) that are 100% safe for Indian students. Every campus we suggest has an Indian Mess and safe self-cooking facilities."
    },
    {
      q: "Can my child practice as a doctor in India after studying abroad?",
      a: "Yes, 100%. We only process admissions for Government universities approved by the NMC (National Medical Commission). After the degree, students pass the NExT exam and practice legally in India."
    }
  ],
  "Process & Trust": [
    {
      q: "Why haven't you mentioned exact college fees on the website?",
      a: "College fees change based on the student's category, NEET score, and budget. Instead of showing confusing numbers online, we provide the exact, official fee structure during our one-on-one meeting."
    },
    {
      q: "How long does the complete admission process take?",
      a: "It depends on the country and counseling rounds. However, from Visa processing to the final college reporting, we stand by your side until the student is safely settled in the college."
    }
  ]
};

// ============================================================================
// COMPONENT: Accordion Item (The Satisfying Dropdown)
// ============================================================================
const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div 
      initial={false}
      className={`border-b border-slate-200/60 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-slate-50/50 rounded-2xl border-transparent px-2' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-6 text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-teal-700' : 'text-slate-800 group-hover:text-teal-600'}`}>
          {question}
        </span>
        
        {/* The Satisfying Morphing Icon */}
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? '#0f766e' : '#f1f5f9' }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-slate-200"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-6 pr-12 text-slate-600 font-medium text-base md:text-lg leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT: Clarity Desk
// ============================================================================
export default function ClarityDesk() {
  const [activeTab, setActiveTab] = useState<keyof typeof faqData>("MBBS in India");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleTabChange = (tab: keyof typeof faqData) => {
    setActiveTab(tab);
    setOpenIndex(0); // Reset to open the first question of the new tab
  };

  return (
    // 🌟 THEME: Clean, Trustworthy White & Slate. Absolute Premium Feel.
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-700 font-extrabold text-[10px] uppercase tracking-widest rounded-full mb-6">
            The Clarity Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Clear your doubts. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              No hidden secrets.
            </span>
          </h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            Honest answers to the most common questions parents ask us before starting the admission process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT: Dynamic Tabs (Pill Navigation) */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as keyof typeof faqData)}
                  className="relative px-6 py-4 text-left rounded-2xl transition-all duration-300 outline-none shrink-0"
                >
                  {/* Active Background Pill (Framer Motion Magic) */}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="active-tab-indicator"
                      className="absolute inset-0 bg-slate-100 border border-slate-200/60 rounded-2xl z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 font-bold text-lg md:text-xl transition-colors duration-300 ${activeTab === tab ? 'text-teal-700' : 'text-slate-500 hover:text-slate-800'}`}>
                    {tab}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Contact Box below tabs (Desktop) */}
            <div className="hidden lg:block mt-12 p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl border border-teal-100/50">
              <h4 className="font-black text-slate-900 text-xl mb-3">Still have questions?</h4>
              <p className="text-slate-600 text-sm font-medium mb-6">Skip the reading and get a direct, honest assessment of your profile.</p>
              <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-md">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* RIGHT: The Fluid Accordion List */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                {faqData[activeTab].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Global CSS for hiding scrollbar on mobile tabs */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}