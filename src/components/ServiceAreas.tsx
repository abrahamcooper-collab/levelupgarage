import Link from "next/link";
import { ServiceAreasDataRecord } from "@/data/siteData";

export default function ServiceAreas() {
  const cities = ServiceAreasDataRecord.citiesList;

  return (
    <section id="areas" className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Towns & Links */}
          <div className="lg:col-span-6">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-6">
              LOCAL COVERAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              Northwest Georgia<br />is our whole map.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              We&apos;re not spread thin across three states. Our trucks run a tight radius, which is exactly why we can promise fast arrival windows.
            </p>

            {/* City Link Pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {cities.map((city, idx) => (
                <Link
                  key={idx}
                  href={`/service-areas/${city.slug}`}
                  className="bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
                >
                  {city.name}
                </Link>
              ))}
            </div>

            <Link
              href={`/service-areas/${cities[0].slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors group"
            >
              <span>Explore city-by-city coverage</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Real Interactive Google Map */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
              {/* Real Interactive Google Map Embed */}
              <iframe
                title="Northwest Georgia Service Map"
                src="https://maps.google.com/maps?q=Calhoun%2C%20GA%2030701&t=&z=9&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 relative z-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Arrival Window Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 shadow-lg z-10 pointer-events-none">
                <div className="text-xs font-extrabold text-slate-900">
                  Average arrival window
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Under 3 hours for emergencies · Same or next day for scheduled work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
