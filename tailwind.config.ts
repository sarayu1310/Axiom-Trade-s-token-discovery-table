import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0A0F1F',
          accent: '#3B82F6',
          success: '#22C55E',
          danger: '#EF4444',
          surface: '#0F172A'
        }
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.12)'
      },
      fontFeatureSettings: {
        tabular: '"tnum" on'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite'
      }
    }
  }
}

export default config
