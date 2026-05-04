// src/components/SeamlessBlueprint.tsx
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

// ============================================================================
// DATA: The Finesse Blueprint (Deep Storytelling & Trust Building)
// ============================================================================
const blueprintSteps = [
  {
    id: "01",
    title: "100% Unbiased Profile Audit",
    subtitle: "The Reality Check Phase",
    desc: "We start by analyzing your exact NEET score and budget constraints. We are not sales agents pushing a specific college for commissions. Because we operate independently with zero exclusive tie-ups, we provide a brutally honest reality check of your chances in both Indian Private/Deemed and Government universities Abroad.",
    highlights: ["NEET Score Strategy", "Budget Mapping", "Zero College Bias"],
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    id: "02",
    title: "Frictionless Documentation",
    subtitle: "The Legal & Counseling Phase",
    desc: "The admission maze is extremely complex. If you choose India, we strategize your strict State and Central counseling choice-filling to ensure you don't lose a seat. If you choose Abroad, our expert legal team manages everything from securing the Official Admission Letter to Document Apostille and Guaranteed Visa processing.",
    highlights: ["Choice Filling Strategy", "Visa Processing", "Apostille Handled"],
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    )
  },
  {
    id: "03",
    title: "Direct Financial Transactions",
    subtitle: "The 100% Security Phase",
    desc: "We completely eliminate the risk of admission scams. We do not collect college tuition fees. You will pay your fees directly into the official bank account of the respective university. We only charge a transparent, pre-decided consulting fee for our professional admission and legal services.",
    highlights: ["No Hidden Margins", "Direct Bank Transfer", "Transparent Consulting"],
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    id: "04",
    title: "Securing The Seat & Dispatch",
    subtitle: "The Execution Phase",
    desc: "Our responsibility officially ends only when the student's admission is legally secured and finalized. We guide you through the final physical reporting process for Indian medical colleges, and we handle the first-time travel, immigration clearance, and hostel settling for students going abroad.",
    highlights: ["Physical Reporting", "Travel Assistance", "Hostel Settling"],
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  }
];

export default function SeamlessBlueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="relative bg-white selection:bg-teal-900 selection:text-white">
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 relative">
          
          {/* LEFT COLUMN: Sticky Header */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 shrink-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Our Blueprint</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              The Transparent <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">
                Admission Route.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-md">
              We are strictly independent consultants. Our framework is designed to eliminate middlemen, protect your investment, and secure the best medical seat based purely on merit.
            </p>

            <div className="hidden lg:block w-full max-w-xs bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-teal-600 rounded-full"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              />
            </div>
            <p className="hidden lg:block text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">
              Scroll to explore steps
            </p>
          </div>

          {/* RIGHT COLUMN: The Scrolling Steps */}
          <div className="w-full lg:w-7/12 relative">
            <div className="hidden md:block absolute left-[59px] top-0 bottom-0 w-px bg-slate-100 z-0"></div>

            <div className="space-y-24 lg:space-y-32">
              {blueprintSteps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col md:flex-row items-start gap-8 group"
                >
                  
                  {/* 🚀 FIXED: New Structural Layout for Icon & Number */}
                  <div className="shrink-0 relative w-28 h-28 md:w-32 md:h-32 mr-4 md:mr-8">
                    
                    {/* The Number (Shifted outside to the left so it doesn't block the icon) */}
                    <div className="absolute -top-4 -left-10 md:-left-12 text-[80px] md:text-[100px] leading-[0.8] font-black text-slate-200/70 transition-transform duration-700 group-hover:-translate-x-3 group-hover:-translate-y-2 z-0 select-none pointer-events-none">
                      {step.id}
                    </div>

                    {/* The Icon (Stays on the right) */}
                    <div className={`absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shadow-lg border-4 border-white z-10 transition-transform duration-500 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                    
                  </div>

                  {/* Step Content */}
                  <div className="flex-grow pt-2 relative z-20">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-black text-slate-400 tracking-widest uppercase">
                        Step {step.id}
                      </span>
                      <span className="w-8 h-px bg-slate-200"></span>
                      <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-teal-900 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                      {step.desc}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {step.highlights.map((highlight, hIndex) => (
                        <div 
                          key={hIndex}
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm group-hover:border-teal-100 transition-colors duration-300"
                        >
                          <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <span className="text-sm font-bold text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}