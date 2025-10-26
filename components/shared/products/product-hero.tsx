"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const productImages = {
  kitchen: [
    "/images/kuzhina/1.jpg",
    "/images/kuzhina/2.jpg",
    "/images/kuzhina/3.png",
    "/images/kuzhina/4.png",
    "/images/kuzhina/5.png",
    "/images/kuzhina/6.png",
    "/images/kuzhina/7.png",
    "/images/kuzhina/8.png",
    "/images/kuzhina/9.png",
    "/images/kuzhina/10.png",
    "/images/kuzhina/11.png",
    "/images/kuzhina/12.png",
  ],
  bathroom: [
    "/images/bathroom-cabinet/1.png",
    "/images/bathroom-cabinet/2.png",
    "/images/bathroom-cabinet/3.png",
    "/images/bathroom-cabinet/4.png",
    "/images/bathroom-cabinet/5.png",
    "/images/bathroom-cabinet/6.png",
  ],
  living_room: [
    "/images/living-room/1.png",
    "/images/living-room/2.png",
    "/images/living-room/3.png",
    "/images/living-room/4.png",
    "/images/living-room/5.png",
    "/images/living-room/6.png",
    "/images/living-room/7.png",
    "/images/living-room/8.jpg",
    "/images/living-room/9.jpg",
    "/images/living-room/10.jpg",
    "/images/living-room/11.jpg",
    "/images/living-room/12.jpg",
    "/images/living-room/13.jpg",
    "/images/living-room/14.png",
    "/images/living-room/15.png",
    "/images/living-room/16.png",
    "/images/living-room/17.png",
    "/images/living-room/18.png",
    "/images/living-room/19.png",
    "/images/living-room/20.png",
    "/images/living-room/21.png",
    "/images/living-room/22.png",
    "/images/living-room/23.png",
    "/images/living-room/24.png",
    "/images/living-room/25.png",
    "/images/living-room/26.png",
    "/images/living-room/27.png",
    "/images/living-room/28.png",
  ],
  rooms: [
    "/images/dhome-gjumi/1.png",
    "/images/dhome-gjumi/2.png",
    "/images/dhome-gjumi/3.png",
    "/images/dhome-gjumi/4.png",
    "/images/dhome-gjumi/5.png",
    "/images/dhome-gjumi/6.png",
    "/images/dhome-gjumi/7.png",
    "/images/dhome-gjumi/8.png",
  ],
  dining: [
    "/images/dining-table/1.png",
    "/images/dining-table/2.png",
    "/images/dining-table/3.png",
    "/images/dining-table/4.png",
    "/images/dining-table/5.png",
    "/images/dining-table/6.png",
    "/images/dining-table/7.png",
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
    <section className="relative h-screen bg-white overflow-hidden">
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
            quality={100}
            sizes="100vw"
            priority
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
