import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';
import StickyCTABar from '@/components/StickyCTABar';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - ORDERS.ID | Insight & Tips Seputar Teknologi Digital',
  description: 'Baca artikel terbaru seputar web development, mobile app, digital design, dan tren teknologi terkini dari tim expert ORDERS.ID.',
  openGraph: {
    title: 'Blog - ORDERS.ID',
    description: 'Insight dan tips teknologi digital dari expert ORDERS.ID',
    type: 'website',
  },
};

const featuredPosts = [
  {
    id: 'tren-web-development-2025',
    title: 'Tren Web Development 2025: AI, Performance, dan User Experience',
    excerpt: 'Eksplorasi tren terbaru dalam pengembangan web yang akan mendominasi tahun 2025, dari integrasi AI hingga optimisasi performa.',
    image: '/blog/web-trends-2025.jpg',
    category: 'Web Development',
    readTime: '8 min read',
    publishDate: '15 Mei 2025',
    author: 'Ahmad Rizki',
    featured: true
  },
  {
    id: 'mobile-app-flutter-vs-react-native',
    title: 'Flutter vs React Native: Mana yang Terbaik untuk Startup 2025?',
    excerpt: 'Perbandingan mendalam antara Flutter dan React Native untuk membantu startup memilih teknologi mobile development yang tepat.',
    image: '/blog/flutter-vs-rn.jpg',
    category: 'Mobile Development',
    readTime: '12 min read',
    publishDate: '10 Mei 2025',
    author: 'Sarah Dewi',
    featured: true
  }
];

const recentPosts = [
  {
    id: 'ui-ux-design-principles-2025',
    title: '10 Prinsip UI/UX Design yang Wajib Dipahami di 2025',
    excerpt: 'Panduan lengkap prinsip-prinsip desain UI/UX modern yang dapat meningkatkan konversi dan kepuasan pengguna.',
    image: '/blog/ui-ux-principles.jpg',
    category: 'Design',
    readTime: '6 min read',
    publishDate: '8 Mei 2025',
    author: 'Budi Santoso'
  },
  {
    id: 'seo-optimization-guide-2025',
    title: 'SEO Optimization Guide: Cara Meningkatkan Ranking Website di 2025',
    excerpt: 'Strategi SEO terbaru dan teknik optimization yang efektif untuk meningkatkan visibility website Anda di search engine.',
    image: '/blog/seo-guide.jpg',
    category: 'Digital Marketing',
    readTime: '10 min read',
    publishDate: '5 Mei 2025',
    author: 'Maya Sari'
  },
  {
    id: 'ecommerce-trends-indonesia',
    title: 'Tren E-commerce Indonesia 2025: Peluang dan Tantangan',
    excerpt: 'Analisis mendalam tentang perkembangan e-commerce di Indonesia dan strategi untuk mengoptimalkan bisnis online.',
    image: '/blog/ecommerce-trends.jpg',
    category: 'E-commerce',
    readTime: '7 min read',
    publishDate: '2 Mei 2025',
    author: 'Ahmad Rizki'
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices untuk Startup dan UMKM',
    excerpt: 'Panduan keamanan siber essential untuk melindungi bisnis digital dari ancaman cyber yang semakin canggih.',
    image: '/blog/cybersecurity.jpg',
    category: 'Security',
    readTime: '9 min read',
    publishDate: '28 April 2025',
    author: 'Sarah Dewi'
  },
  {
    id: 'performance-optimization-tips',
    title: 'Website Performance Optimization: Tips untuk Loading Speed Optimal',
    excerpt: 'Teknik-teknik advanced untuk mengoptimalkan kecepatan loading website dan meningkatkan user experience.',
    image: '/blog/performance-tips.jpg',
    category: 'Performance',
    readTime: '11 min read',
    publishDate: '25 April 2025',
    author: 'Budi Santoso'
  },
  {
    id: 'digital-transformation-guide',
    title: 'Digital Transformation untuk UMKM: Panduan Lengkap 2025',
    excerpt: 'Roadmap komprehensif untuk transformasi digital UMKM, dari strategi hingga implementasi teknologi.',
    image: '/blog/digital-transformation.jpg',
    category: 'Business',
    readTime: '15 min read',
    publishDate: '22 April 2025',
    author: 'Maya Sari'
  }
];

const categories = [
  { name: 'Semua', count: 8, active: true },
  { name: 'Web Development', count: 3, active: false },
  { name: 'Mobile Development', count: 1, active: false },
  { name: 'Design', count: 1, active: false },
  { name: 'Digital Marketing', count: 1, active: false },
  { name: 'E-commerce', count: 1, active: false },
  { name: 'Security', count: 1, active: false }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <DarkModeToggle />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="primary" className="mb-6">
            📚 Blog & Insights
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Blog ORDERS.ID
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Dapatkan insight terbaru seputar teknologi digital, tips development, 
            dan tren industri dari tim expert ORDERS.ID.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              📧 Subscribe Newsletter
            </Button>
            <Button variant="outline" size="lg">
              🔔 Dapatkan Notifikasi
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Artikel Unggulan"
            subtitle="Bacaan terpilih yang wajib Anda baca minggu ini"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm">Featured Image</span>
                  </div>
                  <Badge variant="primary" className="absolute top-4 left-4">
                    Featured
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span>{post.readTime}</span>
                    <span>{post.publishDate}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {post.author}
                      </span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Baca Selengkapnya →
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <SectionHeader
                title="Artikel Terbaru"
                subtitle="Update terbaru seputar teknologi dan digital business"
              />
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mt-8 mb-12">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category.active ? "primary" : "outline"}
                    size="sm"
                    className={`${category.active ? 'bg-blue-600' : ''} transition-all duration-300`}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <div className="h-48 md:h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                          <span className="text-white text-sm">Blog Image</span>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                          <Badge variant="secondary">{post.category}</Badge>
                          <span>{post.readTime}</span>
                          <span>{post.publishDate}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {post.author}
                            </span>
                          </div>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm">
                              Baca Selengkapnya →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Muat Artikel Lainnya
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Newsletter Signup */}
              <Card className="p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  📧 Subscribe Newsletter
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Dapatkan update artikel terbaru dan insight teknologi langsung di inbox Anda.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                    Subscribe Sekarang
                  </Button>
                </div>
              </Card>

              {/* Popular Posts */}
              <Card className="p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  🔥 Artikel Populer
                </h3>
                <div className="space-y-4">
                  {featuredPosts.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-xs">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {post.readTime} • {post.publishDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Categories */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  📂 Kategori
                </h3>
                <div className="space-y-2">
                  {categories.filter(cat => cat.name !== 'Semua').map((category, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                        {category.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Konsultasi Project?
          </h2>
          <p className="text-xl mb-8">
            Tim expert kami siap membantu mewujudkan ide digital Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              💬 Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              📞 Hubungi Sekarang
            </Button>
          </div>
        </div>
      </section>

      <StickyCTABar />
      <Footer />
    </main>
  );
}
