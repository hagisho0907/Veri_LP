'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TroublesSection() {
  const troubles = [
    "It is tough to gather reliable info on anime shops in Tokyo",
    "Not sure if the info you found is really accurate",
    "You do not want to mess up your long awaited Japan trip",
    "Tours and guides are pricey and do not let you go where you want",
    "Want to buy anime figures and goods at the best price",
    "Want to discover hidden gems only Japanese otaku know"
  ]

  return (
    <section className="bg-brand-red py-12 md:py-16 lg:py-24 relative overflow-hidden" style={{marginBottom: 0}}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8 md:mb-12"
        >
          Troubles You Face
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {troubles.map((trouble, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-white text-lg sm:text-xl lg:text-2xl text-center mb-4 md:mb-6 leading-relaxed px-2"
            >
              &ldquo;{trouble}&rdquo;
            </motion.p>
          ))}
        </div>

        {/* Stressed Person Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            <Image
              src="/images/trouble/trouble.png"
              alt="Stressed Person"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}