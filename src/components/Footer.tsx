import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { BLOG_POSTS, NAV, SERVICES, SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0a1e3d] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/fethiye-logo.png"
                alt={SITE.brand}
                width={701}
                height={403}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Fethiye&apos;de boyasız göçük onarımının güvenilir adresi. Aracınızın orijinal boyasını koruyarak değer kaybını önlüyoruz.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all hover:bg-[#d4232a] hover:text-white hover:scale-110"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/70 transition-all hover:bg-[#d4232a] hover:text-white hover:scale-110"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3.5">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/55 transition-colors hover:text-[#d4232a] hover:translate-x-1 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Son Yazılar
            </h3>
            <ul className="space-y-5">
              {BLOG_POSTS.map((p) => (
                <li key={p.title}>
                  <Link href={p.href} className="group flex gap-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={70}
                      height={60}
                      className="h-[56px] w-[64px] shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-snug text-white/80 transition-colors group-hover:text-[#d4232a]">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-white/40">{p.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#d4232a]" />
                <span className="text-white/65">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-[#d4232a]" />
                <a
                  href={SITE.phoneHref}
                  className="text-white/65 transition-colors hover:text-[#d4232a]"
                >
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/45 md:flex-row lg:px-8">
          <p>&copy; 2026 {SITE.brand}. Tüm hakları saklıdır.</p>
          <nav className="flex flex-wrap items-center gap-5">
            {NAV.slice(0, 4).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#d4232a]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
