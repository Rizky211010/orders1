/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f0f4ff',
          100: '#e5ecff',
          200: '#d1ddff',
          300: '#b8c7ff',
          400: '#9da8ff',
          500: '#8389ff',
          600: '#6b5eff',
          700: '#5b47ff',
          800: '#4c3eff',
          900: '#1e1b4b',
          950: '#0f0a2e'
        },
        gold: {
          50: '#fffdf0',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(107, 94, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(107, 94, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 25%, #4338ca 50%, #6366f1 75%, #1e1b4b 100%)',
        'hero-gradient': 'linear-gradient(135deg, #0f0a2e 0%, #1e1b4b 25%, #312e81 50%, #4338ca 75%, #6366f1 100%)',
      },
    },
  },
  plugins: [],
};

