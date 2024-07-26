/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg_chart:{
          100:"#F8EDED"
        }
      }
    },
  },
  plugins: [],
}