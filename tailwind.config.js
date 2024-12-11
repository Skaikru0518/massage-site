/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'off-white': '#F7F7F7',
        'cool-gray': '#E0E0E0',
        'deep-red': '#EF4444',
        'muted-crimson': '#C62828',
        'charcoal-gray': '#2E2E2E',
        'slate-gray': '#37474F',
        'light-silver': '#DADADA',
        'warm-beige': '#ECE8E1',
        'coral': '#FF7043',
      },
      screens: {
        phones: '390px'
      }
    },
  },
  plugins: [],
}