/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '430px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      grey: {
        100: "#a6a5a2",
        200: "#595555",
        250: "#363333",
        300: "#3d3939",
        700: "#292525",
        900: "#17171f",
      },
      white: "#a6a5a2",
      black: "#000000",
      blue: {
        600: "#8ab4dd"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}