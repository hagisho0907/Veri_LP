'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let aboutSectionTop: number | null = null

    const handleScroll = () => {
      // Get About section position if not already cached
      if (aboutSectionTop === null) {
        const aboutSection = document.getElementById('about-section')
        if (aboutSection) {
          aboutSectionTop = aboutSection.offsetTop
        } else {
          return // Section not found yet, keep CTA visible
        }
      }

      // Simple check: hide when scrolled past About section
      const currentScroll = window.scrollY
      
      if (currentScroll >= aboutSectionTop - 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    // Initial check after a delay to ensure DOM is loaded
    setTimeout(handleScroll, 100)

    // Add scroll listener with throttling
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    Ready to Master Your Anime Journey?
                  </p>
                  <p className="text-sm md:text-base text-gray-600">
                    Get lifetime access to the Complete Anime Guide for just $29.99!
                  </p>
                </div>
                <Link
                  href="https://buy.stripe.com/fZe7sZ3jMgaG2wE5kK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg whitespace-nowrap"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.fbq) {
                      window.fbq('track', 'InitiateCheckout', {
                        value: 29.99,
                        currency: 'USD',
                        content_type: 'product',
                        content_ids: ['haruki-anime-guide']
                      })
                    }
                  }}
                >
                  Get Instant Access
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}