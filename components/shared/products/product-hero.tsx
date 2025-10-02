"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const productImages = {
  kitchen: [
    "/img/kuzhina/0.jpg",
    "/img/kuzhina/1.jpg",
    "/img/kuzhina/2.jpg",
    "/img/kuzhina/3.jpg",
  ],
  bathroom: [
    "/img/wc/0.jpg",
    "/img/wc/1.jpg",
    "/img/wc/2.jpg",
    "/img/wc/3.jpg",
    "/img/wc/4.jpg",
  ],
  livingRoom: [
    "/img/sallon/1.jpg",
    "/img/sallon/2.jpg",
    "/img/sallon/IMG_0066.jpg",
    "/img/sallon/IMG_0071.jpg",
    "/img/sallon/IMG_8705.jpg",
  ],
  rooms: [
    "/img/Dhome/1.jpg",
    "/img/Dhome/2.jpg",
    "/img/Dhome/3.jpg",
    "/img/Dhome/4.jpg",
  ],
  dining: [
    "/img/tyrezari/IMG_0067.jpg",
    "/img/tyrezari/1.jpg",
    "/img/tyrezari/2.jpg",
    "/img/tyrezari/3.jpg",
  ],
}

interface ProductHeroProps {
  category: string
}

export function ProductHero({ category }: ProductHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = productImages[category as keyof typeof productImages] || productImages.kitchen

  useEffect(() => {
    setCurrentIndex(0)
  }, [category])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative h-[90vh] bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category}-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex] || "/img/placeholder.svg"}
            fill
            alt={`${category} ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0 h-12 w-12 rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0 h-12 w-12 rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Pagination Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}
