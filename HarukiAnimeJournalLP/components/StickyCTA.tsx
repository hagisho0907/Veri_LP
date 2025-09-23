'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true) // Start visible
  const observerRef = useRef<IntersectionObserver | null>(null)
  const aboutSectionRef = useRef<Element | null>(null)

  useEffect(() => {
    // Find About section
    const findAboutSection = () => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        aboutSectionRef.current = aboutSection
        setupObserver()
      } else {
        // Retry after a delay if section not found
        setTimeout(findAboutSection, 500)
      }
    }

    const setupObserver = () => {
      if (!aboutSectionRef.current) return

      // Clean up existing observer
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      // Create new observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Hide CTA when About section becomes visible
            if (entry.isIntersecting) {
              console.log('[StickyCTA] About section is visible - hiding CTA')
              setIsVisible(false)
            } else {
              // Show CTA when About section is not visible
              const rect = entry.boundingClientRect
              if (rect.top > 0) {
                // About section is below viewport, show CTA
                console.log('[StickyCTA] About section below viewport - showing CTA')
                setIsVisible(true)
              } else {
                // About section is above viewport, hide CTA
                console.log('[StickyCTA] About section above viewport - hiding CTA')
                setIsVisible(false)
              }
            }
          })
        },
        {
          // Trigger when About section starts entering viewport
          rootMargin: '0px 0px -50% 0px',
          threshold: 0
        }
      )

      // Start observing
      observerRef.current.observe(aboutSectionRef.current)
    }

    // Start the process
    findAboutSection()

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="sticky-cta"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-2xl p-4 md:p-6 border border-gray-100">
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
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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