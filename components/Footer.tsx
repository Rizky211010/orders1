'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowUp,
  Heart,
  Globe,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'E-commerce Solutions',
    'SEO Optimization'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Portfolio',
    'Testimonials',
    'Blog'
  ];

  const support = [
    'Help Center',
    'Contact Support',
    'Privacy Policy',
    'Terms of Service',
    'FAQ',
    'Documentation'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-500' }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Projects Completed', value: '1000+' },
    { icon: Globe, label: 'Countries Served', value: '25+' },
    { icon: Shield, label: 'Years Experience', value: '8+' }
  ];

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
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-b border-gray-800 dark:border-gray-700"
        >
          <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-shadow"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-4 py-8 sm:py-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6">
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  ORDERS.ID
                </motion.h2>
                <p className="text-gray-400 mt-2 sm:mt-3 leading-relaxed text-sm sm:text-base">
                  Your trusted partner for digital transformation. We create stunning websites, 
                  mobile apps, and digital experiences that drive results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Jakarta, Indonesia</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+62 812-3456-7890</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">hello@orders.id</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">24/7 Support</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-white">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 5, color: '#60A5FA' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-white">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {company.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: '#A78BFA' }}
                    className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-6 text-white">Support</h3>
              <ul className="space-y-2 sm:space-y-3">
                {support.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: '#FB7185' }}
                    className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer text-xs sm:text-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-gray-800 dark:border-gray-700"
        >
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <motion.div variants={itemVariants} className="max-w-md mx-auto text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Stay Updated</h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">
                Subscribe to our newsletter for the latest updates and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-xs sm:text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow text-xs sm:text-sm"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="border-t border-gray-800 dark:border-gray-700"
        >
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              {/* Copyright */}
              <motion.div variants={itemVariants} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400">
                <span>© 2025 ORDERS.ID. Made with</span>
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
                <span>in Indonesia</span>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex items-center space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1.5 sm:p-2 rounded-full hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
