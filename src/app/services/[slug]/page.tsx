import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Estimator from "@/components/Estimator";
import { ServicesDataRecord } from "@/data/siteData";

export async function generateStaticParams() {
  return Object.keys(ServicesDataRecord.services).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = ServicesDataRecord.services[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="relative w-full overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* Service Hero Banner */}
      <section className="relative w-full bg-[#0d1217] text-white pt-36 sm:pt-44 pb-20 px-5 sm:px-8 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/90 via-[#0a0e13]/80 to-[#0d1217] z-[1]" />
        
        {/* Hero Background Image if present */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-20 z-[0]"
          quality={80}
          priority
        />

        <div className="relative z-[2] max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-sky-400 border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 rounded-full mb-4">
              SERVICE DETAILS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-5">
              {service.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8">
              {service.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#estimator"
                className="py-3.5 px-7 rounded-full bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-xl"
              >
                Get instant quote
              </a>
              <a
                href="tel:+17703433361"
                className="py-3.5 px-7 rounded-full border border-white/25 text-white font-extrabold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>📞 Call (770) 343-3361</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="w-full py-20 px-5 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Comprehensive Overview & Highlights */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                  WHAT IS INCLUDED
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
                  Professional service engineered for safety &amp; longevity.
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-5">
                  Key Service Highlights:
                </h3>
                <ul className="space-y-3.5">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[16/9] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>

            {/* Right Column: Pricing Guarantee Box & Service FAQs */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              {/* Guarantee Box */}
              <div className="bg-[#12161f] text-white border border-white/10 rounded-3xl p-8 shadow-xl">
                <span className="inline-block text-[10px] font-extrabold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full mb-4">
                  LEVEL UP GUARANTEE
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">
                  No hidden fees. Flat-rate quotes.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.pricingNote}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> 12-Month labor warranty documented on invoice
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> Licensed &amp; insured local GA technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> Same-day appointments available
                  </li>
                </ul>
              </div>

              {/* Service-Specific FAQs */}
              {service.faqs.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <div className="font-bold text-sm text-slate-900 mb-1">
                          {faq.q}
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimator Wizard */}
      <Estimator />

      <Footer />
    </main>
  );
}
