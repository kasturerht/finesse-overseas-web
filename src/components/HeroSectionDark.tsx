// src/components/HeroSectionDark.tsx
import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const trustStats = [
  {
    icon: (
      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Top Private & Govt. Colleges',
  },
  {
    icon: (
      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Assured Seat Guarantee',
  },
  {
    icon: (
      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    label: 'NMC 2026 Verified',
  },
  {
    icon: (
      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'India + 6 Countries',
  },
  {
    icon: (
      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Est. 2004 · Kolhapur HQ',
  },
];

export default function HeroSectionDark() {

  // ─── Custom Focus Logic for Hero Buttons ───
  const handleHeroCtaClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'CTA_Click', cta_text: 'Book Free Counseling' });
    }
    const formSection = document.getElementById('consultation-form');
    if (formSection && window.innerWidth < 1024) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      const nameInput = document.getElementById('fullName') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, window.innerWidth < 1024 ? 350 : 50);
  };

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative flex flex-col bg-slate-950 overflow-hidden selection:bg-teal-500/20 selection:text-teal-300">

      {/* ── BACKGROUND ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Teal glow — top right */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[800px] h-[800px] rounded-full bg-teal-500/[0.08] blur-[160px] pointer-events-none" />
      {/* Blue glow — bottom left */}
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[130px] pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* LEFT — Copy */}
          <m.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/20 mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.9)] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-teal-400">
                2026 ADMISSIONS OPEN
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.08] tracking-tight mb-6"
            >
              MBBS{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Abroad
              </span>{' '}
              or{' '}
              <br className="hidden lg:block" />
              India — Made{' '}
              <br className="hidden lg:block" />
              Simple for You
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mb-10"
            >
              We give every family a clear, honest picture — based on your NEET score and budget. No
              pressure, no hidden fees. Just the right path for your child.
            </p>

            {/* Trust Pills */}
            <m.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-12 w-full max-w-xl"
            >
              {[
                'NMC Approved Colleges Only',
                'Assured Seat Guarantee',
                'India & Abroad Options',
                'Est. 2004 - 22+ Years',
              ].map((pill, i) => (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700/40 rounded-xl hover:border-teal-500/30 hover:bg-slate-800/50 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <div className="bg-teal-500/10 p-1.5 rounded-md shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-slate-300 leading-tight">{pill}</span>
                </m.div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <button 
                onClick={handleHeroCtaClick}
                className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-slate-100 hover:bg-white text-slate-900 font-bold rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300"
              >
                Book Free Counseling
              </button>
              <button 
                onClick={handleHeroCtaClick}
                className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-xl hover:bg-slate-900/60 hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300"
              >
                Compare Options
              </button>
            </m.div>
          </m.div>

              {/* RIGHT — Lead Form */}
              <m.div
                id="consultation-form" 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative scroll-mt-24"
              >
            {/* Glow halo behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/15 blur-3xl scale-95 rounded-[2.5rem] pointer-events-none" />

            {/* Glassmorphism card */}
            <div className="relative bg-slate-900/70 backdrop-blur-2xl border border-white/[0.06] rounded-[2rem] shadow-[0_32px_64px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] p-8 md:p-10">

              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl" aria-hidden="true">📱</span>
                <h2 className="text-2xl font-black text-white tracking-tight">
                  Get Your Free Admission Blueprint
                </h2>
              </div>

              {/* Activated Form using FormSubmit.co pattern from germany-admission.astro  */}
              <form 
                action="https://formsubmit.co/finesseoverseaseducation@gmail.com" 
                method="POST" 
                className="space-y-5"
                onSubmit={(e) => {
                  if (typeof window !== 'undefined') {
                    const formData = new FormData(e.currentTarget);
                    const neetScore = Number(formData.get('Expected_NEET_Score')) || 0;

                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      'event': 'Generate_Lead',
                      'lead_type': 'mbbs_blueprint',
                      'destination': formData.get('Preferred_Destination'),
                      'neet_score_bucket': neetScore >= 400 ? 'High' : 'Low',
                      'user_data': {
                        'phone_number': formData.get('WhatsApp_Number'),
                        'address': {
                           'first_name': formData.get('Full_Name')
                        }
                      }
                    });
                  }
                }}
              >
                {/* FormSubmit.co configurations  */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Lead: MBBS Admission Blueprint" />
                <input type="hidden" name="_next" value="https://www.finesseoverseas.com/thank-you" />

                {/* Row 1: Name & NEET */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <label htmlFor="fullName" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400">
                      Student / Parent Name
                    </label>
                    <input
                      id="fullName"
                      name="Full_Name"
                      type="text"
                      required
                      placeholder="e.g. Rajan Patil"
                      autoComplete="name"
                      className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label htmlFor="neetScore" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400">
                      NEET Score (Expected)
                    </label>
                    <input
                      id="neetScore"
                      name="Expected_NEET_Score"
                      type="number"
                      required
                      placeholder="e.g. 450"
                      className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                    />
                  </div>
                </div>

                {/* Preferred Destination */}
                <div className="space-y-2 group">
                  <label htmlFor="destination" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <select
                      id="destination"
                      name="Preferred_Destination"
                      required
                      defaultValue=""
                      className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-400 appearance-none cursor-pointer text-sm"
                    >
                      <option value="" disabled>
                        Select your preference
                      </option>
                      <option value="india" className="bg-slate-900 text-slate-200">
                        MBBS in India
                      </option>
                      <option value="abroad" className="bg-slate-900 text-slate-200">
                        MBBS Abroad
                      </option>
                      <option value="undecided" className="bg-slate-900 text-slate-200">
                        Not Sure Yet
                      </option>
                    </select>
                    <svg
                      aria-hidden="true"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2 group">
                  <label htmlFor="whatsapp" className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400">
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="WhatsApp_Number"
                    type="tel"
                    required
                    pattern="[0-9]*"
                    autoComplete="tel"
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-black text-base rounded-xl overflow-hidden transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(20,184,166,0.45)] hover:shadow-[0_16px_40px_-8px_rgba(20,184,166,0.6)] hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                  <span className="relative flex items-center gap-2">
                    Get Free Consulting —
                  </span>
                </button>

                {/* Privacy note */}
                <div className="flex items-start gap-2 justify-center pt-1">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-slate-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs font-medium text-slate-500 text-center">
                    No spam. We only contact you via WhatsApp to discuss your profile.
                  </p>
                </div>

              </form>
            </div>
          </m.div>

        </div>
      </div>

      {/* ── TRUST DATA GRID ── */}
      <m.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 border-t border-slate-800/60 bg-slate-900/50 backdrop-blur-md"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {trustStats.map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`flex items-center gap-3 px-5 py-5 group hover:bg-white/[0.02] transition-colors duration-300 ${
                  i < trustStats.length - 1
                    ? 'border-r border-slate-800/60'
                    : ''
                } ${
                  i === 3
                    ? 'col-span-2 sm:col-span-1 border-r-0 sm:border-r border-t border-slate-800/60 sm:border-t-0'
                    : ''
                } ${
                  i === 4
                    ? 'col-span-2 sm:col-span-3 lg:col-span-1 border-t border-slate-800/60 sm:border-t-0 lg:border-r-0'
                    : ''
                }`}
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-300 leading-snug transition-colors duration-300">
                  {item.label}
                </span>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>

    </section>
    </LazyMotion>
  );
}