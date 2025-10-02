"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Truck, Award, Tag, Headphones } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Free delivery",
    description: "On all orders",
  },
  {
    icon: Award,
    title: "High quality materials",
    description: "Premium selection",
  },
  {
    icon: Tag,
    title: "Special offers",
    description: "Exclusive deals",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Always here",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-[#1a1410] text-[#1a1410]"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-[#1a1410] font-light text-lg mb-2">{service.title}</h3>
                <p className="text-[#1a1410]/60 text-sm font-light">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
