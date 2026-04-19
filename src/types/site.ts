export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  small: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  beforeImage: string;
  afterImage: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: "user" | "star" | "smile" | "tools";
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: "car" | "tools" | "smile";
  highlight?: boolean;
}

export interface Service {
  title: string;
  image: string;
  href: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
}
