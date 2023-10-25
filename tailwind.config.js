/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1red: 'rgb(var(--color-c1red) / <alpha-value>)',
        c2gray: 'rgb(var(--color-c2gray) / <alpha-value>)',
        c3white: 'rgb(var(--color-c3white) / <alpha-value>)',
        c4black: 'rgb(var(--color-c4black) / <alpha-value>)',
        darkBlue: 'rgb(var(--color-darkBlue) / <alpha-value>)',
        darkPurple: 'rgb(var(--color-darkPurple) / <alpha-value>)',
        navyBlue: 'rgb(var(--color-navyBlue) / <alpha-value>)',
        silver: 'rgb(var(--color-silver) / <alpha-value>)',
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        pink: 'rgb(var(--color-pink) / <alpha-value>)',
        
      },
      animation: {
        blob:'blob 25s infinite'
      },
      keyframes:{
        blob:{
          "0%":{
            transform: 'translate(0px,0px) scale(1)'
          },
          "33%":{
            transform: 'translate(230px,-250px) scale(1.1)'
          },
          "66%":{
            transform: 'translate(-320px,220px) scale(0.9)'
          },
          "100%":{
            transform: 'translate(0px,0px) scale(1.2)'
          },

        }
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '::-webkit-scrollbar': {
          display: 'none',
        },
      })
    },
  ],
};