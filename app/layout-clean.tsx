import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const geistSans = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist-sans'
})

const geistMono = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'ORDERS.ID - Solusi Digital Anda, Dari Ide hingga Realisasi',
  description: 'Kami menyediakan layanan pembuatan website, aplikasi, dan desain digital terbaik untuk kebutuhan bisnis Anda. Company Profile, E-commerce, Mobile App, UI/UX Design, dan banyak lagi.',
  keywords: ['website development', 'mobile app', 'UI/UX design', 'digital agency', 'startup', 'Indonesia', 'orders.id'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#3b82f6',
  viewportFit: 'cover',
  colorScheme: 'light dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}