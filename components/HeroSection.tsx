'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const testimonialBadges = [
    { name: "PT. ABC", logo: "🏢" },
    { name: "Startup XYZ", logo: "🚀" },
    { name: "Brand 123", logo: "⭐" },
    { name: "Company DEF", logo: "💼" },
    { name: "Business GHI", logo: "🎯" }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Blobs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-poppins"
              variants={fadeInUp}
            >
              <span className="gradient-text">
                Bangun Proyek Digital
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Anda Bersama Kami!
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Kami menyediakan layanan pembuatan website, aplikasi, dan desain digital terbaik untuk kebutuhan bisnis Anda.
            </motion.p>

            {/* CTA Buttons - Versi Sederhana yang Pasti Bekerja */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Jelajahi Layanan Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300 group"
              >
                <PlayCircle className="w-5 h-5" />
                Lihat Portfolio
              </Link>
            </div>

            {/* Auto-Rotating Testimonial Badges */}
            <motion.div
              className="mt-16"
              variants={fadeInUp}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Dipercaya oleh:</p>
              <div className="flex items-center gap-6 overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: [-100, -800] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...testimonialBadges, ...testimonialBadges].map((badge, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 whitespace-nowrap"
                    >
                      <span className="text-2xl">{badge.logo}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {badge.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main Illustration Placeholder */}
              <motion.div
                className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-3xl p-8 shadow-2xl"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  {/* Mock Code/Design Elements */}
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-white/40 rounded w-3/4"></div>
                    <div className="h-4 bg-white/30 rounded w-1/2"></div>
                    <div className="h-4 bg-white/40 rounded w-5/6"></div>
                    <div className="h-8 bg-white/50 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500 rounded-xl shadow-lg"
                animate={{ 
                  rotate: 360,
                  y: [0, -20, 0]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-500 rounded-lg shadow-lg"
                animate={{ 
                  rotate: [0, 180, 360],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
