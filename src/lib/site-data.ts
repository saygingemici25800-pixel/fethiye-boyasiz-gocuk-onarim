import type {
  BlogPost,
  Feature,
  HeroSlide,
  NavLink,
  ProcessStep,
  Service,
} from "@/types/site";

export const SITE = {
  brand: "Fethiye Boyasız Göçük Onarım",
  phone: "0535 309 39 72",
  phoneHref: "tel:+905353093972",
  whatsapp: "https://wa.me/905353093972",
  address: "Taşyaka, 261. Sk. No:11, 48300 Fethiye/Muğla",
  workingHours: "Pzt - Cmt: 08:30 - 21:00",
  social: {
    instagram: "https://www.instagram.com/fethiye.boyasiz.gocuk",
    facebook: "#",
  },
};

export const NAV: NavLink[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Galerimiz", href: "/galeri" },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#iletisim" },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    small: "FETHİYE BOYASIZ GÖÇÜK ONARIM",
    title: "Değer Kaybetmeden Onarım!",
    subtitle:
      "Aracınızdaki göçükleri boyasız, hızlı ve iz bırakmadan onarıyoruz. Orijinal boyanız korunur, aracınızın değeri düşmez.",
    cta: { label: "Ücretsiz Ekspertiz Al", href: "#iletisim" },
    image: "/images/dolu-sonrasi.jpeg",
  },
  {
    small: "İZ BIRAKMADAN DÜZELTME",
    title: "Fethiye'nin Güvenilir Adresi",
    subtitle:
      "Profesyonel ekipman ve tecrübeyle boyasız göçük onarımında Fethiye'nin tercih edilen markasıyız.",
    cta: { label: "Hemen Ara", href: "tel:+905353093972" },
    image: "/images/gunes-sonrasi.jpeg",
  },
  {
    small: "YÜZLERCE MUTLU MÜŞTERİ",
    title: "Sonuçlarımız Ortada",
    subtitle:
      "Öncesi-sonrası fotoğraflarımızı inceleyin, farkı kendi gözlerinizle görün.",
    cta: { label: "Galerimizi İncele", href: "/galeri" },
    image: "/images/ppf-kaplama.jpeg",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Uzman Ekip",
    description: "Yıllarca tecrübe kazanmış uzman ustalarımızla hizmet veriyoruz.",
    icon: "user",
  },
  {
    title: "Kaliteli Ekipman",
    description: "Sektörün en gelişmiş ekipmanları ile çalışıyoruz.",
    icon: "tools",
  },
  {
    title: "Garantili Hizmet",
    description: "Tüm işlemlerimiz için memnuniyet garantisi sunuyoruz.",
    icon: "star",
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Yüzlerce mutlu müşteri ile referans aldığımız hizmetler.",
    icon: "smile",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Aracınızı Getirin",
    description: "Aracınızı atölyemize getirin, ücretsiz ekspertiz yapalım.",
    icon: "car",
  },
  {
    title: "Onarım Süreci",
    description: "Uzman ekibimiz aracınızdaki hasarı boyasız yöntemle onarır.",
    icon: "tools",
    highlight: true,
  },
  {
    title: "Teslim Alın",
    description: "Aracınızı ilk günkü gibi parlak ve hasarsız teslim alın.",
    icon: "smile",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Boyasız Göçük Düzeltme",
    image: "/images/boyasiz-sonrasi.jpeg",
    href: "/hizmetler/boyasiz-gocuk-duzeltme",
  },
  {
    title: "Dolu Hasarı Onarımı",
    image: "/images/dolu-sonrasi.jpeg",
    href: "/hizmetler/dolu-hasari-onarimi",
  },
  {
    title: "Mini Onarım",
    image: "/images/mini-sonrasi.jpeg",
    href: "/hizmetler/kucuk-orta-gocuk-duzeltme",
  },
  {
    title: "Değer Kaybı Önleme",
    image: "/images/gunes-sonrasi.jpeg",
    href: "/hizmetler/deger-kaybi-onleme",
  },
  {
    title: "Kaporta Göçük Onarımı",
    image: "/images/kaporta-boya-2.jpeg",
    href: "/hizmetler/kaporta-gocuk-onarimi",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Boyasız Göçük Onarımı Nedir? Avantajları Nelerdir?",
    excerpt:
      "Boyasız göçük onarımı (PDR), aracınızın orijinal boyasına dokunmadan göçükleri düzeltme tekniğidir. Tramer kaydı oluşmaz, değer kaybı yaşanmaz.",
    image: "/images/dolu-oncesi.jpeg",
    href: "/blog/boyasiz-gocuk-onarimi-nedir",
    date: "11 Nisan 2026",
  },
  {
    title: "Dolu Hasarı Sonrası Ne Yapmalısınız?",
    excerpt:
      "Dolu yağışı sonrası aracınızda göçükler mi oluştu? Panik yapmayın. Doğru adımları atarak aracınızı en az hasarla kurtarabilirsiniz.",
    image: "/images/dolu-sonrasi.jpeg",
    href: "/blog/dolu-hasari-sonrasi-ne-yapmali",
    date: "8 Nisan 2026",
  },
  {
    title: "Araç Satmadan Önce Göçük Onarımı Yaptırmalı mısınız?",
    excerpt:
      "Aracınızı satışa çıkarmadan önce göçükleri düzelttirmek, satış fiyatınızı ciddi oranda artırabilir. İşte bilmeniz gerekenler.",
    image: "/images/rotus-sonrasi.jpeg",
    href: "/blog/arac-satmadan-once-gocuk-onarimi",
    date: "3 Nisan 2026",
  },
  {
    title: "Boyasız mı Boyalı mı? Hangi Onarım Yöntemi Daha İyi?",
    excerpt:
      "Göçük onarımında boyasız ve boyalı yöntem arasındaki farkları, avantaj ve dezavantajlarını karşılaştırıyoruz.",
    image: "/images/kaporta-boya-2.jpeg",
    href: "/blog/boyasiz-mi-boyali-mi",
    date: "28 Mart 2026",
  },
];
