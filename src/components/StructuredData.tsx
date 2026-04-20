import { SITE } from "@/lib/site-data";

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE.brand,
    description:
      "Fethiye'de boyasız göçük onarım hizmeti. Aracınızdaki göçükleri boyasız, hızlı ve iz bırakmadan onarıyoruz.",
    url: "https://www.fethiyeboyasizgocukonarim.com",
    telephone: "+905353093972",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taşyaka, 261. Sk. No:11",
      addressLocality: "Fethiye",
      addressRegion: "Muğla",
      postalCode: "48300",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6249149,
      longitude: 29.1349322,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.instagram.com/fethiye.boyasiz.gocuk"],
    priceRange: "$$",
    image: "https://www.fethiyeboyasizgocukonarim.com/images/fethiye-logo.png",
    areaServed: {
      "@type": "City",
      name: "Fethiye",
    },
    serviceType: [
      "Boyasız Göçük Onarımı",
      "Dolu Hasarı Onarımı",
      "PDR (Paintless Dent Repair)",
      "Kaporta Göçük Düzeltme",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Boyasız göçük onarımı nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Boyasız göçük onarımı (PDR), aracınızın orijinal boyasına dokunmadan, özel aletlerle göçükleri düzelten bir onarım tekniğidir. Tramer kaydı oluşmaz ve aracın değeri korunur.",
        },
      },
      {
        "@type": "Question",
        name: "Boyasız onarım ne kadar sürer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Küçük göçükler 1-2 saat, orta göçükler yarım gün, büyük hasarlar ise 1-2 gün içinde tamamlanır.",
        },
      },
      {
        "@type": "Question",
        name: "Boyasız onarım tramer kaydı oluşturur mu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. Boyasız göçük onarımında boyaya müdahale edilmediği için tramer kaydı oluşmaz, aracınızın 2. el değeri korunur.",
        },
      },
      {
        "@type": "Question",
        name: "Fethiye'de boyasız göçük onarımı nerede yaptırabilirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fethiye Boyasız Göçük Onarım, Taşyaka 261. Sk. No:11 adresinde hizmet vermektedir. 0535 309 39 72 numarasından ücretsiz ekspertiz randevusu alabilirsiniz.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
