"use client"

import { motion } from "framer-motion"
import { Home, DollarSign, Grid3x3 } from "lucide-react"

const reasons = [
  {
    icon: Home,
    title: "Luxury facilities",
    description:
      "We provide a choice of the best facilities with a first-class service contributing to your comfort and building satisfaction.",
  },
  {
    icon: DollarSign,
    title: "Affordable Price",
    description:
      "We target a wide audience of the target market so we provide quality at an affordable price and still keep the facilities that we do have.",
  },
  {
    icon: Grid3x3,
    title: "Many Choices",
    description: "We provide a wide variety of design so that you can choose the architecture to your liking.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-light mb-16 text-center"
      >
        Why
        <br />
        <span className="font-semibold">Choosing Us</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[oklch(0.2_0.03_40)] text-[oklch(0.65_0.12_60)]"
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
