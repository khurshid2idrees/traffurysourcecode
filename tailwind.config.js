/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      fontFamily: {
        'gotham': 'gotham-book',
      },
      colors:{
        redbtn:'#FF0000',
        headingred:'linear-gradient(to right, #FF0000 81%, #000000 100%);'
      },
      maxWidth: {
        '1/2': '50%',
      }
    },

    backgroundImage: {
      'hero-pattern': "url('https://raw.githubusercontent.com/khurshid2idrees/Traffury-new-806f317ab04a94d0e5582a1e39ca5cc40a33006c-main/main/src/assets/images/abt-slide-bg.jpg')",
    
      
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}