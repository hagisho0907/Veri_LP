'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const checkVisibility = () => {
      // List of sections where CTA should be visible
      const sectionsToShow = [
        'hero-section',
        'red-banner-section', 
        'planning-section',
        'troubles-section',
        'reasons-section',
        'cta-red-section',
        'glimpse-section',
        'ready-to-explore-section'
      ]

      // Check if we're currently viewing any of the allowed sections
      let shouldShow = false
      
      for (const sectionId of sectionsToShow) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Check if section is in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            shouldShow = true
            break
          }
        }
      }

      // Also check if we haven't reached the About section yet
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect()
        // If About section is visible, hide CTA
        if (aboutRect.top < window.innerHeight) {
          shouldShow = false
        }
      }

      setIsVisible(shouldShow)
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check after DOM loads
    setTimeout(checkVisibility, 100)

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkVisibility)
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