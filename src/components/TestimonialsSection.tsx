"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  name: string;
  car: string;
  rating: number;
  comment: string;
  initial: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mehmet K.",
    car: "Volkswagen Passat",
    rating: 5,
    comment:
      "Aracımdaki dolu hasarını boyasız olarak mükemmel şekilde onardılar. Hiçbir iz kalmadı, tramer kaydı da oluşmadı. Fethiye'de bu işin en iyisi.",
    initial: "M",
  },
  {
    name: "Ayşe T.",
    car: "Renault Megane",
    rating: 5,
    comment:
      "Park halindeyken kapım çarpılmıştı. Boyasız onarımla bir günde teslim aldım, hiç belli olmuyor. Profesyonel ekip, güler yüzlü hizmet. Tavsiye ederim.",
    initial: "A",
  },
  {
    name: "Burak Y.",
    car: "Peugeot 408",
    rating: 5,
    comment:
      "Aracımı satmadan önce kaportadaki göçükleri düzelttirdim. İlk günkü gibi oldu, satış fiyatım da yükseldi. Fiyat-performans olarak harika bir yer.",
    initial: "B",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function TestimonialsSection() {
  useScrollReveal();

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Müşterilerimiz Diyor Ki
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Memnun <span className="text-[#d4232a]">Müşterilerimiz</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6b7280]">
            Yüzlerce müşterimizin güvenini kazandık. İşte deneyimleri.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`cs-reveal cs-reveal-delay-${i + 1} cs-card-lift relative overflow-hidden rounded-2xl border border-gray-100/80 bg-white p-7`}
            >
              {/* Quote mark */}
              <div className="absolute -right-2 -top-2 text-[80px] font-black leading-none text-[#d4232a]/[.08]" aria-hidden>
                "
              </div>

              {/* Stars */}
              <div className="relative mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4 text-[#f59e0b]" />
                ))}
              </div>

              {/* Comment */}
              <p className="relative mb-6 text-[14px] leading-[1.7] text-[#4b5563]">
                {t.comment}
              </p>

              {/* Author */}
              <div className="relative flex items-center gap-3 border-t border-gray-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d2d2d] text-sm font-bold text-white">
                  {t.initial}
                </span>
                <div>
                  <p className="text-[13px] font-bold text-[#111827]">{t.name}</p>
                  <p className="text-[11px] text-[#6b7280]">{t.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
