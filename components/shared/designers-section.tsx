"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/shared/i18n-provider";

const portfolioImages = [
  "/img/kuzhina/1.jpg",
  "/img/sallon/IMG_0066.jpg",
  "/img/tyrezari/IMG_0067.jpg",
  "/img/kuzhina/2.jpg",
];

export function DesignersSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pb-20 pt-15 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-normal text-[#1a1410] mb-4 text-balance">
            {t("designers_line1")}
          </h2>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-normal text-[#1a1410] text-balance">
            {t("designers_line2")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <motion.img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
