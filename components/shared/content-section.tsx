"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";
import ImageContent from "@/public/img/content-section.jpg";

export function ContentSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#2a1f1a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 className="text-cream/90 text-4xl md:text-5xl font-light mb-4">
              {t("content_title")}
            </motion.h1>
            <motion.p
              className="text-cream/90 text-base md:text-lg leading-relaxed mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t("content_copy")}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={ImageContent}
              alt={t("content_image_alt")}
              className="w-full h-full object-cover"
              fill
            />
            <motion.div
              className="absolute inset-0 border-4 border-[#d4a574]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isHovered
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.7, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
