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

      'lg': '1024px'
    },
    extend: {
      fontFamily: {
        'openSBI': ['sauceOneBoldItalic', 'sans-serif'],
        'openSI': ['sauceOneItalic', 'sans-serif']
      }
    },
  },
  plugins: [],
}