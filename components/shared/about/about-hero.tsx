"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/public/img/about-us-hero.jpg";
import { useI18n } from "@/components/shared/i18n-provider";

export function AboutHero() {
  const { t } = useI18n();
  return (
    <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt={t("about_hero_alt")}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40" />
      </motion.div>
    </section>
  );
}
