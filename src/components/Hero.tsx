import React from "react";
import { CLINIC_META, CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { MessageCircle, ShieldCheck, Heart, Sparkles, MapPin, Star, Award } from "lucide-react";
// @ts-ignore
import drNaeemImage from "../assets/images/dr_naeem_baig_actual.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-emerald-50/20 py-16 lg:py-24" id="hero">
      {/* Background soft circular decorations */}
      <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
      <div className="absolute -left-12 -bottom-12 h-80 w-80 rounded-full bg-teal-100/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Text Content Block */}
          <div className="text-left lg:col-span-7">
            {/* Trust Anchor Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
              <span>DHA Lahore's Fully Accredited Family Dental Clinic</span>
            </div>

            {/* Headline H1 (Requested with precise local targeting) */}
            <h1 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" id="hero-title">
              Restore Your Confident Smile at Lahore's Trusted Family Dental Clinic
            </h1>

            {/* Subheadline H2 (Requested with practice details and local anchors) */}
            <h2 className="mt-5 font-sans text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Experience stress-free, pain-free dental care with <span className="font-bold text-slate-950">Dr. Naeem Baig</span> (35+ Years Experience & former 14-Year HOD at Ittefaq Hospital) at Mediplex Family Dentistry — located in Phase 1, near Ghazi Road, <span className="font-semibold text-emerald-700 underline decoration-emerald-200 decoration-wavy">DHA Lahore</span>.
            </h2>

            {/* Live conversion CTA button linking up to WhatsApp */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hi%20Mediplex%20Family%20Dentistry,%20I'd%20like%20to%20book%20a%20dental%20appointment%20with%20Dr.%20Naeem%20Baig.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-300"
                id="hero-whatsapp-booking-btn"
              >
                <MessageCircle className="h-5.5 w-5.5 fill-white text-emerald-600" />
                <span>Book via WhatsApp now</span>
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Social Trust and Friction Reduction Indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                <span>35+ Years Clinical Exp</span>
              </div>
              <div className="inline-block h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Award className="h-4.5 w-4.5 text-emerald-600" />
                <span>14 Years HOD, Ittefaq Hospital</span>
              </div>
              <div className="inline-block h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Star className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                <span>5.0 Rated by DHA Patients</span>
              </div>
              <div className="inline-block h-4 w-px bg-slate-200" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <MapPin className="h-4.5 w-4.5 text-emerald-600" />
                <span>Stress-Free Parking Adjacent</span>
              </div>
            </div>
          </div>

          {/* Graphical/Interactive Promotion Block */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-[2.5rem] border-[8px] border-slate-900/10 bg-white p-6 pb-12 shadow-xl sm:p-8 sm:pb-14">

              {/* Floating element 2 */}
              <div className="absolute -bottom-6 -right-2 sm:-bottom-6 sm:-right-4 flex items-center gap-2 rounded-2xl bg-slate-900 p-3 text-white shadow-lg">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Heart className="h-4.5 w-4.5 fill-white text-emerald-600" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-medium leading-none">Families Covered</div>
                  <div className="text-2xs font-extrabold text-white mt-0.5 leading-none">All Ages Welcome</div>
                </div>
              </div>

              {/* Central Clinic Promo card with actual picture */}
              <div className="flex flex-col text-center">
                <span className="text-3xs font-extrabold uppercase tracking-widest text-emerald-600">MEET YOUR DENTIST</span>
                
                {/* Actual Portrait of Dr. Naeem Baig */}
                <div className="relative my-4 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-sm group">
                  <img
                    src={drNaeemImage}
                    alt="Dr. Naeem Baig - Clinical Director of Mediplex Family Dentistry"
                    className="w-full aspect-[4/3] object-cover rounded-2xl select-none"
                    referrerPolicy="no-referrer"
                    id="hero-doctor-portrait"
                  />
                </div>

                <span className="font-serif text-2xl font-bold text-slate-900">Dr. Naeem Baig</span>
                <p className="text-xs font-semibold text-emerald-700 leading-tight">BDS, Dental Implantologist</p>
                <p className="text-3xs text-slate-500 font-medium mt-0.5 uppercase tracking-wide">Former 14-Year HOD at Ittefaq Hospital</p>

                {/* Details layout */}
                <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-left">
                  <div>
                    <h4 className="text-2xs font-bold uppercase text-slate-400">Weekly Schedule</h4>
                    <p className="text-xs font-extrabold text-slate-700">Mon - Sat</p>
                  </div>
                  <div>
                    <h4 className="text-2xs font-bold uppercase text-slate-400">Evening Hours</h4>
                    <p className="text-xs font-extrabold text-slate-700">{CLINIC_HOURS.time}</p>
                  </div>
                </div>

                {/* Speed Booking form snippet inside the promo card */}
                <div className="mt-5 rounded-xl bg-emerald-50/50 p-3 text-center border border-emerald-100">
                  <span className="text-3xs font-bold text-slate-500 uppercase">WhatsApp Helpdesk</span>
                  <p className="text-xs font-bold text-emerald-800 mt-0.5">📞 {CLINIC_CONTACT.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
