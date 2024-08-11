/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        playwrite: ['Playwrite HR', 'sans-serif'],
      },
      colors: {
        darkBlue: '#215273',
        secondDarkBlue: '#58889F',
        lightBlue: '#E4F1FF',
        lightPurple: "#EEE7F7",
        lightGreen: "#1AC598",
        buttonBlue: "#2196F3",
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
