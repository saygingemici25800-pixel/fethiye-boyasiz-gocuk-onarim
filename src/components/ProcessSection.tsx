"use client";

import { CarIcon, SmileIcon, ToolsIcon } from "@/components/icons";
import { PROCESS_STEPS } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = { car: CarIcon, tools: ToolsIcon, smile: SmileIcon };

export function ProcessSection() {
  useScrollReveal();

  return (
    <section className="relative bg-[#f8f9fb] py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: "url(/images/service_bg11-e1547457838864.jpg)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]">
            3 Basit Adım
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-4xl">
            Nasıl <span className="text-[#d4232a]">Çalışıyoruz</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#4b5563]">
            Aracınızı bırakın, biz halledelim. Süreç tamamen şeffaf.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon];
            const isHighlight = step.highlight;
            return (
              <div
                key={step.title}
                className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift relative overflow-hidden rounded-xl p-8 text-center ${
                  isHighlight
                    ? "bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white shadow-xl"
                    : "border border-gray-100 bg-white text-[#111827] shadow-sm"
                }`}
              >
                <div
                  className={`absolute right-5 top-5 text-7xl font-black leading-none ${
                    isHighlight ? "text-white/10" : "text-gray-100"
                  }`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  className={`relative mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isHighlight
                      ? "bg-[#d4232a] text-white shadow-lg shadow-red-600/25"
                      : "bg-[#2d2d2d]/8 text-[#2d2d2d]"
                  }`}
                >
                  <Icon className="h-8 w-8" />
                </span>
                <h3
                  className={`relative mb-3 text-xl font-bold ${
                    isHighlight ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`relative text-sm leading-relaxed ${
                    isHighlight ? "text-white/80" : "text-[#4b5563]"
                  }`}
                >
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
