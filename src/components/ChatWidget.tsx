"use client";

export default function ChatWidget() {
  return (
    <button
      onClick={() => { window.location.href = "tel:+17703433361"; }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#121821]/90 border border-white/20 backdrop-blur-xl text-white flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 hover:bg-[#1e2838] hover:border-white/35 transition-all"
      aria-label="Contact Level Up Garage Door Service"
      title="Call or Text (770) 343-3361"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
