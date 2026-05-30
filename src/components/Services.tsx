import React, { useState } from "react";
import { SERVICES, CLINIC_CONTACT } from "../data";
import { ServiceItem } from "../types";
import { MessageCircle, CheckCircle, Clock, Award, Star, Stethoscope, ChevronRight } from "lucide-react";

export default function Services() {
  const [selectedId, setSelectedId] = useState<string>("dental-implants");

  const activeService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];

  return (
    <section className="bg-slate-50 py-16 lg:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-2xs font-extrabold uppercase tracking-widest text-emerald-600 block">SPECIAL TREATMENTS AVAILABLE</span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            World-Class Dental Solutions for Every Generation
          </h2>
          <p className="mt-4 font-sans text-base text-slate-600 sm:text-lg">
            From pediatric cleanings and modern cosmetic dentistry to complex computer-guided oral implant surgeries, we keep your family safe.
          </p>
        </div>

        {/* Content Layout: Services Tabs + Dynamic Card */}
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
          
          {/* Services Left Selection Menu (Cols 4) */}
          <div className="space-y-2 lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-3xs font-extrabold text-slate-400 uppercase tracking-widest block pl-2 mb-2">
              SELECT A SERVICE
            </span>
            <div className="flex flex-col gap-1.5">
              {SERVICES.map((service) => {
                const isActive = service.id === selectedId;
                const isImplant = service.id === "dental-implants";
                
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedId(service.id)}
                    className={`group flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all relative ${
                      isActive
                        ? "bg-white text-slate-950 border border-slate-200/80 shadow-md shadow-slate-100/50"
                        : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    id={`btn-service-tab-${service.id}`}
                  >
                    {/* Active highlight line indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-emerald-600" />
                    )}

                    <div className="flex flex-col">
                      <span className="font-extrabold text-sm md:text-base flex items-center gap-1.5">
                        {service.title.split(" (")[0]}
                        {isImplant && (
                          <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-4xs font-bold text-emerald-700 border border-emerald-100 uppercase tracking-wide">
                            Special Interest
                          </span>
                        )}
                      </span>
                      <span className="text-2xs text-slate-400 mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </span>
                    </div>
                    
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive ? "text-emerald-600 translate-x-1" : "text-slate-300 group-hover:text-slate-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Quick trust reassurance badge under left menu */}
            <div className="rounded-2xl border border-slate-200/65 bg-white/70 p-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-xs font-bold text-slate-800">100% Painless Guarantee</span>
              </div>
              <p className="mt-1.5 text-3xs text-slate-500 leading-relaxed">
                We use custom micro-needles and premium Swedish anesthetics for a near invisible, pain-free injection layer.
              </p>
            </div>
          </div>

          {/* Service Right Content Panel Details (Cols 8) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-10 relative">
              
              {/* Highlight special interest banner if implants selected */}
              {activeService.id === "dental-implants" && (
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-3 border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-emerald-600 fill-emerald-600 shrink-0" />
                    <div>
                      <span className="block text-2xs font-bold text-slate-900 uppercase tracking-wide">Dr. Naeem Baig's Specialty Focus</span>
                      <span className="text-3xs text-slate-500">Over 35 years refining advanced bone-integrated restorations</span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-4xs font-bold text-emerald-800 uppercase tracking-widest text-center self-start sm:self-center">
                    BDS certified
                  </span>
                </div>
              )}

              {/* Title & Timing Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="font-sans text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    {activeService.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 font-medium">
                    Category: <span className="text-emerald-700 font-semibold">{activeService.id === "teeth-whitening" || activeService.id === "light-cure-filling" ? "Cosmetic Dentistry" : "Restorative & Surgical Care"}</span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 border border-slate-200/50 self-start">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  <span className="text-2xs font-bold text-slate-600">{activeService.duration}</span>
                </div>
              </div>

              {/* Main Description */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
                  TREATMENT OVERVIEW & MEDICAL CLINIC APPROACH
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mt-8">
                <h4 className="text-2xs font-bold text-slate-400 uppercase tracking-widest">
                  CLINICAL ADVANTAGES & EXPECTED BENEFITS
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {activeService.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-600 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific CTA for the active service (Highly Optimized CRO) */}
              <div className="mt-10 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-2xs font-extrabold text-slate-400 uppercase tracking-wider">PREFER DIRECT CLINIC DISCUSSION?</p>
                  <p className="text-xs font-semibold text-slate-600 mt-1">Get precise quotes and slot availabilities</p>
                </div>
                
                <a
                  href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hi%20Mediplex%20Family%20Dentistry,%20I%20am%20interested%20in%20learning%20more%20about%20your%20treatment%20for%20${encodeURIComponent(activeService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-200 transition-all hover:bg-emerald-700 hover:scale-[1.01]"
                  id={`cta-btn-service-whatsapp-${activeService.id}`}
                >
                  <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
                  <span>Book {activeService.title.split(" (")[0]} via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
