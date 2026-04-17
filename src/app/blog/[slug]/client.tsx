"use client";

import Image from "next/image";
import Link from "next/link";
import type { BlogDetail } from "@/lib/blog-details";
import {
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";

interface Props {
  blog: BlogDetail;
  otherBlogs: BlogDetail[];
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

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <line x1={16} y1={2} x2={16} y2={6} />
      <line x1={8} y1={2} x2={8} y2={6} />
      <line x1={3} y1={10} x2={21} y2={10} />
    </svg>
  );
}

function ClockSmallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx={12} cy={12} r={10} />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function BlogPageClient({ blog, otherBlogs, site }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-[#111827] transition-colors hover:text-[#d4232a]">
            <ArrowLeftIcon className="h-4 w-4" />
            Ana Sayfa
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] text-white shadow-md transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-xl bg-[#d4232a] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <PhoneIcon className="h-4 w-4" />
              Hemen Ara
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] w-full overflow-hidden pt-[56px]">
        <Image
          src={blog.heroImage}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/90 via-[#0a1e3d]/50 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-12">
          <div className="mx-auto w-full max-w-[800px] px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">Makale</span>
            </nav>
            <h1 className="font-gambarino-bold text-2xl leading-snug text-white md:text-3xl lg:text-4xl">
              {blog.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockSmallIcon className="h-4 w-4" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main */}
          <article className="lg:col-span-2">
            {/* Intro */}
            <p className="mb-10 text-lg leading-[1.9] text-[#374151] font-medium">
              {blog.intro}
            </p>

            <div className="h-px bg-gray-100 mb-10" />

            {/* Sections */}
            {blog.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="font-gambarino mb-4 text-xl text-[#111827] md:text-2xl">
                  {section.title}
                </h2>
                <p className="text-base leading-[1.85] text-[#4b5563]">
                  {section.content}
                </p>
                {i < blog.sections.length - 1 && (
                  <div className="mt-10 h-px bg-gray-100" />
                )}
              </div>
            ))}

            {/* Tips */}
            {blog.tips && blog.tips.length > 0 && (
              <div className="mt-12 rounded-2xl bg-amber-50 border border-amber-100 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <LightbulbIcon className="h-6 w-6 text-amber-600" />
                  <h2 className="font-gambarino text-xl text-[#111827]">Pratik İpuçları</h2>
                </div>
                <ul className="space-y-3">
                  {blog.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-[#4b5563]">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conclusion */}
            <div className="mt-12 rounded-2xl bg-[#f8f9fb] p-8">
              <h2 className="font-gambarino mb-4 text-xl text-[#111827]">Sonuç</h2>
              <p className="text-base leading-[1.85] text-[#4b5563]">
                {blog.conclusion}
              </p>
            </div>

            {/* Share / CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-gray-100 p-6">
              <p className="text-sm font-semibold text-[#111827]">Bu yazı faydalı olduysa:</p>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-[#d4232a] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#b91c22]"
              >
                <PhoneIcon className="h-4 w-4" />
                Bizi Arayın
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] px-5 py-2.5 text-sm font-bold text-white transition-all"
              >
                <InstagramIcon className="h-4 w-4" />
                Takip Et
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-[80px] space-y-6">
              {/* Contact Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0a1e3d] to-[#1e3158] p-8 text-white">
                <h3 className="mb-2 text-lg font-bold">Ücretsiz Ekspertiz</h3>
                <p className="mb-6 text-sm text-white/70">
                  Göçüğünüzün fotoğrafını gönderin, hemen fiyat bilgisi alalım.
                </p>
                <div className="space-y-3">
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#d4232a] py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {site.phone}
                  </a>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#20bd5a] hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Other Articles */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#111827]">
                  Diğer Yazılar
                </h3>
                <div className="space-y-4">
                  {otherBlogs.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/blog/${b.slug}`}
                      className="group flex items-start gap-4 rounded-xl border border-gray-50 p-3 transition-all hover:border-[#d4232a]/20 hover:bg-[#fef2f2]"
                    >
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={b.heroImage}
                          alt={b.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-snug text-[#111827] transition-colors group-hover:text-[#d4232a] line-clamp-2">
                          {b.title}
                        </p>
                        <p className="mt-1 text-xs text-[#6b7280]">{b.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Hizmetlerimiz link */}
              <div className="rounded-2xl border border-gray-100 bg-[#f8f9fb] p-6">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#111827]">
                  Hizmetlerimiz
                </h3>
                <p className="mb-4 text-sm text-[#4b5563]">
                  Boyasız göçük onarımı hizmetlerimizi inceleyin.
                </p>
                <Link
                  href="/#hizmetler"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#d4232a] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#b91c22]"
                >
                  Hizmetleri Gör →
                </Link>
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
          <p className="mx-auto mt-4 max-w-lg text-base text-white/70">
            Ücretsiz ekspertiz için hemen arayın veya WhatsApp&apos;tan fotoğraf gönderin.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#d4232a] px-8 py-4 text-sm font-bold uppercase text-white shadow-xl shadow-red-600/25 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold uppercase text-white transition-all hover:bg-[#20bd5a] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] px-8 py-4 text-sm font-bold uppercase text-white transition-all hover:-translate-y-0.5"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="bg-[#0a1e3d] border-t border-white/10 py-6">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col items-center justify-between gap-3 text-xs text-white/40 md:flex-row lg:px-8">
          <p>&copy; 2026 {site.brand}. Tüm hakları saklıdır.</p>
          <Link href="/" className="text-white/60 hover:text-[#d4232a] transition-colors">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </footer>

      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-0 md:hidden">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 bg-[#d4232a] py-3.5 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Hemen Ara
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] px-5 py-3.5 text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#e6683c] px-5 py-3.5 text-white"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
