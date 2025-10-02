import { Navigation } from "@/components/shared/navigation";
import { AboutHero } from "@/components/shared/about/about-hero";
// import { WhyChooseUs } from "@/components/shared/about/why-choose-us";
import { ProjectsPreview } from "@/components/shared/about/projects-preview";
import { Statistics } from "@/components/shared/about/statistics";
import { ProjectsDetailed } from "@/components/shared/about/projects-detailed";
// import { Partners } from "@/components/shared/about/partners";
// import { ServiceCards } from "@/components/shared/about/service-cards";
import { Footer } from "@/components/shared/footer";
import AnimatedTestimonialsDemo from "@/components/shared/about/testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      {/* <WhyChooseUs /> */}
      <ProjectsPreview />
      <Statistics />
      <ProjectsDetailed />
      <div className="bg-white">
        <AnimatedTestimonialsDemo />
      </div>
      {/* <Partners /> */}
      {/* <ServiceCards /> */}
      <Footer />
    </main>
  );
}
