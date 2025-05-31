'use client'

import { motion } from 'framer-motion'
import { Monitor, ShoppingCart, Layout, User, FileText, ArrowRight } from 'lucide-react'

const WebDevelopmentSection = () => {
  const services = [
    {
      id: 1,
      icon: <User className="w-8 h-8" />,
      title: "Company Profile",
      description: "Website profesional untuk membangun kredibilitas dan brand awareness perusahaan Anda.",
      features: [
        "Desain profesional dan modern",
        "Responsive di semua perangkat",
        "SEO optimized",
        "Content management system",
        "Contact form terintegrasi"
      ]
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Platform online shop lengkap dengan sistem pembayaran dan manajemen produk.",
      features: [
        "Katalog produk dinamis",
        "Payment gateway terintegrasi",
        "Admin dashboard",
        "Inventory management",
        "Customer tracking"
      ]
    },
    {
      id: 3,
      icon: <Layout className="w-8 h-8" />,
      title: "Landing Page",
      description: "Halaman landing yang menarik dan conversion-focused untuk campaign marketing.",
      features: [
        "High conversion design",
        "A/B testing ready",
        "Analytics integration",
        "Lead capture forms",
        "Social media integration"
      ]
    },
    {
      id: 4,
      icon: <Monitor className="w-8 h-8" />,
      title: "Portfolio",
      description: "Showcase karya dan pencapaian dengan tampilan gallery yang elegan.",
      features: [
        "Gallery interactive",
        "Project showcase",
        "Client testimonials",
        "Skills showcase",
        "Contact integration"
      ]
    },
    {
      id: 5,
      icon: <FileText className="w-8 h-8" />,
      title: "Blog",
      description: "Platform blog dengan CMS untuk content marketing dan SEO strategy.",
      features: [
        "Content management system",
        "SEO optimization",
        "Comment system",
        "Category & tags",
        "Social sharing"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-full opacity-30"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Dots */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 font-poppins">
            Web Development
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami membantu Anda membangun website profesional untuk mendukung bisnis Anda secara digital dengan teknologi terdepan dan desain modern.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group"
              variants={cardVariants}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: featureIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Konsultasi Gratis Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevelopmentSection
