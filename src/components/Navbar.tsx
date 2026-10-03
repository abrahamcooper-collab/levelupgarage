"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ServiceAreasDataRecord } from "@/data/siteData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop Dropdown States
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const services = [
    {
      slug: "garage-door-installation",
      title: "Garage Door Installation",
      desc: "Insulated steel, modern flush & carriage house",
    },
    {
      slug: "garage-door-replacement",
      title: "Garage Door Replacement",
      desc: "Complete tear-down & old door haul-away",
    },
    {
      slug: "repair-maintenance",
      title: "Repair & Maintenance",
      desc: "Spring rebalancing & 25-point tune-ups",
    },
    {
      slug: "roller-replacement",
      title: "Roller Replacement",
      desc: "Whisper-quiet sealed nylon roller upgrades",
    },
    {
      slug: "garage-door-inspections",
      title: "Garage Door Inspections",
      desc: "Detailed 25-point safety inspection & written audit",
    },
    {
      slug: "cable-replacement",
      title: "Cable Replacement",
      desc: "Heavy-duty aircraft-grade cable replacement",
    },
  ];

  const cities = ServiceAreasDataRecord.citiesList;

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 py-3 sm:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Prominent Business Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group z-50">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.PNG"
              alt="Level Up Garage Door Service Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight drop-shadow-md">
              Level Up
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase text-slate-200 mt-0.5 sm:mt-1 drop-shadow-sm">
              GARAGE DOOR SERVICE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links with Dropdowns */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center gap-1.5 text-base font-bold text-white hover:text-slate-200 transition-colors drop-shadow-md focus:outline-none py-2"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Services Floating Card */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-88 bg-[#12161f]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2.5 z-50 text-white animate-fadeIn max-h-[85vh] overflow-y-auto">
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 py-1.5 border-b border-white/10 mb-1">
                  Our Services
                </div>
                {services.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="font-bold text-sm text-white">{item.title}</div>
                    <div className="text-xs text-slate-300 mt-0.5">{item.desc}</div>
                  </Link>
                ))}
                <div className="pt-2 mt-1 border-t border-white/10 text-center">
                  <Link
                    href="/#services"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    View All Services Overview →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasDropdownOpen(true)}
            onMouseLeave={() => setAreasDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
              className="flex items-center gap-1.5 text-base font-bold text-white hover:text-slate-200 transition-colors drop-shadow-md focus:outline-none py-2"
            >
              <span>Service Areas</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  areasDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Service Areas Floating Card */}
            {areasDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-96 bg-[#12161f]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-3.5 z-50 text-white animate-fadeIn">
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase px-3 py-1.5 border-b border-white/10 mb-2">
                  Northwest Georgia Cities
                </div>
                <div className="grid grid-cols-2 gap-1 max-h-72 overflow-y-auto custom-scrollbar">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      onClick={() => setAreasDropdownOpen(false)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      📍 {city.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-2 mt-2 border-t border-white/10 text-center">
                  <Link
                    href="/#areas"
                    onClick={() => setAreasDropdownOpen(false)}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    View Interactive Coverage Map →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/#work" className="text-base font-bold text-white hover:text-slate-200 transition-colors drop-shadow-md">Work</Link>
          <Link href="/#faq" className="text-base font-bold text-white hover:text-slate-200 transition-colors drop-shadow-md">FAQ</Link>
          <Link href="/#contact" className="text-base font-bold text-white hover:text-slate-200 transition-colors drop-shadow-md">Contact</Link>
        </nav>

        {/* Right Nav Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+17703433361"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl text-white text-sm font-bold hover:bg-white/20 hover:border-white/50 transition-all shadow-md"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(770) 343-3361</span>
          </a>
          <Link
            href="/#estimator"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 border border-white/20 text-white text-sm font-extrabold hover:bg-slate-800 hover:border-white/40 hover:-translate-y-0.5 transition-all shadow-xl"
          >
            Get a free quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden z-50">
          <a
            href="tel:+17703433361"
            className="sm:hidden px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d1217]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden animate-fadeIn overflow-y-auto">
          <div className="space-y-4 flex flex-col">
            {/* Mobile Services Accordion */}
            <div className="border-b border-white/10 pb-3">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-xl font-extrabold text-white text-left focus:outline-none"
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="mt-3 pl-3 space-y-2.5">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-slate-300 font-semibold hover:text-white"
                    >
                      • {s.title}
                    </Link>
                  ))}
                  <Link
                    href="/#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-sky-400 pt-1"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Service Areas Accordion */}
            <div className="border-b border-white/10 pb-3">
              <button
                type="button"
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="w-full flex items-center justify-between text-xl font-extrabold text-white text-left focus:outline-none"
              >
                <span>Service Areas</span>
                <svg
                  className={`w-5 h-5 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileAreasOpen && (
                <div className="mt-3 pl-3 grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${c.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-slate-300 font-semibold hover:text-white"
                    >
                      📍 {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Recent Work
            </Link>

            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              FAQ
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-3 pt-6 mt-4 border-t border-white/10">
            <a
              href="tel:+17703433361"
              className="w-full py-4 rounded-2xl border border-white/20 bg-white/10 text-white text-center font-bold text-base flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call (770) 343-3361</span>
            </a>
            <Link
              href="/#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-2xl bg-white text-slate-900 text-center font-extrabold text-base block shadow-xl"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
