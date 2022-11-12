/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: { main: '1280px' },
      height: { main: '60px' },
      maxWidth: { main: '1280px', sub: '1000px', todo: '600px' },
      spacing: {},
    },
    colors: {
      mainClr: '#68B0AB',
      mainContent: '#8FC0A9',
      subContent: '#C8D5B9',
      lightGray: '#d8dee4',
      white: '#fff',
    },
  },
  plugins: [],
};
