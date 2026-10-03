"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 py-3 sm:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Prominent Business Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-4 group z-50">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.PNG"
              alt="Level Up Garage Services Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white leading-none tracking-tight">
              Level Up
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.18em] uppercase text-slate-300 mt-0.5 sm:mt-1">
              GARAGE SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#services" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Services</Link>
          <Link href="#work" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Work</Link>
          <Link href="#areas" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Service Areas</Link>
          <Link href="#faq" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">FAQ</Link>
          <Link href="#contact" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Right Nav Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+17703433361"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-xl text-white text-sm font-bold hover:bg-white/15 hover:border-white/35 transition-all"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(770) 343-3361</span>
          </a>
          <Link
            href="#estimator"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#11161d] border border-white/18 text-white text-sm font-extrabold hover:bg-[#1e2632] hover:border-white/30 hover:-translate-y-0.5 transition-all shadow-lg"
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
        <div className="fixed inset-0 z-40 bg-[#0d1217]/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden animate-fadeIn">
          <div className="space-y-6 flex flex-col">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Services
            </Link>
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Recent Work
            </Link>
            <Link
              href="#areas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Service Areas
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-extrabold text-white hover:text-slate-300 transition-colors border-b border-white/10 pb-3"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-3 pt-6">
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
              href="#estimator"
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
