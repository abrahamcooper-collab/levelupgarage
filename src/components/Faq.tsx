"use client";

import { useState } from "react";

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can you get to my home?",
      a: "Most of Northwest Georgia is covered with same-day or next-morning appointments. Broken springs, doors stuck open, and security risks are triaged as emergencies and typically seen within a few hours.",
    },
    {
      q: "Do you charge for estimates?",
      a: "No. We provide free, transparent, itemized estimates before any work begins so you know the exact cost upfront.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes, fully licensed and insured across Georgia with comprehensive liability and worker's compensation coverage.",
    },
    {
      q: "How much does a new garage door cost?",
      a: "New door replacements typically range from $1,200 for single doors to $2,800+ for custom insulated or full-view glass doors, including installation and old door haul-away.",
    },
    {
      q: "How much is a garage door spring replacement?",
      a: "High-cycle spring replacements typically cost between $180 and $320 depending on single vs double spring systems and door weight.",
    },
    {
      q: "Can you repair my existing opener, or do I need a new one?",
      a: "We always troubleshoot existing openers first! If gears, sensors, or logic boards can be repaired affordably, we fix them rather than pushing replacement.",
    },
    {
      q: "Do you install smart Wi-Fi openers?",
      a: "Yes! We install ultra-quiet belt drive openers with built-in Wi-Fi, smartphone app control, battery backup, and security cameras.",
    },
    {
      q: "What brands do you work with?",
      a: "We work with top industry brands including LiftMaster, Chamberlain, Genie, Clopay, Amarr, and C.H.I. Overhead Doors.",
    },
    {
      q: "How long does a full door installation take?",
      a: "A typical single or double garage door replacement takes 3 to 5 hours from tear-down of the old door to testing the new system.",
    },
    {
      q: "How often should a garage door be serviced?",
      a: "We recommend an annual 25-point inspection and tune-up to keep springs balanced, tracks aligned, and hardware lubricated.",
    },
    {
      q: "My door reverses before it closes. What's wrong?",
      a: "This is usually caused by misaligned safety sensors, blocked infrared beams, or incorrect force limit settings on the opener.",
    },
    {
      q: "Why is my garage door so loud?",
      a: "Noisy operation is typically caused by worn steel rollers, dry bearings, unlubricated springs, or chain-drive slack.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Header & Description */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-6">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
                Answers, before<br />you have to ask.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Still unsure? The concierge in the corner answers instantly, or call and speak to a technician.
              </p>
            </div>
          </div>

          {/* Right Column: Search Bar & FAQ Accordions */}
          <div className="lg:col-span-7">
            {/* Search Input */}
            <div className="relative mb-6">
              <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search questions — springs, pricing, warranty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all shadow-sm"
              />
            </div>

            {/* Accordion Container */}
            <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden divide-y divide-slate-200/80 shadow-sm">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <svg
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-slate-900" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
