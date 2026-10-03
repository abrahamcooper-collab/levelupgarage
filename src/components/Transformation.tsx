"use client";

import Image from "next/image";
import { useState } from "react";

export default function Transformation() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-5 sm:px-8 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtext & Stat Cards */}
          <div className="lg:col-span-5">
            <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500 border border-slate-200 bg-slate-50 px-3.5 py-1.5 rounded-full mb-6">
              BEFORE &amp; AFTER
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              The upgrade you notice from the street.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Drag the handle to see a real Northwest Georgia replacement: a rusted, sagging raised-panel door swapped for an insulated modern flush door in a single day.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">1 day</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">
                  Typical install
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">R-16</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">
                  Insulation upgrade
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">-70%</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-1 leading-snug">
                  Operating noise
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Before & After Slider Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl aspect-[4/3] select-none bg-slate-100">
              {/* After Image (Background) */}
              <Image
                src="/after-door.png"
                alt="After: Modern flush insulated garage door"
                fill
                className="object-cover"
                quality={85}
              />

              {/* Before Image (Clipped Overlay using clipPath) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/before-door.png"
                  alt="Before: Old rusted garage door"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>

              {/* Before / After Badges */}
              <div className="absolute top-4 left-4 z-10 bg-slate-900/80 text-white border border-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 z-10 bg-slate-900/80 text-white border border-white/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                AFTER
              </div>

              {/* Slider Line & Circular Handle */}
              <div
                className="absolute inset-y-0 w-0.5 bg-white z-20 shadow-2xl pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 font-bold flex items-center justify-center shadow-lg border border-slate-200 text-xs pointer-events-none">
                  ↔
                </div>
              </div>

              {/* Range Input for Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
