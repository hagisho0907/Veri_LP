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

  // Duplicate images for seamless loop
  const allImages = [...images, ...images]

  return (
    <section className="bg-brand-cream py-16 lg:py-24 overflow-hidden">
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
      </div>

      {/* Conveyor Belt Container */}
      <div className="relative w-full overflow-hidden">
        <div className="conveyor-wrapper">
          <div className="conveyor-belt">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="conveyor-item"
              >
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg bg-white">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-cream to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-cream to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        .conveyor-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .conveyor-belt {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: fit-content;
          padding: 0 2rem;
        }

        .conveyor-item {
          flex-shrink: 0;
          width: 300px;
        }

        @media (min-width: 768px) {
          .conveyor-item {
            width: 400px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .conveyor-belt:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}