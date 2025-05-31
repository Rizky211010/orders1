# ORDERS.ID - Complete Landing Page

A modern, responsive landing page for ORDERS.ID startup built with React.js, Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

### ✅ Completed Components
1. **Hero Section** - Dynamic hero with gradient backgrounds, animated elements, rotating testimonial badges, and CTA buttons
2. **Web Development Services** - 5 service cards with hover effects and grid layout
3. **App Development Services** - Comparative layout with interactive tabs, progress bars, and tech stack visualization
4. **Digital Design Services** - Masonry portfolio grid with before-after slider and value proposition cards
5. **Value Added Services** - 4 service cards with animated visual elements and testimonial carousel
6. **Portfolio Showcase** - Filterable grid with stats counter, lightbox modal, and project detail views
7. **Sticky CTA Bar** - Collapsible contact bar with multiple contact options
8. **Footer** - Comprehensive footer with stats, newsletter subscription, and social links

### 🎨 Design Features
- **Dark Mode Support** - Complete dark/light theme switching with localStorage persistence
- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Animations** - Smooth Framer Motion animations with performance optimization
- **Modern UI** - Professional gradient designs, glassmorphism effects, and micro-interactions

### 🛠 Technical Features
- **Next.js 15** - Latest App Router with server components
- **React 19** - Modern React with hooks and functional components
- **Tailwind CSS 4** - Utility-first styling with custom animations
- **Framer Motion** - Advanced animations and transitions
- **TypeScript** - Type-safe development
- **SEO Optimized** - Meta tags, OpenGraph, and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd d:\WEBSITE\orders1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Environment Variables

The project uses environment variables for configuration. Copy `.env.example` to `.env.local` and update the values:

```bash
# Copy the example environment file
cp .env.example .env.local
```

Then edit `.env.local` with your specific values:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics Measurement ID |
| `NEXT_PUBLIC_HOTJAR_ID` | Hotjar Site ID |
| `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | Facebook Pixel ID |
| `NEXT_PUBLIC_SITE_URL` | Production URL of the website |
| `NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING` | Enable performance monitoring features |

For production deployments, set these environment variables in your hosting platform.

## 🎯 Component Details

### 1. Hero Section
- Gradient animated backgrounds
- Rotating testimonial badges
- Interactive CTA buttons
- Responsive typography
- Dark mode support

### 2. Services Sections
**Web Development:**
- Company Profile websites
- E-commerce platforms
- Landing pages
- Portfolio sites
- Blog platforms

**App Development:**
- Mobile vs Web app comparison
- Interactive technology tabs
- Progress indicators
- Device mockups

**Digital Design:**
- Masonry portfolio grid
- Before/after comparison slider
- Value proposition cards
- Tooltip interactions

### 3. Value Added Services
- Moodboard creation
- Prototype development
- Photo editing
- Video editing
- Animated visual elements
- Customer testimonials

### 4. Portfolio Showcase
- Filterable project grid
- Animated statistics counters
- Lightbox modal views
- Project detail cards
- Category filtering

### 5. Sticky CTA Bar
- Scroll-triggered visibility
- Expandable contact options
- WhatsApp, Phone, Email links
- Smooth animations
- Dismissible interface

### 6. Footer
- Company statistics
- Newsletter subscription
- Social media links
- Service/company/support links
- Back to top functionality

## 🎨 Styling & Animations

### Custom CSS Classes
- `.gradient-text` - Gradient text effects
- `.btn-glow` - Button hover glow
- `.float` - Floating animation
- `.blob` - Organic shape animation
- `.masonry-grid` - Pinterest-style grid

## 📱 Responsive Design

### Breakpoints
- Mobile: `320px - 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px+`
- Large: `1280px+`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Support

For support and inquiries:
- Email: hello@orders.id
- WhatsApp: +62 812-3456-7890
- Website: https://orders.id

---

**Built with ❤️ in Indonesia** 🇮🇩
