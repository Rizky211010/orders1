// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  total?: number;
  limit?: number;
  offset?: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactRecord extends ContactFormData {
  id: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied' | 'resolved';
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

export interface SubscriberRecord extends NewsletterSubscription {
  id: string;
  timestamp: string;
  status: 'active' | 'unsubscribed';
  source: string;
  unsubscribed_at?: string;
}

// Quote Request Types
export interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  description: string;
  features?: string[];
}

export interface QuoteRecord extends QuoteRequestData {
  id: string;
  timestamp: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  images: string[];
  client: string;
  year: string;
  status: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  results: Record<string, string>;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  readTime: string;
  status: 'draft' | 'published' | 'archived';
  views: number;
  likes: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

// Services Types
export interface ServicePackage {
  name: string;
  price: number;
  features: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
  duration: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  icon: string;
  featured: boolean;
  pricing: {
    startingFrom: number;
    currency: string;
    priceRange: string;
    billingType: string;
  };
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  process: ServiceProcess[];
  packages: ServicePackage[];
}

// Analytics Types
export interface AnalyticsEvent {
  type: 'pageview' | 'event' | 'visitor' | 'performance';
  data: {
    page?: string;
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    sessionId?: string;
    userId?: string;
    referrer?: string;
    device?: string;
    browser?: string;
    os?: string;
    country?: string;
    loadTime?: number;
    fcp?: number;
    lcp?: number;
    ttfb?: number;
    cls?: number;
  };
}

export interface AnalyticsStats {
  overview: {
    totalPageViews: number;
    totalEvents: number;
    uniqueVisitors: number;
    bounceRate: number;
    averageSessionDuration: number;
  };
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  traffic: Array<{ date: string; views: number }>;
  devices: Array<{ device: string; count: number }>;
  referrers: Array<{ referrer: string; count: number }>;
  performance: {
    averageLoadTime: number;
    averageFCP: number;
    averageLCP: number;
    averageTTFB: number;
  };
}