"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/shared/i18n-provider";

const projects = [
  {
    titleKey: "about_det_p1_title",
    image: "/img/sallon/1.jpg",
    link: "/products?category=rooms",
    descKey: "about_det_p1_desc",
  },
  {
    titleKey: "about_det_p2_title",
    image: "/img/dhome/2.jpg",
    link: "/products?category=rooms",
    descKey: "about_det_p2_desc",
  },
  {
    titleKey: "about_det_p3_title",
    image: "/img/kuzhina/1.jpg",
    link: "/products?category=kitchen",
    descKey: "about_det_p3_desc",
  },
];

export function ProjectsDetailed() {
  const { t } = useI18n();
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[oklch(0.97_0_0)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-light text-[oklch(0.8_0.01_60)] mb-2">
          {t("about_det_heading1")}
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold">
          {t("about_det_heading2")}
        </h2>
      </motion.div>

      <div className="space-y-20 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.titleKey}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative h-[400px] overflow-hidden rounded-lg group"
            >
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-light text-muted-foreground">
                {t(project.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(project.descKey)}
              </p>
              <motion.button
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-[oklch(0.65_0.12_60)] transition-colors"
              >
                <Link href={project.link || ""}>{t("link_view_more")}</Link>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
