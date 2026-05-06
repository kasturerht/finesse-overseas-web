// src/components/AdmissionProcess.tsx
import React from 'react';
import { motion } from 'framer-motion';

// ─── Animation variants ────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Steps data ────────────────────────────────────────────────────────────
const steps = [
  {
    n: '1',
    title: 'Free Profile Audit',
    body: 'We evaluate your NEET Score and budget honestly. We paint a clear picture of your realistic options in India and abroad.',
    tags: ['NEET Analysis', 'Budget Mapping', 'One Day'],
  },
  {
    n: '2',
    title: 'College Selection & Admission Letter',
    body: 'We send your Official College Admission Letter from the university, not just an offer. We map the pricing strategy, NMC eligibility, and backup options for you.',
    tags: ['Admission Letter', 'Fee Strategy'],
  },
  {
    n: '3',
    title: 'Documents, Apostille & Visa',
    body: 'Our legal team handles all paperwork — from document attestation, apostille to guaranteed visa processing. You don\'t need to worry about a single step.',
    tags: ['Apostille', 'Visa', 'Legal Help'],
  },
  {
    n: '4',
    title: 'Travel, Hostel & Settling In',
    body: 'Our international students are met by our on-the-ground team on their first trip. A familiar Indian team guides you to the hostel and helps you settle in.',
    tags: ['Transport', 'Hostel Booking'],
  },
];

// ─── DO / DON'T data ───────────────────────────────────────────────────────
const doItems = [
  'Unbiased college selection based on your NEET score and budget',
  'Strategy: Assured Direct — skip counselling round',
  '100% Guaranteed Admission (either from the college or university)',
  'Complete documentation & visa processing (for abroad)',
  'Post-arrival support & care (available for any doubt)',
];

const dontItems = [
  'We do NOT promise to give academic coaching after admission',
  'We do NOT guarantee you pass NEXT/FMGE after admission',
  'We do NOT charge separate hidden fees through the process',
  'We do NOT recommend colleges we haven\'t personally verified',
];

// ─── Sub-components ────────────────────────────────────────────────────────
function StepTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
      {label}
    </span>
  );
}

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div variants={fadeUp} className="flex gap-5 group">
      {/* Number + connector line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-teal-600/10 border-2 border-teal-600/30 flex items-center justify-center shrink-0 group-hover:border-teal-500 group-hover:bg-teal-600/20 transition-all duration-300">
          <span className="text-xs font-black text-teal-600">{step.n}</span>
        </div>
        {index < steps.length - 1 && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-teal-200 to-transparent min-h-[32px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <h3 className="text-[15px] font-bold text-slate-900 mb-1.5 leading-snug">{step.title}</h3>
        <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-3">{step.body}</p>
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <StepTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function AdmissionProcess() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900">

      {/* Ambient blurs — matching MBBSHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* ══════════════════════════════════════════════
              LEFT — 4-Step Process
          ══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[2px] bg-teal-600 rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-700">
                How We Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              Our 4-Step Admission
              <br />Process
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-md">
              Transparent from Day 1. You will always know exactly what is happening and why.
            </p>

            {/* Steps */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {steps.map((step, i) => (
                <Step key={step.n} step={step} index={i} />
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════════════════════
              RIGHT — DO / DON'T panels
          ══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-6 h-[2px] bg-teal-600 rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-700">
                Our Responsibilities
              </span>
            </div>

            {/* ── What We DO ── */}
            <div className="rounded-2xl overflow-hidden border border-teal-200/60 shadow-[0_8px_32px_-8px_rgba(20,184,166,0.12)]">
              {/* Panel header */}
              <div className="flex items-center gap-2.5 px-5 py-4 bg-teal-600">
                <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-black uppercase tracking-widest text-white">What We DO</span>
              </div>

              {/* Items */}
              <div className="bg-white px-5 py-4 space-y-3">
                {doItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[12px] text-slate-600 font-medium leading-snug">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── What We DON'T Do ── */}
            <div className="rounded-2xl overflow-hidden border border-red-200/60 shadow-[0_8px_32px_-8px_rgba(239,68,68,0.08)]">
              {/* Panel header */}
              <div className="flex items-center gap-2.5 px-5 py-4 bg-red-500">
                <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-xs font-black uppercase tracking-widest text-white">What We DON'T Do</span>
              </div>

              {/* Items */}
              <div className="bg-white px-5 py-4 space-y-3">
                {dontItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[12px] text-slate-600 font-medium leading-snug">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
