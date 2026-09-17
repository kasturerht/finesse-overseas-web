import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface HeroLeadModalProps {
  accessKey?: string;
}

export default function HeroLeadModal({ accessKey = '6935ed39-d49c-423b-9afa-93217f6f60d1' }: HeroLeadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('germany');
  const [qualification, setQualification] = useState('bachelors');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSubmitting]);

  // Scroll lock with zero layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Honeypot validation
    const botCheck = (e.currentTarget.elements.namedItem('bot_field') as HTMLInputElement)?.value;
    if (botCheck && botCheck.trim() !== '') {
      setIsSubmitting(false);
      setIsSuccess(true);
      return;
    }

    // GTM Lead Event
    try {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          lead_form_location: 'hero_human_modal',
          lead_target_country: destination,
          lead_education_level: qualification,
        });
      }
    } catch (err) {
      console.warn('GTM tracking notice:', err);
    }

    const payload = {
      access_key: accessKey,
      subject: `New Counseling Request: ${name} (${destination.toUpperCase()})`,
      from_name: 'Finesse Website Inquiry',
      name,
      phone: `+91${phone}`,
      destination: destination === 'germany' 
        ? 'Germany (Zero Tuition Public Universities)' 
        : destination === 'italy' 
        ? 'Italy (100% Scholarship DSU)' 
        : destination === 'mbbs' 
        ? 'European MBBS (NMC Compliant)' 
        : 'Austria / Other Europe',
      qualification: qualification === '12th' 
        ? '12th Standard Graduate' 
        : qualification === 'bachelors' 
        ? "Bachelor's Degree Holder" 
        : "Master's Degree / Working Professional",
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.status === 200 || data.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
      } else {
        setIsSubmitting(false);
        setErrorMessage('Submission encountered an issue. Please connect directly via WhatsApp.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setIsSubmitting(false);
      setErrorMessage('Network issue detected. Please connect directly via WhatsApp.');
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setIsOpen(false);
  };

  const modalContent = isOpen ? (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Soft Warm Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => !isSubmitting && setIsOpen(false)}
      />

      {/* Clean, Reassuring Card */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-700/70 bg-[#0B1120] text-slate-100 shadow-2xl transition-all duration-300">
        
        {/* Subtle Top Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-600" />

        {/* Close Button */}
        {!isSubmitting && (
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close dialog"
            className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight mb-2 font-jakarta">
                धन्यवाद, {name}!
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto mb-6">
                Your profile details have been received. Mr. Jayant Patil and our counseling team in Rajarampuri, Kolhapur will review your academic options and connect with you on WhatsApp shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/919850069600?text=${encodeURIComponent(`Hello Finesse Team! 👋 I just submitted my details for ${name} (${destination.toUpperCase()}). Looking forward to speaking with a mentor.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm transition-all shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-white text-xs font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 text-left">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-2">
                  <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
                  <span>Personalized Academic Guidance</span>
                </div>
                <h3 id="modal-headline" className="text-2xl font-bold text-white tracking-tight font-jakarta">
                  Check Your University Eligibility
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Share a few quick details. Our mentors will evaluate your profile against official German, Italian, and European criteria with zero bias.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Honeypot */}
                <input 
                  type="text" 
                  name="bot_field" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  className="hidden" 
                  aria-hidden="true" 
                />

                {/* Name */}
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-medium text-slate-300 mb-1">
                    Student or Parent Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="lead-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp Number <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-semibold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="lead-phone"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="10-digit mobile number"
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Destination Selector */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    What are you exploring?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'germany', label: 'Germany', sub: 'Zero Tuition Public Unis' },
                      { id: 'italy', label: 'Italy', sub: '100% Scholarship + Stipend' },
                      { id: 'mbbs', label: 'MBBS Abroad', sub: 'NMC 2021 Compliant' },
                      { id: 'austria', label: 'Austria / Europe', sub: 'Zero Blocked Account' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setDestination(item.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          destination === item.id
                            ? 'bg-teal-500/20 border-teal-400 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-xs font-semibold">{item.label}</div>
                        <div className="text-[10px] text-teal-300/80 mt-0.5">{item.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Qualification Selector */}
                <div>
                  <label htmlFor="lead-qual" className="block text-xs font-medium text-slate-300 mb-1">
                    Current Qualification
                  </label>
                  <select
                    id="lead-qual"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                  >
                    <option value="bachelors">Bachelor's Degree (Planning for Master's)</option>
                    <option value="12th">12th Standard / College Student (Planning for Bachelor's or MBBS)</option>
                    <option value="masters">Completed Master's / Working Professional</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || phone.length < 10}
                  className="w-full mt-2 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>कृपया वाट पहा... (Submitting...)</span>
                  ) : (
                    <>
                      <span>Request Free Profile Guidance</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400 pt-1">
                  🔒 We respect your privacy. No spam, no annoying sales calls.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Clean, Inviting Primary Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative z-20 py-3.5 px-7 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(20,184,166,0.35)] hover:shadow-[0_6px_25px_rgba(20,184,166,0.5)] hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base font-sans whitespace-nowrap"
      >
        <span>Check Your Eligibility</span>
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      {/* React Portal */}
      {mounted && typeof document !== 'undefined' && createPortal(modalContent, document.body)}
    </>
  );
}
