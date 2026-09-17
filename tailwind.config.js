/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — warm earth / savanna gold
        primary: {
          50: '#fdf8ed',
          100: '#f9edcf',
          200: '#f2d99e',
          300: '#ebbf66',
          400: '#e4a93c',
          500: '#d4911e',
          600: '#b97014',
          700: '#945214',
          800: '#7b4217',
          900: '#693817',
          950: '#3c1d09',
        },
        // Secondary — deep acacia green
        secondary: {
          50: '#f3f7f2',
          100: '#e3ece0',
          200: '#c7d9c1',
          300: '#9fbd97',
          400: '#759b6c',
          500: '#577f4f',
          600: '#42643c',
          700: '#365030',
          800: '#2d4029',
          900: '#263623',
          950: '#131f11',
        },
        // Accent — sunset amber
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc070',
          400: '#ff9a37',
          500: '#ff8111',
          600: '#f06608',
          700: '#cc4e09',
          800: '#a83e10',
          900: '#8a3411',
          950: '#4b1903',
        },
        // Neutral — warm sand/stone
        sand: {
          50: '#faf8f5',
          100: '#f3eee7',
          200: '#e6dcd0',
          300: '#d4c3ac',
          400: '#bda280',
          500: '#a98a64',
          600: '#99774f',
          700: '#7e6142',
          800: '#694f3a',
          900: '#5b4534',
          950: '#332618',
        },
        // Semantic
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-safari': 'linear-gradient(135deg, #d4911e 0%, #b97014 50%, #693817 100%)',
        'gradient-sunset': 'linear-gradient(180deg, rgba(58,32,12,0.2) 0%, rgba(58,32,12,0.7) 100%)',
      },
      letterSpacing: {
        'wide-lg': '0.12em',
      },
    },
  },
  plugins: [],
};
