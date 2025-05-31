'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, Eye, Image, Video, ArrowLeft, ArrowRight, Info } from 'lucide-react'

const DigitalDesignSection = () => {
  const [beforeAfterPosition, setBeforeAfterPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const portfolioItems = [
    {
      id: 1,
      type: "UI/UX",
      title: "Mobile Banking App",
      image: "/api/placeholder/300/400",
      category: "mobile"
    },
    {
      id: 2,
      type: "Logo",
      title: "Tech Startup Branding",
      image: "/api/placeholder/300/200",
      category: "branding"
    },
    {
      id: 3,
      type: "Poster",
      title: "Event Marketing Campaign",
      image: "/api/placeholder/300/450",
      category: "marketing"
    },
    {
      id: 4,
      type: "Social Media",
      title: "Instagram Content Series",
      image: "/api/placeholder/300/300",
      category: "social"
    },
    {
      id: 5,
      type: "UI/UX",
      title: "E-commerce Dashboard",
      image: "/api/placeholder/300/350",
      category: "web"
    },
    {
      id: 6,
      type: "Logo",
      title: "Restaurant Brand Identity",
      image: "/api/placeholder/300/250",
      category: "branding"
    }
  ]

  const valueProps = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Moodboard Generator",
      description: "Moodboard membantu menyatukan inspirasi visual agar desain sesuai visi brand Anda dengan harmoni warna dan konsep yang tepat.",
      image: "/api/placeholder/200/150",
      tooltip: "Moodboard membantu menentukan gaya visual sesuai brand Anda."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Prototype Interactive",
      description: "Lihat dan rasakan alur interaksi sebelum development dimulai untuk memastikan user experience yang optimal.",
      image: "/api/placeholder/200/150",
      tooltip: "Lihat alur interaksi dan pengalaman pengguna dari desain yang diusulkan."
    },
    {
      icon: <Image className="w-8 h-8" aria-label="Photo editing icon" />,
      title: "Photo Editing",
      description: "Transform foto biasa menjadi visual yang menakjubkan dengan teknik editing profesional dan creative retouching.",
      image: "/api/placeholder/200/150",
      tooltip: "Lihat perbedaan visual sebelum dan sesudah proses editing."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Produksi video berkualitas tinggi dengan motion graphics, color grading, dan storytelling yang engaging.",
      image: "/api/placeholder/200/150",
      tooltip: "Video editing profesional untuk konten marketing yang impactful."
    }
  ]

  const testimonials = [
    {
      text: "Moodboard dari tim ORDERS.ID membantu kami menemukan arah desain yang sesuai dengan gaya brand kami.",
      name: "Maria Sari",
      role: "Founder Brand Lokal",
      avatar: "👩‍💼"
    },
    {
      text: "Prototype interaktif mereka sangat membantu kami memvisualisasikan produk sebelum development.",
      name: "Budi Santoso",
      role: "Product Manager Tech Startup",
      avatar: "👨‍💻"
    },
    {
      text: "Hasil photo editing mereka luar biasa! Konten visual kami jadi lebih professional dan menarik.",
      name: "Sinta Dewi",
      role: "Social Media Manager",
      avatar: "👩‍🎨"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const position = ((e.clientX - rect.left) / rect.width) * 100
    setBeforeAfterPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Vibrant Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-pink-400/30 to-orange-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, 60, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Layanan Desain Digital
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Wujudkan visi kreatif Anda dengan layanan desain digital yang comprehensive dan professional.
          </p>
        </motion.div>

        {/* Masonry Portfolio Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Portfolio Showcase</h3>
          <div className="masonry-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="masonry-item group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="w-full aspect-square bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">{item.type}</span>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                        Lihat Detail
                      </button>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Before-After Slider */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Before & After</h3>
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 cursor-col-resize"
              onMouseMove={handleSliderMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              <div className="relative h-96">
                {/* Before Image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400"
                  style={{ clipPath: `inset(0 ${100 - beforeAfterPosition}% 0 0)` }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-500 rounded-lg mx-auto mb-4"></div>
                      <span className="text-white font-semibold">BEFORE</span>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  style={{ clipPath: `inset(0 0 0 ${beforeAfterPosition}%)` }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/30 rounded-lg mx-auto mb-4"></div>
                      <span className="text-white font-semibold">AFTER</span>
                    </div>
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${beforeAfterPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize">
                    <ArrowLeft className="w-3 h-3 text-gray-600 absolute left-0.5" />
                    <ArrowRight className="w-3 h-3 text-gray-600 absolute right-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                {/* Icon with Animation */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {prop.icon}
                </motion.div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-4">{prop.title}</h4>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed mb-6">{prop.description}</p>

                {/* Mini Visual */}
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center border border-white/20">
                    <span className="text-white/70 text-sm">Sample Preview</span>
                  </div>
                </div>

                {/* Tooltip Info */}
                <div className="group/tooltip relative">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    <Info className="w-4 h-4" />
                    <span className="text-sm">Info Detail</span>
                  </button>
                  <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg shadow-xl border border-white/20 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {prop.tooltip}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Kata Mereka</h3>
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >              <p className="text-lg md:text-xl text-gray-200 mb-6 italic">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DigitalDesignSection
