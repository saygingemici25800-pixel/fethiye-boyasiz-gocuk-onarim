"use client";

import {
  SmileIcon,
  StarIcon,
  ToolsIcon,
  UserIcon,
} from "@/components/icons";
import { FEATURES } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICONS = {
  user: UserIcon,
  star: StarIcon,
  smile: SmileIcon,
  tools: ToolsIcon,
};

export function FeaturesSection() {
  useScrollReveal();

  return (
    <section className="cs-section-fade bg-white py-24" id="hakkimizda">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]">
            Neden Bizi Tercih Etmelisiniz?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#111827] md:text-4xl">
            Boyasız Onarımda <span className="text-[#d4232a]">Fark Yaratan</span> Hizmet
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#4b5563]">
            Aracınızın değerini korumak için en doğru yöntem: boyasız göçük onarımı.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div
                key={f.title}
                className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:border-[#2d2d2d]/20`}
              >
                <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2d2d2d]/8 text-[#2d2d2d] transition-all duration-300 group-hover:bg-[#2d2d2d] group-hover:text-white group-hover:shadow-lg">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mb-3 text-lg font-bold text-[#111827]">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4b5563]">
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
