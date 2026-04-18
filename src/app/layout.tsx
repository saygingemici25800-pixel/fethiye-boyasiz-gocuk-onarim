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
      { url: "/seo/favicon-32x32.jpg", sizes: "32x32" },
      { url: "/seo/favicon-192x192.jpg", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.jpg",
  },
  manifest: "/manifest.json",
  verification: {
    // Google Search Console doğrulama kodunuzu buraya ekleyin
    // google: "VERIFICATION_CODE",
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
