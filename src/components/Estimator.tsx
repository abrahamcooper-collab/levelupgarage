"use client";

import { useState } from "react";

export default function Estimator() {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>("repair");
  const [propertyType, setPropertyType] = useState<string>("residential");
  const [doorCount, setDoorCount] = useState<string>("1");
  const [timeframe, setTimeframe] = useState<string>("asap");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "", zip: "" });

  const totalSteps = 5;

  const stepTitles = [
    "Project",
    "Property Type",
    "Door Count",
    "Timeframe",
    "Contact Info",
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="w-full bg-[#f8fafc] py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-300 px-3.5 py-1.5 rounded-full mb-4 bg-white/80">
            INSTANT ESTIMATE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Know your price before anyone knocks.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            A few quick questions and a technician who calls back — not a form that disappears into a void.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {!submitted ? (
            <>
              {/* Header Bar: Step Info & Progress Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-8">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                    INSTANT ESTIMATE
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    Step {step} of {totalSteps} - {stepTitles[step - 1]}
                  </h3>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalSteps }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx + 1 === step
                          ? "w-8 bg-slate-900"
                          : idx + 1 < step
                          ? "w-4 bg-slate-400"
                          : "w-4 bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* STEP 1: What do you need help with? */}
              {step === 1 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                    What do you need help with?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      {
                        id: "repair",
                        title: "Something is broken",
                        subtitle: "Spring, cable, opener, off-track",
                      },
                      {
                        id: "opener",
                        title: "New / upgraded opener",
                        subtitle: "Smart, belt drive, keypad",
                      },
                      {
                        id: "maintenance",
                        title: "Tune-up & maintenance",
                        subtitle: "25-point precision service",
                      },
                      {
                        id: "replacement",
                        title: "New door installation",
                        subtitle: "Full replacement, styles & glass",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProjectType(item.id)}
                        className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                          projectType === item.id
                            ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]"
                            : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-base">{item.title}</div>
                        <div
                          className={`text-xs mt-1 ${
                            projectType === item.id ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Property Type (Residential / Commercial) */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                    What type of property is this for?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      {
                        id: "residential",
                        title: "Residential",
                        subtitle: "Single family home, townhouse, or private garage",
                        icon: (
                          <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        ),
                      },
                      {
                        id: "commercial",
                        title: "Commercial",
                        subtitle: "Warehouse, shop, rolling steel, or commercial bay",
                        icon: (
                          <svg className="w-6 h-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ),
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPropertyType(item.id)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 ${
                          propertyType === item.id
                            ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]"
                            : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className={propertyType === item.id ? "text-white" : "text-slate-700"}>
                          {item.icon}
                        </div>
                        <div className="font-bold text-lg">{item.title}</div>
                        <div
                          className={`text-xs mt-1 leading-relaxed ${
                            propertyType === item.id ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Door Count */}
              {step === 3 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                    How many garage doors need service?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      { id: "1", title: "1 Door", subtitle: "Single door service or install" },
                      { id: "2", title: "2 Doors", subtitle: "Double bay or 2 doors" },
                      { id: "3+", title: "3+ Doors", subtitle: "Commercial bay or multi-door" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setDoorCount(item.id)}
                        className={`p-6 rounded-2xl border text-center transition-all duration-200 ${
                          doorCount === item.id
                            ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]"
                            : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="text-2xl font-extrabold mb-1">{item.title}</div>
                        <div
                          className={`text-xs ${
                            doorCount === item.id ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Timeframe */}
              {step === 4 && (
                <div className="animate-fadeIn">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                    When do you need service?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      {
                        id: "asap",
                        title: "Today / Emergency",
                        subtitle: "Trapped car, door off track, broken spring",
                      },
                      {
                        id: "this_week",
                        title: "This Week",
                        subtitle: "Flexible schedule over next 3-7 days",
                      },
                      {
                        id: "planning",
                        title: "Planning Ahead",
                        subtitle: "Gathering quotes for an upcoming project",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTimeframe(item.id)}
                        className={`p-6 rounded-2xl border text-left transition-all duration-200 ${
                          timeframe === item.id
                            ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]"
                            : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="font-bold text-base mb-1">{item.title}</div>
                        <div
                          className={`text-xs leading-relaxed ${
                            timeframe === item.id ? "text-slate-300" : "text-slate-500"
                          }`}
                        >
                          {item.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Info */}
              {step === 5 && (
                <form onSubmit={handleSubmit} className="animate-fadeIn">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Where should we send your estimate?
                  </h4>
                  <p className="text-sm text-slate-500 mb-6">
                    We&apos;ll call or text you directly with a transparent, itemized quote.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(770) 000-0000"
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Zip Code / City
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="30701 (Calhoun / Northwest GA)"
                          value={contactInfo.zip}
                          onChange={(e) => setContactInfo({ ...contactInfo, zip: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 px-6 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Get Instant Quote</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Navigation Bar for Steps 1-4 */}
              {step < 5 && (
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNext}
                    className="py-3 px-7 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Continue</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Submission Success State */
            <div className="py-12 text-center animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
                ✓
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">
                Estimate Request Received!
              </h4>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Thank you, {contactInfo.name || "valued customer"}. A technician is reviewing your details ({propertyType} service for {doorCount} door{doorCount !== "1" ? "s" : ""}) and will call/text you at {contactInfo.phone || "your number"} shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Start New Estimate
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
