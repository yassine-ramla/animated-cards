
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'AlphaBlue': '#3A7BD5',
        'mainBlue': '#00ACE8',
        'mainBlack': '#212121',
        'mainGrey': '#BFBFBF',
        'mainRed':'#FF4D4F',
        'lightGrey': '#F3F6F9',
        'mainPageBG': '#F5F5F5'
      },
      fontFamily: {
        'AlphaFont-1': ['Raleway', 'sans-serif'],
        'AlphaFont-2': ['Poppins', 'serif'],
        'AlphaFont-3': ['Montserrat', 'serif'],
        'mainFont': ['SF Pro Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}