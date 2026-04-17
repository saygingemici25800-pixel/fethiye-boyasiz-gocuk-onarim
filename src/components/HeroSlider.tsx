"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { HERO_SLIDES } from "@/lib/site-data";

export function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const id = window.setInterval(() => setIdx((v) => (v + 1) % total), 7000);
    return () => window.clearInterval(id);
  }, [total]);

  const go = (delta: number) => setIdx((v) => (v + delta + total) % total);

  return (
    <section
      className="relative h-[85svh] min-h-[500px] max-h-[800px] w-full overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Tanıtım Slaytları"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === idx ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== idx}
        >
          {/* Dark background behind image */}
          <div className="absolute inset-0 bg-[#0a1e3d]" />
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-contain object-center ${i === idx ? "cs-ken-burns" : ""}`}
          />
          {/* Gradients over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d]/90 via-[#0a1e3d]/60 to-[#0a1e3d]/30" />

          <div className="relative z-10 flex h-full items-center">
            {/* 8px grid: px-24/32, max-w consistent */}
            <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
              <div className="max-w-[600px]">
                <p className="cs-hero-badge mb-4 inline-block rounded-full border border-white/15 bg-white/[.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm md:text-xs">
                  {slide.small}
                </p>
                <h1 className="cs-hero-title font-gambarino-bold mb-5 text-[36px] uppercase leading-[1.08] tracking-tight md:text-[48px] lg:text-[56px]">
                  {slide.title}
                </h1>
                <p className="cs-hero-sub mb-8 max-w-[480px] text-[15px] leading-[1.7] text-white/75 md:text-base">
                  {slide.subtitle}
                </p>
                <div className="cs-hero-cta">
                  <Link
                    href={slide.cta.href}
                    className="cs-btn-press inline-flex items-center rounded-xl bg-[#d4232a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white shadow-xl shadow-red-600/20"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Trust badges — 8px gap */}
      <div className="cs-hero-badges absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-red-600/20">
          <span className="text-xs">✓</span>
          Ücretsiz Ekspertiz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-black/20">
          <span className="text-xs">✓</span>
          Tramer Kaydı Oluşmaz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-red-600/20">
          <span className="text-xs">✓</span>
          Aynı Gün Teslim
        </div>
      </div>

      {/* Nav arrows — consistent 48px */}
      <button
        type="button"
        aria-label="Önceki"
        onClick={() => go(-1)}
        className="cs-btn-press absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.08] text-white/80 backdrop-blur-sm hover:bg-[#d4232a] hover:text-white md:left-6"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Sonraki"
        onClick={() => go(1)}
        className="cs-btn-press absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/[.08] text-white/80 backdrop-blur-sm hover:bg-[#d4232a] hover:text-white md:right-6"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      {/* Dots — 32px from bottom */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`${i + 1}. slayda git`}
            onClick={() => setIdx(i)}
            className={`h-[6px] rounded-full transition-all duration-500 ${
              i === idx ? "w-8 bg-[#d4232a]" : "w-[6px] bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
