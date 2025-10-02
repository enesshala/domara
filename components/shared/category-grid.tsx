"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";

const categories = [
  { key: "category_kitchen", slug: "kitchen", image: "/img/home-kitchen.jpg" },
  { key: "category_living_room", slug: "rooms", image: "/img/home-rooms.jpg" },
  { key: "category_rooms", slug: "rooms", image: "/img/home-rooms.jpg" },
  {
    key: "category_bathroom",
    slug: "bathroom",
    image: "/img/home-bathroom.jpg",
  },
  { key: "category_dining", slug: "dining", image: "/img/home-dining.jpg" },
] as const;

export function CategoryGrid() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-0 bg-[#2a1f1a]">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
        {categories.map((category, index) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    flexGrow:
                      hoveredIndex === index
                        ? 2
                        : hoveredIndex !== null
                        ? 0.5
                        : 1,
                  }
                : { opacity: 0, y: 50, flexGrow: 1 }
            }
            transition={{
              opacity: { delay: index * 0.15, duration: 0.8 },
              y: { delay: index * 0.15, duration: 0.8 },
              flexGrow: { duration: 0.5, ease: "easeInOut" },
            }}
            className="h-[400px] md:h-full w-full md:flex-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              href={`/products?category=${category.slug}`}
              className="relative h-full w-full overflow-hidden group cursor-pointer block"
            >
              <Image
                src={category.image}
                alt={t(category.key)}
                fill
                className="w-full h-full object-cover"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                animate={{
                  opacity:
                    hoveredIndex === index
                      ? 0.3
                      : hoveredIndex !== null
                      ? 0.8
                      : 0.6,
                }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute inset-0 flex items-end justify-center pb-12"
                animate={{
                  opacity:
                    hoveredIndex === index
                      ? 1
                      : hoveredIndex !== null
                      ? 0.5
                      : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-cream text-xl md:text-2xl font-normal tracking-[0.3em] text-white"
                  animate={{
                    letterSpacing: hoveredIndex === index ? "0.4em" : "0.3em",
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {t(category.key)}
                </motion.h3>
              </motion.div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-[#d4a574]"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
