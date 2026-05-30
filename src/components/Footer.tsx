import React from "react";
import { CLINIC_META, CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { MessageCircle, Clock, MapPin, Mail, Sparkles, Check, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900" id="contact">
      
      {/* Dynamic Urgent CTA Banner for Conversion optimization */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-12 px-4 text-center relative overflow-hidden">
        {/* Abstract blur backdrop */}
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/10 blur-xl" />

        <div className="mx-auto max-w-4xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-2xs font-extrabold uppercase tracking-widest text-emerald-100">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Schedule Today</span>
          </span>
          
          <h2 className="font-serif text-3xl font-extrabold sm:text-4xl tracking-tight">
            Have a dental emergency or want to build a perfect smile?
          </h2>
          
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-emerald-150 leading-relaxed font-sans">
            Don't delay your oral comfort. Speak directly to our support desk over WhatsApp for quick session timings, immediate diagnostic quotes, or custom consultations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hi%20Mediplex%20Dentistry,%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Naeem%20Baig.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4.5 text-sm font-extrabold text-emerald-800 shadow-md hover:bg-slate-50 transition w-full sm:w-auto"
              id="footer-whatsapp-main-cta"
            >
              <MessageCircle className="h-5 w-5 fill-emerald-800 text-white" />
              <span>Book Appointment via WhatsApp</span>
            </a>

            <a
              href={`tel:${CLINIC_CONTACT.phone}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-black/10 px-6 py-4.5 text-sm font-bold text-white hover:bg-black/20 transition w-full sm:w-auto"
            >
              <Phone className="h-4.5 w-4.5" />
              <span>Call Hotline: {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Core Footer Links & Context block */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 grid gap-10 md:grid-cols-12 text-left">
        
        {/* Col 5: Brand identity & location targeting description */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white font-serif text-lg font-extrabold">
              M
            </div>
            <h3 className="font-sans text-lg font-bold text-white tracking-tight">
              {CLINIC_META.practiceName}
            </h3>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-md">
            Spearheaded by Dr. Naeem Baig, a veteran dental surgeon and certified implantologist with over 35 years of clinical history. Our family-first clinic combines state-of-the-art sterile protocols with a relaxed atmosphere to deliver exceptional care for children, parents, and seniors.
          </p>

          {/* Verification labels */}
          <div className="space-y-2 border-t border-slate-900 pt-5">
            <div className="flex items-center gap-2 text-2xs text-slate-500">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span>BDS Degree Registered Practitioner</span>
            </div>
            <div className="flex items-center gap-2 text-2xs text-slate-500">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span>Special interest in Oral Implantology & Cosmetic dentistry</span>
            </div>
            <div className="flex items-center gap-2 text-2xs text-slate-500">
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span>Near Ghazi Road, DHA Lahore Phase 1</span>
            </div>
          </div>
        </div>

        {/* Col 4: Quick Contact Details */}
        <div className="md:col-span-6 lg:col-span-4 space-y-4">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
            Practice Information
          </h4>

          <ul className="space-y-4 text-xs">
            <li className="flex gap-3 items-start">
              <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white">Physical Address</span>
                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 mt-1 leading-relaxed block hover:text-emerald-400 transition"
                >
                  {CLINIC_CONTACT.address}
                </a>
                <a
                  href={CLINIC_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline mt-1.5 block text-3xs font-semibold uppercase tracking-wider"
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <Clock className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white">Operating Evening Hours</span>
                <span className="text-slate-400 mt-1 leading-normal block">
                  {CLINIC_HOURS.days}
                </span>
                <span className="text-emerald-400 font-extrabold mt-0.5 block">
                  {CLINIC_HOURS.time}
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Contact channels */}
        <div className="md:col-span-6 lg:col-span-3 space-y-4">
          <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-900 pb-2">
            Contact Channels
          </h4>

          <ul className="space-y-4 text-xs">
            <li className="flex gap-3 items-start">
              <MessageCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 fill-emerald-500" />
              <div>
                <span className="block font-bold text-white">WhatsApp & Phone</span>
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsapp}`}
                  className="text-slate-350 hover:text-white transition mt-1 block font-bold text-sm text-emerald-400"
                >
                  {CLINIC_CONTACT.phoneDisplay}
                </a>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <Mail className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-white">Official Email Address</span>
                <a
                  href={`mailto:${CLINIC_CONTACT.email}`}
                  className="text-slate-350 hover:text-white transition break-all mt-1 block"
                >
                  {CLINIC_CONTACT.email}
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Extreme Bottom terms & credits block */}
      <div className="bg-slate-980 px-4 py-6 border-t border-slate-900/40 text-center text-3xs text-slate-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {CLINIC_META.practiceName}. All global rights reserved.</p>
          <p>Designed under expert CRO guidelines for maximum direct medical lead captures.</p>
        </div>
      </div>

    </footer>
  );
}
