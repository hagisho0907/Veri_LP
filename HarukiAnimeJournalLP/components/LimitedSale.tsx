'use client'
import { motion } from 'framer-motion'

export default function LimitedSale() {
  return (
    <section className="bg-brand-red py-8 lg:py-12 text-center text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-7xl italic text-white mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
            Limited
          </h2>
          <h2 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-wider" style={{ fontFamily: 'Orbitron, monospace' }}>
            SALE
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            SAVE UP TO $30!
          </h3>
          <p className="text-lg text-white/90">
            *This offer may end without prior notice.
          </p>
        </motion.div>
      </div>
    </section>
  )
}