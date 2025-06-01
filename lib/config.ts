// Environment configuration untuk production
const isProduction = process.env.NODE_ENV === 'production';
const enableAnalytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

// Safe Google Analytics configuration
export const analyticsConfig = {
  enabled: enableAnalytics && isProduction,
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  // Jangan gunakan Secret reference
};

// Feature flags
export const featureFlags = {
  contactForm: process.env.NEXT_PUBLIC_ENABLE_CONTACT_FORM === 'true',
  portfolio: process.env.NEXT_PUBLIC_ENABLE_PORTFOLIO === 'true',
  blog: process.env.NEXT_PUBLIC_ENABLE_BLOG === 'true',
  newsletter: process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER === 'true',
  analytics: enableAnalytics,
};

// Site configuration
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'ORDERS.ID',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Digital Solutions',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://orders.id',
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'ORDERS.ID',
    tagline: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || 'Digital Solutions',
    phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '+62 812-3456-7890',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'hello@orders.id',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+6281234567890',
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
  }
};