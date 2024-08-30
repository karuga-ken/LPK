/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundLogo:{
        'logo':"url('lp/src/Components/Images/lpklogo_retina.png')",
        'happy':"url('lp/src/Components/Images/happy.jpg')"
      }
    },
  },
  plugins: [],
}