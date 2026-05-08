// src/components/NMCRules.tsx
import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// ─── Animation variants ────────────────────────────────────────────────────
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Icons ─────────────────────────────────────────────────────────────────
function CalendarIcon() {
  return (
    <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function GraduateIcon() {
  return (
    <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function MedicalIcon() {
  return (
    <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

// ─── Card data ─────────────────────────────────────────────────────────────
const rules = [
  {
    icon: <CalendarIcon />,
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    title: '54 + 12 Month Rule',
    body: (
      <>
        The MBBS course must be exactly 54 months long, followed by a mandatory 12-month internship in the same foreign country.
      </>
    ),
  },
  {
    icon: <GraduateIcon />,
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    title: '100% English Medium',
    body: (
      <>
        The entire medical syllabus must be taught in English. Bilingual (two-language) courses are{' '}
        <span className="text-red-400 font-bold">NOT accepted</span> by NMC.
      </>
    ),
  },
  {
    icon: <MedicalIcon />,
    iconBg: 'bg-indigo-500/10 border-indigo-500/20',
    title: 'NEXT Exam After Graduation',
    body: (
      <>
        All MBBS graduates — India or abroad — must clear the NEXT (National Exit Test) to practice medicine in India.
      </>
    ),
  },
  {
    icon: <WarningIcon />,
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    title: 'NEET Score is Compulsory',
    body: (
      <>
        A valid NEET score is mandatory for admission abroad. Minimum 50% in Class 12 Physics, Chemistry, and Biology is required.
      </>
    ),
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export default function NMCRules() {
  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden selection:bg-amber-500/20 selection:text-amber-200">

      {/* ── Background grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute top-0 left-0 -ml-48 -mt-48 w-[600px] h-[600px] rounded-full bg-amber-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-48 -mb-48 w-[500px] h-[500px] rounded-full bg-teal-500/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <m.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-amber-500 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-500">
              Official Rules
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
            <span className="text-white">NMC 2026 — </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              What Every Student Must Know
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed max-w-lg">
            India's National Medical Commission has strict rules. We physically verify every college to protect your investment.
          </p>
        </m.div>

        {/* ── Cards ── */}
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {rules.map((rule, i) => (
            <m.div
              key={i}
              variants={cardFade}
              whileHover={{ y: -4, borderColor: 'rgba(251,191,36,0.25)' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col bg-slate-900/60 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-slate-900/80 transition-colors duration-300"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 shrink-0 ${rule.iconBg}`}>
                {rule.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-amber-400 leading-snug mb-3">
                {rule.title}
              </h3>

              {/* Body */}
              <p className="text-[13px] text-slate-400 leading-relaxed font-medium">
                {rule.body}
              </p>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
    </LazyMotion>
  );
}
