/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2937', // Gray 800
        'secondary': '#4B5563', // Gray 600
        'accent': '#3B82F6', // Blue 500
        'neutral-light': '#F3F4F6', // Gray 100
        'neutral-dark': '#111827', // Gray 900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
