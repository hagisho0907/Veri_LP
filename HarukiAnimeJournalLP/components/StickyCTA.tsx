'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Create intersection observer to detect when About section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Hide CTA when About section comes into view
            setIsVisible(false)
          }
        })
      },
      {
        // Trigger when even 1px of the About section is visible
        threshold: 0,
        rootMargin: '0px 0px -100% 0px' // This makes it trigger at the top of the viewport
      }
    )

    // Wait for DOM to be ready and observe the About section
    const checkAndObserve = () => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        observer.observe(aboutSection)
      } else {
        // Retry after a short delay if section not found
        setTimeout(checkAndObserve, 100)
      }
    }

    checkAndObserve()

    // Also check scroll position to re-show CTA if user scrolls back up
    const handleScroll = () => {
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top
        
        // Show CTA if About section is below viewport
        if (aboutTop > window.innerHeight) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
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