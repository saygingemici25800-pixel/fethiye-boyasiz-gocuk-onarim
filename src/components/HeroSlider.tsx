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
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden text-white"
      aria-roledescription="carousel"
      aria-label="Tanıtım Slaytları"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === idx ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== idx}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === idx ? "cs-ken-burns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d]/80 via-black/50 to-transparent" />

          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="cs-hero-badge mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm md:text-sm">
                  {slide.small}
                </p>
                <h1 className="cs-hero-title mb-6 text-4xl font-extrabold uppercase leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="cs-hero-sub mb-10 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                  {slide.subtitle}
                </p>
                <div className="cs-hero-cta flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.cta.href}
                    className="cs-btn-press inline-flex items-center rounded-lg bg-[#d4232a] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-red-600/25 hover:shadow-red-600/40"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Trust badges */}
      <div className="cs-hero-badges absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-red-600/30">
          <span className="text-sm">✓</span>
          Ücretsiz Ekspertiz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-black/30">
          <span className="text-sm">✓</span>
          Tramer Kaydı Oluşmaz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-red-600/30">
          <span className="text-sm">✓</span>
          Aynı Gün Teslim
        </div>
      </div>

      <button
        type="button"
        aria-label="Önceki"
        onClick={() => go(-1)}
        className="cs-btn-press absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-[#d4232a] md:left-8"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Sonraki"
        onClick={() => go(1)}
        className="cs-btn-press absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-[#d4232a] md:right-8"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2.5 md:bottom-8">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            aria-label={`${i + 1}. slayda git`}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === idx ? "w-10 bg-[#d4232a]" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
