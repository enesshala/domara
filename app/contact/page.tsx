import { LocationsSection } from "@/components/shared/contact/locations-section";
import { Footer } from "@/components/shared/footer";
import { Navigation } from "@/components/shared/navigation";
import { ContactForm } from "@/components/shared/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="relative z-10">
        <Navigation />
        <ContactForm />
        <LocationsSection />
      </div>
      <Footer />
    </main>
  );
}
