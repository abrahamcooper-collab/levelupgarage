export default function RecentWork() {
  const projects = [
    {
      title: "Duplex portfolio refresh in Calhoun",
      problem:
        "Two 20-year-old uninsulated doors were rusting, sticking in humidity, and driving tenant complaints and repeat service calls.",
      solution:
        "Replaced both with R-16 insulated steel flush doors, new torsion systems, nylon rollers, and matching smart openers on one shared app account.",
      stats: [
        { value: "-92%", label: "Service calls" },
        { value: "1 day", label: "Install time" },
        { value: "4.9★", label: "Tenant rating" },
      ],
    },
    {
      title: "Emergency spring failure in Dalton",
      problem:
        "A snapped torsion spring trapped two vehicles inside on a workday morning with the homeowner due at a shift.",
      solution:
        "Dispatched within 90 minutes, replaced both springs as a matched pair, re-balanced the door, and re-set the opener force limits.",
      stats: [
        { value: "90 min", label: "Response" },
        { value: "2.5 hrs", label: "On site" },
        { value: "12 mo", label: "Warranty" },
      ],
    },
    {
      title: "Modern full-view upgrade in Rome",
      problem:
        "A renovated mid-century home had a builder-grade raised panel door that undercut the entire exterior remodel.",
      solution:
        "Installed a black aluminum full-view frosted glass door with a whisper-quiet belt drive, matched to the new window frames.",
      stats: [
        { value: "Transformed", label: "Curb appeal" },
        { value: "-70%", label: "Noise" },
        { value: "Lifetime", label: "Warranty" },
      ],
    },
  ];

  return (
    <section id="work" className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-5">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Problems solved,<br />measured, and<br />documented.
          </h2>
        </div>

        {/* Case Studies List */}
        <div className="space-y-6 max-w-5xl">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                {/* Title & Problem */}
                <div className="lg:col-span-5 pr-0 lg:pr-4">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    <strong className="text-slate-800 font-semibold">Problem —</strong> {proj.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="lg:col-span-4 pt-6 lg:pt-0 pl-0 lg:pl-6 pr-0 lg:pr-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 font-semibold">Solution —</strong> {proj.solution}
                  </p>
                </div>

                {/* Stats Column */}
                <div className="lg:col-span-3 pt-6 lg:pt-0 pl-0 lg:pl-6 flex flex-col justify-center space-y-3">
                  {proj.stats.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-baseline justify-between sm:justify-start sm:gap-4">
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">{s.value}</span>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
