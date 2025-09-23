'use client'
import { motion } from 'framer-motion'

export default function Problem() {
  const problems = [
    {
      title: "Can't find reliable anime shop information online?",
      description: "Scattered information, outdated websites, and unreliable reviews make planning difficult."
    },
    {
      title: "Worried about messing up your once-in-a-lifetime Japan trip?",
      description: "Limited time and budget means you can't afford to waste precious hours on the wrong locations."
    },
    {
      title: "Unsure if online information is accurate?",
      description: "Tourist traps and misleading recommendations can ruin your authentic anime experience."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Sound Familiar?
          </h2>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}