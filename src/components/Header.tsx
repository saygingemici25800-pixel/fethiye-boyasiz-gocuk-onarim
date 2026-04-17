"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, InstagramIcon, MenuIcon, PhoneIcon } from "@/components/icons";
import { NAV, SITE } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "cs-header-glass shadow-lg shadow-black/5" : "bg-white/95 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 md:py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label={SITE.brand}>
          <Image
            src="/images/fethiye-logo.png"
            alt={SITE.brand}
            width={701}
            height={403}
            className="h-12 w-auto md:h-14 lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="relative text-[14px] font-semibold uppercase tracking-wider text-[#111827] transition-colors hover:text-[#d4232a] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#d4232a] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex lg:ml-4">
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4232a] text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:scale-110"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-lg bg-[#d4232a] px-5 py-3 text-sm font-bold uppercase text-white whitespace-nowrap shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:shadow-red-500/30 hover:-translate-y-0.5"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#111827] hover:bg-gray-100 transition-colors lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1200px] px-4 py-2">
            <ul className="flex flex-col">
              {NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gray-50 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#111827] transition-colors hover:text-[#d4232a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#d4232a] px-5 py-3.5 text-sm font-bold uppercase text-white shadow-lg"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
