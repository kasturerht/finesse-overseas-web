// src/components/TrustDataGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';

export default function TrustDataGrid() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    // Pristine Studio White Background - True Luxury
    <section className="relative py-32 bg-[#FAFAFA] overflow-hidden selection:bg-[#B5945B]/20">
      
      {/* Ultra-subtle studio lighting effect (not a glow, just a soft light shift) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-white rounded-full blur-[100px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- LUXURY HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#B5945B] mb-6">
            The Gold Standard of Education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111111] leading-[1.15] tracking-tight mb-8">
            The Finesse Standard: <br className="hidden md:block" />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#9A7B4F] via-[#D4B872] to-[#9A7B4F]">
              Excellence in Every Admission.
            </span>
          </h2>
          <p className="text-[#555555] font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Where academic integrity meets complete financial transparency. We don't just place students; we build medical legacies.
          </p>
        </motion.div>

        {/* --- THE EDITORIAL DATA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* 1. NMC LEGALITY (Editorial Clean Card) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-xl p-10 border border-black/[0.04] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden group"
          >
            {/* Elegant Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9A7B4F] to-[#D4B872] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            
            <h3 className="text-2xl font-serif text-[#111111] mb-8">NMC 2026 Integrity</h3>
            <ul className="space-y-8">
              {[
                { t: "NMC, WHO & ECFMG Approved", d: "Strictly compliant 54+12 month standard course duration." },
                { t: "100% English Taught Programs", d: "Zero bilingual or local language traps for international students." },
                { t: "Verified Practice Rights", d: "Guaranteed licensing in the host nation after graduation." }
              ].map((item, i) => (
                <li key={i} className="relative pl-6">
                  {/* Custom Minimalist Check */}
                  <span className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-[#B5945B]"></span>
                  <h4 className="text-[11px] font-bold text-[#111111] uppercase tracking-[0.15em] mb-1">{item.t}</h4>
                  <p className="text-sm text-[#777777] font-medium leading-relaxed">{item.d}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 2. FINANCIAL HONESTY (Infographic Style) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-white rounded-xl p-10 border border-black/[0.04] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9A7B4F] to-[#D4B872] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

            <h3 className="text-2xl font-serif text-[#111111] mb-8">Financial Transparency</h3>
            
            <div className="space-y-8">
              {/* Market Reality - Muted grey instead of aggressive red */}
              <div className="relative">
                <p className="text-[10px] font-bold text-[#888888] uppercase tracking-[0.15em] mb-2">Market Reality</p>
                <div className="flex justify-between items-end border-b border-black/[0.05] pb-3">
                  <span className="text-sm font-medium text-[#777777]">Quoted: ₹15L</span>
                  <span className="text-xl font-serif text-[#555555] line-through decoration-1">₹30L+ Actual</span>
                </div>
              </div>

              {/* Finesse Guarantee - Champagne Gold Accent */}
              <div className="relative">
                <p className="text-[10px] font-bold text-[#B5945B] uppercase tracking-[0.15em] mb-2">Finesse Guarantee</p>
                <div className="flex justify-between items-end border-b border-[#B5945B]/20 pb-3">
                  <span className="text-sm font-bold text-[#111111]">All-Inclusive Fee</span>
                  <span className="text-2xl font-serif text-[#B5945B]">Transparent</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-[#888888] mt-8 italic font-medium leading-relaxed">
              We guarantee zero hidden contractor margins or sudden price hikes.
            </p>
          </motion.div>

          {/* 3. AUDIT METRICS (Big Typography Art) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-[#111111] rounded-xl p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 relative overflow-hidden group flex flex-col"
          >
            {/* Deep dark card to break the symmetry and add extreme luxury contrast */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#9A7B4F] to-[#D4B872]"></div>
            
            <h3 className="text-2xl font-serif text-white mb-8">The Selection Audit</h3>
            
            <div className="flex-grow flex flex-col justify-between space-y-6">
              {[
                { l: "Institutional Tier", v: "Govt. Medical Universities" },
                { l: "FMGE / NExT Passing Rate", v: "Top 10% Globally" },
                { l: "Clinical Exposure", v: "High Patient Inflow" }
              ].map((m, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0">
                  <span className="text-[10px] font-medium text-[#AAAAAA] uppercase tracking-[0.15em]">{m.l}</span>
                  <span className="text-lg font-serif text-[#D4B872]">{m.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. MENTORSHIP TIMELINE (Flowing Minimalist Path) */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-12 bg-white rounded-xl p-10 lg:p-16 border border-black/[0.04] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-serif text-[#111111] mb-4">The Academic Mentorship Path</h3>
                <p className="text-base text-[#777777] font-medium leading-relaxed">
                  Our responsibility doesn't end at admission. We mentor your child from the first lecture to their Indian Medical License.
                </p>
              </div>
              <div className="px-6 py-2 border border-[#B5945B]/30 rounded-full text-[10px] font-bold text-[#B5945B] uppercase tracking-[0.2em] shrink-0">
                Institutionalized Support
              </div>
            </div>

            <div className="relative">
              {/* Extremely subtle horizontal line connecting the timeline */}
              <div className="absolute top-[10px] left-0 w-full h-[1px] bg-black/[0.05] hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {[
                  { y: "Year 1-2", t: "Foundation", d: "Mapping clinical sciences to the Indian NExT syllabus." },
                  { y: "Year 3-4", t: "Integration", d: "Practical ward observations and surgical concepts." },
                  { y: "Year 5", t: "Certification", d: "Rigorous Step-1 mock tests and performance audits." },
                  { y: "Graduation", t: "Licensing", d: "Complete support for NExT Step-2 and registration." }
                ].map((s, i) => (
                  <div key={i} className="relative pt-6 md:pt-0 group">
                    {/* Minimalist dot on the line */}
                    <div className="hidden md:block absolute top-[7px] left-0 w-1.5 h-1.5 bg-[#B5945B] rounded-full ring-4 ring-white group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <span className="text-[#B5945B] font-bold text-[9px] uppercase tracking-[0.2em] block mt-6 mb-3">{s.y}</span>
                    <h4 className="text-[#111111] font-serif text-xl mb-3">{s.t}</h4>
                    <p className="text-[#777777] text-sm leading-relaxed font-medium">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}