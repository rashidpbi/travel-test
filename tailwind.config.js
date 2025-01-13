
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hero:`url('/bg-hero.png')`,
        'mountain':"url('/bg-mountain.png')",
        'mountains':"url('/bg-mountains.png')",
        'blueMount':"url('/blueMountain.png')"

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