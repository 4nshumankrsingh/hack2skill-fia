/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
        }
      }
    },
  },
  plugins: [],
}