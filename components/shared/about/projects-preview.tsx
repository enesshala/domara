"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";

export function ProjectsPreview() {
  const { t } = useI18n();
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[oklch(0.97_0_0)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-light text-[oklch(0.8_0.01_60)] mb-2">
          {t("about_prev_heading1")}
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold">
          {t("about_prev_heading2")}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative h-[400px] overflow-hidden rounded-lg group cursor-pointer"
        >
          <Image
            src="/img/kuzhina/1.jpg"
            alt={t("about_prev_img1_alt")}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h3 className="text-white text-3xl font-light">
              {t("about_prev_card1_title")}
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative h-[400px] overflow-hidden rounded-lg group cursor-pointer"
        >
          <Image
            src="/img/sallon/IMG_0066.jpg"
            alt={t("about_prev_img2_alt")}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "/img/kuzhina/1.jpg",
          "/img/kuzhina/2.jpg",
          "/img/kuzhina/3.jpg",
          "/img/tyrezari/IMG_0067.jpg",
        ].map((query, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative h-[250px] overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={query}
              alt={`${t("about_project_prefix")} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
