"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/shared/i18n-provider";

interface AboutDecoProps {
  category: string;
}

const copyByCategory: Record<
  string,
  { hero: string; sub: string; body: string }
> = {
  kitchen: {
    hero: "KITCHEN",
    sub: "About Kitchen",
    body: "Meticulous cabinetry, resilient stone, and integrated lighting shape a kitchen that works as beautifully as it looks. We balance workflow, storage, and tactile materials to craft the quieter luxury your daily rituals deserve.",
  },
  bathroom: {
    hero: "BATHROOM CABINET",
    sub: "About Bathroom Cabinet",
    body: "Calm, spa‑like utility. From moisture‑proof finishes to soft‑close joinery, our bathroom systems turn compact spaces into serene sanctuaries—elegant, durable, and effortless to maintain.",
  },
  rooms: {
    hero: "ROOMS",
    sub: "About Rooms",
    body: "Layered comfort with a disciplined palette. We compose wardrobes, shelving, and media walls that conceal the clutter and frame what matters—inviting rooms that feel resolved from any angle.",
  },
  dining: {
    hero: "DINING TABLE",
    sub: "About Dining Table",
    body: "Conversation‑first proportions and enduring materials. Our dining pieces pair hand‑finished surfaces with robust bases for a table that anchors gatherings—from everyday meals to late‑night celebrations.",
  },
  livingRoom: {
    hero: "LIVING ROOM",
    sub: "About Living Room",
    body: "A living room designed with clean lines, warm lighting, and a neutral palette. Minimalist furniture, large windows, and natural textures create a harmonious balance of comfort and elegance.",
  },
};

export function AboutDeco({ category }: AboutDecoProps) {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const translate = (id: string) => ({
    hero: t(`about_${id}_hero`),
    sub: t(`about_${id}_sub`),
    body: t(`about_${id}_body`),
  });

  const copy = ((): { hero: string; sub: string; body: string } => {
    if (["kitchen", "bathroom", "rooms", "dining"].includes(category)) {
      return translate(category);
    }
    return {
      hero: t("about_rooms_hero"),
      sub: t("about_rooms_sub"),
      body: t("about_rooms_body"),
    };
  })();

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl font-light text-foreground tracking-tight">
              {copy.hero}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-light text-foreground">{copy.sub}</h3>
            <p className="text-foreground/70 leading-relaxed font-light">
              {copy.body}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-12 py-6 text-sm tracking-wider bg-transparent"
              >
                Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
