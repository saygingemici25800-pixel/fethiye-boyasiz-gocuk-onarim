"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ServiceDetail } from "@/lib/service-details";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";

interface Props {
  service: ServiceDetail;
  otherServices: ServiceDetail[];
  site: {
    brand: string;
    phone: string;
    phoneHref: string;
    whatsappHref: string;
    social: { instagram: string };
  };
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
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

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1={19} y1={12} x2={5} y2={12} />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export function ServicePageClient({ service, otherServices, site }: Props) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const galleryGo = (delta: number) => {
    setGalleryIdx((v) => (v + delta + service.galleryImages.length) % service.galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header Bar */}
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
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-md transition-all hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
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

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[380px] w-full overflow-hidden pt-[56px]">
        <Image
          src={service.heroImage}
          alt={service.title}
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
              <Link href="/#hizmetler" className="rounded hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Hizmetler</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-white" aria-current="page">{service.title}</span>
            </nav>
            <h1 className="font-gambarino-bold text-3xl text-white md:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bar - Mobile sticky */}
      <div className="sticky top-[56px] z-40 border-b border-gray-100 bg-white shadow-sm md:hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <a
            href={site.phoneHref}
            aria-label={`Telefon ile ara: ${site.phone}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#d4232a] py-3 text-sm font-bold text-white transition-colors hover:bg-[#b91c22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            <PhoneIcon className="h-4 w-4" aria-hidden />
            Hemen Ara
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişim"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white transition-colors hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5" aria-hidden />
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram sayfamız"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            <InstagramIcon className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {service.sections.map((section, i) => (
              <article key={i} className="mb-12">
                <h2 className="font-gambarino mb-4 text-2xl text-[#111827] md:text-3xl">
                  {section.title}
                </h2>
                <p className="text-base leading-[1.8] text-[#4b5563]">
                  {section.content}
                </p>
                {i < service.sections.length - 1 && (
                  <div className="mt-12 h-px bg-gray-100" />
                )}
              </article>
            ))}

            {/* Benefits */}
            <div className="mt-12 rounded-2xl bg-[#f8f9fb] p-8 md:p-10">
              <h2 className="font-gambarino mb-6 text-2xl text-[#111827]">
                Avantajları
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#d4232a]" />
                    <span className="text-sm leading-relaxed text-[#374151]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h2 className="font-gambarino mb-6 text-2xl text-[#111827]">
                Galeri
              </h2>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.galleryImages[galleryIdx]}
                    alt={`${service.title} - Görsel ${galleryIdx + 1}`}
                    fill
                    sizes="(min-width:1024px) 780px, 100vw"
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => galleryGo(-1)}
                  aria-label="Önceki görsel"
                  className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#111827] shadow-lg ring-1 ring-black/5 transition-all hover:bg-[#d4232a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
                >
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => galleryGo(1)}
                  aria-label="Sonraki görsel"
                  className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#111827] shadow-lg ring-1 ring-black/5 transition-all hover:bg-[#d4232a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
                >
                  <ChevronRightIcon className="h-5 w-5" aria-hidden />
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1" role="tablist" aria-label="Galeri sayfa seçimi">
                  {service.galleryImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === galleryIdx}
                      aria-label={`${i + 1}. görsele git`}
                      onClick={() => setGalleryIdx(i)}
                      className="group flex h-7 items-center justify-center px-1.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all ${
                          i === galleryIdx ? "w-8 bg-[#d4232a]" : "w-2 bg-white/80 group-hover:bg-white"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
                {service.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    aria-label={`${i + 1}. görsele git`}
                    aria-current={i === galleryIdx}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a] ${
                      i === galleryIdx ? "ring-2 ring-[#d4232a] ring-offset-2" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="mt-16">
              <h2 className="font-gambarino mb-6 text-2xl text-[#111827]">
                Video
              </h2>
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-[#0a1e3d]">
                <Image
                  src={service.heroImage}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(min-width:1024px) 780px, 100vw"
                  className="object-cover opacity-40"
                />
                <div className="relative z-10 text-center">
                  <div
                    className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#d4232a] text-white shadow-2xl shadow-red-600/30 ring-4 ring-white/10 transition-all"
                    aria-hidden
                  >
                    <PlayIcon className="ml-1 h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold text-white/90">
                    {service.title} — İşlem Videosu
                  </p>
                  <p className="mt-1 text-xs text-white/70">
                    Video yakında eklenecek
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="font-gambarino mb-6 text-2xl text-[#111827]">
                Sık Sorulan Sorular
              </h2>
              <div className="space-y-3">
                {service.faq.map((item, i) => {
                  const isOpen = openFaq === i;
                  const panelId = `faq-panel-${i}`;
                  const btnId = `faq-btn-${i}`;
                  return (
                    <div
                      key={i}
                      className={`overflow-hidden rounded-xl border transition-all ${
                        isOpen ? "border-[#d4232a]/30 bg-[#fef2f2]/30" : "border-gray-100"
                      }`}
                    >
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-[#111827] transition-colors hover:text-[#d4232a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
                      >
                        {item.question}
                        <ChevronDownIcon
                          className={`h-5 w-5 shrink-0 text-[#6b7280] transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#d4232a]" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 text-sm leading-relaxed text-[#4b5563]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Contact Card */}
            <div className="sticky top-[80px] space-y-6">
              <div className="rounded-2xl bg-gradient-to-br from-[#0a1e3d] to-[#1e3158] p-8 text-white shadow-xl shadow-[#0a1e3d]/20">
                <h3 className="mb-2 text-lg font-bold">Ücretsiz Ekspertiz</h3>
                <p className="mb-6 text-sm text-white/85">
                  Aracınızdaki göçüğü fotoğrafla gönderin, hemen fiyat bilgisi alalım.
                </p>
                <div className="space-y-3">
                  <a
                    href={site.phoneHref}
                    aria-label={`Telefon ile ara: ${site.phone}`}
                    className="cs-btn-press flex items-center justify-center gap-2 rounded-xl bg-[#d4232a] py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-[#b91c22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <PhoneIcon className="h-4 w-4" aria-hidden />
                    {site.phone}
                  </a>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp ile iletişim"
                    className="cs-btn-press flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <WhatsAppIcon className="h-4 w-4" aria-hidden />
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram sayfamız"
                    className="cs-btn-press flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] py-3.5 text-sm font-bold text-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <InstagramIcon className="h-4 w-4" aria-hidden />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Other Services */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#111827]">
                  Diğer Hizmetlerimiz
                </h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetler/${s.slug}`}
                      className="group flex items-center gap-4 rounded-xl border border-gray-50 p-3 transition-all hover:border-[#d4232a]/20 hover:bg-[#fef2f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={s.heroImage}
                          alt=""
                          aria-hidden
                          fill
                          sizes="56px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#111827] transition-colors group-hover:text-[#d4232a]">
                          {s.title}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-[#4b5563]">
                          Detay
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl border border-gray-100 bg-[#f8f9fb] p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#111827]">
                  Güvence
                </h3>
                <ul className="space-y-3">
                  {[
                    "Ücretsiz Ekspertiz",
                    "Tramer Kaydı Oluşmaz",
                    "Memnuniyet Garantisi",
                    "Aynı Gün Teslim",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4232a] text-white shadow-sm shadow-red-500/20" aria-hidden>
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-[#374151]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#0a1e3d] to-[#1e3158] py-16">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-8">
          <h2 className="font-gambarino text-2xl text-white md:text-3xl">
            Aracınızdaki Göçükten Kurtulun
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/85">
            Ücretsiz ekspertiz randevusu alın. Göçüğünüzün fotoğrafını WhatsApp&apos;tan gönderin, anında fiyat bilgisi verelim.
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
    </div>
  );
}
