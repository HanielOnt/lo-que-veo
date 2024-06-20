/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { min: '320px', max: '719px' },

      'md': { min: '720px', max: '1023px' },

      'lg': { min: '1024px' }
    },
    extend: {
      fontFamily: {
        'openSBI': ['sauceOneBoldItalic', 'sans-serif'],
        'openSI': ['sauceOneItalic', 'sans-serif']
      },
      animation: {
        'sliderRev': 'slider 7s linear infinite',
        'slider': 'sliderRev 7s linear infinite',
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%);)' },
        },
        sliderRev: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%);)' },
        }
      }
    },
  },
  plugins: [],
}