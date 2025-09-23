'use client'
import { motion } from 'framer-motion'
import { trackEvent } from '../utils/trackEvent'
import CardCarousel from './CardCarousel'

export default function FinalCta() {
  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-brand-gold text-center mb-12"
        >
          Let&apos;s Dive Into Japan&apos;s Hidden Gems
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 relative max-w-6xl mx-auto px-4 lg:px-16">
          {/* Card Carousel - Left side on desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center relative w-full lg:w-auto lg:flex-shrink-0 order-1"
          >
            <CardCarousel />
          </motion.div>

          {/* Content - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-md mx-auto w-full lg:w-auto lg:mx-0 order-2"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Ultimate Tokyo<br />
              Anime Guide
            </h3>
            
            <p className="text-gray-700 text-lg mb-6">
              Get <strong>The Ultimate Tokyo Anime Guide</strong> and kickstart an unforgettable adventure across Japan&apos;s most vibrant cities today!
            </p>
            
            <div className="mb-8">
              <span className="text-3xl text-gray-500 line-through">$59</span>
              <span className="text-3xl mx-2">→</span>
              <span className="text-4xl font-bold text-brand-red">$29</span>
            </div>
            
            <motion.a
              href="https://harukianimejournal.myshopify.com/products/the-ultimate-tokyo-anime-guide-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackEvent('InitiateCheckout', { value: 29, currency: 'USD' })}
              className="bg-brand-yellow text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg inline-block"
            >
              Get It Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}