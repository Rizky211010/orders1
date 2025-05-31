import { NextRequest, NextResponse } from 'next/server';

// Static blog data (can be moved to database later)
const blogPosts = [
  {
    id: '1',
    title: 'Tren Web Development 2024: Yang Perlu Anda Ketahui',
    slug: 'tren-web-development-2024',
    excerpt: 'Pelajari tren terbaru dalam web development yang akan mendominasi tahun 2024, dari AI integration hingga serverless architecture.',
    content: `
# Tren Web Development 2024: Yang Perlu Anda Ketahui

Web development terus berkembang dengan pesat, dan tahun 2024 membawa beberapa tren menarik yang perlu diperhatikan oleh setiap developer dan bisnis.

## 1. AI Integration dalam Web Development

Kecerdasan buatan bukan lagi sekadar buzz word. Di 2024, kita melihat integrasi AI yang lebih mendalam dalam:

- **Chatbots yang lebih cerdas** dengan natural language processing
- **Personalisasi konten** berdasarkan behavior user
- **Automated testing** dan quality assurance
- **Code generation** untuk mempercepat development

## 2. Serverless Architecture

Serverless computing menjadi mainstream dengan keuntungan:

- **Skalabilitas otomatis** sesuai traffic
- **Cost-effective** - bayar sesuai usage
- **Reduced maintenance** infrastructure
- **Faster deployment** cycles

## 3. Web3 dan Blockchain Integration

Meskipun masih emerging, Web3 mulai menemukan aplikasi praktis:

- **Decentralized identity management**
- **Smart contracts** untuk business logic
- **NFT integration** dalam e-commerce
- **Cryptocurrency payments**

## 4. Progressive Web Apps (PWA) 2.0

PWA berkembang dengan fitur-fitur baru:

- **Better offline capabilities**
- **Enhanced push notifications**
- **Improved performance** metrics
- **Native app-like** experiences

## Kesimpulan

Tahun 2024 adalah waktu yang tepat untuk mengadopsi teknologi-teknologi ini dalam project web development Anda.
    `,
    author: 'Tim ORDERS.ID',
    authorImage: '/images/team/author-1.jpg',
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    category: 'Web Development',
    tags: ['Web Development', 'AI', 'Serverless', 'PWA', 'Trends 2024'],
    featured: true,
    image: '/images/blog/web-dev-trends-2024.jpg',
    readTime: '8 min',
    status: 'published',
    views: 1250,
    likes: 89,
    seo: {
      metaTitle: 'Tren Web Development 2024: AI, Serverless, dan Web3',
      metaDescription: 'Temukan tren terbaru web development 2024 yang akan mengubah industri. Pelajari AI integration, serverless architecture, dan teknologi emerging lainnya.',
      keywords: ['web development 2024', 'tren teknologi', 'AI web development', 'serverless', 'PWA']
    }
  },
  {
    id: '2',
    title: 'Cara Memilih Tech Stack yang Tepat untuk Startup',
    slug: 'memilih-tech-stack-startup',
    excerpt: 'Panduan lengkap memilih technology stack yang tepat untuk startup Anda, dengan pertimbangan budget, timeline, dan skalabilitas.',
    content: `
# Cara Memilih Tech Stack yang Tepat untuk Startup

Memilih technology stack yang tepat adalah salah satu keputusan paling penting untuk startup. Keputusan ini akan mempengaruhi development speed, maintenance cost, dan skalabilitas produk Anda.

## Faktor-faktor yang Perlu Dipertimbangkan

### 1. Timeline dan Budget
- **MVP Development**: Pilih teknologi yang memungkinkan rapid prototyping
- **Development Cost**: Pertimbangkan availability dan cost developer
- **Maintenance**: Biaya ongoing maintenance dan updates

### 2. Tim dan Expertise
- **Existing Skills**: Manfaatkan skill yang sudah ada dalam tim
- **Learning Curve**: Waktu yang dibutuhkan untuk mempelajari teknologi baru
- **Community Support**: Availability tutorial, documentation, dan developer community

### 3. Skalabilitas dan Performance
- **Expected Traffic**: Antisipasi growth dan traffic patterns
- **Performance Requirements**: Response time dan throughput yang dibutuhkan
- **Scalability Options**: Horizontal vs vertical scaling capabilities

## Recommended Tech Stacks untuk Startup

### Full-Stack JavaScript
**Frontend**: React/Next.js
**Backend**: Node.js/Express
**Database**: MongoDB/PostgreSQL

**Keuntungan**:
- Single language untuk full-stack
- Large developer pool
- Rapid development
- Excellent ecosystem

### Python-based Stack
**Frontend**: React/Vue.js
**Backend**: Django/FastAPI
**Database**: PostgreSQL

**Keuntungan**:
- Great for data-heavy applications
- AI/ML integration
- Clean, readable code
- Strong community

### Modern JAMstack
**Frontend**: Next.js/Gatsby
**Backend**: Serverless functions
**Database**: Headless CMS + Database

**Keuntungan**:
- Excellent performance
- Cost-effective
- Easy scaling
- Modern development experience

## Tips Implementasi

1. **Start Simple**: Mulai dengan stack yang familiar
2. **Prioritize MVP**: Fokus pada getting to market quickly
3. **Plan for Scale**: Tapi jangan over-engineer dari awal
4. **Consider Team**: Pilih teknologi yang bisa dikuasai tim

## Kesimpulan

Tidak ada "perfect" tech stack. Yang terpenting adalah memilih stack yang align dengan goals, resources, dan constraints startup Anda.
    `,
    author: 'Sarah Developer',
    authorImage: '/images/team/author-2.jpg',
    publishedAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z',
    category: 'Startup',
    tags: ['Startup', 'Tech Stack', 'Technology', 'Development', 'Strategy'],
    featured: true,
    image: '/images/blog/tech-stack-startup.jpg',
    readTime: '12 min',
    status: 'published',
    views: 890,
    likes: 67,
    seo: {
      metaTitle: 'Cara Memilih Tech Stack yang Tepat untuk Startup',
      metaDescription: 'Panduan lengkap memilih technology stack startup: pertimbangan budget, timeline, tim, dan skalabilitas. Tips praktis untuk founder.',
      keywords: ['tech stack startup', 'memilih teknologi', 'startup technology', 'development stack']
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
    const slug = url.searchParams.get('slug');
    const id = url.searchParams.get('id');

    // Get single blog post
    if (id || slug) {
      const post = blogPosts.find(p => p.id === id || p.slug === slug);
      if (!post) {
        return NextResponse.json(
          { success: false, error: 'Blog post not found' },
          { status: 404 }
        );
      }
      
      // Increment view count (in real app, this would be rate-limited)
      post.views += 1;
      
      return NextResponse.json({
        success: true,
        data: post
      });
    }

    let filteredPosts = blogPosts.filter(post => post.status === 'published');

    // Filter by category
    if (category && category !== 'all') {
      filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    // Filter by featured
    if (featured === 'true') {
      filteredPosts = filteredPosts.filter(post => post.featured);
    }

    // Sort by publish date (newest first)
    filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Pagination
    const paginatedPosts = filteredPosts.slice(offset, offset + limit);

    return NextResponse.json({
      success: true,
      data: paginatedPosts,
      total: filteredPosts.length,
      limit,
      offset,
      categories: getUniqueCategories(),
      stats: getBlogStats()
    });

  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function getUniqueCategories() {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
}

function getBlogStats() {
  const totalViews = blogPosts.reduce((sum, post) => sum + post.views, 0);
  const totalLikes = blogPosts.reduce((sum, post) => sum + post.likes, 0);
  
  return {
    totalPosts: blogPosts.length,
    publishedPosts: blogPosts.filter(p => p.status === 'published').length,
    featuredPosts: blogPosts.filter(p => p.featured).length,
    totalViews,
    totalLikes,
    averageReadTime: Math.round(blogPosts.reduce((sum, post) => sum + parseInt(post.readTime), 0) / blogPosts.length)
  };
}