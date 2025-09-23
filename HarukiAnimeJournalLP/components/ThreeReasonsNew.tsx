'use client'
import { motion } from 'framer-motion'
import WaveDivider from './WaveDivider'
import SmallCardCarousel from './SmallCardCarousel'
import Image from 'next/image'

export default function ThreeReasonsNew() {
  return (
    <>
      {/* Smooth gradient transition from red to cream */}
      <div className="h-16 bg-gradient-to-b from-brand-red to-brand-cream"></div>
      
      <section className="bg-brand-cream pt-4 pb-12 md:pt-8 md:pb-16 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          {/* You'll be alright! */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8"
          >
            You&apos;ll be <span className="text-brand-red font-bold">alright!</span>
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-4"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-red leading-tight font-bebas-neue">3 REASONS</span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">Why This Guidebook Stands Out</span>
          </motion.h2>

          {/* Reason 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 mb-12"
          >
            {/* Reason Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-brand-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-bold">REASON</div>
                  <div className="text-3xl font-bold">1</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight px-2">
              <span className="text-gray-700">100+ Pieces of</span><br className="sm:hidden" />{' '}
              <span className="text-brand-red">100% Reliable</span><br className="sm:hidden" />{' '}
              <span className="text-gray-700">Information</span>
            </h3>

            {/* Key Features Box and Phone Mockups for Reason 1 */}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-8 md:mt-12 gap-2 lg:gap-4">
              {/* Key Features Box - Mobile First */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="text-center lg:text-left mb-4 md:mb-6">
                  <div className="bg-white rounded-full px-6 md:px-8 py-3 inline-block border border-gray-400">
                    <span className="text-gray-700 font-medium text-sm md:text-base">Key Features</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
                  Info online or even from ChatGPT can be outdated or wrong. This guide is written by an anime native who has lived in Tokyo for over 25 years and carefully selects only the latest and most accurate details.
                </p>
              </div>
              
              {/* Small Card Carousel */}
              <div className="lg:w-1/2 relative order-1 lg:order-2 flex justify-center items-center">
                <SmallCardCarousel reasonNumber={1} />
              </div>
            </div>
            
            {/* Reason 2 */}
            <div className="mt-24">
              <div className="flex justify-center mb-8">
                <div className="bg-brand-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-bold">REASON</div>
                    <div className="text-3xl font-bold">2</div>
                  </div>
                </div>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-gray-700">Secret Spots From</span>{' '}
                <span className="text-brand-red">Real Otaku</span>
              </h3>
              
              {/* Reason 2 Content */}
              <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-12">
                {/* Left Image */}
                <div className="w-full max-w-sm lg:w-1/2 lg:max-w-none mx-auto">
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/reason/2/2.png"
                      alt="Japanese Otaku Friends Photo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 384px, (max-width: 1024px) 448px, 50vw"
                    />
                  </div>
                </div>
                
                {/* Right Key Features */}
                <div className="lg:w-1/2">
                  <div className="text-center lg:text-left mb-6">
                    <div className="bg-white rounded-full px-8 py-3 inline-block border border-gray-400">
                      <span className="text-gray-700 font-medium">Key Features</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
                    After interviewing over 300 Japanese anime fans for more than a year, this book reveals hidden info you will never find online. It feels just like having a Japanese otaku friend guide you around Tokyo.
                  </p>
                </div>
              </div>
              
              {/* Reason 3 */}
              <div className="mt-24">
                <div className="flex justify-center mb-8">
                  <div className="bg-brand-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-bold">REASON</div>
                      <div className="text-3xl font-bold">3</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                  <span className="text-brand-red">Save</span>{' '}
                  <span className="text-gray-700">Money, Go</span>{' '}
                  <span className="text-brand-red">Deeper</span>{' '}
                  <span className="text-gray-700">Than a Tour</span>
                </h3>
                
                {/* Reason 3 Content */}
                <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-2 lg:gap-4">
                  {/* Left Key Features */}
                  <div className="lg:w-1/2">
                    <div className="text-center lg:text-left mb-6">
                      <div className="bg-white rounded-full px-8 py-3 inline-block border border-gray-400">
                        <span className="text-gray-700 font-medium">Key Features</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left max-w-md mx-auto lg:mx-0">
                      After interviewing over 300 Japanese anime fans for more than a year, this book reveals hidden info you will never find online. It feels just like having a Japanese otaku friend guide you around Tokyo.
                    </p>
                  </div>
                  
                  {/* Right Card Carousel */}
                  <div className="lg:w-1/2 relative flex justify-center">
                    <SmallCardCarousel reasonNumber={3} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}