'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CardCarousel from './CardCarousel'

export default function HeroNew() {
  return (
    <section className="bg-brand-cream min-h-screen relative overflow-hidden" style={{marginTop: 0, paddingTop: 'env(safe-area-inset-top)'}}>
      <div className="container mx-auto px-4 py-16 pb-8 lg:py-24 lg:pb-16 max-w-7xl overflow-x-hidden min-w-0">
        {/* Header Text */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-red text-4xl sm:text-5xl md:text-6xl lg:text-hero-title font-bold mb-4 px-2 font-league-spartan"
          >
            Haruki Anime Journal
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-gold text-5xl sm:text-5xl md:text-6xl lg:text-hero-subtitle font-extrabold uppercase leading-tight px-2 font-bebas-neue"
          >
            <span className="block sm:hidden">THE ULTIMATE<br />TOKYO ANIME GUIDE</span>
            <span className="hidden sm:block">THE ULTIMATE TOKYO ANIME GUIDE</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl mt-4 px-2"
          >
            Chosen by 300+ Local Otaku
          </motion.p>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 relative max-w-6xl mx-auto px-4 lg:px-16">
          {/* Card Carousel - Left side on desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center relative w-full lg:w-auto lg:flex-shrink-0 order-1"
          >
            <CardCarousel />
          </motion.div>

          {/* Buy Now Box - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center max-w-md mx-auto w-full lg:w-auto lg:mx-0 order-2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              BUY NOW,<br />SAVE <span className="text-brand-red">$30</span>
            </h3>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Limited-Time Campaign to Celebrate the<br className="hidden sm:block" />
              Launch of the ULTIMATE TOKYO ANIME<br className="hidden sm:block" />
              GUIDES!
            </p>
            
            <div className="mb-6">
              <span className="text-3xl md:text-4xl text-gray-500 line-through">$59</span>
              <span className="text-3xl md:text-4xl mx-2">→</span>
              <span className="text-4xl md:text-5xl font-bold text-brand-red">$29</span>
            </div>
            
            <motion.a
              href="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-yellow text-black font-bold py-4 px-8 md:px-12 rounded-lg text-lg md:text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg w-full inline-block text-center"
            >
              Get It Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}