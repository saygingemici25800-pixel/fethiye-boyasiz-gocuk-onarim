"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BeforeAfterItem {
  before: string;
  after: string;
  title: string;
}

const ITEMS: BeforeAfterItem[] = [
  {
    before: "/images/dolu-oncesi.jpeg",
    after: "/images/dolu-sonrasi.jpeg",
    title: "Dolu Hasarı Onarımı",
  },
  {
    before: "/images/boyasiz-oncesi.jpeg",
    after: "/images/boyasiz-sonrasi.jpeg",
    title: "Boyasız Göçük Düzeltme",
  },
  {
    before: "/images/mini-oncesi.jpeg",
    after: "/images/mini-sonrasi.jpeg",
    title: "Mini Onarım",
  },
  {
    before: "/images/rotus-oncesi.jpeg",
    after: "/images/rotus-sonrasi.jpeg",
    title: "Çelik Rötuş",
  },
  {
    before: "/images/gunes-oncesi.jpeg",
    after: "/images/gunes-sonrasi.jpeg",
    title: "Güneş Yanığı Onarım",
  },
  {
    before: "/images/koltuk-oncesi.jpeg",
    after: "/images/koltuk-sonrasi.jpeg",
    title: "Koltuk Temizliği",
  },
];

export function BeforeAfterGallery() {
  useScrollReveal();

  return (
    <section className="bg-[#f8f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Sonuçlarımız Ortada
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Öncesi — <span className="text-[#d4232a]">Sonrası</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#4b5563]">
            Farkı kendi gözlerinizle görün. Tüm işlerimiz gerçek müşteri araçlarıdır.
          </p>
        </div>

        <div className="cs-stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`cs-reveal cs-reveal-delay-${Math.min(i + 1, 4)} cs-card-lift overflow-hidden rounded-2xl border border-gray-100/80 bg-white`}
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.before}
                    alt={`${item.title} — Öncesi`}
                    fill
                    sizes="(min-width:1024px) 190px, (min-width:640px) 25vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                    <span className="rounded-md bg-[#d4232a] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Öncesi
                    </span>
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.after}
                    alt={`${item.title} — Sonrası`}
                    fill
                    sizes="(min-width:1024px) 190px, (min-width:640px) 25vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                    <span className="rounded-md bg-[#2d2d2d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Sonrası
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4">
                <h3 className="text-sm font-bold text-[#111827]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="cs-reveal mt-10 text-center">
          <Link
            href="/galeri"
            className="cs-btn-press group inline-flex items-center gap-2 rounded-xl bg-[#2d2d2d] px-7 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white shadow-lg shadow-black/10 hover:bg-[#1a1a1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            Tüm Galeriyi Gör
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
