'use client'
import { motion } from 'framer-motion'
import { trackEvent } from '../utils/trackEvent'

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Japan&apos;s Hidden Anime Treasures?
          </h2>
          
          <div className="mb-8">
            <div className="text-white text-lg mb-2">
              <span className="line-through opacity-60 text-2xl">$59</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-brand-red mb-2">
              $29
            </div>
            <p className="text-brand-red text-lg font-semibold">
              Limited Time Offer
            </p>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => trackEvent('InitiateCheckout', { value: 29, currency: 'USD' })}
            className="inline-block bg-brand-red text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-red-700 transition-all duration-200 shadow-lg"
          >
            Get It Now
          </motion.a>

          <div className="mt-8 text-white/80">
            <p className="mb-2">Join 85K+ Instagram & 95K+ TikTok followers</p>
            <p className="text-sm">who trust Haruki Anime Journal</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}