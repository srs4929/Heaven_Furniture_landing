/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Earthy luxury palette — wood, brass, stone, dark interiors
        ink: {
          DEFAULT: '#0f1614',     // near-black charcoal-teal
          900: '#0a100e',
          800: '#0f1614',
          700: '#16201d',
          600: '#1f2c28',
        },
        ivory: {
          DEFAULT: '#f4ede1',     // warm ivory
          50: '#fbf8f1',
          100: '#f4ede1',
          200: '#e9dfcd',
          300: '#d9cab1',
        },
        brass: {
          DEFAULT: '#b08d57',     // muted antique gold
          400: '#caa775',
          500: '#b08d57',
          600: '#8e6f3f',
          700: '#6e5430',
        },
        cocoa: {
          DEFAULT: '#3a2a1f',     // deep brown
          700: '#2a1d14',
          800: '#1f140d',
        },
        tan: {
          DEFAULT: '#a87a4b',     // natural wood tan
          500: '#a87a4b',
          600: '#8a6135',
        },
        stone: {
          warm: '#9a938a',        // soft warm gray
          light: '#cfc8be',
          deep: '#6f6961',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.18em',
        widest2: '0.28em',
        widest3: '0.4em',
      },
      fontSize: {
        // Editorial scale — high-fashion magazine hierarchy
        'display-xl': ['clamp(3.75rem, 9vw, 9rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(3rem, 6.5vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2.5rem, 5vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        // Editorial drop caps + oversized numerals
        'numeral-xl': ['clamp(5rem, 9vw, 9rem)', { lineHeight: '0.85', letterSpacing: '-0.04em' }],
        'numeral-lg': ['clamp(4.25rem, 7vw, 7rem)', { lineHeight: '0.85', letterSpacing: '-0.035em' }],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slow-zoom': 'slowZoom 18s ease-in-out infinite alternate',
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
