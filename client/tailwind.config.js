/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "customImage": "url('./src/assets/bits-back.svg')",
      },
      fontFamily: {
        "font-caveat": ["Caveat", 'sans-serif']
      },
    },
  },
  plugins: [],
}