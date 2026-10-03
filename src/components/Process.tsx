export default function Process() {
  const steps = [
    {
      step: "STEP 1",
      title: "Tell us what's wrong",
      description:
        "Call, text, or use the instant estimate tool. We ask the right questions up front so the truck arrives with the right parts.",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      step: "STEP 2",
      title: "On-site diagnosis",
      description:
        "A background-checked technician inspects springs, cables, tracks, rollers, and the opener — then shows you photos of what they found.",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      step: "STEP 3",
      title: "Approve the flat price",
      description:
        "You get an itemized, upfront price with options. Nothing happens until you say go. No surprise line items, ever.",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "STEP 4",
      title: "Done right, guaranteed",
      description:
        "We complete the work, balance and safety-test the door, clean the site, and back it with a 12-month labor warranty.",
      icon: (
        <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="w-full bg-[#0f1216] py-20 sm:py-24 px-5 sm:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 border border-white/15 px-3.5 py-1.5 rounded-full mb-5 bg-white/5">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Four steps.<br />Zero guesswork.
          </h2>
        </div>

        {/* 4-Step Card Grid Container */}
        <div className="bg-[#161a22]/60 border border-white/10 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl backdrop-blur-xl">
          {steps.map((item, index) => (
            <div key={index} className="p-8 sm:p-9 flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
              <div>
                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  {item.icon}
                </div>

                {/* Step Label */}
                <span className="block text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-2">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
