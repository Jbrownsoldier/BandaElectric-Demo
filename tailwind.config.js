/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b0b0b',
          container: '#181818',
        },
        secondary: {
          DEFAULT: '#F6FF03',
          fixed: '#FCFFA6',
          container: '#F6FF03',
        },
        'on-secondary-container': '#0b0b0b',
        tertiary: {
          DEFAULT: '#f24236',
        },
        surface: {
          DEFAULT: '#141414',
          container: {
            lowest: '#080808',
            low: '#111111',
            DEFAULT: '#1d1d1d',
            highest: '#2b2b2b',
          }
        },
        outline: {
          variant: '#3a3a3a',
        },
        // High-contrast text scale
        prose: {
          high:   '#F5F5F2',
          mid:    '#B7B9B2',
          low:    '#6D716A',
          accent: '#F6FF03',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
        headline: ['Work Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        'headline-tight': '-0.04em',
        'headline-ultra': '-0.06em',
        'label':           '0.12em',
        'label-wide':      '0.18em',
      },
      lineHeight: {
        'display': '0.92',
        'heading': '1.1',
        'relaxed-body': '1.75',
      },
      boxShadow: {
        ambient:  '0 8px 32px rgba(0, 0, 0, 0.28)',
        'glow-sm': '0 0 16px rgba(246,255,3,0.18)',
        'glow-md': '0 0 32px rgba(246,255,3,0.24)',
        'glow-lg': '0 0 64px rgba(246,255,3,0.30)',
        'glass':   '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg':'0 24px 64px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
