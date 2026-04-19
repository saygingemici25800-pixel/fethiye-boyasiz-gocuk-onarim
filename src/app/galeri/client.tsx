"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons";

interface Props {
  site: {
    brand: string;
    phone: string;
    phoneHref: string;
    whatsappHref: string;
    social: { instagram: string };
  };
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1={19} y1={12} x2={5} y2={12} />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1={18} y1={6} x2={6} y2={18} />
      <line x1={6} y1={6} x2={18} y2={18} />
    </svg>
  );
}

interface GalleryImage {
  src: string;
  label: string;
}

interface GalleryGroup {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
  videoLabel: string;
  serviceLink: string;
}

const GALLERY_GROUPS: GalleryGroup[] = [
  {
    id: "boyasiz-gocuk",
    title: "Boyasız Göçük Düzeltme",
    description: "Orijinal boyaya dokunmadan, göçükler iz bırakmadan düzeltildi.",
    images: [
      { src: "/images/boyasiz-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/boyasiz-sonrasi.jpeg", label: "Sonrası" },
      { src: "/images/mini-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/mini-sonrasi.jpeg", label: "Sonrası" },
    ],
    videoLabel: "Boyasız Göçük Düzeltme — İşlem Videosu",
    serviceLink: "/hizmetler/boyasiz-gocuk-duzeltme",
  },
  {
    id: "dolu-hasari",
    title: "Dolu Hasarı Onarımı",
    description: "Dolu kaynaklı onlarca göçük, tek seferde boyasız onarıldı.",
    images: [
      { src: "/images/dolu-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/dolu-sonrasi.jpeg", label: "Sonrası" },
      { src: "/images/gunes-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/gunes-sonrasi.jpeg", label: "Sonrası" },
    ],
    videoLabel: "Dolu Hasarı Onarımı — İşlem Videosu",
    serviceLink: "/hizmetler/dolu-hasari-onarimi",
  },
  {
    id: "kucuk-orta",
    title: "Küçük & Orta Göçük Düzeltme",
    description: "Park darbeleri ve kapı çarpmaları, aynı gün onarıldı.",
    images: [
      { src: "/images/mini-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/mini-sonrasi.jpeg", label: "Sonrası" },
      { src: "/images/rotus-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/rotus-sonrasi.jpeg", label: "Sonrası" },
    ],
    videoLabel: "Küçük & Orta Göçük — İşlem Videosu",
    serviceLink: "/hizmetler/kucuk-orta-gocuk-duzeltme",
  },
  {
    id: "deger-kaybi",
    title: "Değer Kaybı Önleme Onarımı",
    description: "Satış öncesi göçükler giderildi, araç hasarsız statüsünü korudu.",
    images: [
      { src: "/images/ppf-kaplama.jpeg", label: "Öncesi / Sonrası" },
      { src: "/images/gunes-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/gunes-sonrasi.jpeg", label: "Sonrası" },
      { src: "/images/koltuk-oncesi.jpeg", label: "Öncesi" },
    ],
    videoLabel: "Değer Kaybı Önleme — İşlem Videosu",
    serviceLink: "/hizmetler/deger-kaybi-onleme",
  },
  {
    id: "kaporta",
    title: "Kaporta Göçük Onarımı",
    description: "Kaput, tavan ve çamurluk göçükleri profesyonelce düzeltildi.",
    images: [
      { src: "/images/kaporta-boya-1.jpeg", label: "Çalışma Anı" },
      { src: "/images/kaporta-boya-2.jpeg", label: "Sonrası" },
      { src: "/images/boyasiz-oncesi.jpeg", label: "Öncesi" },
      { src: "/images/boyasiz-sonrasi.jpeg", label: "Sonrası" },
    ],
    videoLabel: "Kaporta Göçük Onarımı — İşlem Videosu",
    serviceLink: "/hizmetler/kaporta-gocuk-onarimi",
  },
];

