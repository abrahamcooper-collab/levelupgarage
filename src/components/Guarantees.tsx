export default function Guarantees() {
  const guarantees = [
    {
      title: "Upfront, itemized pricing",
      desc: "You see the number, the parts, and the options before a wrench moves. No mystery diagnostic charges.",
      badge: "Flat-rate pricing on every invoice",
    },
    {
      title: "Technicians, not salespeople",
      desc: "Background-checked, manufacturer-trained, and paid to fix — not to push replacements you don't need.",
      badge: "Repair-first recommendation policy",
    },
    {
      title: "Real same-day capacity",
      desc: "Local trucks stocked with springs, rollers, cables, and openers so most jobs finish on the first visit.",
      badge: "92% first-visit completion rate",
    },
    {
      title: "12 years in Northwest Georgia",
      desc: "We're not a national call center routing your job to a stranger. We live and work in these towns.",
      badge: "2,400+ local homes serviced",
    },
    {
      title: "Warranty in writing",
      desc: "12 months on labor, manufacturer coverage up to lifetime on select doors and openers.",
      badge: "Documented on every invoice",
    },
    {
      title: "Clean job sites",
      desc: "Drop cloths, magnetic sweeps for stray hardware, and old door haul-away included on installs.",
      badge: "Haul-away included",
    },
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-4">
            WHY LEVEL UP
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built for homeowners who are tired of being sold to.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Every claim below is something you can hold us to on the invoice.
          </p>
        </div>

        {/* 6 Guarantee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guarantees.map((g, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {g.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {g.desc}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{g.badge}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
