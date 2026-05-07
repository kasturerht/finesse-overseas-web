// src/components/CTABanner.tsx
import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export default function CTABanner() {

  // ─── Custom Fast Scroll & Focus Logic ───
  const handleEnquireClick = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'CTA_Click', cta_text: 'Book Free Counseling' });
    }
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      const nameInput = document.getElementById('fullName') as HTMLInputElement;
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 350);
  };

  return (
    <LazyMotion features={domAnimation} strict>
    <section className="relative overflow-hidden">

      {/* ── Teal gradient background ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft glow orbs for depth */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col items-center text-center">

        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4"
        >
          Ready to Find the Right Path for Your Child?
        </m.h2>

        {/* Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-xl mb-9"
        >
          Book a free, no-pressure counseling session. We'll review your NEET score and budget and give you a clear, honest assessment — in 30 minutes.
        </m.p>

        {/* Buttons */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary — white (UPDATED WITH CLICK LOGIC) */}
          <button 
            onClick={handleEnquireClick}
            className="group cursor-pointer inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 text-teal-700 font-bold text-sm rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300"
          >
            <CalendarIcon />
            Book Free Counseling
          </button>

          {/* Secondary — white outline */}
          <a
            href="tel:+919850069600"
            aria-label="Call Finesse Overseas at +91 98500 69600"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-bold text-sm rounded-xl backdrop-blur-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300"
          >
            <PhoneIcon />
            Call +91 98500 69600
          </a>
        </m.div>

      </div>
    </section>
    </LazyMotion>
  );
}