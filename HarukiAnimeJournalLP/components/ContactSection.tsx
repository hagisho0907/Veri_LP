'use client'
import { motion } from 'framer-motion'
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './SocialIcons'

export default function ContactSection() {
  return (
    <>
      {/* Decorative divider */}
      <div className="bg-brand-cream">
        <div className="h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"></div>
      </div>
      
      <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600 text-lg">
                info@animejournal.jp
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Phone Number
              </h3>
              <p className="text-gray-600 text-lg">
                +81 80-6617-6604
              </p>
            </div>
          </motion.div>

          {/* Right - Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Follow me:
            </h3>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/harukianimejournal/?igsh=MWk4MGt3bm1pNWRjeg%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:scale-110 transition-transform">
                <InstagramIcon className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@harukianimejournal?_t=ZS-8zLp3wbbOpb&_r=1" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:scale-110 transition-transform">
                <TikTokIcon className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@harukianimejournal" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:scale-110 transition-transform">
                <YouTubeIcon className="w-8 h-8" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-300"
        >
          <a 
            href="https://haruki-anime-journal-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 hover:underline transition-colors"
          >
            特定商取引法に基づく表記
          </a>
        </motion.div>
      </div>
      </section>
    </>
  )
}