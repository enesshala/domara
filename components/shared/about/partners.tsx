"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "BODO", width: 80 },
  { name: "Brightspace", width: 120 },
  { name: "Labor", width: 100 },
  { name: "OOO", width: 90 },
  { name: "Labor Project", width: 110 },
  { name: "N", width: 60 },
]

export function Partners() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[oklch(0.97_0_0)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-muted-foreground" style={{ width: partner.width }}>
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