export function GalleryPageClient({ site }: Props) {
  const [lightbox, setLightbox] = useState<{ groupIdx: number; imgIdx: number } | null>(null);

  const openLightbox = (groupIdx: number, imgIdx: number) => {
    setLightbox({ groupIdx, imgIdx });
  };

  const closeLightbox = () => setLightbox(null);

  const lightboxNav = (delta: number) => {
    if (!lightbox) return;
    const group = GALLERY_GROUPS[lightbox.groupIdx];
    const newIdx = (lightbox.imgIdx + delta + group.images.length) % group.images.length;
    setLightbox({ ...lightbox, imgIdx: newIdx });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md px-1 py-1 text-sm font-semibold text-[#111827] transition-colors hover:text-[#d4232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden />
            Ana Sayfa
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-md transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
              aria-label="Instagram sayfamız"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-[#d4232a] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              Hemen Ara
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden pt-[56px]">
        <Image
          src="/images/hakkimizda.jpg"
          alt="Galerimiz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/90 via-[#0a1e3d]/50 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-12">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
              <Link href="/" className="rounded hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Anasayfa</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-white" aria-current="page">Galerimiz</span>
            </nav>
            <h1 className="font-gambarino-bold text-3xl text-white md:text-4xl lg:text-5xl">
              Galerimiz
            </h1>
            <p className="mt-3 max-w-lg text-base text-white/85">
              Tüm hizmet gruplarımıza ait fotoğraf ve videolar.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="sticky top-[56px] z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <nav aria-label="Galeri bölümleri" className="no-scrollbar flex gap-2 overflow-x-auto py-3">
            {GALLERY_GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="shrink-0 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-[#111827] transition-all hover:border-[#d4232a] hover:bg-[#d4232a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
              >
                {g.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Gallery Groups */}
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-8">
        {GALLERY_GROUPS.map((group, gIdx) => (
          <section key={group.id} id={group.id} className="mb-20 last:mb-0 scroll-mt-[120px]">
            {/* Section Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="mb-2 inline-block rounded-full bg-[#d4232a]/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#d4232a]">
                  {String(gIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-gambarino mt-2 text-2xl text-[#111827] md:text-3xl">
                  {group.title}
                </h2>
                <p className="mt-2 text-sm text-[#4b5563]">{group.description}</p>
              </div>
              <Link
                href={group.serviceLink}
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#d4232a] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
              >
                Hizmet Detayı
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {group.images.map((img, iIdx) => (
                <button
                  key={iIdx}
                  type="button"
                  onClick={() => openLightbox(gIdx, iIdx)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4232a] focus:ring-offset-2"
                >
                  <Image
                    src={img.src}
                    alt={`${group.title} — ${img.label}`}
                    fill
                    sizes="(min-width:768px) 280px, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-2 top-2 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {img.label}
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111827]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Video Placeholder */}
            <div className="mt-6">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-[#0a1e3d]">
                <Image
                  src={group.images[0].src}
                  alt={`${group.title} video`}
                  fill
                  sizes="(min-width:1024px) 1100px, 100vw"
                  className="object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4232a] text-white shadow-2xl shadow-red-600/30 ring-4 ring-white/10 transition-all md:h-20 md:w-20"
                    aria-hidden
                  >
                    <PlayIcon className="ml-1 h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <p className="text-sm font-semibold text-white/90 md:text-base">
                    {group.videoLabel}
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Video yakında eklenecek
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            {gIdx < GALLERY_GROUPS.length - 1 && (
              <div className="mt-16 h-px bg-gray-100" />
            )}
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#0a1e3d] to-[#1e3158] py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
          <h2 className="font-gambarino text-2xl text-white md:text-3xl">
            Aracınızdaki Göçükten Kurtulun
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/85">
            Ücretsiz ekspertiz için hemen arayın veya WhatsApp&apos;tan fotoğraf gönderin.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              aria-label={`Telefon ile ara: ${site.phone}`}
              className="cs-btn-press inline-flex items-center gap-2 rounded-xl bg-[#d4232a] px-8 py-4 text-sm font-bold uppercase text-white shadow-xl shadow-red-600/25 transition-all hover:bg-[#b91c22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp ile iletişim"
              className="cs-btn-press inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase text-white transition-all hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram sayfamız"
              className="cs-btn-press inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] px-8 py-4 text-sm font-bold uppercase text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <InstagramIcon className="h-4 w-4" aria-hidden />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-[#0a1e3d] border-t border-white/10 py-6">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col items-center justify-between gap-3 text-xs text-white/65 md:flex-row lg:px-8">
          <p>&copy; 2026 {site.brand}. Tüm hakları saklıdır.</p>
          <Link href="/" className="rounded text-white/80 hover:text-[#d4232a] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </footer>

      {/* Mobile bottom bar */}
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 flex items-center gap-0 shadow-[0_-4px_16px_rgba(0,0,0,0.15)] md:hidden">
        <a
          href={site.phoneHref}
          aria-label={`Telefon ile ara: ${site.phone}`}
          className="flex flex-1 items-center justify-center gap-2 bg-[#d4232a] py-3.5 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" aria-hidden />
          Hemen Ara
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişim"
          className="flex items-center justify-center bg-[#25D366] px-5 py-3.5 text-white"
        >
          <WhatsAppIcon className="h-5 w-5" aria-hidden />
        </a>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram sayfamız"
          className="flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] px-5 py-3.5 text-white"
        >
          <InstagramIcon className="h-5 w-5" aria-hidden />
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${GALLERY_GROUPS[lightbox.groupIdx].title} görseli`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cs-fade-in"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Kapat"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CloseIcon className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lightboxNav(-1); }}
            aria-label="Önceki görsel"
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-[#d4232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); lightboxNav(1); }}
            aria-label="Sonraki görsel"
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-all hover:bg-[#d4232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronRightIcon className="h-6 w-6" aria-hidden />
          </button>

          <div
            className="relative mx-4 aspect-[4/3] w-full max-w-[900px] overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_GROUPS[lightbox.groupIdx].images[lightbox.imgIdx].src}
              alt={`${GALLERY_GROUPS[lightbox.groupIdx].title} — Görsel ${lightbox.imgIdx + 1}`}
              fill
              sizes="900px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {GALLERY_GROUPS[lightbox.groupIdx].title}
            </span>
            <span className="text-sm text-white/75" aria-live="polite">
              {lightbox.imgIdx + 1} / {GALLERY_GROUPS[lightbox.groupIdx].images.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
