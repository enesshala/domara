"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/shared/i18n-provider";
import Link from "next/link";

const categories = [
  { id: "kitchen", key: "prod_cat_kitchen" },
  { id: "rooms", key: "prod_cat_rooms" },
  { id: "bathroom", key: "prod_cat_bathroom" },
  { id: "dining", key: "prod_cat_dining" },
];

interface CategoryNavProps {
  activeCategory: string;
}

export function CategoryNav({ activeCategory }: CategoryNavProps) {
  const { t } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-black py-6 mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link href={`/products?category=${category.id}`}>
                  <motion.span
                    className={`text-sm tracking-wider cursor-pointer transition-colors ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t(category.key)}
                  </motion.span>
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="h-0.5 bg-[#d4a574] mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
