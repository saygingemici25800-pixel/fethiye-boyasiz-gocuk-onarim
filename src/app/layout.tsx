import type { Metadata } from "next";
import { Roboto, Dosis } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

const BASE_URL = "https://www.fethiyeboyasizgocukonarim.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Fethiye Boyasız Göçük Onarım | Değer Kaybetmeden Onarım",
    template: "%s | Fethiye Boyasız Göçük Onarım",
  },
  description:
    "Fethiye'de boyasız göçük onarım hizmeti. Aracınızdaki göçükleri boyasız, hızlı ve iz bırakmadan onarıyoruz. Orijinal boyayı koruyarak değer kaybını en aza indiriyoruz.",
  keywords: [
    "boyasız göçük onarım",
    "fethiye göçük düzeltme",
    "PDR fethiye",
    "dolu hasarı onarım",
    "boyasız göçük fethiye",
    "araç göçük düzeltme muğla",
    "paintless dent repair",
    "kaporta göçük onarımı",
  ],
  authors: [{ name: "Fethiye Boyasız Göçük Onarım" }],
  creator: "Fethiye Boyasız Göçük Onarım",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "Fethiye Boyasız Göçük Onarım",
    title: "Fethiye Boyasız Göçük Onarım | Değer Kaybetmeden Onarım",
    description:
      "Aracınızdaki göçükleri boyasız, hızlı ve iz bırakmadan onarıyoruz. Tramer kaydı oluşmaz, değer kaybı yaşanmaz.",
    images: [
      {
        url: "/images/fethiye-logo.png",
        width: 701,
        height: 403,
        alt: "Fethiye Boyasız Göçük Onarım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fethiye Boyasız Göçük Onarım",
    description: "Boyasız göçük onarımında Fethiye'nin güvenilir adresi.",
    images: ["/images/fethiye-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "VjqAvhyF2BW0I0jr_WTzxAq0Pi4voEbkWnqg7-jOTuw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${roboto.variable} ${dosis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[#4b5563]">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
