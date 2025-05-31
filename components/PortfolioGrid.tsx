'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Palette, X } from 'lucide-react';
import Badge from './ui/Badge';

interface ProjectData {
  id: number;
  title: string;
  category: 'website' | 'mobile' | 'design';
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  completedDate: string;
  client: string;
}

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: 1,
      title: "E-Commerce Platform ModernShop",
      category: "website",
      description: "Platform e-commerce dengan fitur lengkap dan design modern",
      longDescription: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi, manajemen inventory real-time, dashboard admin yang powerful, dan customer support chatbot. Dibangun dengan arsitektur microservices untuk scalability maksimal.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe", "PostgreSQL"],
      liveUrl: "https://modernshop.demo",
      githubUrl: "https://github.com/orders/modernshop",
      completedDate: "Desember 2024",
      client: "ModernShop Indonesia"
    },
    {
      id: 2,
      title: "FinanceApp - Personal Finance Tracker",
      category: "mobile",
      description: "Aplikasi mobile untuk tracking keuangan personal",
      longDescription: "Aplikasi mobile yang membantu pengguna mengelola keuangan personal dengan fitur budgeting, expense tracking, investment monitoring, dan financial goal setting. Terintegrasi dengan bank API untuk real-time transaction data.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Plaid API"],
      liveUrl: "https://financeapp.demo",
      completedDate: "November 2024",
      client: "FinTech Startup"
    },
    {
      id: 3,
      title: "Healthcare Dashboard UI/UX",
      category: "design",
      description: "Design system untuk platform healthcare management",
      longDescription: "Comprehensive design system untuk platform healthcare management yang mencakup patient portal, doctor dashboard, appointment scheduling, dan telemedicine interface. Focus pada accessibility dan user experience yang optimal.",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
      completedDate: "Oktober 2024",
      client: "HealthTech Solutions"
    },
    {
      id: 4,
      title: "Corporate Website TechCorp",
      category: "website",
      description: "Website corporate dengan design premium dan SEO optimal",
      longDescription: "Website corporate multi-bahasa dengan content management system, blog platform, career portal, dan investor relations section. Optimized untuk SEO dan performance dengan Core Web Vitals score sempurna.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Strapi CMS", "GraphQL", "Vercel"],
      liveUrl: "https://techcorp.demo",
      completedDate: "September 2024",
      client: "TechCorp International"
    },
    {
      id: 5,
      title: "FoodDelivery Mobile App",
      category: "mobile",
      description: "Aplikasi food delivery dengan real-time tracking",
      longDescription: "Aplikasi food delivery yang menghubungkan customer, restaurant, dan delivery driver dengan real-time GPS tracking, payment gateway terintegrasi, dan rating system yang comprehensive.",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      liveUrl: "https://fooddelivery.demo",
      completedDate: "Agustus 2024",
      client: "Food Delivery Startup"
    },
    {
      id: 6,
      title: "Brand Identity & Website EcoGreen",
      category: "design",
      description: "Complete branding dan website untuk environmental company",
      longDescription: "Complete brand identity development termasuk logo design, brand guidelines, marketing materials, dan responsive website. Focus pada sustainable design principles dan environmental messaging.",
      image: "/api/placeholder/600/400",
      technologies: ["Adobe Creative Suite", "Figma", "Next.js"],
      liveUrl: "https://ecogreen.demo",
      completedDate: "Juli 2024",
      client: "EcoGreen Solutions"
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua Proyek', icon: <Globe className="w-4 h-4" /> },
    { id: 'website', label: 'Website', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile', label: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'design', label: 'UI/UX Design', icon: <Palette className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    {project.category === 'website' && <Globe />}
                    {project.category === 'mobile' && <Smartphone />}
                    {project.category === 'design' && <Palette />}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Lihat Detail</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="primary" size="sm">
                    {project.category === 'website' && 'Website'}
                    {project.category === 'mobile' && 'Mobile App'}
                    {project.category === 'design' && 'UI/UX Design'}
                  </Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.completedDate}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Client */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Client: {project.client}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-64 md:h-80 rounded-xl mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-8xl font-bold opacity-20">
                        {selectedProject.category === 'website' && <Globe />}
                        {selectedProject.category === 'mobile' && <Smartphone />}
                        {selectedProject.category === 'design' && <Palette />}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Deskripsi Proyek
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {selectedProject.longDescription}
                      </p>

                      {/* Technologies */}
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Teknologi yang Digunakan
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Project Info */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                            Klien
                          </h4>
                          <p className="text-gray-900 dark:text-white font-medium">
                            {selectedProject.client}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                            Selesai
                          </h4>
                          <p className="text-gray-900 dark:text-white font-medium">
                            {selectedProject.completedDate}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                            Kategori
                          </h4>
                          <Badge variant="primary">
                            {selectedProject.category === 'website' && 'Website'}
                            {selectedProject.category === 'mobile' && 'Mobile App'}
                            {selectedProject.category === 'design' && 'UI/UX Design'}
                          </Badge>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-4">
                          {selectedProject.liveUrl && (
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Lihat Live Demo</span>
                            </a>
                          )}
                          
                          {selectedProject.githubUrl && (
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                            >
                              <Github className="w-4 h-4" />
                              <span>Lihat Source Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGrid;
