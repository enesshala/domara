"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "VILLA DESIGN",
    description:
      "We provide villa design services with a modern and elegant concept. We will help you to create your dream villa.",
  },
  {
    title: "DEVELOPMENT",
    description:
      "We provide development services for your property. We will help you to develop your property with the best quality.",
  },
  {
    title: "CONTACT & SEO",
    description: "We provide contact and SEO services to help you reach more customers and grow your business online.",
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-[oklch(0.2_0.03_40)] text-white p-8 rounded-lg group cursor-pointer"
          >
            <motion.h3
              className="text-2xl font-light mb-4 text-[oklch(0.65_0.12_60)]"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <p className="text-white/80 leading-relaxed mb-6">{service.description}</p>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-[oklch(0.65_0.12_60)] text-sm font-medium uppercase tracking-wider"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
