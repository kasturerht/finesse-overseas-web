// src/components/DetailedComparison.tsx
import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

const rowFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

type Cell =
  | { type: 'stack'; highlight: string; sub: string }
  | { type: 'inline'; highlight: string; rest: string };

interface Row {
  parameter: string;
  india: Cell;
  abroad: Cell;
}

const rows: Row[] = [
  {
    parameter: 'Budget Range',
    india: {
      type: 'stack',
      highlight: '₹60 Lakh – ₹1.2 Cr',
      sub: 'Top private & deemed colleges',
    },
    abroad: {
      type: 'stack',
      highlight: '₹20 – ₹35 Lakh Total',
      sub: 'Govt. universities abroad',
    },
  },
  {
    parameter: 'Seat Availability',
    india: {
      type: 'inline',
      highlight: 'Assured seats available',
      rest: '— we secure admission regardless of counselling rounds',
    },
    abroad: {
      type: 'inline',
      highlight: 'Merit-based entry',
      rest: '— NEET qualification sufficient, no high score needed',
    },
  },
  {
    parameter: 'College Quality',
    india: {
      type: 'inline',
      highlight: 'Reputed private & deemed universities with',
      rest: 'modern infrastructure & hospitals',
    },
    abroad: {
      type: 'inline',
      highlight: 'Government universities',
      rest: '— large campuses subsidised by foreign governments',
    },
  },
  {
    parameter: 'Hospital Exposure',
    india: {
      type: 'inline',
      highlight: 'Rich Indian patient base',
      rest: '— excellent for those planning to practice in India',
    },
    abroad: {
      type: 'inline',
      highlight: '3000+ bed hospitals',
      rest: '— global patient diversity, international clinical exposure',
    },
  },
  {
    parameter: 'Comfort & Lifestyle',
    india: {
      type: 'inline',
      highlight: 'Home country advantage',
      rest: '— familiar food, family nearby, Indian environment',
    },
    abroad: {
      type: 'inline',
      highlight: 'Indian communities on campus',
      rest: '— canteens, hostels, support networks in most cities',
    },
  },
  {
    parameter: 'Language of Study',
    india: {
      type: 'inline',
      highlight: 'Full English medium',
      rest: '— no language barrier at all',
    },
    abroad: {
      type: 'inline',
      highlight: '100% English syllabus',
      rest: '• basic local language for patient interaction only',
    },
  },
  {
    parameter: 'Licensing (India Practice)',
    india: {
      type: 'inline',
      highlight: 'NEXT exam',
      rest: '— clear it once and you can practice anywhere in India',
    },
    abroad: {
      type: 'inline',
      highlight: 'NEXT exam',
      rest: '— same pathway, same opportunity to practice in India',
    },
  },
  {
    parameter: 'Career Value',
    india: {
      type: 'inline',
      highlight: 'Well-known Indian institution name',
      rest: '— trusted by local employers & hospitals',
    },
    abroad: {
      type: 'inline',
      highlight: 'International degree',
      rest: '— opens doors for practice globally, not just India',
    },
  },
];

function Cell({ cell }: { cell: Cell }) {
  if (cell.type === 'stack') {
    return (
      <div>
        <p className="text-[15px] font-black text-teal-600 leading-tight tracking-tight">
          {cell.highlight}
        </p>
        <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">{cell.sub}</p>
      </div>
    );
  }
  return (
    <p className="text-[13px] text-slate-600 leading-snug font-medium">
      <span className="font-bold text-teal-600">{cell.highlight}</span>
      {' '}
      <span>{cell.rest}</span>
    </p>
  );
}

export default function DetailedComparison() {
  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900">

      {/* Ambient blurs — matching MBBSHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-teal-100/50 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-100/40 blur-[110px]" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <h2 className="sr-only">MBBS in India vs Abroad — Side-by-Side Comparison</h2>

        {/* ── Badge ── */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-7 h-[2px] bg-teal-600 rounded-full" />
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-700">
            Detailed Comparison
          </span>
        </m.div>

        {/* ── Table Card ── */}
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.09)] bg-white"
        >

          {/* Header */}
          <div className="grid grid-cols-[180px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] bg-slate-900">
            <div className="px-5 py-4 border-r border-slate-700/50 flex items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Parameter
              </span>
            </div>

            <div className="px-5 py-4 border-r border-slate-700/50 flex items-center gap-2.5">
              <span className="text-base leading-none">🇮🇳</span>
              <p className="text-[11px] font-black uppercase tracking-widest leading-none">
                <span className="text-white">MBBS </span>
                <span className="text-teal-400">IN INDIA</span>
              </p>
            </div>

            <div className="px-5 py-4 flex items-center gap-2.5">
              <span className="text-base leading-none">🌍</span>
              <p className="text-[11px] font-black uppercase tracking-widest leading-none">
                <span className="text-white">MBBS </span>
                <span className="text-teal-400">ABROAD</span>
              </p>
            </div>
          </div>

          {/* Rows */}
          <m.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {rows.map((row, i) => (
              <m.div
                key={i}
                variants={rowFade}
                className={`grid grid-cols-[180px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] border-t border-slate-100 ${
                  i % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'
                }`}
              >
                {/* Parameter */}
                <div className="px-5 py-5 border-r border-slate-100 flex items-start">
                  <span className="text-[13px] font-bold text-slate-700 leading-snug">
                    {row.parameter}
                  </span>
                </div>

                {/* India cell */}
                <div className="px-5 py-5 border-r border-slate-100 flex items-start">
                  <Cell cell={row.india} />
                </div>

                {/* Abroad cell */}
                <div className="px-5 py-5 flex items-start">
                  <Cell cell={row.abroad} />
                </div>
              </m.div>
            ))}
          </m.div>

          {/* ── Footer Banner ── */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="border-t border-slate-200 bg-teal-50/50 px-6 py-6 flex items-start gap-5"
          >
            {/* Icon */}
            <div className="shrink-0 mt-0.5 w-9 h-9 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shadow-sm">
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-4.5 h-4.5 w-[18px] h-[18px] text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1.5 leading-snug">
                Worried about counselling rounds or cut-offs?
              </p>
              <p className="text-[12px] text-slate-600 leading-relaxed font-medium max-w-2xl">
                Many families come to us after missing state or central counselling rounds. We help
                secure direct admission into recognised private colleges through institutional quota
                channels — so your child doesn't lose a year.{' '}
                <a
                  href="/contact"
                  className="text-teal-600 font-bold hover:text-teal-700 hover:underline underline-offset-2 inline-flex items-center gap-0.5 transition-colors"
                >
                  Talk to us confidentially →
                </a>
              </p>
            </div>
          </m.div>

        </m.div>
      </div>
    </section>
    </LazyMotion>
  );
}
