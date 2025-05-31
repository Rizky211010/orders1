'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, Eye, Image, Video, ArrowLeft, ArrowRight } from 'lucide-react'

// Types for animation elements
type ColorElement = {
  type: "color";
  color: string;
  size: "large" | "medium" | "small";
}

type WireframeElement = {
  type: "wireframe";
  position: { x: number; y: number };
}

type PhotoElement = {
  type: "before" | "after";
  opacity: number;
}

type TimelineElement = {
  type: "timeline";
  progress: number;
}

type EffectsElement = {
  type: "effects";
  count: number;
}

type AnimationElement = ColorElement | WireframeElement | PhotoElement | TimelineElement | EffectsElement;

interface ValueService {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
  benefits: string[];
  animationElements: AnimationElement[];
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string;
  company: string;
}

const ValueAddedSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const valueServices: ValueService[] = [
    {
      id: 1,
      icon: <Palette className="w-12 h-12" />,
      title: "Moodboard",
      description: "Moodboard membantu menyatukan inspirasi visual agar desain sesuai visi brand Anda dengan harmoni warna dan konsep yang tepat.",
      benefits: [
        "Menentukan arah visual yang konsisten",
        "Menghemat waktu revisi desain",
        "Memastikan brand identity yang kuat"
      ],
      animationElements: [
        { type: "color", color: "#3B82F6", size: "large" },
        { type: "color", color: "#8B5CF6", size: "medium" },
        { type: "color", color: "#F59E0B", size: "small" },
        { type: "color", color: "#EF4444", size: "medium" }
      ]
    },
    {
      id: 2,
      icon: <Eye className="w-12 h-12" />,
      title: "Prototype",
      description: "Prototype interaktif memungkinkan Anda merasakan pengalaman pengguna sebelum development dimulai, menghemat waktu dan biaya.",
      benefits: [
        "Validasi konsep sebelum development",
        "User testing yang akurat",
        "Komunikasi yang lebih baik dengan tim"
      ],
      animationElements: [
        { type: "wireframe", position: { x: 20, y: 30 } },
        { type: "wireframe", position: { x: 60, y: 20 } },
        { type: "wireframe", position: { x: 40, y: 70 } }
      ]
    },
    {
      id: 3,
      icon: <Image className="w-12 h-12" aria-label="Photo editing service icon" />,
      title: "Photo Editing",
      description: "Transform foto biasa menjadi visual yang menakjubkan dengan teknik editing profesional dan creative retouching terdepan.",
      benefits: [
        "Kualitas foto professional",
        "Color correction & enhancement",
        "Creative retouching & manipulation"
      ],
      animationElements: [
        { type: "before", opacity: 0.5 },
        { type: "after", opacity: 1 }
      ]
    },
    {
      id: 4,
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Produksi video berkualitas tinggi dengan motion graphics, color grading, dan storytelling yang engaging untuk semua platform.",
      benefits: [
        "Motion graphics & animation",
        "Professional color grading",
        "Multi-platform optimization"
      ],
      animationElements: [
        { type: "timeline", progress: 75 },
        { type: "effects", count: 5 }
      ]
    }  ]

  const testimonials: Testimonial[] = [
    {
      text: "Moodboard dari tim ORDERS.ID membantu kami menemukan arah design yang sesuai dengan gaya brand kami. Hasilnya sangat memuaskan!",
      name: "Maria Sari",
      role: "Founder Brand Lokal",
      avatar: "👩‍💼",
      company: "Batik Nusantara"
    },
    {
      text: "Prototype interaktif mereka sangat detail dan membantu kami memvisualisasikan produk digital sebelum development dimulai.",
      name: "Budi Santoso", 
      role: "Product Manager",
      avatar: "👨‍💻",
      company: "TechStart Indonesia"
    },
    {
      text: "Photo editing profesional yang luar biasa! Konten visual kami jadi lebih menarik dan engagement meningkat drastis.",
      name: "Sinta Dewi",
      role: "Social Media Manager", 
      avatar: "👩‍🎨",
      company: "Creative Agency"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
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
            Value Tambahan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bonus layanan eksklusif yang membuat proyek Anda lebih komprehensif dan berkualitas tinggi.
          </p>
        </motion.div>

        {/* Value Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />

                <div className="relative z-10">
                  {/* Animated Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Animated Visual Elements */}
                  <div className="mb-6 h-32 relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden">                    {service.id === 1 && (
                      // Moodboard Animation
                      <div className="absolute inset-0 p-4">
                        {service.animationElements.map((element, idx) => {
                          if (element.type === 'color') {
                            return (
                              <motion.div
                                key={idx}
                                className="absolute rounded-lg"
                                style={{
                                  backgroundColor: element.color,
                                  width: element.size === 'large' ? '40px' : element.size === 'medium' ? '30px' : '20px',
                                  height: element.size === 'large' ? '40px' : element.size === 'medium' ? '30px' : '20px',
                                  top: `${20 + idx * 25}%`,
                                  left: `${20 + idx * 20}%`,
                                }}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 5, 0],
                                }}
                                transition={{
                                  duration: 2 + idx * 0.5,
                                  repeat: Infinity,
                                  delay: idx * 0.3,
                                }}
                              />
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}

                    {service.id === 2 && (
                      // Prototype Animation
                      <div className="absolute inset-0 p-4">
                        {service.animationElements.map((element, idx) => {
                          if (element.type === 'wireframe') {
                            return (
                              <motion.div
                                key={idx}
                                className="absolute bg-blue-200 dark:bg-blue-700/50 rounded border-2 border-blue-400 dark:border-blue-500"
                                style={{
                                  width: '30px',
                                  height: '20px',
                                  top: `${element.position.y}%`,
                                  left: `${element.position.x}%`,
                                }}
                                animate={{
                                  opacity: [0.5, 1, 0.5],
                                  scale: [0.9, 1.1, 0.9],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  delay: idx * 0.5,
                                }}
                              />
                            );
                          }
                          return null;
                        })}
                        <motion.div
                          className="absolute inset-0 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg"
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    )}

                    {service.id === 3 && (
                      // Photo Editing Animation
                      <div className="absolute inset-0 flex">
                        <motion.div
                          className="w-1/2 bg-gray-300 dark:bg-gray-600"
                          animate={{
                            opacity: [0.7, 0.4, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                        <motion.div
                          className="w-1/2 bg-gradient-to-br from-blue-400 to-purple-500"
                          animate={{
                            opacity: [0.8, 1, 0.8],
                            scale: [0.98, 1.02, 0.98],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    )}

                    {service.id === 4 && (
                      // Video Editing Animation
                      <div className="absolute inset-0 p-4">
                        <motion.div
                          className="w-full h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2"
                          animate={{
                            scaleX: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                        />
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <motion.div
                              key={idx}
                              className="w-4 h-8 bg-gradient-to-t from-blue-400 to-purple-500 rounded"
                              animate={{
                                scaleY: [0.5, 1, 0.7, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: benefitIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center gradient-text mb-12">
            Kata Klien Kami
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Content */}
            <motion.div
              key={currentSlide}
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{testimonials[currentSlide].text}&rdquo;
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl">{testimonials[currentSlide].avatar}</div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentSlide].role}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {testimonials[currentSlide].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-6">
              <motion.button
                onClick={prevSlide}
                className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-blue-500 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="p-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueAddedSection
