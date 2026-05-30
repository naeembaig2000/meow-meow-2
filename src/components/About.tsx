import React from "react";
import { CLINIC_META, CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { Medal, GraduationCap, ClipboardCheck, MessageCircle, HeartHandshake, Award } from "lucide-react";
// @ts-ignore
import drNaeemImage from "../assets/images/dr_naeem_baig_actual.jpeg";

export default function About() {
  return (
    <section className="bg-slate-900 py-20 text-white relative overflow-hidden" id="doctor">
      {/* Dynamic background element for premium feeling */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl animate-pulse" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left max-w-2xl">
          <span className="text-2xs font-extrabold uppercase tracking-widest text-emerald-400">MEET THE CLINICAL DIRECTOR</span>
          <h2 className="font-serif text-3xl font-extrabold text-white md:text-4xl mt-1">
            Dr. Naeem Baig
          </h2>
          <p className="text-emerald-400 font-medium text-sm mt-1.5 leading-relaxed">
            Lead Dentist & Implantologist with a BDS Degree, former 14-Year Head of Department at Ittefaq Hospital Lahore, and over 35 years of trusted clinical practice.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          
          {/* Column 1: Portrait Cover (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl group">
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1 rounded-full bg-emerald-600/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-ping" />
                <span>35+ Years Active</span>
              </div>
              
              <div className="overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={drNaeemImage}
                  alt="Dr. Naeem Baig Portrait - Clinical Director of Mediplex Family Dentistry"
                  className="w-full aspect-[3/4] object-cover rounded-2xl select-none transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  id="doctor-portrait-image"
                />
              </div>
              
              <div className="p-4 text-center">
                <p className="font-serif text-base font-bold text-white">Dr. Naeem Baig</p>
                <p className="text-3xs text-emerald-400 font-extrabold tracking-widest uppercase mt-0.5">Clinical Director, BDS</p>
                <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-1">Former 14-Year HOD, Ittefaq Hospital</p>
              </div>
            </div>

            {/* Micro Tagline */}
            <p className="text-3xs text-slate-500 text-center italic">
              * Actual clinical portrait of Dr. Naeem Baig at Mediplex Family Dentistry.
            </p>
          </div>

          {/* Column 2: Credentials and Metrics (Cols 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/40 p-6">
              <span className="text-3xs font-extrabold text-emerald-400 uppercase tracking-widest block">Core Clinical Milestones</span>
              <div className="h-px bg-slate-800" />
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                    <Medal className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-100">3.5 Decades of Expertise</h4>
                    <p className="text-2xs text-slate-400 mt-0.5 leading-relaxed">
                      Over 35 years handling intricate dental crowns, surgical extractions, and restorative diagnostics in Lahore.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-100">14 Years HOD, Ittefaq Hospital</h4>
                    <p className="text-2xs text-slate-400 mt-0.5 leading-relaxed">
                      Served as the prestigious Head of Department (HOD) at Lahore's leading Ittefaq Hospital, supervising complex clinical cases and restorative wards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-100">Special Interest in Implantology</h4>
                    <p className="text-2xs text-slate-400 mt-0.5 leading-relaxed">
                      Dedicated post-qualification clinical focus on secure titanium dental implants and advanced cosmetic structural procedures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-100">Compassionate Care Standard</h4>
                    <p className="text-2xs text-slate-400 mt-0.5 leading-relaxed">
                      Renowned for an extremely reassuring chair-side manner that eliminates dentist anxiety for children, adults, and seniors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Panel */}
            <div className="grid grid-cols-3 gap-3 rounded-2xl bg-slate-950 p-4 border border-slate-800 text-center">
              <div>
                <span className="block font-serif text-xl font-bold text-white">35+</span>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mt-0.5">Years Practice</span>
              </div>
              <div className="border-x border-slate-850">
                <span className="block font-serif text-xl font-bold text-white">10k+</span>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mt-0.5">Happy Smiles</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-white">Mon-Sat</span>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mt-0.5">Evening Shift</span>
              </div>
            </div>
          </div>

          {/* Column 3: biography & Quote Statement (Cols 4) */}
          <div className="lg:col-span-4 bg-slate-800/20 border border-slate-800 p-6 sm:p-7 rounded-3xl space-y-5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-2xs font-extrabold tracking-widest text-slate-300 uppercase">PROFESSIONAL BIOGRAPHY</span>
            </div>

            <p className="font-sans text-xs leading-relaxed text-slate-300">
              Dr. Naeem Baig has dedicated over 3.5 decades to delivering elite family and surgical oral healthcare, which includes serving for 14 distinguished years as the Head of Department (HOD) at Ittefaq Hospital, Lahore. Combining a seasoned specialist's diagnostic accuracy with a reassuring dentist's warmth, Dr. Baig builds clinical plans focused on tooth preservation.
            </p>

            <blockquote className="border-l-2 border-emerald-400 pl-4 py-1 italic font-serif text-slate-200 text-xs leading-relaxed bg-slate-900/40 rounded-r-lg pr-2">
              "We believe dentistry shouldn't just patch up problems—it must save natural teeth, restore functional biting capability, and protect your self-esteem. We have designed Mediplex Family Dentistry around gentle therapy, absolute hygienic standards, and direct client consultation alignment."
              <span className="block mt-1.5 font-sans font-extrabold text-[10px] non-italic text-emerald-400">— Dr. Naeem Baig, Lead Surgeon</span>
            </blockquote>

            <p className="font-sans text-xs leading-relaxed text-slate-300">
              Understanding that dental anxiety affects several individuals, his practice incorporates transparent discussions before treatment, extremely gentle anesthesia application, and high sterilization protocols so you are always fully secure.
            </p>

            <div className="border-t border-slate-800 pt-5 flex flex-col items-stretch gap-3">
              <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80 text-center">
                <p className="text-[9px] text-slate-400 uppercase font-extrabold tracking-wider">Direct WhatsApp Helpdesk</p>
                <p className="text-sm font-extrabold text-white mt-0.5">💬 {CLINIC_CONTACT.whatsappDisplay}</p>
              </div>
              <a
                href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hello%2520Dr.%2520Naeem%2520Baig,%2520I'd%2520like%252520to%25252520consult%25252520on%25252520a%25252520dental%25252520treatment.%25252520`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-extrabold text-white transition-all hover:bg-emerald-500 hover:scale-[1.01] text-center"
              >
                <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

