import { NextRequest, NextResponse } from 'next/server';

// Static services data
const servicesData = [
  {
    id: '1',
    name: 'Website Development',
    slug: 'website-development',
    category: 'web',
    description: 'Kami membantu Anda membangun website profesional untuk mendukung bisnis Anda secara digital dengan teknologi terdepan dan desain modern.',
    shortDescription: 'Website profesional dengan teknologi terdepan',
    icon: 'Globe',
    featured: true,
    pricing: {
      startingFrom: 5000000,
      currency: 'IDR',
      priceRange: '5-50 juta',
      billingType: 'one-time'
    },
    features: [
      'Desain profesional dan modern',
      'Responsive di semua perangkat',
      'SEO optimized',
      'Content management system',
      'Contact form terintegrasi',
      'Google Analytics integration',
      'SSL Certificate',
      '1 tahun maintenance'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    deliverables: [
      'Website fully functional',
      'Admin dashboard',
      'Source code',
      'Documentation',
      'Training session',
      'SEO setup'
    ],
    timeline: '2-4 minggu',
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'Analisis kebutuhan dan perencanaan project',
        duration: '3-5 hari'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Pembuatan mockup dan prototype',
        duration: '5-7 hari'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Coding dan implementation fitur',
        duration: '7-14 hari'
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Quality assurance dan deployment',
        duration: '2-3 hari'
      }
    ],
    packages: [
      {
        name: 'Company Profile',
        price: 5000000,
        features: [
          'Desain profesional',
          'Responsive design',
          'SEO basic',
          'Contact form',
          '5 halaman',
          '1 tahun hosting'
        ]
      },
      {
        name: 'E-commerce',
        price: 15000000,
        features: [
          'Online store lengkap',
          'Payment gateway',
          'Admin dashboard',
          'Inventory management',
          'Customer management',
          'Analytics dashboard'
        ]
      },
      {
        name: 'Enterprise',
        price: 50000000,
        features: [
          'Custom development',
          'Advanced features',
          'API integration',
          'Multi-user system',
          'Advanced security',
          'Dedicated support'
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    category: 'mobile',
    description: 'Solusi aplikasi mobile yang powerful dan user-friendly untuk semua kebutuhan bisnis Anda dengan teknologi cross-platform.',
    shortDescription: 'Aplikasi mobile iOS & Android',
    icon: 'Smartphone',
    featured: true,
    pricing: {
      startingFrom: 25000000,
      currency: 'IDR',
      priceRange: '25-200 juta',
      billingType: 'project'
    },
    features: [
      'Cross-platform compatibility (iOS & Android)',
      'Native performance',
      'Smooth animations & transitions',
      'Push notifications',
      'Offline functionality',
      'App store submission',
      'Analytics integration',
      '6 bulan maintenance'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    deliverables: [
      'Mobile app (iOS & Android)',
      'Backend API',
      'Admin dashboard',
      'Source code',
      'App store assets',
      'Documentation'
    ],
    timeline: '3-6 bulan',
    process: [
      {
        step: 1,
        title: 'Research & Strategy',
        description: 'Market research dan strategy planning',
        duration: '1-2 minggu'
      },
      {
        step: 2,
        title: 'UI/UX Design',
        description: 'User interface dan experience design',
        duration: '2-3 minggu'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Mobile app dan backend development',
        duration: '8-16 minggu'
      },
      {
        step: 4,
        title: 'Testing & Deployment',
        description: 'Quality assurance dan app store submission',
        duration: '2-4 minggu'
      }
    ],
    packages: [
      {
        name: 'MVP App',
        price: 25000000,
        features: [
          'Basic functionality',
          'Cross-platform',
          'User authentication',
          'Basic UI/UX',
          'App store submission',
          '3 bulan support'
        ]
      },
      {
        name: 'Business App',
        price: 75000000,
        features: [
          'Advanced features',
          'Custom UI/UX',
          'Backend integration',
          'Push notifications',
          'Analytics',
          '6 bulan support'
        ]
      },
      {
        name: 'Enterprise App',
        price: 200000000,
        features: [
          'Full-featured app',
          'Advanced security',
          'Multi-platform',
          'API integrations',
          'Custom backend',
          '1 tahun support'
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    category: 'design',
    description: 'Wujudkan visi kreatif Anda dengan layanan desain digital yang comprehensive dan professional untuk meningkatkan user experience.',
    shortDescription: 'Desain yang user-friendly dan menarik',
    icon: 'Palette',
    featured: true,
    pricing: {
      startingFrom: 3000000,
      currency: 'IDR',
      priceRange: '3-30 juta',
      billingType: 'project'
    },
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design system',
      'Interactive prototypes',
      'Usability testing',
      'Design handoff',
      'Style guide documentation',
      'Revisi unlimited'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    deliverables: [
      'Design system',
      'High-fidelity mockups',
      'Interactive prototypes',
      'Style guide',
      'Design assets',
      'Handoff documentation'
    ],
    timeline: '2-6 minggu',
    process: [
      {
        step: 1,
        title: 'Research & Discovery',
        description: 'User research dan competitive analysis',
        duration: '3-5 hari'
      },
      {
        step: 2,
        title: 'Wireframing',
        description: 'Information architecture dan wireframes',
        duration: '3-5 hari'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'UI design dan visual elements',
        duration: '1-3 minggu'
      },
      {
        step: 4,
        title: 'Prototyping & Testing',
        description: 'Interactive prototype dan usability testing',
        duration: '3-7 hari'
      }
    ],
    packages: [
      {
        name: 'Landing Page Design',
        price: 3000000,
        features: [
          'Single page design',
          'Mobile responsive',
          'Basic prototype',
          'Style guide',
          '3x revisi',
          'Design assets'
        ]
      },
      {
        name: 'Website Design',
        price: 10000000,
        features: [
          'Multi-page design',
          'Complete user flow',
          'Interactive prototype',
          'Design system',
          'Unlimited revisi',
          'Developer handoff'
        ]
      },
      {
        name: 'App Design',
        price: 30000000,
        features: [
          'Complete app design',
          'User research',
          'Detailed prototypes',
          'Design system',
          'Usability testing',
          'Design documentation'
        ]
      }
    ]
  }
];

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const featured = url.searchParams.get('featured');
    const slug = url.searchParams.get('slug');
    const id = url.searchParams.get('id');

    // Get single service
    if (id || slug) {
      const service = servicesData.find(s => s.id === id || s.slug === slug);
      if (!service) {
        return NextResponse.json(
          { success: false, error: 'Service not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: service
      });
    }

    let filteredServices = servicesData;

    // Filter by category
    if (category && category !== 'all') {
      filteredServices = filteredServices.filter(service => service.category === category);
    }

    // Filter by featured
    if (featured === 'true') {
      filteredServices = filteredServices.filter(service => service.featured);
    }

    return NextResponse.json({
      success: true,
      data: filteredServices,
      total: filteredServices.length,
      categories: getUniqueCategories(),
      stats: getServicesStats()
    });

  } catch (error) {
    console.error('Services API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getUniqueCategories() {
  const categories = servicesData.map(service => service.category);
  return [...new Set(categories)];
}

function getServicesStats() {
  return {
    total: servicesData.length,
    featured: servicesData.filter(s => s.featured).length,
    categories: {
      web: servicesData.filter(s => s.category === 'web').length,
      mobile: servicesData.filter(s => s.category === 'mobile').length,
      design: servicesData.filter(s => s.category === 'design').length
    },
    averagePrice: Math.round(
      servicesData.reduce((sum, service) => sum + service.pricing.startingFrom, 0) / servicesData.length
    )
  };
}