'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { InstagramIcon, TikTokIcon, YouTubeIcon, FacebookIcon } from './SocialIcons'

export default function AboutSection() {
  const socialStats = [
    {
      platform: "Instagram",
      count: "85K +",
      followers: "Instagram Followers",
      icon: "📷",
      color: "text-brand-red"
    },
    {
      platform: "TikTok", 
      count: "95K +",
      followers: "TikTok Followers",
      icon: "🎵",
      color: "text-brand-red"
    },
    {
      platform: "YouTube",
      count: "16K +", 
      followers: "YouTube Subscribers",
      icon: "📺",
      color: "text-brand-red"
    },
    {
      platform: "Facebook",
      count: "27K +",
      followers: "Facebook Followers", 
      icon: "📘",
      color: "text-brand-red"
    }
  ]

  return (
    <section id="about-section" className="py-16 lg:py-24 bg-brand-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Logo and Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <div className="mb-8">
              <h3 className="text-5xl text-gray-800 mb-2" style={{ fontFamily: 'Kalam, cursive', fontWeight: 'normal' }}>Haruki</h3>
              <h3 className="text-4xl font-bold text-brand-red" style={{ fontFamily: 'Kalam, cursive' }}>ANIME JOURNAL</h3>
            </div>
            
            {/* Profile Image */}
            <div className="relative w-80 h-80 mx-auto lg:mx-0 shadow-xl rounded-lg overflow-hidden">
              <Image
                src="/images/about/me.jpg"
                alt="Haruki Profile Photo in Library/Bookstore"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </motion.div>

          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="border-t-2 border-gray-300 pt-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed font-tt-interphases">
                <span className="font-league-spartan font-semibold">Haruki Anime Journal</span>, with 200K followers and over 200M total views, shares anime culture worldwide through engaging interviews. Our mission is to be a bridge between Japan and anime fans around the world, connecting communities and delivering authentic insights into the heart of Japanese anime.
              </p>
            </div>

            {/* Social Media Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {socialStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`${stat.color} mb-2 flex justify-center`}>
                    {stat.platform === 'Instagram' && (
                      <a href="https://www.instagram.com/harukianimejournal/?igsh=MWk4MGt3bm1pNWRjeg%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <InstagramIcon className="w-8 h-8" />
                      </a>
                    )}
                    {stat.platform === 'TikTok' && (
                      <a href="https://www.tiktok.com/@harukianimejournal?_t=ZS-8zLp3wbbOpb&_r=1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <TikTokIcon className="w-8 h-8" />
                      </a>
                    )}
                    {stat.platform === 'YouTube' && (
                      <a href="https://www.youtube.com/@harukianimejournal" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <YouTubeIcon className="w-8 h-8" />
                      </a>
                    )}
                    {stat.platform === 'Facebook' && (
                      <a href="https://www.facebook.com/people/Haruki-Nishioka/61561169736812/#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FacebookIcon className="w-8 h-8" />
                      </a>
                    )}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.followers}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}