"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { SITE } from "@/lib/site-data";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="cs-pulse fixed bottom-36 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/25 transition-all hover:scale-110 hover:shadow-green-600/40 md:bottom-24"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Yukarı çık"
        className={`fixed bottom-20 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a1e3d] text-white shadow-lg transition-all duration-300 hover:bg-[#d4232a] md:bottom-8 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>

      <a
        href={SITE.phoneHref}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4232a] to-[#b91c22] px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_-4px_16px_rgba(0,0,0,0.15)] md:hidden"
      >
        <PhoneIcon className="h-4 w-4" />
        Hemen Ara: {SITE.phone}
      </a>
    </>
  );
}
