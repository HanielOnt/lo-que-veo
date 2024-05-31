/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSBI': ['sauceOneBoldItalic', 'sans-serif'],
        'openSI': ['sauceOneItalic', 'sans-serif']
      }
    },
  },
  plugins: [],
}