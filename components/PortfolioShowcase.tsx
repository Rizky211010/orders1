'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ArrowLeft, ArrowRight, ExternalLink, Calendar, Users, Trophy, Target } from 'lucide-react'

interface ProjectResults {
  [key: string]: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  client: string;
  clientLogo: string;
  description: string;
  techStack: string[];
  images: string[];
  results: ProjectResults;
  caseStudyUrl: string;
}

const PortfolioShowcase = () => {  const [selectedFilter, setSelectedFilter] = useState('Semua')
  const [selectedYear, setSelectedYear] = useState('Semua')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const filters = ['Semua', 'UI/UX', 'Logo', 'Web App', 'Mobile App']
  const years = ['Semua', '2024', '2023', '2022']

  const projects: Project[] = [
    {
      id: 1,
      title: "EduCourse Mobile App",
      category: "Mobile App",
      year: "2024",
      client: "EduTech Indonesia",
      clientLogo: "🎓",
      description: "Aplikasi pembelajaran online dengan fitur live streaming dan interactive quiz untuk meningkatkan engagement siswa.",
      techStack: ["React Native", "Node.js", "Firebase", "WebRTC"],
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
      results: {
        engagement: "+150%",
        users: "50K+",
        rating: "4.8/5"
      },
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "FreshMart E-commerce",
      category: "Web App",
      year: "2024",
      client: "FreshMart",
      clientLogo: "🛒",
      description: "Platform e-commerce dengan sistem inventory real-time dan payment gateway terintegrasi untuk toko retail modern.",
      techStack: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
      results: {
        sales: "+200%",
        conversion: "12%",
        performance: "98%"
      },
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "TechStart Brand Identity",
      category: "Logo",
      year: "2023",
      client: "TechStart Inc",
      clientLogo: "🚀",
      description: "Rebranding complete untuk startup teknologi dengan fokus pada identitas modern dan memorable.",
      techStack: ["Adobe Illustrator", "Figma", "After Effects"],
      images: ["/api/placeholder/600/400"],
      results: {
        recognition: "+300%",
        brand_recall: "85%",
        satisfaction: "9.5/10"
      },
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "HealthCare Dashboard",
      category: "UI/UX",
      year: "2024",
      client: "MediCare Solutions",
      clientLogo: "🏥",
      description: "Dashboard admin untuk manajemen pasien dan jadwal dokter dengan interface yang user-friendly.",
      techStack: ["Figma", "React", "Chart.js", "Material-UI"],
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400"],
      results: {
        efficiency: "+180%",
        errors: "-90%",
        satisfaction: "9.2/10"
      },
      caseStudyUrl: "#"
    },
    {
      id: 5,
      title: "RestoBite Mobile App",
      category: "Mobile App",
      year: "2023",
      client: "RestoBite Chain",
      clientLogo: "🍽️",
      description: "Aplikasi food delivery dengan fitur real-time tracking dan loyalty program terintegrasi.",
      techStack: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      images: ["/api/placeholder/600/400", "/api/placeholder/600/400", "/api/placeholder/600/400"],
      results: {
        orders: "+250%",
        retention: "75%",
        rating: "4.9/5"
      },
      caseStudyUrl: "#"
    },
    {
      id: 6,
      title: "GreenEnergy Logo Suite",
      category: "Logo",
      year: "2023",
      client: "GreenEnergy Co",
      clientLogo: "🌱",
      description: "Logo design untuk perusahaan energi terbarukan dengan konsep sustainability dan inovasi.",
      techStack: ["Adobe Illustrator", "Photoshop", "InDesign"],
      images: ["/api/placeholder/600/400"],
      results: {
        brand_strength: "+220%",
        recognition: "92%",
        awards: "3"
      },
      caseStudyUrl: "#"
    }
  ]

  const stats = [
    { icon: <Trophy className="w-8 h-8" />, number: "150+", label: "Projects Completed", color: "from-yellow-400 to-orange-500" },
    { icon: <Users className="w-8 h-8" />, number: "85+", label: "Happy Clients", color: "from-blue-400 to-purple-500" },
    { icon: <Calendar className="w-8 h-8" />, number: "5+", label: "Years Experience", color: "from-green-400 to-teal-500" },
    { icon: <Target className="w-8 h-8" />, number: "12", label: "Categories", color: "from-pink-400 to-red-500" }
  ]

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedFilter === 'Semua' || project.category === selectedFilter
    const yearMatch = selectedYear === 'Semua' || project.year === selectedYear
    return categoryMatch && yearMatch
  })

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      )
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 font-poppins">
            Portfolio Showcase
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Jelajahi koleksi karya terbaik kami yang telah membantu berbagai klien mencapai tujuan digital mereka.
          </p>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                {stat.icon}
              </div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Year Filters */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <motion.button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {year}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl mb-2">{project.clientLogo}</div>
                        <div className="text-sm opacity-80">{project.category}</div>
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

                  {/* Project Info */}
                  <div className="p-6">
                    {/* Client Logo & Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg">
                        {project.clientLogo}
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Tidak ada proyek ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coba ubah filter pencarian Anda
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-6xl">
                    {selectedProject.clientLogo}
                  </div>
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                        {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{selectedProject.clientLogo}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{selectedProject.client}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{selectedProject.year}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>                    <h5 className="font-semibold text-gray-900 dark:text-white mb-4">Project Results</h5>
                    <div className="space-y-4">
                      {Object.entries(selectedProject.results).map(([key, value]: [string, string]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <span className="text-gray-600 dark:text-gray-300 capitalize">
                            {key.replace('_', ' ')}
                          </span>
                          <span className="font-bold text-blue-600 dark:text-blue-400">{value}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                      Lihat Studi Kasus Lengkap
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioShowcase
