'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ReadyToExplore() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/explore/渋谷交差点.gif"
          alt="Tokyo Shibuya Crossing"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold text-white mb-8"
        >
          Ready to Explore<br />
          Japan like a Local?
        </motion.h2>
      </div>
    </section>
  )
}