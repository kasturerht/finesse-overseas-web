import { c as createComponent } from './astro-component_PqBCz97v.mjs';
import 'piccolore';
import { d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './entrypoint_WwU-oxN3.mjs';
import { $ as $$Layout } from './Layout_D_E_LbrL.mjs';
import { $ as $$Footer } from './Footer_CRCkQYUZ.mjs';
import { $ as $$WhatsAppWidget } from './WhatsAppWidget_DhhPWEs0.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact Us | Finesse Overseas Education";
  const description = "Get in touch with Finesse Overseas Education. Start your journey to tuition-free universities in Germany, Italy, and Europe.";
  const contactSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "name": "Finesse Overseas Education",
    "description": description,
    "url": "https://finesseoverseas.com/contact",
    "telephone": "+919850069600",
    "email": "info@finesseoverseas.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakshi Samarth Plaza, First Floor, Above Sohala Showroom, Beside Lenskart, 4th Lane, Rajarampuri",
      "addressLocality": "Kolhapur",
      "postalCode": "416008",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "18:30"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919850069600",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "schema": contactSchema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden"> <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-300 via-transparent to-transparent"></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"> <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Let's Plan Your <span class="text-teal-400">Global Future</span></h1> <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
Stop worrying about the paperwork. Drop your details below and our expert counselors will reach out to map your profile to top European universities.
</p> </div> </section> <section class="py-20 bg-slate-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16"> <div class="space-y-10"> <div> <h2 class="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2> <p class="text-slate-600 text-lg leading-relaxed">
Whether you have questions about the APS certificate, blocked accounts, or 100% scholarships in Italy, our doors are always open.
</p> </div> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0 text-teal-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> </div> <div> <h3 class="text-lg font-bold text-slate-900">Visit Our Office</h3> <p class="text-slate-600 mt-1">Sakshi Samarth Plaza, First Floor,<br>Above Sohala Showroom, Beside Lenskart,<br>Kolhapur, Maharashtra, India</p> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0 text-teal-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </div> <div> <h3 class="text-lg font-bold text-slate-900">Call or WhatsApp</h3> <p class="text-slate-600 mt-1">+91 98500 69600</p> <span class="text-sm text-teal-600 font-semibold">Available Mon-Sat, 10:30 AM to 6:30 PM</span> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0 text-teal-600"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> <div> <h3 class="text-lg font-bold text-slate-900">Email Us</h3> <p class="text-slate-600 mt-1">info@finesseoverseas.in</p> </div> </div> </div> <div class="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79110214829!2d74.15654316358368!3d16.70845678881267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709550000000!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe> </div> </div> <div class="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 h-fit"> <h3 class="text-2xl font-bold text-slate-900 mb-6">Request a Free Callback</h3> <form class="space-y-6" action="https://api.web3forms.com/submit" method="POST" data-track="contact-form"> <input type="hidden" name="access_key"${addAttribute("6935ed39-d49c-423b-9afa-93217f6f60d1", "value")}> <input type="hidden" name="redirect" value="/thank-you"> <div> <label for="name" class="block text-sm font-semibold text-slate-700 mb-2">Student Name *</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="Enter full name"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="phone" class="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number *</label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="+91"> </div> <div> <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">Email Address</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" placeholder="you@example.com"> </div> </div> <div> <label for="destination" class="block text-sm font-semibold text-slate-700 mb-2">Target Destination</label> <select id="destination" name="destination" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"> <option value="germany">Germany (Tuition-Free)</option> <option value="italy">Italy (100% Scholarship)</option> <option value="other_europe">Other European Countries</option> <option value="not_sure">Not Sure Yet</option> </select> </div> <div> <label for="education" class="block text-sm font-semibold text-slate-700 mb-2">Highest Qualification</label> <select id="education" name="education" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-white"> <option value="12th">12th Standard</option> <option value="bachelors">Bachelor's Degree</option> <option value="masters">Master's Degree</option> </select> </div> <button type="submit" data-track="contact-form-submit" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
Get Expert Guidance Now
</button> <p class="text-xs text-center text-slate-500 mt-4">We respect your privacy. No spam, ever.</p> </form> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppWidget", $$WhatsAppWidget, {})} ` })}`;
}, "F:/Finesse/Website/Website/finesse-overseas/src/pages/contact.astro", void 0);
const $$file = "F:/Finesse/Website/Website/finesse-overseas/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
