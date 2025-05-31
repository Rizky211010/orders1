'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Smartphone, Globe, Check, Code, Database } from 'lucide-react'

const AppDevelopmentSection = () => {
  const [activeMobileTab, setActiveMobileTab] = useState('uiux')
  const [activeWebTab, setActiveWebTab] = useState('frontend')

  const mobileFeatures = [
    "Cross-platform compatibility",
    "Smooth animations & transitions",
    "Fast development cycle",
    "Native performance",
    "Easy maintenance"
  ]

  const webFeatures = [
    "Responsive design",
    "SEO-optimized",
    "Scalable architecture",
    "Real-time functionality",
    "Cloud deployment"
  ]

  const mobileTabs = {
    uiux: { name: "UI/UX", progress: 95 },
    api: { name: "API", progress: 90 },
    database: { name: "Database", progress: 85 }
  }

  const webTabs = {
    frontend: { name: "Frontend", progress: 95 },
    backend: { name: "Backend", progress: 90 },
    database: { name: "Database", progress: 88 }
  }

  const techStacks = {
    mobile: [
      { name: "Flutter", progress: 90 },
      { name: "React Native", progress: 85 },
      { name: "Firebase", progress: 80 }
    ],
    web: [
      { name: "React/Next.js", progress: 95 },
      { name: "Node.js", progress: 90 },
      { name: "PostgreSQL", progress: 85 }
    ]
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{ 
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 0, 360]
          }}
          transition={{ duration: 25, repeat: Infinity }}
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
            App Development
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Solusi aplikasi mobile dan web yang powerful dan user-friendly untuk semua kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mobile App Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mobile App</h3>
                    <p className="text-gray-600 dark:text-gray-400">Flutter & React Native</p>
                  </div>
                </div>

                {/* Less Coding Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-6">
                  <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Less Coding</span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  {mobileFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Device Mockup */}
                <div className="relative mb-8">
                  <motion.div
                    className="mx-auto w-48 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl"
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[1.5rem] p-6 flex flex-col">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-8 bg-white/20 rounded-lg"></div>
                        <div className="h-6 bg-white/15 rounded w-3/4"></div>
                        <div className="h-6 bg-white/15 rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-2 mt-6">
                          <div className="h-20 bg-white/20 rounded-lg"></div>
                          <div className="h-20 bg-white/20 rounded-lg"></div>
                        </div>
                        <div className="h-12 bg-white/30 rounded-lg mt-auto"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Tabs */}
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {Object.entries(mobileTabs).map(([key, tab]) => (
                      <button
                        key={key}
                        onClick={() => setActiveMobileTab(key)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          activeMobileTab === key
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                  <motion.div
                    key={activeMobileTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {mobileTabs[activeMobileTab as keyof typeof mobileTabs].name} Development
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">
                        {mobileTabs[activeMobileTab as keyof typeof mobileTabs].progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${mobileTabs[activeMobileTab as keyof typeof mobileTabs].progress}%` 
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Tech Stack Progress */}
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tech Stack</h4>
                  {techStacks.mobile.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{tech.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{tech.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Web App Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
              {/* Hover Background Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Web App</h3>
                    <p className="text-gray-600 dark:text-gray-400">Fullstack Development</p>
                  </div>
                </div>

                {/* Less Coding Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50 rounded-full mb-6">
                  <Code className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Less Coding</span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  {webFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Browser Mockup */}
                <div className="relative mb-8">
                  <motion.div
                    className="bg-gray-800 rounded-2xl p-4 shadow-2xl"
                    whileHover={{ rotateY: -5, rotateX: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-md px-3 py-1 ml-4">
                        <div className="w-32 h-2 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Browser Content */}
                    <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-lg p-6 h-64">
                      <div className="space-y-4">
                        <div className="h-6 bg-white/20 rounded w-1/2"></div>
                        <div className="h-4 bg-white/15 rounded w-3/4"></div>
                        <div className="h-4 bg-white/15 rounded w-2/3"></div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                          <div className="h-16 bg-white/20 rounded-lg"></div>
                          <div className="h-16 bg-white/20 rounded-lg"></div>
                          <div className="h-16 bg-white/20 rounded-lg"></div>
                        </div>
                        <div className="h-8 bg-white/30 rounded-lg mt-4"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Tabs */}
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {Object.entries(webTabs).map(([key, tab]) => (
                      <button
                        key={key}
                        onClick={() => setActiveWebTab(key)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          activeWebTab === key
                            ? 'bg-orange-500 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>
                  <motion.div
                    key={activeWebTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {webTabs[activeWebTab as keyof typeof webTabs].name} Development
                      </span>
                      <span className="text-orange-600 dark:text-orange-400 font-bold">
                        {webTabs[activeWebTab as keyof typeof webTabs].progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${webTabs[activeWebTab as keyof typeof webTabs].progress}%` 
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Tech Stack Progress */}
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tech Stack</h4>
                  {techStacks.web.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">{tech.name}</span>
                        <span className="text-orange-600 dark:text-orange-400 font-medium">{tech.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppDevelopmentSection
