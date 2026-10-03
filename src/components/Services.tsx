import Image from "next/image";
import Link from "next/link";
import { ServicesDataRecord } from "@/data/siteData";

export default function Services() {
  const servicesList = Object.values(ServicesDataRecord.services);

  const serviceIcons: Record<string, React.ReactNode> = {
    "garage-door-installation": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    "garage-door-replacement": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    "repair-maintenance": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    "roller-replacement": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    "garage-door-inspections": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    "cable-replacement": (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  };

  return (
    <section id="services" className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-5">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Expert garage door solutions.<br />One standard of work.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mt-5 leading-relaxed max-w-2xl">
            Whether it&apos;s a snapped cable, noisy rollers, or a full curb-appeal replacement, the process is the same: diagnose properly, quote transparently, and finish clean.
          </p>
        </div>

        {/* Service Cards Grid (6 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.slug}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={85}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                  {serviceIcons[service.slug] || serviceIcons["repair-maintenance"]}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  <Link href={`/services/${service.slug}`} className="hover:text-slate-600 transition-colors">
                    {service.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features Highlights */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Dedicated Page Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors group/link mt-auto"
                >
                  <span>Explore service details</span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
