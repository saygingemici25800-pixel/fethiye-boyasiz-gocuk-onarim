"use client";

import {
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { SITE } from "@/lib/site-data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MAPS_URL = "https://www.google.com/maps/place/Fethiye+boyas%C4%B1z+g%C3%B6%C3%A7%C3%BCk+onar%C4%B1m/@36.6249149,29.1323573,17z/data=!3m1!4b1!4m6!3m5!1s0x14c043930881e9df:0x2464b14c19614e42!8m2!3d36.6249106!4d29.1349322!16s%2Fg%2F11ld5gfcqj";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5!2d29.1323573!3d36.6249149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c043930881e9df%3A0x2464b14c19614e42!2sFethiye%20boyas%C4%B1z%20g%C3%B6%C3%A7%C3%BCk%20onar%C4%B1m!5e0!3m2!1str!2str!4v1712868000000";

export function ContactSection() {
  useScrollReveal();

  return (
    <section id="iletisim" className="cs-section-fade bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="cs-reveal mb-16 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#2d2d2d]/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2d2d2d]">
            Bize Ulaşın
          </span>
          <h2 className="font-gambarino mt-4 text-3xl text-[#111827] md:text-4xl">
            <span className="text-[#d4232a]">İletişim</span> Bilgilerimiz
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#4b5563]">
            Ücretsiz ekspertiz randevusu almak veya fiyat bilgisi öğrenmek için bize ulaşın.
          </p>
        </div>

        <div className="cs-reveal grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fethiye Boyasız Göçük Onarım Konum"
                className="h-full min-h-[400px] w-full lg:min-h-[460px]"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#d4232a] transition-colors hover:text-[#b91c22]"
            >
              <MapPinIcon className="h-4 w-4" />
              Google Maps&apos;te Aç →
            </a>
          </div>

          {/* Contact Cards */}
          <div className="cs-stagger flex flex-col gap-5 lg:col-span-2">
            <article className="cs-reveal cs-reveal-delay-1 cs-card-lift group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-[#2d2d2d]/20">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2d2d2d]/8 text-[#2d2d2d] transition-all duration-300 group-hover:bg-[#2d2d2d] group-hover:text-white">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#111827]">Adresimiz</h3>
                  <p className="text-sm leading-relaxed text-[#4b5563]">
                    Taşyaka, 261. Sk. No:11
                    <br />
                    48300 Fethiye / Muğla
                  </p>
                </div>
              </div>
            </article>

            <article className="cs-reveal cs-reveal-delay-2 cs-card-lift group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-[#2d2d2d]/20">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2d2d2d]/8 text-[#2d2d2d] transition-all duration-300 group-hover:bg-[#2d2d2d] group-hover:text-white">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#111827]">
                    <a href={SITE.phoneHref} className="transition-colors hover:text-[#d4232a]">
                      {SITE.phone}
                    </a>
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4b5563]">
                    Pzt — Cmt: 08:30 — 18:00
                  </p>
                </div>
              </div>
            </article>

            <article className="cs-reveal cs-reveal-delay-3 cs-card-lift group overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:border-[#25D366]/20">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-bold text-[#111827]">
                    <a
                      href={SITE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#25D366]"
                    >
                      WhatsApp Hattı
                    </a>
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm leading-relaxed text-[#4b5563]">
                    <ClockIcon className="h-3.5 w-3.5 text-[#6b7280]" />
                    7/24 mesaj atabilirsiniz
                  </p>
                </div>
              </div>
            </article>

            {/* CTA */}
            <a
              href={SITE.phoneHref}
              className="cs-btn-press cs-reveal cs-reveal-delay-4 flex items-center justify-center gap-2 rounded-xl bg-[#d4232a] py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-500/20"
            >
              <PhoneIcon className="h-4 w-4" />
              Hemen Ara: {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
