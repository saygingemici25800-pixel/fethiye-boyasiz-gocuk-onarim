"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import { SERVICES } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ServicesSection() {
  useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.offsetWidth * 0.8;
    el.scrollBy({ left: delta * step, behavior: "smooth" });
  };

  return (
    <section id="hizmetler" className="bg-white">
      {/* Banner — 320px height */}
      <div
        className="relative h-[260px] bg-cover bg-center md:h-[320px]"
        style={{ backgroundImage: "url(/images/hakkimizda.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e3d]/80 to-[#0a1e3d]/65" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center justify-center px-6 text-center text-white">
          <div>
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/[.07] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
              Profesyonel Çözümler
            </span>
            <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-white md:text-[36px]">
              Hizmetlerimiz
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              Her göçük tipi için uzman çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Cards carousel — overlap -80px */}
      <div className="relative mx-auto -mt-16 max-w-[1200px] px-6 pb-20 md:pb-24 lg:px-8">
        <div className="cs-reveal relative">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-6"
          >
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                data-card
                className="group relative w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/[.06] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl sm:w-[280px] md:w-[320px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:768px) 320px, 260px"
                    className="cs-img-reveal object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-[17px] font-bold leading-tight text-white">
                      {s.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors duration-300 group-hover:text-[#d4232a]">
                      <span className="inline-block h-[1.5px] w-6 rounded-full bg-current transition-all duration-500 group-hover:w-10" />
                      Detay
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Önceki hizmet"
            onClick={() => scrollBy(-1)}
            className="cs-btn-press absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-lg hover:bg-[#d4232a] hover:text-white md:-left-5"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Sonraki hizmet"
            onClick={() => scrollBy(1)}
            className="cs-btn-press absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-lg hover:bg-[#d4232a] hover:text-white md:-right-5"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
