import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e1217] border-t border-white/10 text-white pt-16 pb-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Ratings */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 mb-6 group">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.PNG"
                  alt="Level Up Garage Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-none text-white">
                  Level Up
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold text-slate-300 uppercase tracking-[0.2em] mt-1">
                  GARAGE SERVICES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              Reliable, expert garage door services tailored for homeowners in Northwest Georgia.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-xs font-semibold mb-6">
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-slate-300">4.9 average from 300+ reviews</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xs"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xs"
              >
                ig
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-4">
              SERVICES
            </span>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Garage Door Opener Installation &amp; Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Garage Door Service &amp; Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Garage Door Installation &amp; Replacement
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  Recent projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-4">
              SERVICE AREAS
            </span>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-300 mb-3">
              <span>Dalton, GA</span>
              <span>Calhoun, GA</span>
              <span>Rome, GA</span>
              <span>Cartersville, GA</span>
              <span>Chatsworth, GA</span>
              <span>Ringgold, GA</span>
              <span>Fort Oglethorpe, GA</span>
              <span>LaFayette, GA</span>
              <span>Adairsville, GA</span>
              <span>Rockmart, GA</span>
            </div>
            <Link href="#areas" className="text-xs font-bold text-slate-400 hover:text-white underline transition-colors">
              See full coverage
            </Link>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-4">
              CONTACT
            </span>
            <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
              <li>
                <a href="tel:+17703433361" className="hover:text-white transition-colors">
                  📞 (770) 343-3361
                </a>
              </li>
              <li>
                <a href="mailto:levelupgaragedoorservice@gmail.com" className="hover:text-white transition-colors break-all">
                  ✉️ levelupgaragedoorservice@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                📍 Serving Northwest Georgia &amp; surrounding counties
              </li>
            </ul>

            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-2">
              HOURS
            </span>
            <ul className="space-y-1 text-[11px] text-slate-400">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-slate-200 font-medium">7:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-slate-200 font-medium">8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between text-amber-400">
                <span>Sunday</span>
                <span className="font-medium">Emergency service only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 Level Up Garage Services. Licensed &amp; insured. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
