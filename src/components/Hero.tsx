import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Luxury home with modern garage door at twilight"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/85 via-[#0a0e13]/60 to-[#080c10]/95 z-[1]" />

      {/* Main Hero Content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-8 flex flex-col justify-center flex-grow">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl w-fit mb-5 sm:mb-7">
          <svg className="text-slate-200" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase text-slate-100">
            SERVING NORTHWEST GEORGIA
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(2.125rem,5.5vw,4.75rem)] font-extrabold leading-[1.08] tracking-tight text-white max-w-[820px] drop-shadow-2xl">
          The garage door<br />
          people your<br />
          neighbors actually<br />
          recommend.
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(0.9375rem,1.2vw,1.1875rem)] leading-relaxed text-slate-300 max-w-[620px] mt-5 sm:mt-6 font-medium">
          Openers, springs, tune-ups, and full door replacements — diagnosed properly, priced upfront, and finished the same day whenever we can.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3.5 sm:gap-4 mt-7 sm:mt-8 flex-wrap">
          <Link
            href="#estimator"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-slate-900 text-sm sm:text-base font-bold hover:bg-slate-100 hover:-translate-y-0.5 transition-all shadow-xl w-full sm:w-auto"
          >
            <span>Get free estimate</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <a
            href="tel:+17703433361"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm sm:text-base font-semibold hover:bg-white/20 hover:border-white/35 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call (770) 343-3361</span>
          </a>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-5 sm:px-8 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#121821]/70 border border-white/15 backdrop-blur-2xl rounded-2xl p-3 sm:p-5 shadow-2xl">
          {/* Trust Item 1 */}
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-3 border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r border-white/10">
            <svg className="text-slate-100 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-slate-50 whitespace-nowrap">4.9★ from 300+ reviews</span>
          </div>

          {/* Trust Item 2 */}
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-3 border-b sm:border-b-0 lg:border-r border-white/10">
            <svg className="text-slate-100 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-slate-50 whitespace-nowrap">Licensed &amp; fully insured</span>
          </div>

          {/* Trust Item 3 */}
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-3 border-b sm:border-b-0 sm:border-r lg:border-r border-white/10">
            <svg className="text-slate-100 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-slate-50 whitespace-nowrap">12 years in business</span>
          </div>

          {/* Trust Item 4 */}
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-3">
            <svg className="text-slate-100 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-slate-50 whitespace-nowrap">12-month labor warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
