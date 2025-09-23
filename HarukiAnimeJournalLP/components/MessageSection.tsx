'use client'
import { motion } from 'framer-motion'

export default function MessageSection() {
  return (
    <>
      {/* Message from Haruki - Red Background */}
      <section className="bg-brand-red py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
              Message from Haruki
            </h2>
            
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              I genuinely hope that your time in Japan becomes a special and unforgettable experience. It&apos;s my wish that this guidebook helps make that happen for you.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  )
}