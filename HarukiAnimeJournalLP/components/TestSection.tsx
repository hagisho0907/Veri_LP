'use client'

import { motion } from 'framer-motion'

export default function TestSection() {
  return (
    <section className="bg-gradient-to-b from-teal-400 to-teal-500 py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            And every single day, my DMs{' '}
            <span className="italic">blow up</span> with the{' '}
            <span className="italic">same questions like:</span>
          </h2>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Speech Bubbles */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute top-8 left-4 lg:left-16 z-20"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "Where's that noodle place from your story?"
              </p>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-8 right-4 lg:right-16 z-20"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "Can you just give me your list?"
              </p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-4 lg:left-20 z-20 transform -translate-y-1/2"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "I'm going to BKK soon, what shouldn't I miss?"
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-4 lg:right-20 z-20 transform -translate-y-1/2"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "I'm going to Tokyo, should..."
              </p>
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="absolute bottom-16 left-4 lg:left-16 z-20"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "Do you know any late-night hangout place?"
              </p>
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute bottom-16 right-4 lg:right-16 z-20"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-xs relative">
              <p className="text-gray-800 text-sm font-medium italic">
                "Bro, can you make a guide already?!"
              </p>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 z-10"
          >
            {/* Left Phone */}
            <div className="relative transform -rotate-12">
              <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/images/test/S__925981_0.jpg"
                    alt="Instagram DM conversations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Phone */}
            <div className="relative transform rotate-12">
              <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/images/test/S__925983_0.jpg"
                    alt="More Instagram DM conversations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 italic">
            So... I did!
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              INTRODUCING MY EBOOK
            </h4>
            <h5 className="text-4xl lg:text-5xl font-bold text-white">
              The Bangkok Book
            </h5>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/50 to-teal-600/50 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-white rounded-full"></div>
      </div>
    </section>
  )
}