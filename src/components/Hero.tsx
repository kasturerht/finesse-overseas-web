import React, { useState, useEffect, useRef } from 'react';

const destinationOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'ca', label: 'Canada' },
];

const levelOptions = [
  { value: 'ug', label: 'Undergraduate (Bachelors)' },
  { value: 'pg', label: 'Postgraduate (Masters)' },
  { value: 'phd', label: 'Doctorate (PhD)' },
];

const GlassmorphicSelect = ({ options, placeholder, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt: any) => opt.value === value);

  return (
    <div className={`relative ${isOpen ? 'z-[99]' : 'z-10'}`} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/5 border ${isOpen ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10 hover:border-white/30'} rounded-xl px-4 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 group`}
      >
        <span className={`text-lg font-medium transition-colors ${selectedOption ? 'text-white' : 'text-slate-400'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#0d1526]/95 backdrop-blur-xl border border-cyan-500/50 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-[100] animate-slideDown">
          <div className="flex flex-col p-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((opt: any) => (
              <div
                key={opt.value}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 text-sm font-medium ${value === opt.value ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-300 hover:bg-gradient-to-r hover:from-indigo-600/40 hover:to-cyan-600/40 hover:text-white'}`}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [step, setStep] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const [destination, setDestination] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] bg-[#0A0F1C] text-slate-50 overflow-hidden font-sans flex items-center">
      {/* --- Ambient Glowing Effects --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBINDBWMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMEgweDQwVjQwSDB6IiBmaWxsPSJub25lIi8+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAuNWg0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CjxwYXRoIGQ9Ik0uNSAwdiA0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-50 z-0"></div>

      {/* --- Floating Trust Orbs (Parallax) --- */}
      {/* Intentionally left blank as requested to remove visual noise */}

      {/* --- Main 60/40 Split Container --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 w-full">

        {/* LEFT SIDE: 60% Hero Copy & Bento */}
        <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 mb-8 backdrop-blur-md">
            <span className="flex w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase">Premium Admissions Counsel</span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-[5rem] font-extrabold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-lg">
            BEYOND BOUNDARIES. <br className="hidden md:block" />
            <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent">BEYOND LIMITS.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
            Fast-track your global future with unparalleled expertise. We engineer acceptances for the world's most elite universities.
          </p>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="col-span-2 md:col-span-1 bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left text-cyan-400">98%</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Visa Success</p>
            </div>
            <div className="col-span-1 bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left text-blue-400">$50M+</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-2">Scholarships</p>
            </div>
            <div className="col-span-1 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group shadow-[0_4px_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 tracking-tight group-hover:scale-105 transition-transform origin-left">500+</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 hover:text-cyan-300">Universities</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: 40% Premium Eligibility Form */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Glow Behind Form */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-[2rem] blur opacity-20 animate-pulse"></div>

            <div className="relative bg-[#0d1526]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2rem] p-8">
              {/* Form Decoration */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_2px_15px_rgba(6,182,212,0.5)] rounded-t-[2rem]"></div>


              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Check Your Eligibility</h2>
                <p className="text-slate-400 text-sm font-medium">Get a personalized roadmap in under 60 seconds.</p>
              </div>

              <div className="space-y-5">
                {step === 1 && (
                  <div className="relative z-20 animate-fadeIn">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dream Destination</label>
                    <GlassmorphicSelect
                      options={destinationOptions}
                      placeholder="Select country..."
                      value={destination}
                      onChange={setDestination}
                    />

                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-5">Education Level</label>
                    <GlassmorphicSelect
                      options={levelOptions}
                      placeholder="Select level..."
                      value={level}
                      onChange={setLevel}
                    />
                  </div>
                )}

                <button
                  onClick={() => setStep(2)}
                  type="button"
                  className="w-full group relative z-10 flex items-center justify-center gap-2 mt-6 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    Analyze Profile
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
                <p className="text-center text-xs text-slate-500 font-medium">100% Free & Confidential</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- Live Student Activity Ticker --- */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#060A14] py-3 overflow-hidden z-30">
        <div className="flex w-full overflow-hidden items-center group cursor-pointer gap-8">
          {/* Pure CSS Ticker */}
          <div className="flex items-center whitespace-nowrap animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] gap-8">
            {Array(3).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-300">Just now<span className="text-slate-500 mx-2">|</span>Rohan secured admission at <span className="text-white">Stanford University</span></span>
                </div>
                <div className="flex items-center gap-3 px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-300">2 mins ago<span className="text-slate-500 mx-2">|</span>Priya got $20k scholarship at <span className="text-white">Monash University</span></span>
                </div>
                <div className="flex items-center gap-3 px-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-300">5 mins ago<span className="text-slate-500 mx-2">|</span>Amit's <span className="text-white">UK Visa Approved</span> in record time</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Inject custom keyframes for marquee and floating since Tailwind arbitrary blocks can be clunky with multi-step keyframes sometimes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes customFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(-5deg); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8);
        }
      `}} />
    </section>
  );
};

export default Hero;
