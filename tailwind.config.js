/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/src/assets/bg-hero.png')",
        'mountain':"url('/src/assets/bg-mountain.png')",


      },
      colors: {
        'light': '#FFFFFFFF',
        'shade':'#999999'
      },
      fontSize:{
        base: '16px',   
      },
      boxShadow: {
        'md': '0 3px 10px  rgba(0, 0, 0, 0.2)',
      }

    },
  },
  plugins: [],
}