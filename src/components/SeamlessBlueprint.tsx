// src/components/SeamlessBlueprint.tsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Profile Audit & Strategy",
    desc: "We analyze your NEET score and exact budget to map out the safest, top-tier university options. You receive a legally binding, transparent expense sheet on Day 1.",
    highlight: "Zero Hidden Fees. 100% Clarity.",
  },
  {
    id: "02",
    title: "Frictionless Paperwork",
    desc: "Stop worrying about the bureaucracy. Our in-house legal experts handle everything from document Apostille and university offer letters to guaranteed Visa processing.",
    highlight: "Guaranteed Visa Processing.",
  },
  {
    id: "03",
    title: "Direct University Payments",
    desc: "We process your final admission securely. To ensure absolute financial safety, your tuition fees are transferred directly to the university's official account.",
    highlight: "Zero Middleman Transactions.",
  },
  {
    id: "04",
    title: "Departure & Settling",
    desc: "Our responsibility doesn't end at the airport. Our team travels with the students, handles local setups, and integrates them into the campus ecosystem.",
    highlight: "We Travel With Them.",
  }
];

export default function SeamlessBlueprint() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // Pristine Ivory background
    <section className="relative py-24 lg:py-32 bg-[#FDFCF0] border-t border-[#002147]/5 overflow-hidden selection:bg-[#C5A059]/20">
      
      {/* Subtle Noise for high-end print texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-24 lg:mb-32"
        >
          <span className="inline-flex items-center justify-center gap-3 text-[#C5A059] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-6">
            <div className="w-6 h-[1px] bg-[#C5A059]"></div>
            The Finesse Blueprint
            <div className="w-6 h-[1px] bg-[#C5A059]"></div>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#002147] leading-[1.1] tracking-tight mb-6">
            From Confusion to Campus. <br />
            <span className="italic font-light text-[#C5A059]">A Frictionless Journey.</span>
          </h2>
          <p className="text-slate-500 font-sans text-base leading-relaxed max-w-xl mx-auto">
            We handle the bureaucracy, paperwork, and logistics, so you can focus on what truly matters—celebrating your child’s new milestone.
          </p>
        </motion.div>

        {/* --- THE CASCADING PATHWAY (0-Second Process Read) --- */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* THE GOLDEN THREAD: The continuous vertical line that connects all steps */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-[50px] w-px bg-[#002147]/10 z-0">
            {/* The animated filled line that draws as you scroll */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#C5A059] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10% 0px -40% 0px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative z-10 flex items-start gap-8 md:gap-16 group"
              >
                
                {/* LEFT: The Timeline Node (The Number) */}
                <div className="flex-shrink-0 relative flex justify-center w-[56px] md:w-[100px] bg-[#FDFCF0] py-2">
                  {/* Glowing subtle background behind the active number */}
                  <div className="absolute inset-0 bg-[#C5A059]/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <span className="font-serif text-4xl md:text-5xl font-light text-[#C5A059] leading-none transition-transform duration-500 group-hover:scale-110">
                    {step.id}
                  </span>
                </div>

                {/* RIGHT: The Content Block */}
                <div className="flex-grow pt-1 md:pt-2 pb-8 border-b border-[#002147]/5 group-last:border-0">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#002147] leading-snug mb-4 transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 font-sans text-base leading-[1.8] mb-8 max-w-2xl">
                    {step.desc}
                  </p>

                  {/* The Value-Hook Highlight Box */}
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-[#C5A059]/20 shadow-[0_10px_20px_-10px_rgba(0,33,71,0.08)] rounded-sm">
                    {/* Pulsing Dot for "Active/Live" feel */}
                    <div className="relative w-1.5 h-1.5">
                      <div className="absolute inset-0 bg-[#C5A059] rounded-full animate-ping opacity-70"></div>
                      <div className="relative w-full h-full bg-[#C5A059] rounded-full"></div>
                    </div>
                    <span className="text-[#002147] font-bold text-[10px] uppercase tracking-[0.2em]">
                      {step.highlight}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}