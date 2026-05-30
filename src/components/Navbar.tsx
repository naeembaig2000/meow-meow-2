import React, { useState } from "react";
import { CLINIC_META, CLINIC_CONTACT, CLINIC_HOURS } from "../data";
import { Phone, Clock, MapPin, Eye, Code, Menu, X, CheckSquare, MessageCircle } from "lucide-react";

interface NavbarProps {
  viewMode: "patient" | "toolkit";
  setViewMode: (mode: "patient" | "toolkit") => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      {/* Top Banner with Quick Stats/Hours */}
      <div className="hidden sm:block bg-slate-900 px-4 py-2 text-xs font-medium text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              Hours: <span className="text-white">{CLINIC_HOURS.days} ({CLINIC_HOURS.time})</span>
            </span>
            <span className="hidden h-3 w-px bg-slate-700 md:inline" />
            <a
              href={CLINIC_CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
              id="top-banner-maps-link"
            >
              <MapPin className="h-3.5 w-3.5 text-emerald-400" />
              <span>Location: <span className="text-white hover:underline">{CLINIC_META.locationState}</span></span>
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-slate-400">🔥 High-Converting CRO Layout</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Practice Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200">
            <span className="font-serif text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="font-sans text-lg font-bold tracking-tight text-slate-900 md:text-xl">
              {CLINIC_META.practiceName}
            </h1>
            <p className="-mt-1 text-2xs font-medium text-emerald-600 uppercase tracking-widest">
              By Dr. Naeem Baig
            </p>
          </div>
        </div>

        {/* Desktop Navigation & Actions */}
        <nav className="hidden items-center gap-6 md:flex">
          {viewMode === "patient" && (
            <div className="flex items-center gap-5 text-sm font-medium text-slate-600">
              <a href="#services" className="transition hover:text-emerald-600">
                Special Treatments
              </a>
              <a href="#doctor" className="transition hover:text-emerald-600">
                Meet the Dentist
              </a>
              <a href="#reviews" className="transition hover:text-emerald-600">
                Patient Stories
              </a>
              <a href="#book" className="transition hover:text-emerald-600">
                Book Visit
              </a>
            </div>
          )}

          <div className="h-5 w-px bg-slate-200" />

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
            <button
              onClick={() => {
                setViewMode("patient");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                viewMode === "patient"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              id="btn-patient-mode"
            >
              <Eye className="h-3.5 w-3.5 text-emerald-500" />
              Patient Preview
            </button>
            <button
              onClick={() => {
                setViewMode("toolkit");
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                viewMode === "toolkit"
                  ? "bg-white text-emerald-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              id="btn-toolkit-mode"
            >
              <Code className="h-3.5 w-3.5 text-indigo-500" />
              Copywriter Toolkit
            </button>
          </div>

          {/* Contact CTA */}
          <a
            href={`https://wa.me/${CLINIC_CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-emerald-100"
            id="nav-whatsapp-cta"
          >
            <MessageCircle className="h-4 w-4 fill-white text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Hamburger Menu icon */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="mb-4 flex flex-col gap-3">
            <span className="text-2xs font-bold uppercase tracking-wider text-slate-400">
              SWITCH WORKSPACE VIEW
            </span>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
              <button
                onClick={() => {
                  setViewMode("patient");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition ${
                  viewMode === "patient" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
                }`}
              >
                <Eye className="h-3.5 w-3.5 text-emerald-500" />
                Patient site
              </button>
              <button
                onClick={() => {
                  setViewMode("toolkit");
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition ${
                  viewMode === "toolkit" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-600"
                }`}
              >
                <Code className="h-3.5 w-3.5 text-indigo-500" />
                Copywriter docs
              </button>
            </div>
          </div>

          {viewMode === "patient" && (
            <div className="flex flex-col gap-3 py-2 text-sm font-semibold text-slate-700">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg py-2 hover:text-emerald-600"
              >
                Special Treatments
              </a>
              <a
                href="#doctor"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg py-2 hover:text-emerald-600"
              >
                Meet the Dentist
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg py-2 hover:text-emerald-600"
              >
                Patient Stories
              </a>
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg py-2 hover:text-emerald-600"
              >
                Book Appointment
              </a>
            </div>
          )}

          <div className="mt-4 border-t border-slate-100 pt-4">
            <a
              href={`https://wa.me/${CLINIC_CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center font-bold text-white transition hover:bg-emerald-700"
            >
              <MessageCircle className="h-5 w-5 fill-white text-emerald-600" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
