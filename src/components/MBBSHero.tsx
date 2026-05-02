// src/components/MBBSHero.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 🎓 Trust Slider Data: Aspiration & Security
const trustSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1600",
    title: "1000+ Students Living Their Dream.",
    subtitle: "Join the largest community of successful medical graduates."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1600",
    title: "A-Grade Government Universities.",
    subtitle: "World-class infrastructure with 100% English medium programs."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1600",
    title: "Zero Hidden Costs. Full Transparency.",
    subtitle: "What we commit is exactly what you pay. Complete clarity from Day 1."
  }
];

export default function MBBSHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 1. UTM Parameters Capture Logic
  const [utms, setUtms] = useState({ source: '', medium: '', campaign: '' });

  useEffect(() => {
    // Auto-play Slider Logic
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trustSlides.length);
    }, 5000);

    // Capture UTMs from URL
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setUtms({
        source: params.get('utm_source') || 'organic',
        medium: params.get('utm_medium') || 'website',
        campaign: params.get('utm_campaign') || 'none'
      });
    }

    return () => clearInterval(timer);
  }, []);

  // 2. Form Submission & Tracking Logic
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 🔴 Web3Forms Access Key
    formData.append("access_key", "6935ed39-d49c-423b-9afa-93217f6f60d1"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        
        // 🚀 GTM DataLayer Push (For Google Ads Conversion Tracking)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'generate_lead',
            'form_name': 'MBBS_Hero_Form',
            'lead_budget': formData.get('budget'),
            'utm_source': utms.source
          });
        }
        
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000); // Reset message after 5 sec
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-24 overflow-hidden bg-[#030712] selection:bg-teal-500/30">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] rounded-full bg-teal-900/15 blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-8">
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-md shadow-[0_0_20px_rgba(20,184,166,0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-widest text-teal-400 uppercase">
                Premium Medical Admissions
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.15] tracking-tight"
            >
              {/* 🚀 SEO FIX: Google Bot साठी लपवलेला Main Keyword */}
              <span className="sr-only">MBBS Abroad 2026 Admissions & Top Medical Universities: </span>
              
              <span className="block mb-2 text-slate-100">Make Your Child a Doctor.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500 pb-2 relative">
                While Protecting Your Savings.
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-clip-text text-transparent animate-[shimmer_3s_infinite] bg-[length:200%_auto]"></span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 max-w-xl font-medium leading-relaxed"
            >
              Secure your child's medical career in strictly NMC-approved, highly ranked Government Universities abroad. Safe, affordable, and 100% transparent.
            </motion.p>
          </div>

          {/* SLIDER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-2xl h-[280px] sm:h-[350px] rounded-3xl overflow-hidden group shadow-[0_20px_60px_-15px_rgba(20,184,166,0.2)]"
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 z-30 pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img src={trustSlides[currentSlide].image} alt={trustSlides[currentSlide].title} className="w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight drop-shadow-lg">{trustSlides[currentSlide].title}</h3>
                  <p className="text-sm text-slate-300 font-medium max-w-md drop-shadow-md">{trustSlides[currentSlide].subtitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-6 left-6 right-6 flex gap-2 z-20">
              {trustSlides.map((_, idx) => (
                <div key={idx} className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
                  {idx === currentSlide && (
                    <motion.div layoutId="progress" className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 w-full origin-left shadow-[0_0_10px_rgba(20,184,166,0.8)]" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: "linear" }} />
                  )}
                  {idx < currentSlide && <div className="h-full bg-teal-500/50 w-full" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* BADGES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-3 mt-2"
          >
            {["NMC 2026 Guidelines Followed", "Direct University Tie-ups", "NExT Exam Coaching Support"].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 group cursor-default">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/30 group-hover:border-teal-400 group-hover:bg-teal-500/20 transition-all">
                  <svg className="w-3 h-3 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-200 transition-colors">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>


        {/* RIGHT SIDE: FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative mt-8 lg:mt-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl rounded-[3rem]"></div>
          
          <div className="relative p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            <div className="bg-[#080d1a]/95 backdrop-blur-3xl rounded-[2rem] p-8 sm:p-10 border border-white/[0.05]">
              
              <div className="mb-8 space-y-2 text-center sm:text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-widest rounded border border-teal-500/20 mb-2">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Free Expert Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Download MBBS RoadMap</h2>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Check your eligibility & get a personalized budget plan tailored for your profile.</p>
              </div>

              {/* 🚀 THE LIVE TRACKING FORM */}
              <form className="space-y-5" onSubmit={handleSubmit}>
                
                {/* Hidden Tracking Fields */}
                <input type="hidden" name="utm_source" value={utms.source} />
                <input type="hidden" name="utm_medium" value={utms.medium} />
                <input type="hidden" name="utm_campaign" value={utms.campaign} />
                <input type="hidden" name="subject" value="New Lead: MBBS Abroad Roadmap" />

                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-400 transition-colors">Student / Parent Name</label>
                  <input type="text" name="name" required placeholder="Enter full name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-teal-500/50 outline-none transition-all duration-300 shadow-inner" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 group">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-400 transition-colors">NEET Score</label>
                    <input type="number" name="neet_score" required placeholder="Expected Score" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-teal-500/50 outline-none transition-all duration-300" />
                  </div>
                  <div className="space-y-1.5 group">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-400 transition-colors">Target Budget</label>
                    <select name="budget" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-slate-300 focus:bg-white/10 focus:border-teal-500/50 outline-none transition-all duration-300 appearance-none cursor-pointer">
                      <option value="" className="bg-slate-900">Select Range</option>
                      <option value="20 - 25 Lakhs" className="bg-slate-900">20 - 25 Lakhs</option>
                      <option value="25 - 35 Lakhs" className="bg-slate-900">25 - 35 Lakhs</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 group">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1 group-focus-within:text-teal-400 transition-colors">WhatsApp Number</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-5 text-slate-400 font-medium">+91</span>
                    <input type="tel" name="whatsapp" required placeholder="00000 00000" pattern="[0-9]{10}" title="Enter 10 digit number" className="w-full bg-white/5 border border-white/10 rounded-xl pl-14 pr-5 py-4 text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-teal-500/50 outline-none transition-all duration-300" />
                  </div>
                </div>

                {/* 🚀 POLICY FIX: Explicit Consent Checkbox for Google Ads Data Collection */}
                <div className="flex items-start gap-3 mt-4 group">
                  <div className="flex items-center h-5 mt-0.5">
                    <input 
                      id="consent" 
                      name="consent" 
                      type="checkbox" 
                      required 
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-[#080d1a] cursor-pointer transition-all appearance-none checked:bg-teal-500 checked:border-teal-500 relative before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjIgNC4yTDUuOCA5LjRMMy44IDcuNEwyLjIgOS40TDkuNCAxNEwxMy44IDUuNkwxMi4yIDQuMloiIGZpbGw9IndoaXRlIi8+PC9zdmc+')] before:bg-no-repeat before:bg-center checked:before:block before:hidden"
                    />
                  </div>
                  <label htmlFor="consent" className="text-[10px] text-slate-400 font-medium leading-relaxed cursor-pointer group-hover:text-slate-300 transition-colors">
                    I agree to the <a href="/privacy-policy" target="_blank" className="text-teal-400 hover:text-teal-300 underline decoration-teal-400/30 underline-offset-2">Privacy Policy</a> and consent to receive admission roadmap and exact budget details via WhatsApp.
                  </label>
                </div>

                {/* Form Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-teal-400 text-xs font-bold text-center">✅ Request sent! We will contact you shortly.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-xs font-bold text-center">❌ Something went wrong. Please try again.</p>
                )}

                <button disabled={isSubmitting} className={`relative w-full group overflow-hidden rounded-xl mt-6 shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 transition-transform duration-500 group-hover:scale-[1.05]"></div>
                  <div className="relative px-6 py-4 flex items-center justify-center gap-2">
                    <span className="text-sm font-black text-slate-950 uppercase tracking-widest">
                      {isSubmitting ? 'Sending...' : 'Get Free Counseling'}
                    </span>
                    {!isSubmitting && <svg className="w-5 h-5 text-slate-950 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                  </div>
                </button>

                <p className="text-[10px] text-center text-slate-500 font-medium tracking-wide pt-3">
                  No Spam. Only 100% genuine guidance.
                </p>
              </form>

            </div>
          </div>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}} />
    </section>
  );
}