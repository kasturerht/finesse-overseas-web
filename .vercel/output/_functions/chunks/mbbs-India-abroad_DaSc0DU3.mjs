import { c as createComponent } from './astro-component_DgDkKiMC.mjs';
import 'piccolore';
import { d as renderComponent, r as renderTemplate } from './entrypoint_U5r9_E1T.mjs';
import { $ as $$Layout } from './Layout_D1AbGySA.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { $ as $$Footer } from './Footer_CXtGVqeN.mjs';

const stagger$5 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const fadeUp$2 = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const trustStats = [
  {
    icon: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-teal-400 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) }),
    label: "Top Private & Govt. Colleges"
  },
  {
    icon: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-teal-400 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }),
    label: "Assured Seat Guarantee"
  },
  {
    icon: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-teal-400 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }) }),
    label: "NMC 2026 Verified"
  },
  {
    icon: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-teal-400 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    label: "India + 6 Countries"
  },
  {
    icon: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-teal-400 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }),
    label: "Est. 2004 · Kolhapur HQ"
  }
];
function HeroSectionDark() {
  const handleHeroCtaClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "CTA_Click", cta_text: "Book Free Counseling" });
    }
    const formSection = document.getElementById("consultation-form");
    if (formSection && window.innerWidth < 1024) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      const nameInput = document.getElementById("fullName");
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, window.innerWidth < 1024 ? 350 : 50);
  };
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative flex flex-col bg-slate-950 overflow-hidden selection:bg-teal-500/20 selection:text-teal-300", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-48 -mt-48 w-[800px] h-[800px] rounded-full bg-teal-500/[0.08] blur-[160px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-48 -mb-48 w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[130px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-12 lg:pt-32 lg:pb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-14 lg:gap-20", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          variants: stagger$5,
          initial: "hidden",
          animate: "show",
          className: "w-full lg:w-1/2 flex flex-col items-start text-left",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/20 mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]", children: [
              /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.9)] animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-widest text-teal-400", children: "2026 ADMISSIONS OPEN" })
            ] }),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "text-4xl md:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.08] tracking-tight mb-6",
                children: [
                  "MBBS",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400", children: "Abroad" }),
                  " ",
                  "or",
                  " ",
                  /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
                  "India — Made",
                  " ",
                  /* @__PURE__ */ jsx("br", { className: "hidden lg:block" }),
                  "Simple for You"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mb-10",
                children: "We give every family a clear, honest picture — based on your NEET score and budget. No pressure, no hidden fees. Just the right path for your child."
              }
            ),
            /* @__PURE__ */ jsx(
              m.div,
              {
                variants: stagger$5,
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-12 w-full max-w-xl",
                children: [
                  "NMC Approved Colleges Only",
                  "Assured Seat Guarantee",
                  "India & Abroad Options",
                  "Est. 2004 - 22+ Years"
                ].map((pill, i) => /* @__PURE__ */ jsxs(
                  m.div,
                  {
                    variants: fadeUp$2,
                    className: "flex items-center gap-3 px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-700/40 rounded-xl hover:border-teal-500/30 hover:bg-slate-800/50 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "bg-teal-500/10 p-1.5 rounded-md shrink-0", children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-3.5 h-3.5 text-teal-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-slate-300 leading-tight", children: pill })
                    ]
                  },
                  i
                ))
              }
            ),
            /* @__PURE__ */ jsxs(m.div, { variants: fadeUp$2, className: "flex flex-col sm:flex-row items-center gap-4 w-full", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleHeroCtaClick,
                  className: "w-full sm:w-auto cursor-pointer px-8 py-4 bg-slate-100 hover:bg-white text-slate-900 font-bold rounded-xl shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300",
                  children: "Book Free Counseling"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleHeroCtaClick,
                  className: "w-full sm:w-auto cursor-pointer px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-bold rounded-xl hover:bg-slate-900/60 hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300",
                  children: "Compare Options"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        m.div,
        {
          id: "consultation-form",
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
          className: "w-full lg:w-1/2 relative scroll-mt-24",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/15 blur-3xl scale-95 rounded-[2.5rem] pointer-events-none" }),
            /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-900/70 backdrop-blur-2xl border border-white/[0.06] rounded-[2rem] shadow-[0_32px_64px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] p-8 md:p-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", "aria-hidden": "true", children: "📱" }),
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white tracking-tight", children: "Get Your Free Admission Blueprint" })
              ] }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  action: "https://formsubmit.co/finesseoverseaseducation@gmail.com",
                  method: "POST",
                  className: "space-y-5",
                  onSubmit: (e) => {
                    if (typeof window !== "undefined") {
                      const formData = new FormData(e.currentTarget);
                      const neetScore = Number(formData.get("Expected_NEET_Score")) || 0;
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        "event": "Generate_Lead",
                        "lead_type": "mbbs_blueprint",
                        "destination": formData.get("Preferred_Destination"),
                        "neet_score_bucket": neetScore >= 400 ? "High" : "Low",
                        "user_data": {
                          "phone_number": formData.get("WhatsApp_Number"),
                          "address": {
                            "first_name": formData.get("Full_Name")
                          }
                        }
                      });
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_captcha", value: "false" }),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_subject", value: "New Lead: MBBS Admission Blueprint" }),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_next", value: "https://www.finesseoverseas.com/thank-you" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                        /* @__PURE__ */ jsx("label", { htmlFor: "fullName", className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400", children: "Student / Parent Name" }),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            id: "fullName",
                            name: "Full_Name",
                            type: "text",
                            required: true,
                            placeholder: "e.g. Rajan Patil",
                            autoComplete: "name",
                            className: "w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                        /* @__PURE__ */ jsx("label", { htmlFor: "neetScore", className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400", children: "NEET Score (Expected)" }),
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            id: "neetScore",
                            name: "Expected_NEET_Score",
                            type: "number",
                            required: true,
                            placeholder: "e.g. 450",
                            className: "w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                      /* @__PURE__ */ jsx("label", { htmlFor: "destination", className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400", children: "Preferred Destination" }),
                      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxs(
                          "select",
                          {
                            id: "destination",
                            name: "Preferred_Destination",
                            required: true,
                            defaultValue: "",
                            className: "w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-400 appearance-none cursor-pointer text-sm",
                            children: [
                              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select your preference" }),
                              /* @__PURE__ */ jsx("option", { value: "india", className: "bg-slate-900 text-slate-200", children: "MBBS in India" }),
                              /* @__PURE__ */ jsx("option", { value: "abroad", className: "bg-slate-900 text-slate-200", children: "MBBS Abroad" }),
                              /* @__PURE__ */ jsx("option", { value: "undecided", className: "bg-slate-900 text-slate-200", children: "Not Sure Yet" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "svg",
                          {
                            "aria-hidden": "true",
                            className: "absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 group", children: [
                      /* @__PURE__ */ jsx("label", { htmlFor: "whatsapp", className: "text-[10px] font-extrabold text-slate-500 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-teal-400", children: "WhatsApp Number" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: "whatsapp",
                          name: "WhatsApp_Number",
                          type: "tel",
                          required: true,
                          pattern: "[0-9]*",
                          autoComplete: "tel",
                          placeholder: "+91 98XXX XXXXX",
                          className: "w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/60 focus:bg-slate-800/80 transition-all font-medium text-slate-200 placeholder:text-slate-600 text-sm"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "submit",
                        className: "w-full group relative inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-black text-base rounded-xl overflow-hidden transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(20,184,166,0.45)] hover:shadow-[0_16px_40px_-8px_rgba(20,184,166,0.6)] hover:-translate-y-0.5",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" }),
                          /* @__PURE__ */ jsx("span", { className: "relative flex items-center gap-2", children: "Get Free Consulting —" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 justify-center pt-1", children: [
                      /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-3.5 h-3.5 text-slate-600 mt-0.5 shrink-0", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                          clipRule: "evenodd"
                        }
                      ) }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-slate-500 text-center", children: "No spam. We only contact you via WhatsApp to discuss your profile." })
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      m.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, delay: 0.2 },
        className: "relative z-10 border-t border-slate-800/60 bg-slate-900/50 backdrop-blur-md",
        children: /* @__PURE__ */ jsx("div", { className: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5", children: trustStats.map((item, i) => /* @__PURE__ */ jsxs(
          m.div,
          {
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.1 + i * 0.08 },
            className: `flex items-center gap-3 px-5 py-5 group hover:bg-white/[0.02] transition-colors duration-300 ${i < trustStats.length - 1 ? "border-r border-slate-800/60" : ""} ${i === 3 ? "col-span-2 sm:col-span-1 border-r-0 sm:border-r border-t border-slate-800/60 sm:border-t-0" : ""} ${i === 4 ? "col-span-2 sm:col-span-3 lg:col-span-1 border-t border-slate-800/60 sm:border-t-0 lg:border-r-0" : ""}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "shrink-0 group-hover:scale-110 transition-transform duration-300", children: item.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-400 group-hover:text-slate-300 leading-snug transition-colors duration-300", children: item.label })
            ]
          },
          i
        )) }) })
      }
    )
  ] }) });
}

const stagger$4 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};
const fadeUp$1 = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};
const indiaPoints = [
  "Study close to home — family, language & culture stay familiar",
  "Recognised private & deemed universities with strong infrastructure",
  "Assured seat available — no waiting, no counselling round uncertainty",
  "Excellent Indian patient flow — ideal for those planning to practice locally",
  "Multiple state options — Maharashtra, Karnataka, All India Deemed",
  "No language barrier — English medium throughout"
];
const abroadPoints = [
  "Government universities — massive campuses, world-class infrastructure",
  "Significantly lower total investment compared to Indian private colleges",
  "Fixed fee structure — know your full cost on Day 1",
  "3000+ bed teaching hospitals — diverse global patient experience",
  "Merit-based entry — NEET qualification is sufficient, no high-score pressure",
  "International exposure — adds great value to your medical career"
];
function CheckIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) });
}
function StarIcon({ className }) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) });
}
function BothPathsSection() {
  const handleEnquireClick = (destinationValue) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "CTA_Click",
        cta_text: `Enquire for ${destinationValue === "india" ? "India" : "Abroad"} Seat`
      });
    }
    const destSelect = document.getElementById("destination");
    if (destSelect) {
      destSelect.value = destinationValue;
    }
    const formSection = document.getElementById("consultation-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      const nameInput = document.getElementById("fullName");
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 350);
  };
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative bg-slate-50 overflow-hidden py-20 lg:py-28 selection:bg-teal-500/20 selection:text-teal-900", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 opacity-[0.025] pointer-events-none",
        style: { backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-60 -mt-60 w-[700px] h-[700px] rounded-full bg-teal-400/10 blur-[130px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-60 -mb-60 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          className: "text-center mb-14 lg:mb-18",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-5", children: [
              "Both Paths Lead to",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400", children: "Your MBBS Degree" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto", children: "Whether your child wants to study in India or Abroad — we have the right seat, at the right college, within your budget. Let us help you pick the best." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start", children: [
        /* @__PURE__ */ jsxs(
          m.div,
          {
            initial: { opacity: 0, x: -32 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            className: "relative flex flex-col rounded-[1.75rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,23,42,0.22)]",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-teal-500/15 to-blue-500/10 blur-2xl scale-105 pointer-events-none rounded-[1.75rem]" }),
              /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-900/95 backdrop-blur-xl border border-white/[0.06] rounded-[1.75rem] flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]", children: [
                /* @__PURE__ */ jsxs("div", { className: "px-7 pt-7 pb-6 border-b border-slate-800/60", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-white tracking-tight leading-tight", children: "MBBS in India" }),
                    /* @__PURE__ */ jsx("span", { className: "shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] font-black uppercase tracking-widest text-teal-400", children: "Assured Seat" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-500 uppercase tracking-widest", children: "Private & Deemed Colleges" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "px-7 pt-6 pb-5 flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 mb-5", children: "WHY STUDENTS CHOOSE INDIA" }),
                  /* @__PURE__ */ jsx(
                    m.ul,
                    {
                      variants: stagger$4,
                      initial: "hidden",
                      whileInView: "show",
                      viewport: { once: true },
                      className: "space-y-4",
                      children: indiaPoints.map((point, i) => /* @__PURE__ */ jsxs(m.li, { variants: fadeUp$1, className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5 w-5 h-5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-3 h-3 text-teal-400" }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300 leading-snug font-medium", children: point })
                      ] }, i))
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    m.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.6, delay: 0.4 },
                      className: "mt-6 flex items-start gap-3 p-4 rounded-xl bg-teal-500/[0.08] border border-teal-500/20",
                      children: [
                        /* @__PURE__ */ jsx(StarIcon, { className: "w-4 h-4 text-teal-400 shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-teal-300 leading-snug", children: "Best for families who prefer India, any NEET score and want a guaranteed admission without risking an international move" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "px-7 pb-7", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => handleEnquireClick("india"),
                    className: "w-full group cursor-pointer relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(20,184,166,0.45)] hover:shadow-[0_12px_32px_-6px_rgba(20,184,166,0.6)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" }),
                      /* @__PURE__ */ jsx("span", { className: "relative", children: "Enquire for India Seat →" })
                    ]
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          m.div,
          {
            initial: { opacity: 0, x: 32 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            className: "relative flex flex-col rounded-[1.75rem] overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,23,42,0.12)]",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-400/10 to-yellow-300/10 blur-2xl scale-105 pointer-events-none rounded-[1.75rem]" }),
              /* @__PURE__ */ jsxs("div", { className: "relative bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-[1.75rem] flex flex-col h-full shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]", children: [
                /* @__PURE__ */ jsxs("div", { className: "px-7 pt-7 pb-6 border-b border-slate-100", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black text-slate-900 tracking-tight leading-tight", children: "MBBS Abroad" }),
                    /* @__PURE__ */ jsx("span", { className: "shrink-0 inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-black uppercase tracking-widest text-amber-700", children: "NMC Approved" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-400 uppercase tracking-widest", children: "Govt. Universities · 4 Countries" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "px-7 pt-6 pb-5 flex-1", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-5", children: "WHY STUDENTS CHOOSE ABROAD" }),
                  /* @__PURE__ */ jsx(
                    m.ul,
                    {
                      variants: stagger$4,
                      initial: "hidden",
                      whileInView: "show",
                      viewport: { once: true },
                      className: "space-y-4",
                      children: abroadPoints.map((point, i) => /* @__PURE__ */ jsxs(m.li, { variants: fadeUp$1, className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5 w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckIcon, { className: "w-3 h-3 text-amber-600" }) }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-700 leading-snug font-medium", children: point })
                      ] }, i))
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    m.div,
                    {
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.6, delay: 0.4 },
                      className: "mt-6 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200",
                      children: [
                        /* @__PURE__ */ jsx(StarIcon, { className: "w-4 h-4 text-amber-500 shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-amber-800 leading-snug", children: "Best for: Budget-conscious families who want a recognised degree, lower NEET scores, and are open to an international experience" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "px-7 pb-7", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => handleEnquireClick("abroad"),
                    className: "w-full group cursor-pointer relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_-6px_rgba(245,158,11,0.55)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" }),
                      /* @__PURE__ */ jsx("span", { className: "relative", children: "Enquire for Abroad Seat →" })
                    ]
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}

const stagger$3 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } }
};
const rowFade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};
const rows = [
  {
    parameter: "Budget Range",
    india: {
      type: "stack",
      highlight: "₹60 Lakh – ₹1.2 Cr",
      sub: "Top private & deemed colleges"
    },
    abroad: {
      type: "stack",
      highlight: "₹20 – ₹35 Lakh Total",
      sub: "Govt. universities abroad"
    }
  },
  {
    parameter: "Seat Availability",
    india: {
      type: "inline",
      highlight: "Assured seats available",
      rest: "— we secure admission regardless of counselling rounds"
    },
    abroad: {
      type: "inline",
      highlight: "Merit-based entry",
      rest: "— NEET qualification sufficient, no high score needed"
    }
  },
  {
    parameter: "College Quality",
    india: {
      type: "inline",
      highlight: "Reputed private & deemed universities with",
      rest: "modern infrastructure & hospitals"
    },
    abroad: {
      type: "inline",
      highlight: "Government universities",
      rest: "— large campuses subsidised by foreign governments"
    }
  },
  {
    parameter: "Hospital Exposure",
    india: {
      type: "inline",
      highlight: "Rich Indian patient base",
      rest: "— excellent for those planning to practice in India"
    },
    abroad: {
      type: "inline",
      highlight: "3000+ bed hospitals",
      rest: "— global patient diversity, international clinical exposure"
    }
  },
  {
    parameter: "Comfort & Lifestyle",
    india: {
      type: "inline",
      highlight: "Home country advantage",
      rest: "— familiar food, family nearby, Indian environment"
    },
    abroad: {
      type: "inline",
      highlight: "Indian communities on campus",
      rest: "— canteens, hostels, support networks in most cities"
    }
  },
  {
    parameter: "Language of Study",
    india: {
      type: "inline",
      highlight: "Full English medium",
      rest: "— no language barrier at all"
    },
    abroad: {
      type: "inline",
      highlight: "100% English syllabus",
      rest: "• basic local language for patient interaction only"
    }
  },
  {
    parameter: "Licensing (India Practice)",
    india: {
      type: "inline",
      highlight: "NEXT exam",
      rest: "— clear it once and you can practice anywhere in India"
    },
    abroad: {
      type: "inline",
      highlight: "NEXT exam",
      rest: "— same pathway, same opportunity to practice in India"
    }
  },
  {
    parameter: "Career Value",
    india: {
      type: "inline",
      highlight: "Well-known Indian institution name",
      rest: "— trusted by local employers & hospitals"
    },
    abroad: {
      type: "inline",
      highlight: "International degree",
      rest: "— opens doors for practice globally, not just India"
    }
  }
];
function Cell({ cell }) {
  if (cell.type === "stack") {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[15px] font-black text-teal-600 leading-tight tracking-tight", children: cell.highlight }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-500 font-medium mt-1 leading-snug", children: cell.sub })
    ] });
  }
  return /* @__PURE__ */ jsxs("p", { className: "text-[13px] text-slate-600 leading-snug font-medium", children: [
    /* @__PURE__ */ jsx("span", { className: "font-bold text-teal-600", children: cell.highlight }),
    " ",
    /* @__PURE__ */ jsx("span", { children: cell.rest })
  ] });
}
function DetailedComparison() {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-teal-100/50 blur-[130px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-100/40 blur-[110px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "MBBS in India vs Abroad — Side-by-Side Comparison" }),
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "flex items-center gap-3 mb-8",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-7 h-[2px] bg-teal-600 rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-teal-700", children: "Detailed Comparison" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          className: "rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.09)] bg-white",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[180px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] bg-slate-900", children: [
              /* @__PURE__ */ jsx("div", { className: "px-5 py-4 border-r border-slate-700/50 flex items-center", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.18em] text-slate-400", children: "Parameter" }) }),
              /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 border-r border-slate-700/50 flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: "🇮🇳" }),
                /* @__PURE__ */ jsxs("p", { className: "text-[11px] font-black uppercase tracking-widest leading-none", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white", children: "MBBS " }),
                  /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "IN INDIA" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsx("span", { className: "text-base leading-none", children: "🌍" }),
                /* @__PURE__ */ jsxs("p", { className: "text-[11px] font-black uppercase tracking-widest leading-none", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white", children: "MBBS " }),
                  /* @__PURE__ */ jsx("span", { className: "text-teal-400", children: "ABROAD" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              m.div,
              {
                variants: stagger$3,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, margin: "-60px" },
                children: rows.map((row, i) => /* @__PURE__ */ jsxs(
                  m.div,
                  {
                    variants: rowFade,
                    className: `grid grid-cols-[180px_1fr_1fr] sm:grid-cols-[200px_1fr_1fr] border-t border-slate-100 ${i % 2 === 1 ? "bg-slate-50/70" : "bg-white"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "px-5 py-5 border-r border-slate-100 flex items-start", children: /* @__PURE__ */ jsx("span", { className: "text-[13px] font-bold text-slate-700 leading-snug", children: row.parameter }) }),
                      /* @__PURE__ */ jsx("div", { className: "px-5 py-5 border-r border-slate-100 flex items-start", children: /* @__PURE__ */ jsx(Cell, { cell: row.india }) }),
                      /* @__PURE__ */ jsx("div", { className: "px-5 py-5 flex items-start", children: /* @__PURE__ */ jsx(Cell, { cell: row.abroad }) })
                    ]
                  },
                  i
                ))
              }
            ),
            /* @__PURE__ */ jsxs(
              m.div,
              {
                initial: { opacity: 0, y: 10 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.25 },
                className: "border-t border-slate-200 bg-teal-50/50 px-6 py-6 flex items-start gap-5",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5 w-9 h-9 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsx(
                    "svg",
                    {
                      "aria-hidden": "true",
                      focusable: "false",
                      className: "w-4.5 h-4.5 w-[18px] h-[18px] text-teal-600",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-800 mb-1.5 leading-snug", children: "Worried about counselling rounds or cut-offs?" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-[12px] text-slate-600 leading-relaxed font-medium max-w-2xl", children: [
                      "Many families come to us after missing state or central counselling rounds. We help secure direct admission into recognised private colleges through institutional quota channels — so your child doesn't lose a year.",
                      " ",
                      /* @__PURE__ */ jsx(
                        "a",
                        {
                          href: "#",
                          className: "text-teal-600 font-bold hover:text-teal-700 hover:underline underline-offset-2 inline-flex items-center gap-0.5 transition-colors",
                          children: "Talk to us confidentially →"
                        }
                      )
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}

const stagger$2 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const cardFade$1 = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};
function PlaneIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) });
}
function SafetyIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z", clipRule: "evenodd" }) });
}
function FoodIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) });
}
const countries = [
  {
    code: "IT",
    name: "Italy",
    flights: "Direct flights from Mumbai/Delhi",
    safety: "Highest European safety",
    food: "Pure veg & Indian food available",
    universities: "Top Govt. Universities in Rome & Milan"
  },
  {
    code: "RU",
    name: "Russia",
    flights: "Direct flights from Delhi",
    safety: "Global superpower campus safety",
    food: "Indian canteens on campus",
    universities: "Kazan Federal · Bashkir State Medical"
  },
  {
    code: "RO",
    name: "Romania",
    flights: "European standard travel",
    safety: "EU Nation — extremely safe",
    food: "Self-cooking & Indian mess",
    universities: "Carol Davila · Victor Babes University"
  },
  {
    code: "PL",
    name: "Poland",
    flights: "Connecting flights to Warsaw",
    safety: "Top EU quality of life",
    food: "Indian mess available",
    universities: "Medical Univ. of Warsaw · Jagiellonian"
  },
  {
    code: "BG",
    name: "Bulgaria",
    flights: "Easy connecting flights",
    safety: "Peaceful EU country",
    food: "Indian food options",
    universities: "Sofia Medical · Plovdiv Medical University"
  },
  {
    code: "LT",
    name: "Lithuania",
    flights: "Connecting flights to Vilnius",
    safety: "High-standard Baltic safety",
    food: "Self-cooking & Indian mess",
    universities: "Vilnius Univ. · Lithuanian Univ. of Health Sciences"
  }
];
function CountryCard({ country }) {
  return /* @__PURE__ */ jsxs(
    m.div,
    {
      variants: cardFade$1,
      whileHover: { y: -4, boxShadow: "0 20px 48px -12px rgba(15,23,42,0.12)" },
      transition: { duration: 0.3 },
      className: "group flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-teal-300/60 transition-colors duration-300 cursor-pointer",
      children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-slate-200 tracking-tight leading-none mb-3 select-none", children: country.code }),
        /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-4 leading-tight", children: country.name }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 flex-1", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx(PlaneIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] text-slate-500 font-medium leading-snug", children: country.flights })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx(SafetyIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] text-slate-500 font-medium leading-snug", children: country.safety })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsx(FoodIcon, {}),
            /* @__PURE__ */ jsx("span", { className: "text-[12px] text-slate-500 font-medium leading-snug", children: country.food })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "my-4 border-t border-slate-100" }),
        /* @__PURE__ */ jsx("p", { className: "text-[12px] font-semibold text-teal-600 group-hover:text-teal-700 leading-snug transition-colors duration-200", children: country.universities })
      ]
    }
  );
}
function SafeCountries() {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          className: "mb-12 lg:mb-14",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-[2px] bg-teal-600 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-teal-700", children: "Where We Send Students" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4", children: [
              "6 Safe Countries —",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500", children: "All NMC Approved" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-md", children: "We only work with top government universities. Click any country to learn more." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        m.div,
        {
          variants: stagger$2,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-60px" },
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
          children: countries.map((country) => /* @__PURE__ */ jsx(CountryCard, { country }, country.code))
        }
      )
    ] })
  ] }) });
}

