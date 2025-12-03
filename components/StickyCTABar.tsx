'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Zap, ArrowRight } from 'lucide-react';

const StickyCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const closeCTA = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="container mx-auto px-4">
            {/* Collapsed State */}
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="py-2 sm:py-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className="flex items-center space-x-2 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm truncate">
                            Ready to start your project?
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 truncate hidden sm:block">
                            Get a free consultation today!
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleExpanded}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2 hover:shadow-lg transition-shadow"
                      >
                        <span className="hidden sm:inline">Contact Us</span>
                        <span className="sm:hidden">Contact</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={closeCTA}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Expanded State */
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="py-3 sm:py-4"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                          Let&apos;s Build Something Amazing!
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          Choose your preferred way to get in touch
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleExpanded}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {/* WhatsApp Button */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://wa.me/6281234567890?text=Hi! I'm interested in your services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1 sm:space-x-3 bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium text-xs sm:text-base">WhatsApp</span>
                    </motion.a>

                    {/* Phone Button */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:+6281234567890"
                      className="flex items-center justify-center space-x-1 sm:space-x-3 bg-blue-500 hover:bg-blue-600 text-white p-2 sm:p-3 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-medium text-xs sm:text-base">Call</span>
                    </motion.a>

                    {/* Email Button */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:hello@orders.id"
                      className="flex items-center justify-center space-x-1 sm:space-x-3 bg-purple-500 hover:bg-purple-600 text-white p-2 sm:p-3 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="font-medium text-xs sm:text-base">Email</span>
                    </motion.a>
                  </div>

                  {/* Quick Info */}
                  <div className="mt-2 sm:mt-3 text-center">
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      💬 Free consultation • ⚡ 24/7 support • 🚀 Quick response
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTABar;
