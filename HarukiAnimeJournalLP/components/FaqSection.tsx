'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FaqSection() {
  const faqs = [
    {
      question: "What payment methods are available?",
      answer: "We accept various payment options, including credit cards, Apple Pay, and PayPal."
    },
    {
      question: "How can I view the guide on the go?",
      answer: "The PDF is optimized for iPhones, Android devices, iPads, and tablets. For easy access, we recommend using Adobe Acrobat Reader or the Files app."
    },
    {
      question: "Will I need the internet to access it while traveling?",
      answer: "No, once you've downloaded the guide to your device, you can access it offline anytime. However, an internet connection is required to use the original Google Maps."
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. It's a one-time fee, and the guide is yours to keep forever—tax included. Please note that purchasing through the Patreon app may result in higher prices; we recommend buying directly from the website."
    }
  ]

  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/faq/FAQ.jpeg"
            alt="Tokyo Street Scene Background"
            fill
            className="object-cover object-[50%_30%] md:object-center scale-110 md:scale-100"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* FAQ Icon and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-lg p-4 inline-block">
              <div className="flex items-center gap-2">
                <div className="bg-gray-800 text-white px-3 py-2 rounded text-xl font-bold">
                  FAQ
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black bg-opacity-30 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-white text-lg md:text-xl font-bold mb-4 leading-tight">
                {faq.question}
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}