const stagger$1 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};
const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};
function CalendarIcon$1() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-6 h-6 text-blue-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) });
}
function GraduateIcon() {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", focusable: "false", className: "w-6 h-6 text-purple-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.8", children: [
    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l9-5-9-5-9 5 9 5z" }),
    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" })
  ] });
}
function MedicalIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-6 h-6 text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }) });
}
function WarningIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-6 h-6 text-amber-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) });
}
const rules = [
  {
    icon: /* @__PURE__ */ jsx(CalendarIcon$1, {}),
    iconBg: "bg-blue-500/10 border-blue-500/20",
    title: "54 + 12 Month Rule",
    body: /* @__PURE__ */ jsx(Fragment, { children: "The MBBS course must be exactly 54 months long, followed by a mandatory 12-month internship in the same foreign country." })
  },
  {
    icon: /* @__PURE__ */ jsx(GraduateIcon, {}),
    iconBg: "bg-purple-500/10 border-purple-500/20",
    title: "100% English Medium",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The entire medical syllabus must be taught in English. Bilingual (two-language) courses are",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-red-400 font-bold", children: "NOT accepted" }),
      " by NMC."
    ] })
  },
  {
    icon: /* @__PURE__ */ jsx(MedicalIcon, {}),
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    title: "NEXT Exam After Graduation",
    body: /* @__PURE__ */ jsx(Fragment, { children: "All MBBS graduates — India or abroad — must clear the NEXT (National Exit Test) to practice medicine in India." })
  },
  {
    icon: /* @__PURE__ */ jsx(WarningIcon, {}),
    iconBg: "bg-amber-500/10 border-amber-500/20",
    title: "NEET Score is Compulsory",
    body: /* @__PURE__ */ jsx(Fragment, { children: "A valid NEET score is mandatory for admission abroad. Minimum 50% in Class 12 Physics, Chemistry, and Biology is required." })
  }
];
function NMCRules() {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-28 bg-slate-950 overflow-hidden selection:bg-amber-500/20 selection:text-amber-200", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 z-0 pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 -ml-48 -mt-48 w-[600px] h-[600px] rounded-full bg-amber-500/[0.05] blur-[140px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 -mr-48 -mb-48 w-[500px] h-[500px] rounded-full bg-teal-500/[0.06] blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          className: "mb-14",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-[2px] bg-amber-500 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-amber-500", children: "Official Rules" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "NMC 2026 — " }),
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300", children: "What Every Student Must Know" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-slate-400 font-medium leading-relaxed max-w-lg", children: "India's National Medical Commission has strict rules. We physically verify every college to protect your investment." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        m.div,
        {
          variants: stagger$1,
          initial: "hidden",
          whileInView: "show",
          viewport: { once: true, margin: "-60px" },
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
          children: rules.map((rule, i) => /* @__PURE__ */ jsxs(
            m.div,
            {
              variants: cardFade,
              whileHover: { y: -4, borderColor: "rgba(251,191,36,0.25)" },
              transition: { duration: 0.3 },
              className: "flex flex-col bg-slate-900/60 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-slate-900/80 transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl border flex items-center justify-center mb-5 shrink-0 ${rule.iconBg}`, children: rule.icon }),
                /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-amber-400 leading-snug mb-3", children: rule.title }),
                /* @__PURE__ */ jsx("p", { className: "text-[13px] text-slate-400 leading-relaxed font-medium", children: rule.body })
              ]
            },
            i
          ))
        }
      )
    ] })
  ] }) });
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};
const steps = [
  {
    n: "1",
    title: "Free Profile Audit",
    body: "We evaluate your NEET Score and budget honestly. We paint a clear picture of your realistic options in India and abroad.",
    tags: ["NEET Analysis", "Budget Mapping", "One Day"]
  },
  {
    n: "2",
    title: "College Selection & Admission Letter",
    body: "We send your Official College Admission Letter from the university, not just an offer. We map the pricing strategy, NMC eligibility, and backup options for you.",
    tags: ["Admission Letter", "Fee Strategy"]
  },
  {
    n: "3",
    title: "Documents, Apostille & Visa",
    body: "Our legal team handles all paperwork — from document attestation, apostille to guaranteed visa processing. You don't need to worry about a single step.",
    tags: ["Apostille", "Visa", "Legal Help"]
  },
  {
    n: "4",
    title: "Travel, Hostel & Settling In",
    body: "Our international students are met by our on-the-ground team on their first trip. A familiar Indian team guides you to the hostel and helps you settle in.",
    tags: ["Transport", "Hostel Booking"]
  }
];
const doItems = [
  "Unbiased college selection based on your NEET score and budget",
  "Strategy: Assured Direct — skip counselling round",
  "100% Guaranteed Admission (either from the college or university)",
  "Complete documentation & visa processing (for abroad)",
  "Post-arrival support & care (available for any doubt)"
];
const dontItems = [
  "We do NOT promise to give academic coaching after admission",
  "We do NOT guarantee you pass NEXT/FMGE after admission",
  "We do NOT charge separate hidden fees through the process",
  "We do NOT recommend colleges we haven't personally verified"
];
function StepTag({ label }) {
  return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider", children: label });
}
function Step({ step, index }) {
  return /* @__PURE__ */ jsxs(m.div, { variants: fadeUp, className: "flex gap-5 group", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center shrink-0", children: [
      /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-teal-600/10 border-2 border-teal-600/30 flex items-center justify-center shrink-0 group-hover:border-teal-500 group-hover:bg-teal-600/20 transition-all duration-300", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-black text-teal-600", children: step.n }) }),
      index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-px flex-1 mt-3 bg-gradient-to-b from-teal-200 to-transparent min-h-[32px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-[15px] font-bold text-slate-900 mb-1.5 leading-snug", children: step.title }),
      /* @__PURE__ */ jsx("p", { className: "text-[13px] text-slate-500 leading-relaxed font-medium mb-3", children: step.body }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: step.tags.map((tag) => /* @__PURE__ */ jsx(StepTag, { label: tag }, tag)) })
    ] })
  ] });
}
function AdmissionProcess() {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, x: -24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-[2px] bg-teal-600 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-teal-700", children: "How We Work" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3", children: [
              "Our 4-Step Admission",
              /* @__PURE__ */ jsx("br", {}),
              "Process"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-md", children: "Transparent from Day 1. You will always know exactly what is happening and why." }),
            /* @__PURE__ */ jsx(
              m.div,
              {
                variants: stagger,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
                children: steps.map((step, i) => /* @__PURE__ */ jsx(Step, { step, index: i }, step.n))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
          className: "flex flex-col gap-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-[2px] bg-teal-600 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-teal-700", children: "Our Responsibilities" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl overflow-hidden border border-teal-200/60 shadow-[0_8px_32px_-8px_rgba(20,184,166,0.12)]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-5 py-4 bg-teal-600", children: [
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-white shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-white", children: "What We DO" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-white px-5 py-4 space-y-3", children: doItems.map((item, i) => /* @__PURE__ */ jsxs(
                m.div,
                {
                  initial: { opacity: 0, x: 8 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.45, delay: 0.1 + i * 0.07 },
                  className: "flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5 w-4 h-4 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-2.5 h-2.5 text-teal-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
                    /* @__PURE__ */ jsx("p", { className: "text-[12px] text-slate-600 font-medium leading-snug", children: item })
                  ]
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-2xl overflow-hidden border border-red-200/60 shadow-[0_8px_32px_-8px_rgba(239,68,68,0.08)]", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 px-5 py-4 bg-red-500", children: [
                /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 text-white shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-black uppercase tracking-widest text-white", children: "What We DON'T Do" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-white px-5 py-4 space-y-3", children: dontItems.map((item, i) => /* @__PURE__ */ jsxs(
                m.div,
                {
                  initial: { opacity: 0, x: 8 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.45, delay: 0.2 + i * 0.07 },
                  className: "flex items-start gap-3",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-0.5 w-4 h-4 rounded-full bg-red-50 border border-red-200 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-2.5 h-2.5 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }) }),
                    /* @__PURE__ */ jsx("p", { className: "text-[12px] text-slate-600 font-medium leading-snug", children: item })
                  ]
                },
                i
              )) })
            ] })
          ]
        }
      )
    ] }) })
  ] }) });
}

