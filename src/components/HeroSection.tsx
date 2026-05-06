// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    // 🌟 PREMIUM THEME: High-end Light Mode with subtle Dot Grid
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      {/* Glowing Orbs for depth */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-teal-400/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: The Content (EXACT WORDS, 0% CHANGE)           */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/50 border border-teal-200/50 mb-8">
              <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
              <span className="text-[11px] font-black uppercase tracking-widest text-teal-800">
                2026 ADMISSIONS OPEN
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              MBBS <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Abroad</span> or <br className="hidden lg:block"/> 
              India — Made <br className="hidden lg:block"/> Simple for You
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mb-10">
              We give every family a clear, honest picture — based on your NEET score and budget. No pressure, no hidden fees. Just the right path for your child.
            </p>

            {/* Trust Pills (Exact Text) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full max-w-xl">
              {[
                "NMC Approved Colleges Only",
                "Assured Seat Guarantee",
                "India & Abroad Options",
                "Est. 2004 - 22+ Years"
              ].map((pill, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200/60 rounded-xl shadow-sm hover:border-teal-300 hover:shadow-md transition-all">
                  <div className="bg-teal-50 p-1 rounded-md shrink-0">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-tight">{pill}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Book Free Counseling
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-800 font-bold rounded-xl transition-all duration-300">
                Compare Options
              </button>
            </div>
          </motion.div>


          {/* ========================================================= */}
          {/* RIGHT COLUMN: The Lead Form (EXACT WORDS, 0% CHANGE)      */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Form Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 blur-3xl transform scale-95 rounded-[2.5rem]"></div>
            
            {/* The Form Card */}
            <div className="relative bg-white border border-slate-100 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10">
              
              <div className="flex items-center gap-3 mb-8">
                <span className="text-xl">📱</span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Get Your Free Admission Blueprint</h3>
              </div>

              <form className="space-y-6">
                
                {/* Row 1: Name & NEET */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest ml-1">Student / Parent Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rajan Patil" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:bg-white transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest ml-1">NEET Score (Expected)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 450" 
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:bg-white transition-all font-medium text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Destination Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest ml-1">Preferred Destination</label>
                  <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:bg-white transition-all font-medium text-slate-800 appearance-none cursor-pointer">
                    <option value="" disabled selected>Select your preference</option>
                    <option value="india">MBBS in India</option>
                    <option value="abroad">MBBS Abroad</option>
                    <option value="undecided">Not Sure Yet</option>
                  </select>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98XXX XXXXX" 
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 focus:bg-white transition-all font-medium text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-black text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(13,148,136,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(13,148,136,0.6)]">
                  <span className="relative flex items-center gap-2">
                    Get Free Consulting —
                  </span>
                </button>

                {/* Trust Footer */}
                <div className="flex items-start gap-2 justify-center pt-2">
                  <svg className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  <p className="text-xs font-medium text-slate-500">
                    No spam. We only contact you via WhatsApp to discuss your profile.
                  </p>
                </div>

              </form>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}