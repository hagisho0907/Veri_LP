'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function GlimpseSection() {
  const images = [
    { src: '/images/glimpse/6.PNG', alt: 'Guide Page 6' },
    { src: '/images/glimpse/7.PNG', alt: 'Guide Page 7' },
    { src: '/images/glimpse/8.PNG', alt: 'Guide Page 8' },
    { src: '/images/glimpse/9.PNG', alt: 'Guide Page 9' }
  ]

  return (
    <section className="bg-brand-cream py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get a Glimpse!
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what our COMPLETE GUIDES have to offer! Check out sample pages from our guidebooks.
          </p>
        </motion.div>

        {/* Sample Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-xs mx-auto md:max-w-none h-[600px] md:h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}