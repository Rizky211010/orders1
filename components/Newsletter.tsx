'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface NewsletterProps {
  variant?: 'default' | 'minimal' | 'banner';
  className?: string;
}

export function Newsletter({ variant = 'default', className = '' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Basic email validation
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'minimal') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Anda"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
          <Button 
            type="submit" 
            loading={isLoading}
            className="bg-gradient-to-r from-blue-600 to-purple-600"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        {isSuccess && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 dark:text-green-400 text-sm mt-2"
          >
            ✅ Thank you for subscribing!
          </motion.p>
        )}
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 dark:text-red-400 text-sm mt-2"
          >
            ❌ {error}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-6 rounded-lg ${className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">
            🚀 Stay Updated with ORDERS.ID
          </h3>
          <p className="mb-6 text-blue-100">
            Get the latest insights, tips, and updates delivered to your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button 
              type="submit" 
              loading={isLoading}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          {isSuccess && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white mt-3"
            >
              ✅ Successfully subscribed! Check your email for confirmation.
            </motion.p>
          )}
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-200 mt-3"
            >
              ❌ {error}
            </motion.p>
          )}
        </div>
      </div>
    );
  }

  // Default variant - Full card
  return (
    <Card className={`p-8 text-center ${className}`}>
      <div className="mb-6">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-4xl mb-4"
        >
          📧
        </motion.div>
        <Badge variant="success" className="mb-4">
          Free Newsletter
        </Badge>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Get weekly insights about web development, design trends, and business tips. 
          Join 1,000+ subscribers who trust our content.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
          <Button 
            type="submit" 
            loading={isLoading}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe Now'}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            ✅ No spam
          </span>
          <span className="flex items-center gap-1">
            ✅ Unsubscribe anytime
          </span>
          <span className="flex items-center gap-1">
            ✅ Weekly updates
          </span>
        </div>
      </form>

      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
        >
          <div className="text-green-600 dark:text-green-400 font-medium mb-2">
            🎉 Welcome to our community!
          </div>
          <p className="text-green-700 dark:text-green-300 text-sm">
            Thank you for subscribing! Check your email for a confirmation link and your first newsletter.
          </p>
        </motion.div>
      )}

      {error && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
        >
          <div className="text-red-600 dark:text-red-400 font-medium mb-2">
            ❌ Subscription Failed
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm">
            {error}
          </p>
        </motion.div>
      )}

      {/* Social Proof */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          Trusted by professionals from:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            Startup
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            Tech Companies
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            UMKM
          </span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            Agencies
          </span>
        </div>
      </div>
    </Card>
  );
}
