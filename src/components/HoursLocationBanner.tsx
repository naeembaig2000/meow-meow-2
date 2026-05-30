import React from "react";
import { CLINIC_CONTACT, CLINIC_HOURS, CLINIC_META } from "../data";
import { Clock, MapPin, Phone, MessageCircle, Navigation, ExternalLink } from "lucide-react";

export default function HoursLocationBanner() {
  // Simple check for live indicator based on local operating hours (4:30 PM to 8:15 PM PKT/Lahore timezone)
  // Since time zones can vary, we will display a friendly "Evening Practice Shift" status badge.
  
  return (
    <section className="bg-white py-10 border-y border-slate-100" id="hours-location-hub">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          
          {/* Card 1: Map & Clickable Address */}
          <div className="group relative rounded-2xl bg-slate-50 p-6 border border-slate-250/45 transition hover:bg-white hover:shadow-md hover:border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block font-mono">
                  OUR CLINIC LOCATION
                </span>
                <h3 className="font-sans text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                  {CLINIC_META.locationState}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                  {CLINIC_CONTACT.address}
                </p>
                <div className="pt-2">
                  <a
                    href={CLINIC_CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-2xs font-extrabold text-white transition-all hover:bg-emerald-600 shadow-sm"
                    id="banner-map-link-btn"
                  >
                    <Navigation className="h-3.5 w-3.5 fill-white text-slate-900 group-hover:text-emerald-600" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="group relative rounded-2xl bg-slate-50 p-6 border border-slate-250/45 transition hover:bg-white hover:shadow-md hover:border-emerald-200">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block font-mono">
                    DAILY SHIFT HOURS
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[9px] font-bold text-emerald-800 border border-emerald-100 animate-pulse">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Evening Shifts
                  </span>
                </div>
                <h3 className="font-sans text-sm font-bold text-slate-900">
                  {CLINIC_HOURS.days}
                </h3>
                <p className="font-serif text-lg font-bold text-emerald-700">
                  {CLINIC_HOURS.time}
                </p>
                <p className="text-2xs text-slate-400 mt-1 font-medium italic leading-normal">
                  * Prior booking via WhatsApp is recommended to reserve diagnostic slots comfortably.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Instant Booking Callout */}
          <div className="group relative rounded-2xl bg-emerald-600 p-6 text-white transition hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-100">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200 block font-mono">
                  DIRECT CONVERSION CHANNEL
                </span>
                <h3 className="font-sans text-sm font-bold">
                  WhatsApp Helpline Support
                </h3>
                <p className="text-2xs text-emerald-100 leading-normal">
                  Message us anytime to consult on implants, root canals, or orthodontic braces directly.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${CLINIC_CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-2xs font-bold text-slate-900 transition hover:bg-slate-100 shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4 fill-emerald-600 text-white" />
                    <span>Chat Now: {CLINIC_CONTACT.whatsappDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
