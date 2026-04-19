"use client";

import { CarIcon, SmileIcon, ToolsIcon } from "@/components/icons";
import { PROCESS_STEPS } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = { car: CarIcon, tools: ToolsIcon, smile: SmileIcon };

export function ProcessSection() {
  useScrollReveal();

  return (
    <section className="relative bg-[#f8f9fb] py-20 md:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: "url(/images/service_bg11-e1547457838864.jpg)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            3 Basit Adım
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Nasıl <span className="text-[#d4232a]">Çalışıyoruz</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#4b5563]">
            Aracınızı bırakın, biz halledelim. Süreç tamamen şeffaf.
          </p>
        </div>

        {/* 3-col grid — 24px gap */}
        <div className="cs-stagger grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            const isHL = step.highlight;
            return (
              <div
                key={step.title}
                className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift relative overflow-hidden rounded-2xl p-7 text-center md:p-8 ${
                  isHL
                    ? "bg-[#2d2d2d] text-white shadow-lg"
                    : "border border-gray-100/80 bg-white"
                }`}
              >
                <div
                  className={`absolute right-5 top-4 text-[72px] font-black leading-none ${
                    isHL ? "text-white/[.1]" : "text-[#2d2d2d]/[.06]"
                  }`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  className={`relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                    isHL
                      ? "bg-[#d4232a] text-white shadow-lg shadow-red-600/20"
                      : "bg-[#2d2d2d]/[.06] text-[#2d2d2d]"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className={`relative mb-2 text-lg font-bold ${isHL ? "text-white" : "text-[#111827]"}`}>
                  {step.title}
                </h3>
                <p className={`relative text-[13px] leading-relaxed ${isHL ? "text-white/85" : "text-[#4b5563]"}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
