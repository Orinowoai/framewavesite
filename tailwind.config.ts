import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { 
      center: true, 
      padding: "16px", 
      screens: { 
        "2xl": "1200px" 
      } 
    },
    extend: {
      colors: {
        // Primary Rainbow Colors
        'primary-red': '#FF6B6B',
        'primary-orange': '#FFB347',
        'primary-yellow': '#FFD93D',
        'primary-green': '#6BCF7F',
        'primary-blue': '#4ECDC4',
        'primary-purple': '#A8E6CF',
        
        // Neutral Colors
        'neutral-cream': '#F8F6F3',
        'neutral-light': '#F5F5F5',
        'neutral-charcoal': '#2C2C2C',
        'neutral-gray': '#8E8E93',
        
        // Accent Colors
        'accent-glow': 'rgba(255, 107, 107, 0.3)',
        'surface-elevation': 'rgba(255, 255, 255, 0.95)',
        
        // Legacy colors for compatibility
        fw: {
          black: "#0B0F14",
          white: "#F8FAFC",
          hot: "#F97316",
          cool: "#22D3EE",
          violet: "#7C3AED",
          slate: "#111827",
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        inter: ["var(--font-inter)"],
        dmsans: ["var(--font-dmsans)"],
      },
      fontSize: {
        'hero-desktop': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-header': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subsection-header': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
      },
      boxShadow: {
        'glow': '0 0 20px var(--accent-glow)',
        'glow-orange': '0 0 20px rgba(255, 179, 71, 0.3)',
        'glow-blue': '0 0 20px rgba(78, 205, 196, 0.3)',
        'glow-green': '0 0 20px rgba(107, 207, 127, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 107, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 107, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

