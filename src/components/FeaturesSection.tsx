"use client";

import {
  SmileIcon,
  StarIcon,
  ToolsIcon,
  UserIcon,
} from "@/components/icons";
import { FEATURES } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = { user: UserIcon, star: StarIcon, smile: SmileIcon, tools: ToolsIcon };

export function FeaturesSection() {
  useScrollReveal();

  return (
    <section className="bg-white py-20 md:py-24" id="hakkimizda">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section header — 48px bottom margin */}
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Neden Bizi Tercih Etmelisiniz?
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Boyasız Onarımda <span className="text-[#d4232a]">Fark Yaratan</span> Hizmet
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#4b5563]">
            Aracınızın değerini korumak için en doğru yöntem: boyasız göçük onarımı.
          </p>
        </div>

        {/* Cards — 24px gap, 32px padding */}
        <div className="cs-stagger grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift group relative rounded-2xl border border-gray-100/80 bg-white p-7 text-center`}
              >
                <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2d2d2d]/[.06] text-[#2d2d2d] transition-all duration-300 group-hover:bg-[#2d2d2d] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-base font-bold text-[#111827]">
                  {f.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#4b5563]">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
