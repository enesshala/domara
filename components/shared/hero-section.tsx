"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";
import Logo from "@/public/DOMARA3.svg";
import HeroImage from "@/public/img/homepage-hero.png";

export function HeroSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-[#1a1410]"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={HeroImage}
          alt={t("hero_alt")}
          className="w-full h-full object-cover opacity-60"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative h-full flex items-center justify-center"
      >
        <div className="text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-4"
            >
              <Image
                src={Logo}
                alt={t("logo_alt")}
                width={600}
                height={500}
                className="mx-auto filter brightness-0 invert"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-16 h-[1px] bg-cream/30 mx-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cream/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
