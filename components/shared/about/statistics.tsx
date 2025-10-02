"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/components/shared/i18n-provider";

const statsKeys = [
  { value: "150+", key: "stats_projects" },
  { value: "300+", key: "stats_clients" },
  { value: "100%", key: "stats_satisfaction" },
  { value: "100K", key: "stats_sqft" },
];

export function Statistics() {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsKeys.map((stat, index) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl font-light text-[oklch(0.65_0.12_60)] mb-2"
            >
              {stat.value}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              className="text-sm text-muted-foreground uppercase tracking-wider"
            >
              {t(stat.key)}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
