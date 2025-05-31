import { Metadata } from 'next';

// SEO configuration interface
export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  alternateLanguages?: Array<{ lang: string; url: string }>;
  structuredData?: Record<string, unknown>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Default SEO values
const DEFAULT_SEO = {
  siteName: 'ORDERS.ID',
  siteUrl: 'https://orders.id',
  defaultTitle: 'ORDERS.ID - Solusi Digital Anda, Dari Ide hingga Realisasi',
  defaultDescription: 'Kami menyediakan layanan pembuatan website, aplikasi, dan desain digital terbaik untuk kebutuhan bisnis Anda. Company Profile, E-commerce, Mobile App, UI/UX Design, dan banyak lagi.',
  defaultKeywords: ['website development', 'mobile app', 'UI/UX design', 'digital agency', 'startup', 'Indonesia', 'orders.id'],
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@orders_id',
  locale: 'id_ID',
  type: 'website',
} as const;

// Generate metadata for Next.js 13+ app directory
export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noindex = false,
    nofollow = false,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    alternateLanguages = [],
    author,
    publishedTime,
    modifiedTime,
  } = config;

  const fullTitle = title.includes(DEFAULT_SEO.siteName) 
    ? title 
    : `${title} | ${DEFAULT_SEO.siteName}`;

  const imageUrl = ogImage || DEFAULT_SEO.defaultImage;
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `${DEFAULT_SEO.siteUrl}${imageUrl}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_SEO.defaultKeywords, ...keywords].join(', '),
    authors: author ? [{ name: author }] : [{ name: DEFAULT_SEO.siteName }],
    creator: DEFAULT_SEO.siteName,
    publisher: DEFAULT_SEO.siteName,
    
    // Canonical URL
    alternates: {
      canonical: canonical || DEFAULT_SEO.siteUrl,
      languages: Object.fromEntries(
        alternateLanguages.map(alt => [alt.lang, alt.url])
      ),
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },    // Open Graph
    openGraph: {
      type: ogType === 'product' ? 'website' : ogType,
      locale: DEFAULT_SEO.locale,
      url: canonical || DEFAULT_SEO.siteUrl,
      siteName: DEFAULT_SEO.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [absoluteImageUrl],
      creator: DEFAULT_SEO.twitterHandle,
      site: DEFAULT_SEO.twitterHandle,
    },

    // Additional metadata
    category: 'technology',
    classification: 'business',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    // PWA
    manifest: '/manifest.json',
    
    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },

    // App-specific
    other: {
      'application-name': DEFAULT_SEO.siteName,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': DEFAULT_SEO.siteName,
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'msapplication-config': '/browserconfig.xml',
      'msapplication-TileColor': '#3b82f6',
      'msapplication-tap-highlight': 'no',
      'theme-color': '#3b82f6',
    },
  };

  return metadata;
}

// Generate structured data for different page types
export const generatePageStructuredData = {
  // Homepage structured data
  homepage: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: DEFAULT_SEO.siteName,
    url: DEFAULT_SEO.siteUrl,
    logo: `${DEFAULT_SEO.siteUrl}/images/logo.png`,
    description: DEFAULT_SEO.defaultDescription,
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: 'Indonesia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-xxx-xxxx-xxxx',
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
      'https://instagram.com/orders.id',
      'https://linkedin.com/company/orders-id',
      'https://facebook.com/orders.id',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Pembuatan website profesional dan responsif',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Pengembangan aplikasi mobile iOS dan Android',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'Desain antarmuka dan pengalaman pengguna',
          },
        },
      ],
    },
  }),

  // Service page structured data
  servicePage: (serviceName: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Small and Medium Businesses',
    },
  }),

  // Portfolio/work page structured data
  portfolioPage: (projectName: string, description: string, image?: string) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: projectName,
    description,
    ...(image && { image }),
    creator: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
    },
    genre: 'Digital Design',
    inLanguage: 'id',
  }),

  // Blog post structured data
  blogPost: (title: string, description: string, publishDate: string, author: string, image?: string) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${DEFAULT_SEO.siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': DEFAULT_SEO.siteUrl,
    },
  }),

  // Contact page structured data
  contactPage: () => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ORDERS.ID',
    description: 'Get in touch with ORDERS.ID for your digital needs',
    mainEntity: {
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
    },
  }),

  // FAQ page structured data
  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),
};

// SEO best practices checker
export const seoChecker = {
  checkTitle: (title: string) => {
    const issues = [];
    if (title.length < 30) issues.push('Title too short (minimum 30 characters)');
    if (title.length > 60) issues.push('Title too long (maximum 60 characters)');
    if (!title.includes(DEFAULT_SEO.siteName)) issues.push('Title should include brand name');
    return issues;
  },

  checkDescription: (description: string) => {
    const issues = [];
    if (description.length < 120) issues.push('Description too short (minimum 120 characters)');
    if (description.length > 160) issues.push('Description too long (maximum 160 characters)');
    return issues;
  },

  checkKeywords: (keywords: string[]) => {
    const issues = [];
    if (keywords.length < 3) issues.push('Add more keywords (minimum 3)');
    if (keywords.length > 10) issues.push('Too many keywords (maximum 10)');
    return issues;
  },

  checkImage: (imageUrl?: string) => {
    const issues = [];
    if (!imageUrl) issues.push('Missing OG image');
    return issues;
  },
};

// Utility to generate breadcrumb structured data
export function generateBreadcrumbData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${DEFAULT_SEO.siteUrl}${item.url}`,
    })),
  };
}

// Generate sitemap data
export function generateSitemapData() {
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/layanan', priority: 0.9, changefreq: 'weekly' },
    { url: '/portfolio', priority: 0.8, changefreq: 'weekly' },
    { url: '/tentang', priority: 0.7, changefreq: 'monthly' },
    { url: '/kontak', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.6, changefreq: 'daily' },
    { url: '/legal', priority: 0.3, changefreq: 'yearly' },
  ];

  return pages.map(page => ({
    url: `${DEFAULT_SEO.siteUrl}${page.url}`,
    lastModified: new Date().toISOString(),
    priority: page.priority,
    changeFrequency: page.changefreq as 'daily' | 'weekly' | 'monthly' | 'yearly',
  }));
}
