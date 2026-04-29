// src/components/GlobalAdvantage.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 0,
    title: "Advanced Clinical Exposure",
    desc: "Train in prestigious European and Eurasian government hospitals. Gain hands-on experience with real-world clinical and surgical cases right from your third year, ensuring you graduate as a confident practitioner.",
    metric: "3000+ Bed Hospitals",
    img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=1600" 
  },
  {
    id: 1,
    title: "The Global Pathway",
    desc: "Your medical career isn't restricted by borders. Our institutional curriculums are rigorously aligned with the USMLE (USA), PLAB (UK), and AMC (Australia), opening direct pathways for international post-graduation.",
    metric: "USMLE Aligned",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 2,
    title: "Elite International Networking",
    desc: "Share your academic journey with top-tier minds from over 40+ countries. Build a lifelong global network of medical professionals that will support your career trajectory across continents.",
    metric: "40+ Nationalities",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 3,
    title: "Holistic Independence",
    desc: "Live and thrive in highly secure, culturally rich international campuses. We ensure premium hostel facilities, dedicated Indian cuisine, and a 24/7 on-ground local support ecosystem.",
    metric: "100% Secure Campus",
    img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1600"
  }
];

export default function GlobalAdvantage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Pristine Ivory background - The hallmark of Luxury Print Design
    <section className="relative bg-[#FDFCF0] border-t border-[#002147]/5 selection:bg-[#C5A059]/20 selection:text-[#002147]">
      
      {/* Extremely subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 py-24 lg:py-32">
        
        {/* --- LUXURY EDITORIAL HEADER --- */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#C5A059]"></div>
            <span className="text-[#C5A059] font-sans font-bold tracking-[0.3em] text-[10px] uppercase">
              Beyond The Degree
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#002147] leading-[1.1] tracking-tight mb-8">
            The Making of a <br />
            <span className="italic font-light text-[#C5A059]">
              Global Physician.
            </span>
          </h2>
          <p className="text-slate-600 font-sans font-medium text-lg lg:text-xl leading-relaxed max-w-2xl">
            You are not just traveling abroad to study; you are stepping into a world-class healthcare ecosystem designed to build confident, globally recognized medical leaders.
          </p>
        </div>

        {/* --- SCROLL-SPY EDITORIAL LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
          
          {/* LEFT: Sticky Cinematic Image (The Visual Anchor) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-32 h-[75vh] w-full rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,33,71,0.1)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Buttery smooth crossfade
                className="absolute inset-0"
              >
                <img 
                  src={pillars[activeIndex].img} 
                  alt={pillars[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Subtle inner shadow to give it a printed photograph feel */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,33,71,0.2)] mix-blend-multiply"></div>
              </motion.div>
            </AnimatePresence>

            {/* Elegant Floating Metric Tag */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 border border-[#C5A059]/20 shadow-lg">
              <p className="text-[#002147] font-serif font-bold text-lg tracking-wide">
                {pillars[activeIndex].metric}
              </p>
            </div>
          </div>

          {/* RIGHT: Scrollable Article Content */}
          <div className="lg:col-span-6 flex flex-col">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={pillar.id}
                // Framer motion's viewport hook triggers the active image
                onViewportEnter={() => setActiveIndex(index)}
                viewport={{ margin: "-40% 0px -40% 0px", amount: 0.5 }}
                className="py-16 lg:py-[15vh] border-b border-[#002147]/5 last:border-0 relative"
              >
                
                {/* Mobile-only image (Shows interleaved on small screens) */}
                <div className="block lg:hidden w-full h-[300px] mb-8 rounded-sm overflow-hidden shadow-lg relative">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 border border-[#C5A059]/20">
                    <p className="text-[#002147] font-serif font-bold text-sm tracking-wide">{pillar.metric}</p>
                  </div>
                </div>

                {/* The Huge Editorial Number */}
                <div className="text-[5rem] lg:text-[7rem] font-serif font-light text-[#C5A059]/20 leading-none mb-6 -ml-2 tracking-tighter">
                  0{index + 1}
                </div>

                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-[#002147] mb-6 leading-snug">
                  {pillar.title}
                </h3>
                
                {/* High Line-Height for luxurious reading experience */}
                <p className="text-slate-600 font-sans text-lg leading-[1.8] font-medium max-w-lg">
                  {pillar.desc}
                </p>

                {/* Refined Luxury Detail */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-[#C5A059]"></div>
                  <span className="text-[#C5A059] font-bold text-[9px] uppercase tracking-[0.2em]">Finesse Exclusivity</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}