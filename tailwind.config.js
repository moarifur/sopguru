/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: 'Open Sans',
      secondary: 'Lato',
    },

    container:{
      padding:{
        DEFAULT: '1rem',
        lg: 0,
      },
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    extend: {
      backgroundImage: theme => ({
        'footer-texture': "url('/src/assets/world.png')",
        'world': "url('/src/assets/www.jpg')",
        'dots': "url('/src/assets/dots.png')",
      })
    },
  },
  plugins: [],
}
