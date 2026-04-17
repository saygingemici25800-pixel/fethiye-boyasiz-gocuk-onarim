import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <HeroSlider />
        <FeaturesSection />
        <ProcessSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