const faqs = [
  {
    q: "My child has a low NEET score. Can they still get MBBS admission?",
    a: "Yes. Government universities abroad typically admit students with 400+ NEET scores, and Indian private colleges offer management quota seats regardless of rank. We evaluate your exact score honestly and give you only the options that are genuinely available — no false promises, no inflated expectations."
  },
  {
    q: "Do you charge any hidden fees or donations?",
    a: "Absolutely not. Our counselling fee is disclosed upfront before you sign anything. All tuition is paid directly to the university — never through us. There are no hidden margins, cash demands, or agent commissions buried anywhere in the fee structure. We will give you a written expense breakdown."
  },
  {
    q: "Is MBBS abroad really recognized in India? Will my child be able to practice here?",
    a: "Yes, provided the university is on the NMC's approved list and your child clears the NEXT (National Exit Test) after graduation. We only place students in NMC-approved government universities — 100% legally valid for Indian medical practice."
  },
  {
    q: "Is it safe to send my child abroad for MBBS?",
    a: "Safety is our first filter. We exclusively work with government campuses in stable, law-abiding countries — Italy, Russia, Romania, Poland, Bulgaria, and Lithuania. Our on-ground Indian team is present in each country and reachable 24/7 for any emergency your child may face."
  },
  {
    q: "What is the total cost of MBBS abroad, including all expenses?",
    a: "The all-inclusive cost — tuition, hostel, food, visa, travel, and miscellaneous — typically ranges between ₹20–35 lakhs for the full 6-year course at government universities abroad. Before you commit, we provide a legally binding expense sheet so there are zero surprises."
  },
  {
    q: "What is the NEXT exam and how hard is it?",
    a: "NEXT (National Exit Test) is the mandatory screening exam all MBBS graduates — India or abroad — must clear to practice medicine in India. It tests clinical competence similar to the old FMGE. Pass rates have improved steadily, and strong coaching resources are widely available for returning students."
  }
];
function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    m.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `bg-white border rounded-xl overflow-hidden transition-all duration-300 ${open ? "border-teal-300/60 shadow-[0_8px_32px_-8px_rgba(20,184,166,0.15)]" : "border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] hover:border-slate-300 hover:shadow-[0_4px_16px_-4px_rgba(15,23,42,0.08)]"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpen(!open),
                className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left group",
                "aria-expanded": open,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[14px] md:text-[15px] font-semibold text-slate-800 leading-snug group-hover:text-slate-900 transition-colors", children: faq.q }),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-teal-600 shadow-[0_4px_12px_-2px_rgba(20,184,166,0.4)]" : "bg-teal-600 group-hover:bg-teal-700"}`,
                      children: /* @__PURE__ */ jsx(
                        m.svg,
                        {
                          "aria-hidden": "true",
                          focusable: "false",
                          animate: { rotate: open ? 45 : 0 },
                          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          className: "w-4 h-4 text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          strokeWidth: "2.5",
                          children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4v16m8-8H4" })
                        }
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
              m.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-5 border-t border-slate-100", children: /* @__PURE__ */ jsx("p", { className: "pt-4 text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium", children: faq.a }) })
              },
              "answer"
            ) })
          ]
        }
      )
    }
  );
}
function FAQSection() {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden selection:bg-teal-500/20 selection:text-teal-900", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-100/60 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-100/50 blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-[2px] bg-teal-600 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-[11px] font-black uppercase tracking-[0.22em] text-teal-700", children: "Common Questions" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-900", children: "Parents Ask, " }),
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400", children: "We Answer Honestly" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-slate-500 font-medium leading-relaxed", children: "No vague answers. If we don't know, we'll say so." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsx(FAQItem, { faq, index: i }, i)) })
    ] })
  ] }) });
}

function CalendarIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) });
}
function PhoneIcon() {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", focusable: "false", className: "w-4 h-4 shrink-0", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) });
}
function CTABanner() {
  const handleEnquireClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "CTA_Click", cta_text: "Book Free Counseling" });
    }
    const formSection = document.getElementById("consultation-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setTimeout(() => {
      const nameInput = document.getElementById("fullName");
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 350);
  };
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, strict: true, children: /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04] pointer-events-none",
        style: {
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/[0.06] blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsx(
        m.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
          className: "text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4",
          children: "Ready to Find the Right Path for Your Child?"
        }
      ),
      /* @__PURE__ */ jsx(
        m.p,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          className: "text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-xl mb-9",
          children: "Book a free, no-pressure counseling session. We'll review your NEET score and budget and give you a clear, honest assessment — in 30 minutes."
        }
      ),
      /* @__PURE__ */ jsxs(
        m.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
          className: "flex flex-col sm:flex-row items-center gap-4",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleEnquireClick,
                className: "group cursor-pointer inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 text-teal-700 font-bold text-sm rounded-xl shadow-[0_8px_24px_-6px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:scale-[0.97] active:translate-y-0 transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(CalendarIcon, {}),
                  "Book Free Counseling"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+919850069600",
                "aria-label": "Call Finesse Overseas at +91 98500 69600",
                onClick: () => {
                  if (typeof window !== "undefined") {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ "event": "Contact_Click", "contact_type": "phone", "location": "cta_banner" });
                  }
                },
                className: "group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-bold text-sm rounded-xl backdrop-blur-sm hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(PhoneIcon, {}),
                  "Call +91 98500 69600"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}

