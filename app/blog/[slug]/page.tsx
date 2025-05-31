import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';
import StickyCTABar from '@/components/StickyCTABar';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

// Mock blog data - in real app, this would come from CMS or database
const blogPosts = {
  'tren-web-development-2025': {
    id: 'tren-web-development-2025',
    title: 'Tren Web Development 2025: AI, Performance, dan User Experience',
    excerpt: 'Eksplorasi tren terbaru dalam pengembangan web yang akan mendominasi tahun 2025, dari integrasi AI hingga optimisasi performa.',
    content: `
      <p>Industri web development terus berkembang dengan pesat, dan tahun 2025 membawa inovasi-inovasi yang akan mengubah cara kita membangun dan berinteraksi dengan aplikasi web. Dalam artikel ini, kita akan membahas tren-tren utama yang akan mendominasi landscape web development.</p>

      <h2>1. Integrasi AI dan Machine Learning</h2>
      <p>Artificial Intelligence bukan lagi sekadar buzzword, tetapi sudah menjadi komponen integral dalam pengembangan web modern. Berikut adalah cara AI mengubah web development:</p>
      
      <ul>
        <li><strong>AI-Powered Code Generation:</strong> Tools seperti GitHub Copilot dan ChatGPT membantu developer menulis code lebih cepat</li>
        <li><strong>Personalisasi Konten:</strong> AI memungkinkan website untuk menyajikan konten yang dipersonalisasi untuk setiap user</li>
        <li><strong>Chatbot dan Virtual Assistant:</strong> Integrasi AI chatbot yang lebih canggih untuk customer service</li>
        <li><strong>Predictive Analytics:</strong> Menggunakan AI untuk memprediksi behavior user dan optimasi konversi</li>
      </ul>

      <h2>2. Performance-First Development</h2>
      <p>Di tahun 2025, performance bukan lagi optional tetapi mandatory. Google Core Web Vitals menjadi semakin penting untuk SEO ranking.</p>
      
      <h3>Key Performance Metrics:</h3>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> Harus di bawah 2.5 detik</li>
        <li><strong>First Input Delay (FID):</strong> Maksimal 100ms</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Di bawah 0.1</li>
      </ul>

      <h3>Teknik Optimasi:</h3>
      <ul>
        <li>Image optimization dengan format WebP dan AVIF</li>
        <li>Code splitting dan lazy loading</li>
        <li>Service workers untuk caching yang efisien</li>
        <li>Edge computing dan CDN optimization</li>
      </ul>

      <h2>3. Advanced User Experience</h2>
      <p>UX di 2025 fokus pada interaksi yang natural dan immersive:</p>
      
      <ul>
        <li><strong>Micro-interactions:</strong> Animasi halus yang memberikan feedback kepada user</li>
        <li><strong>Voice UI:</strong> Integrasi voice commands untuk navigasi</li>
        <li><strong>Gesture-based Navigation:</strong> Kontrol dengan gesture untuk mobile dan tablet</li>
        <li><strong>Dark Mode as Standard:</strong> Dark mode bukan lagi optional tetapi expected feature</li>
      </ul>

      <h2>4. Modern Development Stack</h2>
      <p>Technology stack yang populer di 2025:</p>
      
      <h3>Frontend Frameworks:</h3>
      <ul>
        <li><strong>Next.js 15+:</strong> Dengan App Router dan Server Components</li>
        <li><strong>Astro:</strong> Untuk static sites dengan partial hydration</li>
        <li><strong>SvelteKit:</strong> Performance-focused dengan bundle size yang kecil</li>
      </ul>

      <h3>Styling Solutions:</h3>
      <ul>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
        <li><strong>CSS Container Queries:</strong> Responsive design yang lebih granular</li>
        <li><strong>CSS-in-JS Evolution:</strong> Zero-runtime solutions seperti Stitches</li>
      </ul>

      <h2>5. Security dan Privacy</h2>
      <p>Dengan meningkatnya awareness terhadap privacy, developer harus lebih fokus pada:</p>
      
      <ul>
        <li><strong>GDPR Compliance:</strong> Implementasi yang proper untuk data privacy</li>
        <li><strong>Content Security Policy (CSP):</strong> Proteksi terhadap XSS attacks</li>
        <li><strong>Secure Headers:</strong> HTTPS, HSTS, dan security headers lainnya</li>
        <li><strong>Privacy-First Analytics:</strong> Alternatif Google Analytics yang privacy-focused</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Web development di 2025 akan didominasi oleh teknologi yang mengutamakan performance, user experience, dan security. Developer yang ingin tetap relevan harus terus belajar dan mengadopsi teknologi-teknologi ini.</p>
      
      <p>Di ORDERS.ID, kami selalu mengikuti perkembangan terbaru dalam web development untuk memberikan solusi terbaik kepada klien. Jika Anda butuh bantuan dalam mengimplementasikan teknologi-teknologi modern ini, jangan ragu untuk menghubungi tim kami.</p>
    `,
    image: '/blog/web-trends-2025.jpg',
    category: 'Web Development',
    readTime: '8 min read',
    publishDate: '15 Mei 2025',
    author: 'Ahmad Rizki',
    authorBio: 'Founder & CEO ORDERS.ID dengan 8+ tahun pengalaman dalam web development dan startup technology.',
    tags: ['Web Development', 'AI', 'Performance', 'UX', 'JavaScript', 'React', 'Next.js']
  },
  // Add more blog posts here...
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan - ORDERS.ID Blog',
    };
  }

  return {
    title: `${post.title} - ORDERS.ID Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <DarkModeToggle />

      {/* Article Header */}
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{post.category}</span>
          </nav>

          {/* Article Meta */}
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="primary">{post.category}</Badge>
            <span className="text-gray-500 dark:text-gray-400">{post.readTime}</span>
            <span className="text-gray-500 dark:text-gray-400">{post.publishDate}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          {/* Article Excerpt */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-700 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.authorBio}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <div className="h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">Featured Article Image</span>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-gray-600 dark:text-gray-300 font-medium">Tags:</span>
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-700 mb-12">
            <span className="text-gray-600 dark:text-gray-300 font-medium">Share:</span>
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Copy Link
            </Button>
          </div>

          {/* Author Card */}
          <Card className="p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {post.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.authorBio}
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                  <Button variant="outline" size="sm">
                    More Articles
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Artikel Terkait
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <span className="text-white text-sm">Related Article</span>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <Badge variant="secondary">{relatedPost.category}</Badge>
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jangan Lewatkan Update Terbaru
          </h2>
          <p className="text-xl mb-8">
            Subscribe newsletter kami dan dapatkan insight teknologi terbaru langsung di inbox Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <StickyCTABar />
      <Footer />
    </main>
  );
}
