'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TestimonialsNew() {
  const testimonials = [
    {
      name: "Alex Johnson",
      location: "(USA, 28)",
      quote: "&ldquo;Finally found all the anime hotspots I dreamed of! 😁&rdquo;",
      text: "This guidebook helped me navigate Akihabara without getting lost. Thanks to the maps and shop lists, I scored limited-edition figures and doujinshi I never thought I'd find. It truly leveled up my otaku pilgrimage.",
      avatar: "/images/testimonial/Alex Johnson.png"
    },
    {
      name: "Mei Wong", 
      location: "(Singapore, 24)",
      quote: "&ldquo;Ikebukuro's hidden gems unlocked!😁&rdquo;",
      text: "I loved the recommendations for themed cafés and female-oriented shops. I discovered places dedicated to my favorite BL series and met other fans from around the world. This guide made my Tokyo trip unforgettable!",
      avatar: "/images/testimonial/Mei Wong.png"
    },
    {
      name: "Daniel García",
      location: "(Spain, 32)", 
      quote: "&ldquo;From Nakano to Akihabara, everything covered! 😁&rdquo;",
      text: "This guidebook explained Japan's tricky train system in a way even I could follow. Without it, I would have missed rare retro game shops and anime exhibitions. Highly recommended for every true otaku travel",
      avatar: "/images/testimonial/Daniel García.png"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="mb-6">
                <div className="rounded-full w-32 h-32 mx-auto shadow-lg overflow-hidden relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover object-center"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Name and Location */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {testimonial.location}
              </p>

              {/* Quote */}
              <p className="text-lg font-semibold text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: testimonial.quote }}>
              </p>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed text-sm">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}