export interface BlogDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  date: string;
  readTime: string;
  intro: string;
  sections: {
    title: string;
    content: string;
  }[];
  tips?: string[];
  conclusion: string;
}

export const BLOG_DETAILS: BlogDetail[] = [
  {
    slug: "boyasiz-gocuk-onarimi-nedir",
    title: "Boyasız Göçük Onarımı Nedir? Avantajları Nelerdir?",
    metaTitle: "Boyasız Göçük Onarımı (PDR) Nedir? | Fethiye Boyasız Göçük Onarım",
    metaDescription:
      "Boyasız göçük onarımı (PDR) nedir, nasıl yapılır, avantajları nelerdir? Orijinal boya korunur, tramer kaydı oluşmaz, aynı gün teslim. Fethiye'de profesyonel PDR hizmeti.",
    heroImage: "/images/dolu-oncesi.jpeg",
    date: "11 Nisan 2026",
    readTime: "5 dk okuma",
    intro:
      "Aracınızda bir göçük oluştuğunda ilk düşünceniz muhtemelen boyacıya götürmek olur. Ancak modern otomotiv dünyasında çok daha akıllı, hızlı ve ekonomik bir yöntem var: Boyasız Göçük Onarımı (PDR — Paintless Dent Repair). Bu yazıda PDR tekniğinin ne olduğunu, nasıl çalıştığını ve neden tercih edilmesi gerektiğini detaylı şekilde anlatıyoruz.",
    sections: [
      {
        title: "PDR (Paintless Dent Repair) Nedir?",
        content:
          "Boyasız göçük onarımı, aracın gövdesindeki göçük ve çöküntüleri herhangi bir boya işlemi yapmadan, özel metal çubuklar ve aletler kullanarak düzelten bir onarım tekniğidir. 1940'larda otomobil fabrikalarında başlayan bu yöntem, günümüzde dünya genelinde en çok tercih edilen göçük onarım tekniği haline gelmiştir. Teknik, göçüğün arkasından veya yanından uygulanan kontrollü baskılarla metalin orijinal formuna geri getirilmesi prensibine dayanır.",
      },
      {
        title: "Boyasız Göçük Onarımı Nasıl Yapılır?",
        content:
          "İşlem birkaç aşamadan oluşur. İlk olarak göçük özel LED reflektör paneller altında incelenir ve derinliği, genişliği tespit edilir. Ardından göçüğe erişim sağlanır — bu bazen iç kaplama parçalarının geçici olarak sökülmesini gerektirebilir. Uzman teknisyen, özel PDR aletlerini kullanarak göçüğün arkasından veya kenarından hassas baskılar uygular. Metal, adım adım orijinal formuna döner. Son aşamada yüzey kontrol edilir ve gerekirse ince ayar yapılır. Tüm süreç boyunca aracın fabrika boyasına hiçbir müdahale yapılmaz.",
      },
      {
        title: "Boyasız Göçük Onarımının Avantajları",
        content:
          "PDR yönteminin en büyük avantajı orijinal fabrıka boyasının tamamen korunmasıdır. Boya yapılmadığı için tramer kaydı oluşmaz ve aracınızın ikinci el değeri düşmez. İşlem süresi geleneksel boyalı onarıma göre çok daha kısadır — küçük göçükler saatler içinde, büyük göçükler 1-2 günde tamamlanır. Maliyet açısından da boyalı onarıma göre %50-70 daha ekonomiktir. Ayrıca boya kimyasalları kullanılmadığı için çevre dostu bir yöntemdir.",
      },
      {
        title: "Hangi Göçükler Boyasız Onarılamaz?",
        content:
          "Boyasız onarımın bazı sınırları vardır. Boya yüzeyinde çatlak, kırılma veya dökülme varsa boyasız yöntem uygulanamaz. Aşırı derin ve metalin kalıcı olarak deforme olduğu göçüklerde de boyasız onarım yetersiz kalabilir. Panel kenarlarına çok yakın göçükler ve keskin kıvrımlı hasarlar da boyalı onarım gerektirebilir. Bu nedenle her göçük önce uzman tarafından değerlendirilmelidir.",
      },
    ],
    tips: [
      "Göçük oluştuktan sonra mümkün olan en kısa sürede onarım yaptırın — beklendikçe metal hafızası zayıflar",
      "Boyasız onarım öncesi aracınızı yıkattırmanız gerekmez, bunu biz hallederiz",
      "Ücretsiz ekspertiz hakkınızı kullanın — göçüğün boyasız onarıma uygun olup olmadığını birlikte değerlendirelim",
      "Sigorta kapsamında olan hasarlarda dosya sürecinde size destek oluyoruz",
    ],
    conclusion:
      "Boyasız göçük onarımı, aracınızın değerini korumanın en akıllı yoludur. Orijinal boya korunur, tramer kaydı oluşmaz, işlem hızlıdır ve ekonomiktir. Fethiye'de profesyonel PDR hizmeti için bize ulaşabilirsiniz.",
  },
  {
    slug: "dolu-hasari-sonrasi-ne-yapmali",
    title: "Dolu Hasarı Sonrası Ne Yapmalısınız?",
    metaTitle: "Dolu Hasarı Sonrası Ne Yapmalı? | Fethiye Boyasız Göçük Onarım",
    metaDescription:
      "Dolu yağışı sonrası aracınızda göçük mü oluştu? Yapmanız gerekenleri, sigorta sürecini ve boyasız onarım avantajlarını anlatıyoruz.",
    heroImage: "/images/dolu-sonrasi.jpeg",
    date: "8 Nisan 2026",
    readTime: "4 dk okuma",
    intro:
      "Fethiye ve Muğla bölgesinde zaman zaman etkili dolu yağışları yaşanabiliyor. Dolu yağışı sonrası aracınızın tavanı, kaputu ve çamurluklarında onlarca küçük göçük oluşabilir. Bu durumda panik yapmadan doğru adımları atmanız, hem onarım sürecini kolaylaştırır hem de cebinizi korur.",
    sections: [
      {
        title: "İlk Adım: Hasarı Belgeleyin",
        content:
          "Dolu yağışı sonrası ilk yapmanız gereken, aracınızdaki hasarı fotoğraflamaktır. Farklı açılardan, iyi aydınlatma altında detaylı fotoğraflar çekin. Tavan, kaput, bagaj, çamurluklar ve kapıları tek tek fotoğraflayın. Bu fotoğraflar hem sigorta başvurunuz hem de onarım ekspertizi için gerekli olacak. Mümkünse dolu yağışının tarih ve saatini de not edin.",
      },
      {
        title: "Sigorta Şirketinize Bildirin",
        content:
          "Kasko poliçenizde dolu teminatı varsa (çoğu kasko poliçesinde mevcuttur), sigorta şirketinize en kısa sürede hasar bildiriminde bulunun. Sigorta şirketi bir eksper atayacak ve hasar tespiti yapılacaktır. Bu süreçte biz de yanınızdayız — ekspertiz raporunun hazırlanmasından sigorta şirketiyle iletişime kadar tüm aşamalarda destek sunuyoruz.",
      },
      {
        title: "Neden Boyasız Onarımı Tercih Etmelisiniz?",
        content:
          "Dolu hasarı onarımında boyasız yöntem açık ara en avantajlı seçenektir. Geleneksel boyalı onarımda aracınızın tüm tavanı, kaputu veya diğer panelleri boyalanması gerekir — bu hem çok pahalıdır, hem günlerce sürer, hem de tramer kaydı oluşturur. Boyasız onarımda ise her göçük tek tek, orijinal boyaya dokunmadan düzeltilir. Tramer kaydı oluşmaz, aracınızın değeri korunur ve süreç çok daha kısa sürer.",
      },
      {
        title: "Onarımı Ertelemeyin",
        content:
          "Dolu hasarı sonrası onarımı ertelemek birkaç risk taşır. Göçüklerin altında zamanla nem birikebilir ve paslanma başlayabilir. Ayrıca metal uzun süre deforme kaldığında \"metal hafızası\" zayıflar ve onarım zorlaşır. Bu nedenle dolu hasarı sonrası en kısa sürede profesyonel değerlendirme yaptırmanızı öneriyoruz.",
      },
    ],
    tips: [
      "Dolu yağışı uyarısı varsa aracınızı kapalı otopark veya garaj altına alın",
      "Hasar fotoğraflarını farklı ışık koşullarında çekin — bazı göçükler doğrudan güneş altında daha iyi görünür",
      "Sigorta bildirimi için genellikle 5 iş günü süreniz vardır — erken davranın",
      "Onarım yaptırmadan aracı satmaya çalışmayın — alıcılar dolu hasarını kolayca fark eder",
    ],
    conclusion:
      "Dolu hasarı stresli bir durumdur ancak doğru adımları attığınızda aracınız eski güzelliğine kavuşabilir. Boyasız onarım, dolu hasarı için en hızlı, en ekonomik ve en değer koruyucu yöntemdir. Fethiye'de dolu hasarı onarımı için bize ulaşın.",
  },
  {
    slug: "arac-satmadan-once-gocuk-onarimi",
    title: "Araç Satmadan Önce Göçük Onarımı Yaptırmalı mısınız?",
    metaTitle: "Araç Satışı Öncesi Göçük Onarımı | Fethiye Boyasız Göçük Onarım",
    metaDescription:
      "Aracınızı satmadan önce göçükleri düzelttirmeli misiniz? Boyasız onarımın satış fiyatına etkisi, tramer kaydı ve değer kaybı hakkında bilmeniz gerekenler.",
    heroImage: "/images/rotus-sonrasi.jpeg",
    date: "3 Nisan 2026",
    readTime: "4 dk okuma",
    intro:
      "Aracınızı satışa çıkarmayı planlıyorsanız ve üzerinde birkaç göçük varsa, büyük olasılıkla şu soruyu soruyorsunuzdur: \"Onarım yaptırsam mı, yoksa bu haliyle mi satsam?\" Bu yazıda bu sorunun cevabını net verilerle ve pratik önerilerle açıklıyoruz.",
    sections: [
      {
        title: "Göçükler Satış Fiyatını Ne Kadar Düşürür?",
        content:
          "Araç alıcıları göçüklere karşı çok duyarlıdır. Küçük bile olsa görünür göçükler, alıcının zihninde \"bakımsız araç\" algısı yaratır ve pazarlık gücünüzü ciddi ölçüde zayıflatır. Piyasa verilerine göre, üzerinde göçük bulunan bir araç benzer hasarsız araçlara göre %5-15 arasında daha düşük fiyata satılır. Birden fazla göçük varsa bu oran daha da yükselir.",
      },
      {
        title: "Boyasız Onarımın Satışa Etkisi",
        content:
          "Boyasız göçük onarımının satış öncesi en büyük avantajı tramer kaydı oluşturmamasıdır. Boyalı onarım yaptırdığınızda araç tramer kayıtlı hale gelir ve bu durum alıcılar tarafından boya kalınlık ölçüm cihazıyla kolayca tespit edilir. Oysa boyasız onarımda boya katmanına dokunulmadığı için ne tramer kaydı ne de boya kalınlık farklılığı oluşur. Araç, alıcı gözünde \"hasarsız\" olarak kalır.",
      },
      {
        title: "Yatırımın Geri Dönüşü",
        content:
          "Boyasız göçük onarımı maliyeti, göçüklü bir aracın yaşadığı değer kaybının çok altındadır. Örneğin, 3-4 göçüğün boyasız onarım maliyeti birkaç bin TL iken, bu göçükler yüzünden aracınızın değeri on binlerce TL düşebilir. Yani onarıma harcadığınız her 1 TL, size satışta 3-5 TL geri dönüş sağlar. Bu, otomotiv sektöründe en yüksek yatırım getirisi sunan onarım türlerinden biridir.",
      },
      {
        title: "Satış Öncesi Kontrol Listesi",
        content:
          "Aracınızı satışa hazırlarken şu adımları izleyin: Önce tüm göçükleri tespit ettirin ve boyasız onarıma uygunluğunu değerlendirin. Uygun göçükleri boyasız yöntemle düzelttirin. Araç yıkama ve detaylı temizlik yaptırın. İç temizlik ve koku giderme uygulayın. Tüm bakım kayıtlarınızı derleyin. Bu adımlar satış fiyatınızı ciddi oranda artıracaktır.",
      },
    ],
    tips: [
      "Satıştan en az 1 hafta önce onarım yaptırın — sonucu değerlendirme süreniz olsun",
      "Onarım sonrası profesyonel iç-dış temizlik yaptırın, ilk izlenim çok önemlidir",
      "Boya kalınlık ölçüm raporunu satış ilanınızda paylaşın — güven artırır",
      "Ekspertiz raporunuzu güncelleyin ve alıcıya sunun",
    ],
    conclusion:
      "Aracınızı satmadan önce boyasız göçük onarımı yaptırmak, yapabileceğiniz en karlı yatırımlardan biridir. Tramer kaydı oluşturmadan, değer kaybını sıfırlayarak satış fiyatınızı ciddi oranda artırabilirsiniz.",
  },
  {
    slug: "boyasiz-mi-boyali-mi",
    title: "Boyasız mı Boyalı mı? Hangi Onarım Yöntemi Daha İyi?",
    metaTitle: "Boyasız vs Boyalı Göçük Onarımı Karşılaştırma | Fethiye",
    metaDescription:
      "Boyasız ve boyalı göçük onarımı arasındaki farklar nelerdir? Maliyet, süre, kalite ve değer kaybı açısından detaylı karşılaştırma.",
    heroImage: "/images/kaporta-boya-2.jpeg",
    date: "28 Mart 2026",
    readTime: "5 dk okuma",
    intro:
      "Aracınızda bir göçük oluştuğunda iki temel onarım seçeneğiniz vardır: boyasız göçük onarımı (PDR) ve geleneksel boyalı onarım. Her iki yöntemin de avantajları ve sınırları var. Bu yazıda iki yöntemi maliyet, süre, kalite ve değer kaybı açısından detaylı karşılaştırıyoruz.",
    sections: [
      {
        title: "Maliyet Karşılaştırması",
        content:
          "Boyasız göçük onarımı, boyalı onarıma göre %50-70 daha ekonomiktir. Boyalı onarımda macun, astar, boya, lake ve işçilik maliyetleri söz konusudur. Ayrıca boyahanede kuruma süresi için aracınız günlerce bekleyebilir. Boyasız onarımda ise tek maliyet kalemi usta işçiliğidir — ek malzeme kullanılmaz. Bu fark, özellikle birden fazla göçükte ciddi bir tasarruf anlamına gelir.",
      },
      {
        title: "Süre Karşılaştırması",
        content:
          "Boyasız onarımda küçük göçükler 1-2 saat, orta göçükler yarım gün, büyük hasarlar ise 1-2 gün içinde tamamlanır. Boyalı onarımda ise en basit bir panel boyama bile minimum 2-3 gün sürer — macunlama, astar, boya, lake ve kuruma aşamalarının her biri zaman gerektirir. Acil durumlarda boyasız onarım açık ara daha hızlıdır.",
      },
      {
        title: "Kalite ve Dayanıklılık",
        content:
          "Boyasız onarımda orijinal fabrika boyası korunduğu için renk uyumsuzluğu riski sıfırdır. Fabrika boyası, sonradan yapılan boyaya göre çok daha dayanıklıdır — UV ışınlarına, çizilmelere ve kimyasallara karşı daha iyi koruma sağlar. Boyalı onarımda ise ne kadar iyi yapılırsa yapılsın, orijinal boya kalitesine tam olarak ulaşmak mümkün değildir. Zamanla renk farklılığı, boya kabarması veya soyulma riski mevcuttur.",
      },
      {
        title: "Değer Kaybı ve Tramer Etkisi",
        content:
          "Bu, iki yöntem arasındaki en kritik farktır. Boyalı onarım yapıldığında araç tramer sistemine kaydedilir ve bu kayıt aracın ömür boyu değerini etkiler. Tramer kayıtlı bir araç, hasarsız muadiline göre %10-30 daha düşük fiyata satılır. Boyasız onarımda ise boyaya müdahale edilmediği için tramer kaydı oluşmaz. Boya kalınlık ölçümlerinde de fark çıkmaz. Araç, piyasada \"hasarsız\" olarak değerlenir.",
      },
      {
        title: "Hangi Durumda Hangi Yöntem?",
        content:
          "Boyasız onarım; boya yüzeyinin sağlam olduğu, orta derinlikteki göçükler için idealdir. Kapı göçükleri, park darbeleri, dolu hasarı ve benzeri durumların büyük çoğunluğu boyasız yöntemle onarılabilir. Boyalı onarım ise; boya çatlamış, dökülmüş veya metal aşırı deforme olmuş durumlarda tercih edilmelidir. Kararsız kaldığınızda en doğru yaklaşım ücretsiz ekspertiz yaptırmak ve uzman görüşü almaktır.",
      },
    ],
    tips: [
      "Her zaman önce boyasız onarım seçeneğini değerlendirin — mümkünse boyaya dokunmayın",
      "Boyalı onarım yaptıracaksanız mutlaka referanslı bir boyahanede yaptırın",
      "Onarım sonrası boya kalınlık ölçümü yaptırarak sonucu kontrol edin",
      "Sigorta kapsamındaki hasarlarda bile boyasız yöntemi tercih edebilirsiniz — sigortanız bunu karşılar",
    ],
    conclusion:
      "Sonuç olarak, boya hasarı yoksa boyasız onarım her zaman daha avantajlıdır. Daha ucuz, daha hızlı, daha kaliteli ve değer kaybı sıfır. Göçüğünüzün boyasız onarıma uygun olup olmadığını öğrenmek için ücretsiz ekspertiz hakkınızı kullanın.",
  },
];

export function getBlogBySlug(slug: string): BlogDetail | undefined {
  return BLOG_DETAILS.find((b) => b.slug === slug);
}

export function getOtherBlogs(currentSlug: string): BlogDetail[] {
  return BLOG_DETAILS.filter((b) => b.slug !== currentSlug);
}
