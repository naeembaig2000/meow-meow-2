import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HoursLocationBanner from "./components/HoursLocationBanner";
import Services from "./components/Services";
import About from "./components/About";
import DeveloperToolkit from "./components/DeveloperToolkit";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";
import { TESTIMONIALS, CLINIC_META, CLINIC_CONTACT } from "./data";
import { Star, Quote, MessageCircle, ArrowRight, ShieldCheck, Award } from "lucide-react";

export default function App() {
  const [viewMode, setViewMode] = useState<"patient" | "toolkit">("patient");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-100 antialiased flex flex-col justify-between">
      
      {/* Dynamic Header & Switch Manager */}
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main Body Switcher renders */}
      <main className="grow">
        {viewMode === "patient" ? (
          /* Live Patient Site Mode */
          <div className="space-y-px">
            
            {/* HERO SECTION */}
            <Hero />

            {/* LIVE ADDRESS & SHIFT TIMES HUB */}
            <HoursLocationBanner />

            {/* SERVICES SELECTOR MODULE */}
            <Services />

            {/* DOCTOR BIO INTERACTIVE SPOTLIGHT */}
            <About />

            {/* SOCIAL PROOF & PATIENT STORIES SECTION */}
            <section className="bg-slate-100/50 py-16 lg:py-20" id="reviews">
              <div className="mx-auto max-w-7xl px-4 md:px-6">
                
                {/* Section Header */}
                <div className="text-center mx-auto max-w-2xl mb-12">
                  <span className="text-2xs font-extrabold text-emerald-600 tracking-widest uppercase">
                    PATIENT EXPERIENCES
                  </span>
                  <h2 className="mt-2 font-sans text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                    Why DHA Lahore Families Recommend Us
                  </h2>
                  <p className="mt-3 text-sm text-slate-500">
                    Real reviews from patients who put their trust in Dr. Naeem Baig's gentle clinic care.
                  </p>
                </div>

                {/* Review bento grids */}
                <div className="grid gap-6 md:grid-cols-3">
                  {TESTIMONIALS.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-2xl border border-slate-200/55 bg-white p-6 md:p-8 flex flex-col justify-between shadow-sm relative group hover:shadow-md transition"
                    >
                      {/* Quote decoration */}
                      <Quote className="absolute top-4 right-4 h-10 w-10 text-slate-100 shrink-0 select-none group-hover:text-emerald-50 transition" />

                      <div className="space-y-4 relative z-10">
                        {/* Rating stars */}
                        <div className="flex gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
                          ))}
                        </div>

                        <p className="text-xs leading-relaxed text-slate-600 italic">
                          "{t.text}"
                        </p>
                      </div>

                      {/* Reviewer detail */}
                      <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
                          {t.name[0]}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                          <p className="text-3xs text-slate-450 uppercase font-semibold">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust callout footer bar */}
                <div className="mt-10 rounded-2xl bg-white p-5 border border-slate-200/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">Want to read more clinical success stories?</h4>
                    <p className="text-3xs text-slate-500 mt-0.5">Ask on WhatsApp to view our case portfolios for dental implants.</p>
                  </div>
                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hi%2520Mediplex%2520Family%2520Dentistry,%2520I'd%2520like%2520to%2520see%2520before-after%2520case%2520photos%252520of%252520dental%252520implants.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline group shrink-0"
                  >
                    <span>Request portfolio</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </section>

          </div>
        ) : (
          /* Copywriter Database Toolkit Mode */
          <div className="space-y-px animate-fade-in">
            
            {/* Toolkit Hero Title */}
            <div className="bg-slate-900 text-white py-12 text-center relative overflow-hidden">
              <div className="mx-auto max-w-4xl px-4 space-y-3">
                <span className="inline-flex rounded-full bg-indigo-500/15 px-3 py-1 text-2xs font-bold text-indigo-300 border border-indigo-500/20">
                  CRO & Copywriting Deliverables
                </span>
                <h1 className="font-serif text-3xl font-extrabold sm:text-4xl">
                  Structured Dental Clinic Copy Repository
                </h1>
                <p className="mx-auto max-w-2xl text-xs text-slate-300 leading-relaxed">
                  Below lies the full structural outline, written copy paragraphs, target headlines, operating records, and Conversion Rate Optimization rationale designed specifically for {CLINIC_META.practiceName}.
                </p>
              </div>
            </div>

            {/* Core Toolkit Manager component */}
            <DeveloperToolkit />

          </div>
        )}
      </main>

      {/* CORE FOOTER */}
      <Footer />

      {/* PERSISTENT FLOATING ACTIONS AND ADDRESS RETRIEVER */}
      {viewMode === "patient" && <FloatingDock />}
      
    </div>
  );
}
