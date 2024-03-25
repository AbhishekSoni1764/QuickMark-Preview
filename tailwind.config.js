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
        200: "#595555",
        300: "#3d3939",
        700: "#292525",
      },
      white: "#a6a5a2",
      black: "#000000"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}