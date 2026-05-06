// src/components/SafeCountries.tsx
import React from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

// ─── Icons ─────────────────────────────────────────────────────────────────
function PlaneIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const countries = [
  {
    code: 'IT',
    name: 'Italy',
    flights: 'Direct flights from Mumbai/Delhi',
    safety: 'Highest European safety',
    food: 'Pure veg & Indian food available',
    universities: 'Top Govt. Universities in Rome & Milan',
  },
  {
    code: 'RU',
    name: 'Russia',
    flights: 'Direct flights from Delhi',
    safety: 'Global superpower campus safety',
    food: 'Indian canteens on campus',
    universities: 'Kazan Federal · Bashkir State Medical',
  },
  {
    code: 'RO',
    name: 'Romania',
    flights: 'European standard travel',
    safety: 'EU Nation — extremely safe',
    food: 'Self-cooking & Indian mess',
    universities: 'Carol Davila · Victor Babes University',
  },
  {
    code: 'PL',
    name: 'Poland',
    flights: 'Connecting flights to Warsaw',
    safety: 'Top EU quality of life',
    food: 'Indian mess available',
    universities: 'Medical Univ. of Warsaw · Jagiellonian',
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    flights: 'Easy connecting flights',
    safety: 'Peaceful EU country',
    food: 'Indian food options',
    universities: 'Sofia Medical · Plovdiv Medical University',
  },
  {
    code: 'LT',
    name: 'Lithuania',
    flights: 'Connecting flights to Vilnius',
    safety: 'High-standard Baltic safety',
    food: 'Self-cooking & Indian mess',
    universities: 'Vilnius Univ. · Lithuanian Univ. of Health Sciences',
  },
];

// ─── Card ──────────────────────────────────────────────────────────────────
function CountryCard({ country }: { country: typeof countries[0] }) {
  return (
    <motion.div
      variants={cardFade}
      whileHover={{ y: -4, boxShadow: '0 20px 48px -12px rgba(15,23,42,0.12)' }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-teal-300/60 transition-colors duration-300 cursor-pointer"
    >
      {/* Country code */}
      <span className="text-3xl font-black text-slate-200 tracking-tight leading-none mb-3 select-none">
        {country.code}
      </span>

      {/* Country name */}
      <h3 className="text-base font-bold text-slate-900 mb-4 leading-tight">
        {country.name}
      </h3>

      {/* Bullet points */}
      <ul className="space-y-2.5 flex-1">
        <li className="flex items-start gap-2.5">
          <PlaneIcon />
          <span className="text-[12px] text-slate-500 font-medium leading-snug">{country.flights}</span>
        </li>
        <li className="flex items-start gap-2.5">
          <SafetyIcon />
          <span className="text-[12px] text-slate-500 font-medium leading-snug">{country.safety}</span>
        </li>
        <li className="flex items-start gap-2.5">
          <FoodIcon />
          <span className="text-[12px] text-slate-500 font-medium leading-snug">{country.food}</span>
        </li>
      </ul>

      {/* Divider */}
      <div className="my-4 border-t border-slate-100" />

      {/* Universities */}
      <p className="text-[12px] font-semibold text-teal-600 group-hover:text-teal-700 leading-snug transition-colors duration-200">
        {country.universities}
      </p>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────
export default function SafeCountries() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900">

      {/* Ambient blurs — matching MBBSHero palette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-14"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[2px] bg-teal-600 rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-700">
              Where We Send Students
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            6 Safe Countries —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
              All NMC Approved
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-md">
            We only work with top government universities. Click any country to learn more.
          </p>
        </motion.div>

        {/* ── Country Grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
