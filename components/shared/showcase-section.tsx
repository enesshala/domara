"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      {/* Large Kitchen Image */}

      <motion.video
        src="/video/domara.mp4"
        className="object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Living Room + Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative h-[50vh] lg:h-[70vh] overflow-hidden"
        >
          <Image
            src="/img/kuzhina/2.jpg"
            alt="Living Room"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative h-[50vh] lg:h-[70vh] overflow-hidden bg-[#1a1410]"
        >
          <Image
            src="/img/kuzhina/3.jpg"
            alt="Mobile App"
            className="w-full h-full object-cover opacity-90"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
}
