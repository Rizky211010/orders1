import { NextRequest, NextResponse } from 'next/server';

// Static portfolio data (can be moved to database later)
const portfolioData = [
  {
    id: '1',
    title: 'EduCourse Mobile App',
    description: 'Aplikasi pembelajaran online dengan fitur live streaming dan interactive quiz untuk meningkatkan engagement siswa.',
    category: 'mobile-app',
    tags: ['React Native', 'Node.js', 'Firebase'],
    image: '/images/portfolio/educourse-mobile.jpg',
    images: [
      '/images/portfolio/educourse-mobile-1.jpg',
      '/images/portfolio/educourse-mobile-2.jpg',
      '/images/portfolio/educourse-mobile-3.jpg'
    ],
    client: 'EduTech Startup',
    year: '2024',
    status: 'completed',
    featured: true,
    technologies: ['React Native', 'Node.js', 'Firebase', 'WebRTC'],
    features: [
      'Live streaming video lectures',
      'Interactive quiz system',
      'Progress tracking',
      'Offline content download',
      'Push notifications'
    ],
    results: {
      userGrowth: '300%',
      engagement: '85%',
      rating: '4.8/5'
    }
  },
  {
    id: '2',
    title: 'FreshMart E-commerce',
    description: 'Platform e-commerce dengan sistem inventory real-time dan payment gateway terintegrasi untuk toko retail modern.',
    category: 'web-app',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    image: '/images/portfolio/freshmart-ecommerce.jpg',
    images: [
      '/images/portfolio/freshmart-1.jpg',
      '/images/portfolio/freshmart-2.jpg',
      '/images/portfolio/freshmart-3.jpg'
    ],
    client: 'FreshMart Retail',
    year: '2024',
    status: 'completed',
    featured: true,
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    features: [
      'Real-time inventory management',
      'Multiple payment gateways',
      'Order tracking system',
      'Customer reviews',
      'Admin dashboard'
    ],
    results: {
      salesIncrease: '250%',
      orderVolume: '500+ daily',
      customerSatisfaction: '94%'
    }
  },
  {
    id: '3',
    title: 'TechStart Brand Identity',
    description: 'Rebranding complete untuk startup teknologi dengan fokus pada identitas modern dan memorable.',
    category: 'branding',
    tags: ['Adobe Illustrator', 'Figma', 'After Effects'],
    image: '/images/portfolio/techstart-branding.jpg',
    images: [
      '/images/portfolio/techstart-1.jpg',
      '/images/portfolio/techstart-2.jpg',
      '/images/portfolio/techstart-3.jpg'
    ],
    client: 'TechStart Inc.',
    year: '2023',
    status: 'completed',
    featured: false,
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects'],
    features: [
      'Complete brand identity',
      'Logo design system',
      'Brand guidelines',
      'Marketing materials',
      'Digital assets'
    ],
    results: {
      brandRecognition: '180%',
      marketPresence: 'Increased',
      clientSatisfaction: '100%'
    }
  }
];

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const featured = url.searchParams.get('featured');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');
    const id = url.searchParams.get('id');

    // Get single portfolio item
    if (id) {
      const item = portfolioData.find(p => p.id === id);
      if (!item) {
        return NextResponse.json(
          { success: false, error: 'Portfolio item not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: item
      });
    }

    let filteredData = portfolioData;

    // Filter by category
    if (category && category !== 'all') {
      filteredData = filteredData.filter(item => item.category === category);
    }

    // Filter by featured
    if (featured === 'true') {
      filteredData = filteredData.filter(item => item.featured);
    }

    // Sort by year (newest first)
    filteredData.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    // Pagination
    const paginatedData = filteredData.slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedData,
      total: filteredData.length,
      limit,
      offset,
      categories: getUniqueCategories(),
      stats: getPortfolioStats()
    });

  } catch (error) {
    console.error('Portfolio API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getUniqueCategories() {
  const categories = portfolioData.map(item => item.category);
  return [...new Set(categories)];
}

function getPortfolioStats() {
  const stats = {
    total: portfolioData.length,
    completed: portfolioData.filter(p => p.status === 'completed').length,
    featured: portfolioData.filter(p => p.featured).length,
    categories: {}
  };

  // Count by category
  portfolioData.forEach(item => {
    stats.categories[item.category] = (stats.categories[item.category] || 0) + 1;
  });

  return stats;
}