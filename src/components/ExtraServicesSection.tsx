"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExtraService {
  title: string;
  image: string;
  description: string;
}

const EXTRA_SERVICES: ExtraService[] = [
  {
    title: "Boyasız Göçük Düzeltme",
    image: "/images/boyasiz-sonrasi.jpeg",
    description: "Orijinal boyaya dokunmadan göçük onarımı.",
  },
  {
    title: "Dolu Hasarı Onarımı",
    image: "/images/dolu-sonrasi.jpeg",
    description: "Dolu kaynaklı göçükler tek seferde onarılır.",
  },
  {
    title: "Mini Onarım",
    image: "/images/mini-sonrasi.jpeg",
    description: "Küçük çizik ve göçükler hızlıca düzeltilir.",
  },
  {
    title: "Çelik Rötuş Uygulaması",
    image: "/images/rotus-sonrasi.jpeg",
    description: "Çizik ve sıyrıklarda boya rötuş işlemi.",
  },
  {
    title: "Kaporta Onarımı",
    image: "/images/kaporta-boya-2.jpeg",
    description: "Hasar görmüş kaporta parçalarının onarımı.",
  },
  {
    title: "Kaporta / Boya İşlemleri",
    image: "/images/kaporta-boya-1.jpeg",
    description: "Profesyonel kaporta düzeltme ve boya uygulama.",
  },
  {
    title: "Tampon Tamiri",
    image: "/images/boyasiz-oncesi.jpeg",
    description: "Çatlak ve kırık tampon onarımı.",
  },
  {
    title: "Pasta Cila",
    image: "/images/gunes-sonrasi.jpeg",
    description: "Boya yüzeyini yenileyip parlaklık kazandırır.",
  },
  {
    title: "Boya Koruma",
    image: "/images/dolu-sonrasi.jpeg",
    description: "Aracınızın boyasını dış etkenlere karşı korur.",
  },
  {
    title: "Seramik Kaplama",
    image: "/images/gunes-sonrasi.jpeg",
    description: "Uzun süreli parlaklık ve koruma sağlar.",
  },
  {
    title: "PPF Kaplama",
    image: "/images/ppf-kaplama.jpeg",
    description: "Şeffaf film ile boyayı taş, çizik ve darbelerden korur.",
  },
  {
    title: "Far Parlatma",
    image: "/images/mini-oncesi.jpeg",
    description: "Matlaşmış farları fabrika parlaklığına kavuşturur.",
  },
  {
    title: "Plastik Kaynak",
    image: "/images/kaporta-boya-1.jpeg",
    description: "Kırık plastik parçaların kaynak ile onarımı.",
  },
  {
    title: "Parça Değişimi ve Kaporta Düzeltme",
    image: "/images/kaporta-boya-2.jpeg",
    description: "Hasarlı parça değişimi ve kaporta düzeltme işlemi.",
  },
];

export function ExtraServicesSection() {
  useScrollReveal();

  return (
    <section className="bg-[#f8f9fb] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/[.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d2d2d]/70">
            Tüm Çözümlerimiz
          </span>
          <h2 className="font-gambarino mt-3 text-[28px] leading-tight text-[#111827] md:text-[36px]">
            Ek <span className="text-[#d4232a]">Hizmetlerimiz</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#6b7280]">
            Göçük onarımının yanı sıra aracınız için kapsamlı bakım ve koruma hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-5">
          {EXTRA_SERVICES.map((service, i) => (
            <div
              key={service.title}
              className="cs-reveal cs-card-lift group overflow-hidden rounded-2xl border border-gray-100/80 bg-white"
              style={{ transitionDelay: `${Math.min(i * 40, 200)}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width:1024px) 220px, (min-width:640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-[13px] font-bold leading-snug text-[#111827]">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-[#6b7280]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
