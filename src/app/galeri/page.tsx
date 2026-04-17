import type { Metadata } from "next";
import { SITE } from "@/lib/site-data";
import { GalleryPageClient } from "./client";

export const metadata: Metadata = {
  title: "Galerimiz | Fethiye Boyasız Göçük Onarım — Öncesi Sonrası",
  description:
    "Fethiye Boyasız Göçük Onarım galeri sayfası. Boyasız göçük düzeltme, dolu hasarı onarımı, kaporta göçük onarımı ve daha fazlası. Öncesi-sonrası fotoğraflar ve videolar.",
  openGraph: {
    title: "Galerimiz | Fethiye Boyasız Göçük Onarım",
    description: "Boyasız göçük onarımı öncesi-sonrası fotoğraflar ve işlem videoları.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function GalleryPage() {
  return <GalleryPageClient site={SITE} />;
}
