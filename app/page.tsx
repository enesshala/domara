import { Navigation } from "@/components/shared/navigation";
import { HeroSection } from "@/components/shared/hero-section";
import { CategoryGrid } from "@/components/shared/category-grid";
import { ContentSection } from "@/components/shared/content-section";
import { DesignersSection } from "@/components/shared/designers-section";
// import { ServicesSection } from "@/components/shared/services-section"
import { ShowcaseSection } from "@/components/shared/showcase-section";
import { FinalGallery } from "@/components/shared/final-gallery";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="z-10">
        <Navigation />
        <HeroSection />
        <CategoryGrid />
        <ContentSection />
        <DesignersSection />
        {/* <ServicesSection /> */}
        <ShowcaseSection />
        <FinalGallery />
      </div>
      <Footer />
    </main>
  );
}
