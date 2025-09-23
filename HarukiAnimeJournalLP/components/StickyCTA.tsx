'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const checkVisibility = useCallback(() => {
    const aboutSection = document.getElementById('about-section')
    
    if (!aboutSection) {
      // If About section not found, don't show CTA
      setIsVisible(false)
      return
    }

    // Get the top position of the About section
    const aboutTop = aboutSection.offsetTop
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    
    // Show CTA only if we haven't reached the About section yet
    // Hide CTA when we're within 100px of the About section
    const shouldShow = currentScroll < (aboutTop - 100)
    
    setIsVisible(shouldShow)
  }, [])

  useEffect(() => {
    // Wait for page to be fully loaded
    const handleLoad = () => {
      setIsLoaded(true)
      // Initial check after a small delay to ensure DOM is ready
      setTimeout(checkVisibility, 100)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [checkVisibility])

  useEffect(() => {
    if (!isLoaded) return

    // Throttle scroll events for better performance
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [isLoaded, checkVisibility])

  // Don't render anything until page is loaded
  if (!isLoaded) {
    return null
  }

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