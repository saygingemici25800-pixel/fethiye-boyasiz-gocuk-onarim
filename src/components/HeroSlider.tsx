"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
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
          {/* Dark background behind images */}
          <div className="absolute inset-0 bg-[#0a1e3d]" />

          {/* Before / After split — stacked on mobile, side-by-side on md+ */}
          <div className="absolute inset-0 flex flex-col md:flex-row">
            <div className="relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
              <Image
                src={slide.beforeImage}
                alt={`${slide.title} — Öncesi`}
                fill
                priority={i === 0}
                sizes="(min-width:768px) 50vw, 100vw"
                className={`object-cover object-center ${i === idx ? "cs-ken-burns" : ""}`}
              />
            </div>
            <div className="relative h-1/2 w-full overflow-hidden md:h-full md:w-1/2">
              <Image
                src={slide.afterImage}
                alt={`${slide.title} — Sonrası`}
                fill
                priority={i === 0}
                sizes="(min-width:768px) 50vw, 100vw"
                className={`object-cover object-center ${i === idx ? "cs-ken-burns" : ""}`}
              />
            </div>
          </div>

          {/* Subtle divider between halves */}
          <div
            className="absolute left-0 right-0 top-1/2 z-[4] h-px -translate-y-1/2 bg-white/25 md:inset-y-0 md:left-1/2 md:top-0 md:h-auto md:w-px md:translate-y-0"
            aria-hidden
          />

          {/* Öncesi / Sonrası labels */}
          <span className="absolute left-4 top-24 z-[5] rounded-md bg-[#d4232a] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/30 md:left-8">
            Öncesi
          </span>
          <span className="absolute right-4 top-[calc(50%+1rem)] z-[5] rounded-md bg-[#2d2d2d] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/30 md:right-8 md:top-24">
            Sonrası
          </span>

          {/* Gradient over images for text legibility — top-weighted so content reads across both halves */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e3d]/80 via-[#0a1e3d]/35 to-[#0a1e3d]/10" />

          {/* Text content — upper center of the full slide */}
          <div className="relative z-10 flex h-full w-full items-start justify-center pt-24 md:pt-28">
            <div className="mx-auto w-full max-w-[560px] px-6 text-center lg:px-8">
              <p className="cs-hero-badge mb-4 inline-block rounded-full border border-white/15 bg-white/[.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                {slide.small}
              </p>
              <h1 className="cs-hero-title font-gambarino-bold mb-5 text-[30px] uppercase leading-[1.1] tracking-tight text-white md:text-[40px] lg:text-[46px]">
                {slide.title}
              </h1>
              <p className="cs-hero-sub mx-auto mb-8 max-w-[440px] text-[14px] leading-[1.7] text-white/85 md:text-[15px]">
                {slide.subtitle}
              </p>
              <div className="cs-hero-cta">
                <Link
                  href={slide.cta.href}
                  className="cs-btn-press inline-flex items-center rounded-xl bg-[#d4232a] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white shadow-xl shadow-red-600/25 hover:bg-[#b91c22] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {slide.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Trust badges — pinned to the bottom of the hero */}
      <div className="cs-hero-badges absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 md:bottom-8 md:flex">
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-red-600/20">
          <CheckIcon className="h-3.5 w-3.5" aria-hidden />
          Ücretsiz Ekspertiz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-black/20">
          <CheckIcon className="h-3.5 w-3.5" aria-hidden />
          Tramer Kaydı Oluşmaz
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#d4232a] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-red-600/20">
          <CheckIcon className="h-3.5 w-3.5" aria-hidden />
          Aynı Gün Teslim
        </div>
      </div>

      {/* Nav arrows — consistent 48px */}
      <button
        type="button"
        aria-label="Önceki slayt"
        onClick={() => go(-1)}
        className="cs-btn-press absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/10 transition-colors hover:bg-[#d4232a] hover:ring-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-6"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Sonraki slayt"
        onClick={() => go(1)}
        className="cs-btn-press absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md ring-1 ring-white/10 transition-colors hover:bg-[#d4232a] hover:ring-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>

      {/* Dots — sit just above the trust badges. Wrappers expand tap area to >=32px while dots stay small visually */}
      <div
        className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-1 md:bottom-24"
        role="tablist"
        aria-label="Slayt seçimi"
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={i === idx}
            aria-label={`${i + 1}. slayda git`}
            onClick={() => setIdx(i)}
            className="group flex h-8 items-center justify-center px-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-full"
          >
            <span
              className={`block h-[6px] rounded-full transition-all duration-500 ${
                i === idx ? "w-8 bg-[#d4232a]" : "w-[6px] bg-white/50 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
