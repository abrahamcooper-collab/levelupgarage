import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Garage Door Opener Installation & Repair",
      description:
        "Belt-drive and smart Wi-Fi openers installed, calibrated, and safety-tested the same day. We diagnose logic boards, travel limits, safety sensors, and worn drives instead of guessing.",
      features: [
        "Smart phone-controlled openers",
        "Ultra-quiet belt drive upgrades",
        "Safety sensor alignment & testing",
        "Same-day diagnostics",
      ],
      image: "/service-opener.png",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Garage Door Service & Maintenance",
      description:
        "A 25-point precision tune-up: springs balanced, rollers and hinges serviced, cables inspected, tracks aligned, and hardware torqued to spec so your door runs silent and safe year-round.",
      features: [
        "25-point safety inspection",
        "Spring tension balancing",
        "Roller, hinge & cable service",
        "Noise reduction tuning",
      ],
      image: "/service-maintenance.png",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Garage Door Installation & Replacement",
      description:
        "Insulated steel, flush modern, carriage house, and full-view glass doors — measured, installed, and finished to a showroom standard with clean job sites and a written warranty.",
      features: [
        "Insulated R-value upgrades",
        "Modern flush & full-view styles",
        "Precision measure & install",
        "Old door haul-away included",
      ],
      image: "/service-install.png",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 border border-slate-200 px-3.5 py-1.5 rounded-full mb-5">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-[2.75rem] md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Three services. One standard of work.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mt-5 leading-relaxed max-w-2xl">
            Whether it&apos;s a 6am spring failure or a full curb-appeal upgrade, the process is the same: diagnose properly, quote transparently, and finish clean.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={85}
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors group mt-auto"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
