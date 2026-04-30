import type { Service } from "@/types/site";

export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  sections: {
    title: string;
    content: string;
  }[];
  benefits: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  videoPlaceholder?: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "boyasiz-gocuk-duzeltme",
    title: "Boyasız Göçük Düzeltme",
    metaTitle: "Boyasız Göçük Düzeltme | Fethiye Boyasız Göçük Onarım",
    metaDescription:
      "Fethiye'de boyasız göçük düzeltme hizmeti. PDR tekniği ile aracınızın orijinal boyasına dokunmadan göçükleri iz bırakmadan düzeltiyoruz. Ücretsiz ekspertiz için arayın.",
    heroImage: "/images/boyasiz-sonrasi.jpeg",
    galleryImages: [
      "/images/boyasiz-oncesi.jpeg",
      "/images/boyasiz-sonrasi.jpeg",
      "/images/mini-oncesi.jpeg",
      "/images/mini-sonrasi.jpeg",
    ],
    shortDescription:
      "PDR (Paintless Dent Repair) tekniği ile aracınızın orijinal fabrika boyasına hiç dokunmadan göçükleri milimetrik hassasiyetle düzeltiyoruz.",
    sections: [
      {
        title: "Boyasız Göçük Düzeltme Nedir?",
        content:
          "Boyasız göçük düzeltme (PDR), aracınızın gövdesindeki göçük ve çöküntüleri boya işlemi yapmadan, özel aletlerle düzelten bir onarım tekniğidir. Bu yöntemde aracın orijinal fabrika boyası tamamen korunur. Fethiye'deki atölyemizde, uzman teknisyenlerimiz özel PDR aletleri kullanarak göçüğün arkasından veya yanından baskı uygular ve metal yüzeyi orijinal formuna geri getirir. İşlem sırasında boyaya hiçbir şekilde müdahale edilmez.",
      },
      {
        title: "Hangi Göçükler Boyasız Düzeltilebilir?",
        content:
          "Boyasız göçük düzeltme; kapı göçükleri, çamurluk ezikleri, bagaj kapağı çöküntüleri, tavan göçükleri ve park kaynaklı küçük-orta darbelerde son derece etkilidir. Boya yüzeyinde çatlama veya kırılma olmadığı sürece, çoğu göçük boyasız yöntemle onarılabilir. Aracınızı ücretsiz ekspertiz için getirdiğinizde, onarım yapılabilirliğini birlikte değerlendiriyoruz.",
      },
      {
        title: "Neden Boyasız Yöntem Tercih Edilmeli?",
        content:
          "Geleneksel boyalı onarımda macun, astar ve boya katmanları uygulanır. Bu süreç hem pahalıdır hem de aracın tramer (hasar) kaydına işler. Boyasız göçük düzeltmede ise boya katmanına hiç dokunulmadığı için tramer kaydı oluşmaz, aracınızın ikinci el değeri korunur ve işlem genellikle aynı gün tamamlanır. Zaman, para ve değer kaybı açısından en avantajlı onarım yöntemidir.",
      },
    ],
    benefits: [
      "Orijinal fabrika boyası %100 korunur",
      "Tramer kaydı oluşmaz",
      "Aracın 2. el değeri düşmez",
      "Çoğu onarım aynı gün tamamlanır",
      "Geleneksel boyalı onarıma göre çok daha ekonomik",
      "Çevreye zararlı boya kimyasalları kullanılmaz",
    ],
    faq: [
      {
        question: "Boyasız göçük düzeltme ne kadar sürer?",
        answer:
          "Küçük göçükler 1-2 saat, orta göçükler yarım gün, büyük hasarlar ise en fazla 1-2 gün içinde tamamlanır.",
      },
      {
        question: "Her göçük boyasız düzeltilebilir mi?",
        answer:
          "Boya yüzeyinde çatlama veya dökülme yoksa çoğu göçük boyasız yöntemle onarılabilir. Ücretsiz ekspertizde durumu birlikte değerlendiriyoruz.",
      },
      {
        question: "Boyasız onarım sonrası garanti var mı?",
        answer:
          "Evet, tüm onarımlarımızda memnuniyet garantisi sunuyoruz. Sonuçtan memnun kalmazsanız tekrar ücretsiz düzeltme yapıyoruz.",
      },
    ],
  },
  {
    slug: "dolu-hasari-onarimi",
    title: "Dolu Hasarı Onarımı",
    metaTitle: "Dolu Hasarı Onarımı Fethiye | Boyasız Dolu Göçük Tamiri",
    metaDescription:
      "Fethiye'de dolu hasarı onarımı. Dolu kaynaklı göçükleri boyasız PDR yöntemiyle, aracınızın orijinal boyasını koruyarak onarıyoruz. Sigorta dosyası desteği sunuyoruz.",
    heroImage: "/images/dolu-sonrasi.jpeg",
    galleryImages: [
      "/images/dolu-oncesi.jpeg",
      "/images/dolu-sonrasi.jpeg",
      "/images/gunes-oncesi.jpeg",
      "/images/gunes-sonrasi.jpeg",
    ],
    shortDescription:
      "Dolu yağışı sonrası aracınızda oluşan onlarca küçük göçüğü boyasız PDR yöntemiyle tek seferde, hızlı ve iz bırakmadan onarıyoruz.",
    sections: [
      {
        title: "Dolu Hasarı Nedir ve Aracınıza Etkisi",
        content:
          "Dolu yağışı, aracınızın tavan, kaput, bagaj ve çamurlukları başta olmak üzere geniş bir yüzeyde onlarca hatta yüzlerce küçük göçük oluşturabilir. Bu göçükler tek tek küçük gibi görünse de toplamda aracınızın görünümünü ciddi şekilde bozar ve 2. el değerini düşürür. Fethiye ve Muğla bölgesinde dolu yağışları zaman zaman etkili olmaktadır.",
      },
      {
        title: "Boyasız Dolu Hasarı Onarımı Nasıl Yapılır?",
        content:
          "Dolu hasarı onarımında özel LED reflektör paneller kullanarak her bir göçüğü tespit ediyor, ardından PDR aletleriyle milimetrik hassasiyette düzeltiyoruz. Tavan ve kaput gibi geniş yüzeylerde sistematik bir şekilde ilerleyerek tüm göçükleri tek tek onarıyoruz. İşlem boyunca aracınızın fabrika boyasına hiç dokunulmaz.",
      },
      {
        title: "Sigorta Dosyası Desteği",
        content:
          "Dolu hasarı çoğu kasko poliçesi kapsamında teminat altındadır. Ekspertiz raporunun hazırlanmasından sigorta şirketiyle iletişime kadar tüm süreçte size destek oluyoruz. Sigortalı araçlarda onarım maliyetinin tamamı veya büyük kısmı sigorta tarafından karşılanabilir.",
      },
    ],
    benefits: [
      "Onlarca göçük tek seferde onarılır",
      "Orijinal boya tamamen korunur",
      "Sigorta dosyası desteği sağlanır",
      "Tramer kaydı oluşmaz",
      "Aracınız 2-3 gün içinde teslim edilir",
      "Geleneksel boyalı onarıma göre çok daha hızlı",
    ],
    faq: [
      {
        question: "Dolu hasarı onarımı ne kadar sürer?",
        answer:
          "Hasar yoğunluğuna göre 1-3 gün arasında değişir. Hafif dolu hasarları genellikle 1 günde tamamlanır.",
      },
      {
        question: "Sigortam dolu hasarını karşılar mı?",
        answer:
          "Kasko poliçenizde dolu teminatı varsa evet. Ekspertiz ve dosya sürecinde size yardımcı oluyoruz.",
      },
      {
        question: "Dolu hasarı sonrası aracımı hemen getirmeli miyim?",
        answer:
          "Acil bir durum değil ancak erken getirmeniz daha iyi sonuç almamızı sağlar. Boya altında paslanma riski zamanla artabilir.",
      },
    ],
  },
  {
    slug: "kucuk-orta-gocuk-duzeltme",
    title: "Mini Onarım",
    metaTitle: "Küçük ve Orta Göçük Düzeltme Fethiye | Hızlı PDR Onarım",
    metaDescription:
      "Fethiye'de küçük ve orta boy göçük düzeltme. Park göçükleri, kapı çarpması ve günlük hasarları boyasız yöntemle aynı gün onarıyoruz.",
    heroImage: "/images/mini-sonrasi.jpeg",
    galleryImages: [
      "/images/mini-oncesi.jpeg",
      "/images/mini-sonrasi.jpeg",
      "/images/rotus-oncesi.jpeg",
      "/images/rotus-sonrasi.jpeg",
    ],
    shortDescription:
      "Park yerlerinde oluşan kapı çarpması, alışveriş arabası darbesi ve günlük küçük-orta boy göçükleri boyasız yöntemle aynı gün onarıyoruz.",
    sections: [
      {
        title: "Günlük Hayatın Göçükleri",
        content:
          "Araçların en sık karşılaştığı hasar türü küçük ve orta boy göçüklerdir. AVM otoparkında kapı çarpması, alışveriş arabası darbesi, yola fırlayan taş veya dar sokaklarda oluşan sıyrıklar aracınızda istenmeyen izler bırakabilir. Bu tür göçükler genellikle boya hasarı oluşturmaz, bu da boyasız onarım için ideal adaylardır.",
      },
      {
        title: "Aynı Gün Teslim Avantajı",
        content:
          "Küçük ve orta boy göçüklerin en büyük avantajı, onarımın genellikle birkaç saat içinde tamamlanmasıdır. Sabah aracınızı bırakıp akşam tertemiz teslim alabilirsiniz. İşlem sırasında boya yapılmadığı için kuruma süresi beklemenize de gerek yoktur.",
      },
      {
        title: "Maliyet Avantajı",
        content:
          "Geleneksel boyalı onarımda bir kapı göçüğü için macun, astar, boya ve lake katmanları uygulanır — bu hem pahalıdır hem de günlerce sürer. Boyasız göçük düzeltmede ise malzeme maliyeti sıfırdır, sadece işçilik ücreti ödersiniz. Sonuç olarak geleneksel yönteme kıyasla %50-70 oranında tasarruf sağlarsınız.",
      },
    ],
    benefits: [
      "Çoğu onarım 1-3 saat içinde tamamlanır",
      "Aynı gün teslim imkanı",
      "Boyalı onarıma göre %50-70 daha ekonomik",
      "Orijinal boya korunur, tramer kaydı oluşmaz",
      "Kuruma süresi beklemeye gerek yok",
      "Park göçükleri, kapı çarpması, taş darbesi düzelir",
    ],
    faq: [
      {
        question: "Kapı çarpması göçüğü boyasız düzelir mi?",
        answer:
          "Evet, boya yüzeyinde çatlama yoksa kapı çarpması göçükleri boyasız yöntemle mükemmel şekilde düzeltilir.",
      },
      {
        question: "Küçük göçük onarımı fiyatı ne kadar?",
        answer:
          "Göçüğün boyutu, konumu ve derinliğine göre değişir. Ücretsiz ekspertizde net fiyat veriyoruz, sürpriz çıkmaz.",
      },
      {
        question: "Birden fazla göçüğüm var, hepsi düzelir mi?",
        answer:
          "Evet, aynı seansta birden fazla göçüğü onarabiliriz. Çoklu göçüklerde paket fiyat avantajı sunuyoruz.",
      },
    ],
  },
  {
    slug: "deger-kaybi-onleme",
    title: "Değer Kaybı Önleme Onarımı",
    metaTitle: "Araç Değer Kaybı Önleme | Fethiye Boyasız Göçük Onarım",
    metaDescription:
      "Aracınızın 2. el değerini koruyun. Fethiye'de boyasız göçük onarımı ile tramer kaydı oluşturmadan, değer kaybını önleyen profesyonel onarım hizmeti.",
    heroImage: "/images/gunes-sonrasi.jpeg",
    galleryImages: [
      "/images/gunes-oncesi.jpeg",
      "/images/gunes-sonrasi.jpeg",
      "/images/ppf-kaplama.jpeg",
      "/images/dolu-sonrasi.jpeg",
    ],
    shortDescription:
      "Aracınızı satmadan önce veya göçük oluştuktan hemen sonra boyasız onarım yaptırarak tramer kaydından ve değer kaybından kaçının.",
    sections: [
      {
        title: "Araç Değer Kaybı Nedir?",
        content:
          "Araç değer kaybı, aracınızın herhangi bir hasar sonrası piyasa değerindeki düşüşü ifade eder. Tramer kayıtlı bir aracın 2. el piyasasındaki değeri, hasarsız muadillerine göre %10-30 arasında düşebilir. Özellikle boyalı onarım yapılmış araçlarda bu oran daha da yüksek olabilir çünkü alıcılar boya kalınlık ölçüm cihazlarıyla onarım geçmişini kolayca tespit edebilir.",
      },
      {
        title: "Boyasız Onarım ile Değer Kaybını Sıfırlayın",
        content:
          "Boyasız göçük onarımında aracın orijinal boyasına müdahale edilmediği için tramer kaydı oluşmaz. Boya kalınlık ölçümlerinde de herhangi bir farklılık görülmez. Bu sayede aracınız ikinci el piyasasında 'hasarsız' statüsünü korur ve değer kaybı yaşanmaz. Aracınızı satmayı düşünüyorsanız, satış öncesi boyasız göçük düzeltme yaptırmanız büyük avantaj sağlar.",
      },
      {
        title: "Satış Öncesi Araç Hazırlığı",
        content:
          "Aracınızı satışa çıkarmadan önce üzerindeki küçük göçükleri boyasız yöntemle düzelttirerek satış fiyatınızı ciddi oranda artırabilirsiniz. Onarım maliyeti, göçüklü aracın değer kaybından çok daha düşüktür. Yatırımınızın karşılığını fazlasıyla alırsınız.",
      },
    ],
    benefits: [
      "Tramer kaydı oluşmaz — araç hasarsız kalır",
      "Boya kalınlık ölçümünde fark çıkmaz",
      "2. el değer kaybı sıfırlanır",
      "Satış öncesi araç hazırlığı için ideal",
      "Boyalı onarıma göre çok daha ekonomik",
      "Aracınızın orijinalliği tamamen korunur",
    ],
    faq: [
      {
        question: "Boyasız onarım gerçekten tramer kaydı oluşturmaz mı?",
        answer:
          "Evet, boyasız göçük onarımında boyaya müdahale edilmediği için tramer sistemine herhangi bir kayıt düşmez.",
      },
      {
        question: "Satış öncesi onarım ne kadar sürer?",
        answer:
          "Göçük sayısına göre genellikle 1 gün içinde tamamlanır. Acil durumlarda aynı gün teslim yapabiliyoruz.",
      },
      {
        question: "Onarım maliyetini satışta geri kazanabilir miyim?",
        answer:
          "Kesinlikle. Boyasız onarım maliyeti, göçüklü bir aracın yaşadığı değer kaybının çok altındadır. Yatırımınız kendini fazlasıyla amorti eder.",
      },
    ],
  },
  {
    slug: "kaporta-gocuk-onarimi",
    title: "Kaporta Göçük Onarımı",
    metaTitle: "Kaporta Göçük Onarımı Fethiye | Profesyonel PDR Hizmeti",
    metaDescription:
      "Fethiye'de kaporta göçük onarımı. Kaput, tavan, bagaj, kapı ve çamurluk göçüklerini boyasız PDR tekniğiyle profesyonelce onarıyoruz.",
    heroImage: "/images/kaporta-boya-2.jpeg",
    galleryImages: [
      "/images/kaporta-boya-1.jpeg",
      "/images/kaporta-boya-2.jpeg",
      "/images/boyasiz-oncesi.jpeg",
      "/images/boyasiz-sonrasi.jpeg",
    ],
    shortDescription:
      "Kaput, tavan, bagaj kapağı, kapılar ve çamurluklar dahil tüm kaporta yüzeylerindeki göçükleri boyasız PDR tekniğiyle profesyonelce onarıyoruz.",
    sections: [
      {
        title: "Kaporta Göçükleri İçin Profesyonel Çözüm",
        content:
          "Aracınızın kaportası, her gün çeşitli dış etkenlere maruz kalır. Otopark darbeleri, kapı çarpmaları, dolu yağışı, yola fırlayan objeler veya küçük kazalar kaporta yüzeylerinde göçükler oluşturabilir. Fethiye'deki atölyemizde, tüm kaporta bölgelerindeki göçükleri boyasız PDR tekniği ile onarıyoruz.",
      },
      {
        title: "Hangi Kaporta Bölgeleri Onarılabilir?",
        content:
          "Boyasız göçük onarımı; kaput, tavan, bagaj kapağı, ön ve arka çamurluklar, kapılar ve hatta bazı sütun bölgelerinde uygulanabilir. Her bölge için farklı PDR aletleri ve teknikler kullanıyoruz. Erişimi zor bölgelerde bile özel kancalar ve çubuklar sayesinde göçüğe ulaşarak düzeltme yapabiliyoruz.",
      },
      {
        title: "Profesyonel Ekipman ve Deneyim",
        content:
          "Kaporta göçük onarımında başarılı sonuç almanın anahtarı doğru ekipman ve deneyimdir. Atölyemizde profesyonel PDR alet setleri, LED reflektör paneller ve hassas kaldırma (glue pulling) sistemleri kullanıyoruz. Uzman teknisyenlerimiz yüzlerce araçta başarılı onarım deneyimine sahiptir.",
      },
    ],
    benefits: [
      "Tüm kaporta bölgelerinde onarım yapılır",
      "Kaput, tavan, bagaj, kapı, çamurluk dahil",
      "Profesyonel PDR ekipmanları kullanılır",
      "Orijinal boya korunur, tramer kaydı oluşmaz",
      "Erişimi zor bölgelere bile müdahale edilir",
      "Deneyimli teknisyenler tarafından uygulanır",
    ],
    faq: [
      {
        question: "Tavan göçüğü boyasız düzeltilebilir mi?",
        answer:
          "Evet, tavan göçükleri boyasız yöntemle düzeltilebilir. Tavan kaplaması geçici olarak sökülüp göçüğe arkadan erişilerek onarım yapılır.",
      },
      {
        question: "Çamurluk göçüğü için boyasız onarım mümkün mü?",
        answer:
          "Çoğu çamurluk göçüğü boyasız yöntemle onarılabilir. İç taraftan erişim sağlanarak veya yapıştırma (glue pull) tekniğiyle düzeltme yapılır.",
      },
      {
        question: "Hangi durumlarda boyasız onarım yapılamaz?",
        answer:
          "Boya yüzeyinde çatlak, kırılma veya dökülme varsa ya da metal aşırı esnemiş ve geri dönüşü mümkün değilse boyalı onarım gerekebilir. Bunu ücretsiz ekspertizde belirleriz.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceDetail[] {
  return SERVICE_DETAILS.filter((s) => s.slug !== currentSlug);
}
