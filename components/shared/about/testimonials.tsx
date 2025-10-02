import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";
const testimonials = [
  {
    quote:
      "Our kitchen feels as if it always belonged here—quiet, tailored, and wonderfully efficient. Every line and surface carries intention.",
    name: "Elena Marin",
    designation: "Homeowner, Prishtina",
    src: "/img/placeholder.jpeg",
  },
  {
    quote:
      "Domara translated mood boards into atmosphere. The living room now breathes; light, texture, and storage resolve into a calm rhythm.",
    name: "Jonathan Lee",
    designation: "Architect & Client",
    src: "/img/placeholder.jpeg",
  },
  {
    quote:
      "The bathroom cabinetry is a daily luxury—soft-close, moisture-proof, and beautifully finished. Function meets serenity.",
    name: "Mira Dervishi",
    designation: "Residential Client",
    src: "/img/placeholder.jpeg",
  },
  {
    quote:
      "Our dining table anchors every gathering. The proportions invite conversation; the craftsmanship stands up to real life.",
    name: "Arben Kelmendi",
    designation: "Restaurateur",
    src: "/img/placeholder.jpeg",
  },
  {
    quote:
      "Timelines were kept, constraints embraced, and details perfected. The result is a home that feels composed and personal.",
    name: "Sophia Novak",
    designation: "Interior Stylist",
    src: "/img/placeholder.jpeg",
  },
];
export default function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