const $$MbbsIndiaAbroad = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "MBBS in India vs Abroad 2026: Clear Admission Blueprint";
  const pageDescription = "Compare MBBS in India vs Abroad: NEET score, budget & NMC rules explained. Get a free, transparent admission blueprint from Finesse Overseas Education.";
  const pageUrl = "https://www.finesseoverseas.com/mbbs-India-abroad";
  const seoSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.finesseoverseas.com/#organization",
        "name": "Finesse Overseas Education",
        "url": "https://www.finesseoverseas.com",
        "logo": "https://www.finesseoverseas.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9850069600",
          "contactType": "admissions",
          "areaServed": "IN",
          "availableLanguage": ["English", "Marathi", "Hindi"]
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://www.finesseoverseas.com/mbbs-India-abroad/#webpage",
        "url": "https://www.finesseoverseas.com/mbbs-India-abroad",
        "name": "MBBS in India vs Abroad 2026",
        "description": "Clear comparison for MBBS admission in India and abroad based on NEET scores.",
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Students and Parents"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "My child has a low NEET score. Can they still get MBBS admission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Government universities abroad typically admit students with 400+ NEET scores, and Indian private colleges offer management quota seats regardless of rank. We evaluate your exact score honestly and give you only the options that are genuinely available — no false promises, no inflated expectations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge any hidden fees or donations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely not. Our counselling fee is disclosed upfront before you sign anything. All tuition is paid directly to the university — never through us. There are no hidden margins, cash demands, or agent commissions buried anywhere in the fee structure. We will give you a written expense breakdown."
            }
          },
          {
            "@type": "Question",
            "name": "Is MBBS abroad really recognized in India? Will my child be able to practice here?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, provided the university is on the NMC's approved list and your child clears the NEXT (National Exit Test) after graduation. We only place students in NMC-approved government universities — 100% legally valid for Indian medical practice."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to send my child abroad for MBBS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Safety is our first filter. We exclusively work with government campuses in stable, law-abiding countries — Italy, Russia, Romania, Poland, Bulgaria, and Lithuania. Our on-ground Indian team is present in each country and reachable 24/7 for any emergency your child may face."
            }
          },
          {
            "@type": "Question",
            "name": "What is the total cost of MBBS abroad, including all expenses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The all-inclusive cost — tuition, hostel, food, visa, travel, and miscellaneous — typically ranges between ₹20–35 lakhs for the full 6-year course at government universities abroad. Before you commit, we provide a legally binding expense sheet so there are zero surprises."
            }
          },
          {
            "@type": "Question",
            "name": "What is the NEXT exam and how hard is it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NEXT (National Exit Test) is the mandatory screening exam all MBBS graduates — India or abroad — must clear to practice medicine in India. It tests clinical competence similar to the old FMGE. Pass rates have improved steadily, and strong coaching resources are widely available for returning students."
            }
          }
        ]
      }
    ]
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "canonical": pageUrl, "schema": seoSchema }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSectionDark", HeroSectionDark, { "client:load": true, "client:component-hydration": "load", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/HeroSectionDark.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "BothPathsSection", BothPathsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/BothPathsSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "DetailedComparison", DetailedComparison, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/DetailedComparison.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SafeCountries", SafeCountries, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/SafeCountries.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "NMCRules", NMCRules, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/NMCRules.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "AdmissionProcess", AdmissionProcess, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/AdmissionProcess.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "FAQSection", FAQSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/FAQSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "CTABanner", CTABanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "F:/Finesse/Website/Website/finesse-overseas/src/components/CTABanner.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, { "theme": "light" })} ` })}`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/pages/mbbs-India-abroad.astro", void 0);

const $$file = "F:/Finesse/Website/Website/finesse-overseas/src/pages/mbbs-India-abroad.astro";
const $$url = "/mbbs-India-abroad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$MbbsIndiaAbroad,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
