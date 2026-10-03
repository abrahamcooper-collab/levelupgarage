import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Estimator from "@/components/Estimator";
import { ServiceAreasDataRecord } from "@/data/siteData";

export async function generateStaticParams() {
  return ServiceAreasDataRecord.citiesList.map((c) => ({
    slug: c.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = ServiceAreasDataRecord.getArea(slug);

  if (!area) {
    notFound();
  }

  const encodedMapCity = encodeURIComponent(`${area.cityName}, GA`);

  return (
    <main className="relative w-full overflow-x-hidden bg-white text-slate-900">
      <Navbar />

      {/* Service Area Hero Banner */}
      <section className="relative w-full bg-[#0d1217] text-white pt-36 sm:pt-44 pb-20 px-5 sm:px-8 overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c10]/95 via-[#0a0e13]/85 to-[#0d1217] z-[1]" />

        <div className="relative z-[2] max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#areas" className="hover:text-white transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-white">{area.cityName}</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-sky-400 border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 rounded-full mb-4">
              LOCAL GA SERVICE AREA
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-5">
              Garage Door Service in {area.cityName}
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-8">
              {area.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#estimator"
                className="py-3.5 px-7 rounded-full bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-xl"
              >
                Request estimate in {area.cityName}
              </a>
              <a
                href="tel:+17703433361"
                className="py-3.5 px-7 rounded-full border border-white/25 text-white font-extrabold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span>📞 (770) 343-3361</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Area Content & Interactive Map */}
      <section className="w-full py-20 px-5 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Local Coverage Info */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                  FAST LOCAL DISPATCH
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
                  Serving homeowners &amp; businesses across {area.cityName}.
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  {area.description}
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  {area.localNote}
                </p>
              </div>

              {/* Arrival Guarantee Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Arrival Guarantee</h3>
                    <p className="text-xs text-slate-500">{area.arrivalWindow}</p>
                  </div>
                </div>
              </div>

              {/* Popular Local Services */}
              <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Popular Garage Door Services in {area.cityName}:
                </h3>
                <ul className="space-y-3">
                  {area.popularServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Local Google Map */}
            <div className="lg:col-span-6 sticky top-28 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
                <iframe
                  title={`Map of ${area.cityName}`}
                  src={`https://maps.google.com/maps?q=${encodedMapCity}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 relative z-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-[#12161f] text-white border border-white/10 rounded-3xl p-7 shadow-xl">
                <h4 className="font-bold text-base text-white mb-2">Need Immediate Service in {area.cityName}?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Call our technician directly or submit an estimate request below for fast same-day dispatch.
                </p>
                <a
                  href="tel:+17703433361"
                  className="inline-flex items-center justify-center w-full py-3 px-5 rounded-full bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all"
                >
                  Call (770) 343-3361
                </a>
              </div>
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
