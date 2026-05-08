// src/components/FAQSection.tsx
import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

// ─── FAQ data ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'My child has a low NEET score. Can they still get MBBS admission?',
    a: 'Yes. Government universities abroad typically admit students with 400+ NEET scores, and Indian private colleges offer management quota seats regardless of rank. We evaluate your exact score honestly and give you only the options that are genuinely available — no false promises, no inflated expectations.',
  },
  {
    q: 'Do you charge any hidden fees or donations?',
    a: 'Absolutely not. Our counselling fee is disclosed upfront before you sign anything. All tuition is paid directly to the university — never through us. There are no hidden margins, cash demands, or agent commissions buried anywhere in the fee structure. We will give you a written expense breakdown.',
  },
  {
    q: 'Is MBBS abroad really recognized in India? Will my child be able to practice here?',
    a: 'Yes, provided the university is on the NMC\'s approved list and your child clears the NEXT (National Exit Test) after graduation. We only place students in NMC-approved government universities — 100% legally valid for Indian medical practice.',
  },
  {
    q: 'Is it safe to send my child abroad for MBBS?',
    a: 'Safety is our first filter. We exclusively work with government campuses in stable, law-abiding countries — Italy, Russia, Romania, Poland, Bulgaria, and Lithuania. Our on-ground Indian team is present in each country and reachable 24/7 for any emergency your child may face.',
  },
  {
    q: 'What is the total cost of MBBS abroad, including all expenses?',
    a: 'The all-inclusive cost — tuition, hostel, food, visa, travel, and miscellaneous — typically ranges between ₹20–35 lakhs for the full 6-year course at government universities abroad. Before you commit, we provide a legally binding expense sheet so there are zero surprises.',
  },
  {
    q: 'What is the NEXT exam and how hard is it?',
    a: 'NEXT (National Exit Test) is the mandatory screening exam all MBBS graduates — India or abroad — must clear to practice medicine in India. It tests clinical competence similar to the old FMGE. Pass rates have improved steadily, and strong coaching resources are widely available for returning students.',
  },
];

// ─── Single accordion item ─────────────────────────────────────────────────
function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
          open
            ? 'border-teal-300/60 shadow-[0_8px_32px_-8px_rgba(20,184,166,0.15)]'
            : 'border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] hover:border-slate-300 hover:shadow-[0_4px_16px_-4px_rgba(15,23,42,0.08)]'
        }`}
      >
        {/* Question row */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
          aria-expanded={open}
        >
          <span className="text-[14px] md:text-[15px] font-semibold text-slate-800 leading-snug group-hover:text-slate-900 transition-colors">
            {faq.q}
          </span>

          {/* Teal circle +/- button */}
          <div
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              open
                ? 'bg-teal-600 shadow-[0_4px_12px_-2px_rgba(20,184,166,0.4)]'
                : 'bg-teal-600 group-hover:bg-teal-700'
            }`}
          >
            <m.svg
              aria-hidden="true"
              focusable="false"
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </m.svg>
          </div>
        </button>

        {/* Answer panel */}
        <AnimatePresence initial={false}>
          {open && (
            <m.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-5 border-t border-slate-100">
                <p className="pt-4 text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────
export default function FAQSection() {
  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900">

      {/* Ambient blurs — matching MBBSHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" />
      </div>

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-teal-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-700">
              Common Questions
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3">
            <span className="text-slate-900">Parents Ask, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
              We Answer Honestly
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            No vague answers. If we don't know, we'll say so.
          </p>
        </m.div>

        {/* ── FAQ list ── */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

      </div>
    </section>
    </LazyMotion>
  );
}
