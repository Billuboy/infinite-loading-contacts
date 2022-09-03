/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      transparent: 'transparent',
      black: '#000',
      red: '#ff0000',
      blue: {
        100: '#68BBE3',
        200: '#0E86D4',
        250: '#055C9D',
        300: '#003060',
      },
      gray: {
        100: '#DDD',
        200: '#AAA',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        box: '2px 2px 4px 0px rgba(0, 0, 0, 0.15)',
      },
      gridTemplateColumns: {
        280: '280px',
      },
    },
  },
  plugins: [],
};
