import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mx-auto max-w-md">
        <p className="mb-4 text-[80px] font-black leading-none text-[#2d2d2d]/10 md:text-[120px]">
          404
        </p>
        <h1 className="font-gambarino mb-3 text-2xl text-[#111827] md:text-3xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-[#4b5563]">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          Ana sayfadan devam edebilirsiniz.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="cs-btn-press inline-flex items-center rounded-xl bg-[#d4232a] px-6 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={SITE.phoneHref}
            className="cs-btn-press inline-flex items-center rounded-xl border-2 border-[#2d2d2d] px-6 py-2.5 text-sm font-bold uppercase text-[#2d2d2d] transition-all hover:bg-[#2d2d2d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4232a]"
          >
            Bizi Arayın
          </a>
        </div>
      </div>
    </div>
  );
}
