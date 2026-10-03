import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#f8fafc] py-20 sm:py-24 px-5 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#14181f] border border-white/10 rounded-3xl p-8 sm:p-14 shadow-2xl text-left relative overflow-hidden">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Your garage door<br />should just work.<br />Let&apos;s make it that way.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Same-day appointments across Northwest Georgia, upfront pricing, and a 12-month labor warranty on every job.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#estimator"
                className="py-3.5 px-6 rounded-full bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-lg"
              >
                Get my free quote
              </Link>
              <a
                href="tel:+17703433361"
                className="py-3.5 px-6 rounded-full border border-white/25 text-white font-extrabold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(770) 343-3361</span>
              </a>
              <a
                href="sms:+17703433361"
                className="py-3.5 px-6 rounded-full border border-white/25 text-white font-extrabold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Text us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
