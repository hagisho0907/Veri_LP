'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CardCarousel from './CardCarousel'

export default function Hero() {
  return (
    <section className="bg-brand-cream min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-red mb-6">
            Explore Japan&apos;s incredible anime meccas
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover 100+ hidden gems from 300+ Japanese Anime Otaku
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-red-700 transition-all duration-200 shadow-lg"
          >
            Get It Now
          </motion.button>

          <div className="mt-16 relative">
            <CardCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}