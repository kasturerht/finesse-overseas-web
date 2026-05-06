// src/components/BothPathsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const indiaPoints = [
  'Study close to home — family, language & culture stay familiar',
  'Recognised private & deemed universities with strong infrastructure',
  'Assured seat available — no waiting, no counselling round uncertainty',
  'Excellent Indian patient flow — ideal for those planning to practice locally',
  'Multiple state options — Maharashtra, Karnataka, All India Deemed',
  'No language barrier — English medium throughout',
];

const abroadPoints = [
  'Government universities — massive campuses, world-class infrastructure',
  'Significantly lower total investment compared to Indian private colleges',
  'Fixed fee structure — know your full cost on Day 1',
  '3000+ bed teaching hospitals — diverse global patient experience',
  'Merit-based entry — NEET qualification is sufficient, no high-score pressure',
  'International exposure — adds great value to your medical career',
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function BothPathsSection() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-20 lg:py-28 selection:bg-teal-500/20 selection:text-teal-900">

      {/* Background effects */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-0 -mr-60 -mt-60 w-[700px] h-[700px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-60 -mb-60 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 lg:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-5">
            Both Paths Lead to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
              Your MBBS Degree
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether your child wants to study in India or Abroad — we have the right seat, at the right college, within your budget. Let us help you pick the best.
          </p>
        </motion.div>

        {/* ── Two Column Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* ── LEFT: MBBS in India ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col rounded-[1.75rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,23,42,0.22)]"
          >
            {/* Glow halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/15 to-blue-500/10 blur-2xl scale-105 pointer-events-none rounded-[1.75rem]" />

            {/* Card body — dark slate */}
            <div className="relative bg-slate-900/95 backdrop-blur-xl border border-white/[0.06] rounded-[1.75rem] flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">

              {/* Card header */}
              <div className="px-7 pt-7 pb-6 border-b border-slate-800/60">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-black text-white tracking-tight leading-tight">MBBS in India</h3>
                  <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black uppercase tracking-widest text-teal-400">
                    Assured Seat
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Private &amp; Deemed Colleges
                </p>
              </div>

              {/* Why section */}
              <div className="px-7 pt-6 pb-5 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 mb-5">
                  WHY STUDENTS CHOOSE INDIA
                </p>

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {indiaPoints.map((point, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-teal-400" />
                      </div>
                      <span className="text-sm text-slate-300 leading-snug font-medium">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Best-for callout */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-teal-500/[0.08] border border-teal-500/20"
                >
                  <StarIcon className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-teal-300 leading-snug">
                    Best for families who prefer India, any NEET score and want a guaranteed admission without risking an international move
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <button className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(20,184,166,0.45)] hover:shadow-[0_12px_32px_-6px_rgba(20,184,166,0.6)] hover:-translate-y-0.5">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span className="relative">Enquire for India Seat →</span>
                </button>
              </div>

            </div>
          </motion.div>

          {/* ── RIGHT: MBBS Abroad ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col rounded-[1.75rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)]"
          >
            {/* Glow halo */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-300/10 blur-2xl scale-105 pointer-events-none rounded-[1.75rem]" />

            {/* Card body — light */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[1.75rem] flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">

              {/* Card header */}
              <div className="px-7 pt-7 pb-6 border-b border-slate-100">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">MBBS Abroad</h3>
                  <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-black uppercase tracking-widest text-amber-700">
                    NMC Approved
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Govt. Universities · 4 Countries
                </p>
              </div>

              {/* Why section */}
              <div className="px-7 pt-6 pb-5 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-5">
                  WHY STUDENTS CHOOSE ABROAD
                </p>

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {abroadPoints.map((point, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-amber-600" />
                      </div>
                      <span className="text-sm text-slate-700 leading-snug font-medium">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Best-for callout */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200"
                >
                  <StarIcon className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-amber-800 leading-snug">
                    Best for: Budget-conscious families who want a recognised degree, lower NEET scores, and are open to an international experience
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <button className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_-6px_rgba(245,158,11,0.55)] hover:-translate-y-0.5">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  <span className="relative">Enquire for Abroad Seat →</span>
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
