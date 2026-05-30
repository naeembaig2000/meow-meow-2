import React, { useState, useEffect } from "react";
import { CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { MapPin, Clock, MessageCircle, Navigation, ChevronUp } from "lucide-react";

export default function FloatingDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 mx-auto max-w-4xl sm:bottom-6 animate-in slide-in-from-bottom duration-300">
      {/* Container Card */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
        
        {/* Contact/Address Quick Summary */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          
          {/* Location targeting with clickable link */}
          <a
            href={CLINIC_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group text-xs text-slate-700 hover:text-emerald-700 transition"
            title="Open in Google Maps"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-3xs font-extrabold uppercase tracking-widest text-slate-400">CLINIC MAP DIRECTION</span>
              <span className="font-bold underline decoration-emerald-200 decoration-dotted">75 Block K Commercial, DHA Lahore</span>
            </div>
          </a>

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Time hours tracking block */}
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <span className="block text-3xs font-extrabold uppercase tracking-widest text-slate-400">SHIFT TIMING</span>
              <span className="font-bold">{CLINIC_HOURS.days}: <span className="text-emerald-700 font-extrabold">4:30 PM - 8:15 PM</span></span>
            </div>
          </div>

        </div>

        {/* Dynamic Action Buttons */}
        <div className="flex items-center gap-2 border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
          
          {/* Direct Map Navigation short-cta */}
          <a
            href={CLINIC_CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-55 hover:bg-slate-100/80 px-3.5 py-2 text-2xs font-extrabold text-slate-700 transition"
          >
            <Navigation className="h-3.5 w-3.5 fill-slate-700 text-slate-55" />
            <span className="hidden sm:inline">Directions</span>
          </a>

          {/* Core Conversion Call-to-action */}
          <a
            href={`https://wa.me/${CLINIC_CONTACT.whatsapp}?text=Hi%20Mediplex%20Family%20Dentistry,%20I'd%20like%20to%20book%20a%20seat.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex grow items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-center text-2xs font-extrabold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-emerald-100 sm:grow-0"
            id="floating-whatsapp-booking"
          >
            <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Scroll to Top tiny anchor icon */}
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-900 transition"
            title="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>

        </div>

      </div>
    </div>
  );
}
