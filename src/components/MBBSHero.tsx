// src/components/MBBSHero.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ============================================================================
// DATA: The Dual Pathway Reality (Restored UI Balance & Marketing Hooks)
// ============================================================================
const pathways = [
  {
    id: "india",
    title: "MBBS in India",
    badge: "Domestic Pathway",
    // 🚀 UI FIX: Restored the short, punchy length for the big glowing text
    primaryHighlight: "NEET Based", 
    secondaryHighlight: "Merit & Management Quota",
    features: ["Seat Allotment Strategy", "Exact Cutoff Realities", "Avoid Hidden Traps"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600" 
  },
  {
    id: "abroad",
    title: "MBBS Abroad",
    badge: "International Pathway",
    // 🚀 UI FIX: Big, bold hook instead of price
    primaryHighlight: "Zero Donation", 
    secondaryHighlight: "Govt. Medical Universities",
    features: ["100% Transparent Fees", "FMGE/NExT Passing Ratios", "Safe Campus Audits"],
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1600"
  }
];

export default function MBBSHero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [utms, setUtms] = useState({ source: '', medium: '', campaign: '' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        source: params.get('utm_source') || 'organic',
        medium: params.get('utm_medium') || 'website',
        campaign: params.get('utm_campaign') || 'none'
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "6935ed39-d49c-423b-9afa-93217f6f60d1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'generate_lead',
            'form_name': 'Dual_Pathway_Hero',
            'lead_destination': formData.get('destination'),
            'utm_source': utms.source
          });
        }
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#F8FAFC] selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* --- FRESH AMBIENCE: Soft Medical Teal & Blue Blurs + STETHOSCOPE WATERMARK --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]"></div>
        
        {/* 🚀 SIGNATURE ELEMENT: Giant Faint Stethoscope (The Emotional Hook) */}
        <div className="absolute top-[-5%] left-[-15%] sm:left-[-5%] text-teal-900/[0.04] rotate-[-15deg] mix-blend-multiply">
          <svg className="w-[500px] h-[500px] sm:w-[800px] sm:h-[800px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Minimalist Premium Stethoscope Path */}
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
            <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
            <circle cx="20" cy="10" r="2.5"/>
          </svg>
        </div>
      </div>

      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className="mb-10">
            {/* 🚀 SIGNATURE ELEMENT: Animated ECG Heartbeat Pulse */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 shadow-sm mb-6 relative z-10"
            >
              {/* Medical ECG SVG */}
              <div className="text-teal-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h2.5l2.5-6 3 12 3-6.5L16.5 12H20" className="animate-[pulse_2s_ease-in-out_infinite]" />
                </svg>
              </div>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-teal-800 uppercase flex items-center gap-1.5">
                Medical Admissions <span className="text-teal-400/50">|</span> 2026
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              <span className="sr-only">MBBS Abroad or India 2026 Admissions: </span>
              Your transparent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
                journey to MBBS.
              </span>
            </motion.h1>
            {/* just guaranteed seats.
100% Transparent Fees
Get a legally binding expense sheet and
 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed"
            >
              Whether you choose India or Abroad, we provide clear, data-backed options based on your exact NEET score and budget. No fake promises, just guaranteed seats.
            </motion.p>
          </div>

          {/* 🚀 THE NEW 100X PREMIUM DUAL CARDS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full min-h-[420px]"
          >
            {pathways.map((path) => (
              <div 
                key={path.id}
                className="relative flex-1 hover:flex-[1.2] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl border border-slate-200 group cursor-pointer"
              >
                {/* Background Image */}
                <img src={path.image} alt={path.title} className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s]" />
                
                {/* READABILITY FIX: The Dual Gradient Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 h-[85%] bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col z-10">
                  
                  {/* Top Premium Badge (Replaced Emojis) */}
                  <div className="mb-auto">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-[0.25em] rounded-md shadow-lg">
                      {path.badge}
                    </span>
                  </div>

                  {/* Bottom Text Area (Animated upwards on hover) */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-md">{path.title}</h3>
                    
                    {/* 🚀 UI FIX: Restored the BIG Glowing Typography for Visual Anchor */}
                    <div className="mb-5">
                      <span className="text-[2rem] sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 drop-shadow-lg leading-tight block">
                        {path.primaryHighlight}
                      </span>
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mt-2">
                        {path.secondaryHighlight}
                      </p>
                    </div>

                    {/* Clean SVG Checkmark Features */}
                    <ul className="space-y-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500 border-t border-white/10 pt-5">
                      {path.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-100">
                          <svg className="w-4 h-4 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

          {/* 🛡️ THE BRUTAL HONESTY BADGES */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-slate-200"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <span className="text-teal-600 text-lg">⚠️</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">NEET Compulsory</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <span className="text-teal-600 text-lg">💳</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Direct College Payment</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <span className="text-teal-600 text-lg">🛡️</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Zero Hidden Margins</span>
            </div>
          </motion.div>

        </div>


        {/* RIGHT SIDE: CLEAN & TRUSTED FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100">
            
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Request Admission Blueprint</h2>
              <p className="text-sm text-slate-500 font-medium">Get a legally binding expense sheet and reality-check for your profile.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="utm_source" value={utms.source} />
              <input type="hidden" name="utm_medium" value={utms.medium} />
              <input type="hidden" name="utm_campaign" value={utms.campaign} />
              <input type="hidden" name="subject" value="New Inquiry: India/Abroad Admission" />

              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-600 transition-colors">Student / Parent Name</label>
                <input type="text" name="name" required placeholder="Enter full name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300" />
              </div>

              <div className="space-y-1.5 group">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-600 transition-colors">Target Destination</label>
                <select name="destination" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 appearance-none cursor-pointer">
                  <option value="">Select your preference</option>
                  <option value="India Only">🇮🇳 MBBS in India (Budget: 70L+)</option>
                  <option value="Abroad Only">🌍 MBBS Abroad (Budget: 20L-35L)</option>
                  <option value="Confused / Need Guidance">🤔 Confused (Need Honest Guidance)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-600 transition-colors">Expected NEET Score</label>
                  <input type="number" name="neet_score" required placeholder="Score (0-720)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300" />
                </div>
                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-600 transition-colors">WhatsApp Number</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-slate-500 font-bold">+91</span>
                    <input type="tel" name="whatsapp" required placeholder="00000 00000" pattern="[0-9]{10}" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4 group bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center h-5 mt-0.5">
                  <input id="consent" name="consent" type="checkbox" required className="w-4 h-4 rounded border-slate-300 bg-white text-teal-600 focus:ring-teal-500 cursor-pointer transition-all" />
                </div>
                <label htmlFor="consent" className="text-[10px] text-slate-600 font-medium leading-relaxed cursor-pointer group-hover:text-slate-900">
                  I agree to the <a href="/privacy-policy" target="_blank" className="text-teal-600 font-bold hover:underline">Privacy Policy</a> and consent to receive admission reality-check via WhatsApp.
                </label>
              </div>

              {submitStatus === 'success' && <p className="text-emerald-700 text-xs font-bold text-center bg-emerald-50 border border-emerald-200 py-3 rounded-xl">✅ Request sent! Our director will contact you.</p>}
              {submitStatus === 'error' && <p className="text-red-700 text-xs font-bold text-center bg-red-50 border border-red-200 py-3 rounded-xl">❌ Error sending request. Please try again.</p>}

              <button disabled={isSubmitting} className={`relative w-full group overflow-hidden rounded-xl mt-6 shadow-[0_10px_20px_-10px_rgba(13,148,136,0.4)] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 transition-transform duration-500 group-hover:scale-[1.05]"></div>
                <div className="relative px-6 py-4 flex items-center justify-center gap-3">
                  <span className="text-sm font-bold text-white uppercase tracking-[0.15em]">
                    {isSubmitting ? 'Processing...' : 'Get Free Consulting'}
                  </span>
                  {!isSubmitting && <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                </div>
              </button>
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}