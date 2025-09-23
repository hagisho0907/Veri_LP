'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PlanningSection() {
  return (
    <section id="planning-section" className="py-12 md:py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Planning Your Otaku<br />
              Pilgrimage to Japan?
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              This guidebook is here to level up your journey, with easy to follow maps, insider tips, and must visit anime, manga, and game hotspots across Tokyo. From Akihabara&apos;s electric streets to hidden gem cafés and shops, we&apos;ll guide you through the city&apos;s geek culture without getting lost in the maze of trains and endless options. Enjoy a smooth, power up travel experience designed just for fans.
            </p>
          </motion.div>

          {/* Photo Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl order-first lg:order-last"
          >
            <div className="aspect-[4/3] md:aspect-square relative">
              <Image
                src="/images/planning/plan.jpg"
                alt="300+ Local Otaku Photos Collage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}