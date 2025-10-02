"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/shared/i18n-provider";

export function LocationsSection() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <p className="text-foreground/60 text-sm mb-2">
            {t("locations_sub")}
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-light text-foreground">
            {t("locations_title")}
          </h2>
        </motion.div>

        <div className=" mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d875.3614474778483!2d21.163270221250134!3d42.44150029089453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1759342831564!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <motion.h3
            className="font-[family-name:var(--font-playfair)] text-2xl font-light text-center text-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {t("location_primary")}
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
