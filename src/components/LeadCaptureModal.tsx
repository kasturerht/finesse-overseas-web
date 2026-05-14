import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // हे नव्याने ॲड केलं आहे

interface LeadCaptureModalProps {
  pdfUrl: string;
}

export default function LeadCaptureModal({ pdfUrl }: LeadCaptureModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Astro मध्ये React Hydration साठी हे महत्त्वाचं आहे
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // १. Advanced Scroll Lock Logic (No Page Jump/Shift)
  useEffect(() => {
    if (isOpen) {
      // स्क्रोलबारची अचूक साईझ मोजणे
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      // पेज जंप मारू नये म्हणून तेवढीच पॅडिंग ॲड करणे
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    // Cleanup function
    return () => { 
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake Delay for effect
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // PDF Download Trigger
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'NMC_2026_Checklist.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsSuccess(false);
      setName('');
      setWhatsapp('');
    }, 3000);
  };

  // हा तुझा पॉप-अप चा भाग आहे, जो आपण 'Portal' द्वारे बाहेर काढणार आहोत
  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#030712]/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={() => !isSubmitting && setIsOpen(false)}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0a0f1c] shadow-[0_0_50px_rgba(16,185,129,0.1)] animate-in zoom-in-95 duration-200">
        
        {/* Top Branding Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600" />

        <div className="p-8">
          {isSuccess ? (
            <div className="py-10 text-center animate-in slide-in-from-bottom-4">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Access Granted!</h3>
              <p className="mt-2 text-slate-400">Your download has started automatically.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-serif text-white font-bold tracking-tight">Unlock Checklist</h3>
                <p className="mt-2 text-sm text-slate-400 font-medium">Verify your details to get the NMC approved matrix.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Parent / Student Name</label>
                  <input 
                    type="text" required value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-700/80 bg-slate-900/50 px-4 py-3.5 text-white outline-none transition-all focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Enter full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">WhatsApp Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">+91</span>
                    <input 
                      type="tel" required pattern="[0-9]{10}" value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, '').slice(0,10))}
                      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/50 pl-14 pr-4 py-3.5 text-white outline-none transition-all focus:border-emerald-500/50 focus:bg-emerald-500/5 focus:ring-2 focus:ring-emerald-500/20"
                      placeholder="10-digit number"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || whatsapp.length < 10}
                  className="group relative mt-4 w-full overflow-hidden rounded-xl bg-emerald-600 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-emerald-500 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Get PDF Now"}
                </button>
                
                <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                  100% Secure • No Spam
                </p>
              </form>
            </>
          )}
        </div>

        {/* Close Button */}
        {!isSubmitting && (
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        )}
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* २. चकाचक मॉडर्न बटन (जे साईडबार मध्ये दिसेल) */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative w-full overflow-hidden rounded-xl bg-emerald-500 p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        <div className="relative flex items-center justify-center gap-3 rounded-xl bg-[#0a0f1c] px-6 py-4 transition-all duration-300 group-hover:bg-transparent">
          <span className="text-[12px] font-bold uppercase tracking-widest text-emerald-400 group-hover:text-white transition-colors">
            Download PDF Checklist
          </span>
          <svg className="w-5 h-5 text-emerald-500 group-hover:text-white transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </div>
      </button>

      {/* ३. The Portal Magic (पॉप-अप थेट HTML च्या body टॅग मध्ये टाकत आहे) */}
      {mounted && typeof document !== 'undefined' && createPortal(
        modalContent,
        document.body
      )}
    </>
  );
}