'use client'
import { motion } from 'framer-motion'

export default function Reasons() {
  const reasons = [
    {
      number: "01",
      title: "Accurate, Up-to-Date Information",
      description: "Our team regularly visits and verifies every location, ensuring you get the most current details about opening hours, prices, and special events.",
      imageAlt: "Guide book preview 1"
    },
    {
      number: "02",
      title: "Insider Secrets from 300+ Local Otaku",
      description: "Tap into exclusive knowledge from passionate locals who know every hidden gem, secret floor, and best times to visit each location.",
      imageAlt: "Guide book preview 2"
    },
    {
      number: "03",
      title: "Save Money vs Expensive Tours",
      description: "Why pay $200+ for anime tours when you can explore at your own pace? Our guide costs less than a single tour and covers 10x more locations.",
      imageAlt: "Guide book preview 3"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-red mb-4">
            3 Reasons Why Haruki Anime Journal is Your Perfect Guide
          </h2>
        </motion.div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl font-bold text-brand-red opacity-20">
                    {reason.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600">
                  {reason.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-lg w-full h-[300px] flex items-center justify-center">
                  <p className="text-gray-500">{reason.imageAlt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}