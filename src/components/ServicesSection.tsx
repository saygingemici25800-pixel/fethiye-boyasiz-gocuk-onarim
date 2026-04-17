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
      <div
        className="relative h-[280px] bg-cover bg-center md:h-[360px]"
        style={{ backgroundImage: "url(/images/hakkimizda.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e3d]/85 to-[#0a1e3d]/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center justify-center px-6 text-center text-white">
          <div>
            <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              Profesyonel Çözümler
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Hizmetlerimiz
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/75">
              Her göçük tipi için uzman çözümler sunuyoruz.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-20 max-w-[1200px] px-6 pb-24 lg:px-8">
        <div className="cs-reveal relative">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
          >
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                data-card
                className="group relative w-[280px] shrink-0 snap-start overflow-hidden rounded-xl bg-white shadow-xl shadow-black/8 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl sm:w-[300px] md:w-[340px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width:768px) 340px, 280px"
                    className="cs-img-reveal object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/90 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#d4232a]">
                      <span className="inline-block h-0.5 w-8 bg-[#d4232a] transition-all duration-500 group-hover:w-14" />
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
            className="cs-btn-press absolute -left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-xl hover:bg-[#d4232a] hover:text-white md:-left-6"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Sonraki hizmet"
            onClick={() => scrollBy(1)}
            className="cs-btn-press absolute -right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111827] shadow-xl hover:bg-[#d4232a] hover:text-white md:-right-6"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
