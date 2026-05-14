"use client";

import * as React from "react";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/blocks/animated-cards-stack";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  car: string;
  rating: number;
  description: string;
  initial: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mehmet K.",
    car: "Volkswagen Passat",
    rating: 5,
    description:
      "Aracımdaki dolu hasarını boyasız olarak mükemmel şekilde onardılar. Hiçbir iz kalmadı, tramer kaydı da oluşmadı. Fethiye'de bu işin en iyisi.",
    initial: "M",
  },
  {
    id: "t2",
    name: "Ayşe T.",
    car: "Renault Megane",
    rating: 5,
    description:
      "Park halindeyken kapım çarpılmıştı. Boyasız onarımla bir günde teslim aldım, hiç belli olmuyor. Profesyonel ekip, güler yüzlü hizmet.",
    initial: "A",
  },
  {
    id: "t3",
    name: "Burak Y.",
    car: "Peugeot 408",
    rating: 5,
    description:
      "Aracımı satmadan önce kaportadaki göçükleri düzelttirdim. İlk günkü gibi oldu, satış fiyatım da yükseldi. Fiyat-performans olarak harika.",
    initial: "B",
  },
  {
    id: "t4",
    name: "Selin D.",
    car: "BMW 320i",
    rating: 5,
    description:
      "Dolu yağışından sonra aracım perişan haldeydi. 2 gün içinde tüm göçükleri çıkardılar, sigortayla da bizzat ilgilendiler. Çok teşekkürler.",
    initial: "S",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-24 lg:px-8">
        <div className="text-center">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Müşterilerimiz Diyor Ki
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Memnun <span className="text-[#d4232a]">Müşterilerimiz</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6b7280]">
            Yüzlerce müşterimizin güvenini kazandık. Sayfayı kaydırın, deneyimlerini okuyun.
          </p>
        </div>
      </div>

      <ContainerScroll className="container mx-auto h-[300vh] px-6">
        <div className="sticky left-0 top-0 flex h-svh w-full items-center justify-center">
          <CardsContainer className="mx-auto h-[420px] w-[340px] sm:h-[440px] sm:w-[400px]">
            {TESTIMONIALS.map((t, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={t.id}
                variant="light"
                index={index + 2}
                role="article"
                className="!p-8"
              >
                <div className="flex flex-col items-center space-y-5 text-center">
                  <ReviewStars
                    className="text-[#f59e0b]"
                    rating={t.rating}
                  />
                  <blockquote className="text-[15px] leading-[1.7] text-[#4b5563]">
                    &ldquo;{t.description}&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-5 w-full justify-center">
                  <Avatar className="!size-12 border-2 border-[#2d2d2d]">
                    <AvatarFallback className="bg-[#d4232a]">
                      {t.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <span className="block text-[14px] font-bold tracking-tight text-[#111827]">
                      {t.name}
                    </span>
                    <span className="block text-[12px] text-[#6b7280]">
                      {t.car}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  );
}
