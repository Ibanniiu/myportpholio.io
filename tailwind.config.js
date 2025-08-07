module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional foundation
        primary: {
          DEFAULT: "#1E3A5F", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        // Secondary Colors - Strategic bridge
        secondary: {
          DEFAULT: "#4A90A4", // cyan-600
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          200: "#A5F3FC", // cyan-200
          300: "#67E8F9", // cyan-300
          400: "#22D3EE", // cyan-400
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
          700: "#0E7490", // cyan-700
          800: "#155E75", // cyan-800
          900: "#164E63", // cyan-900
        },
        // Accent Colors - Creative confidence
        accent: {
          DEFAULT: "#FF6B35", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: "#F1F5F9", // slate-100
        // Text Colors
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#4A5568", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      fontFamily: {
        // Headlines - Modern authority
        inter: ['Inter', 'sans-serif'],
        // Body - Exceptional readability
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Technical credibility
        'jetbrains': ['JetBrains Mono', 'monospace'],
        // Default sans
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'portfolio': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'portfolio-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-out',
        'hover-lift': 'hoverLift 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2px)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}