import Link from "next/link";
import { SITE } from "@/lib/site-data";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mx-auto max-w-md">
        <p className="mb-4 text-[80px] font-black leading-none text-[#2d2d2d]/10 md:text-[120px]">
          404
        </p>
        <h1 className="mb-3 text-2xl font-extrabold text-[#111827] md:text-3xl">
          Sayfa Bulunamadı
        </h1>
        <p className="mb-8 text-[15px] leading-relaxed text-[#6b7280]">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
          Ana sayfadan devam edebilirsiniz.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-[#d4232a] px-6 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-red-500/20 transition-all hover:bg-[#b91c22] hover:-translate-y-0.5"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center rounded-xl border-2 border-[#2d2d2d] px-6 py-2.5 text-sm font-bold uppercase text-[#2d2d2d] transition-all hover:bg-[#2d2d2d] hover:text-white"
          >
            Bizi Arayın
          </a>
        </div>
      </div>
    </div>
  );
}
