/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}"
    ],
  theme: {
    extend: {
      screens: {
        xs: '500',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xlg: '1536px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
       
      },
      fontWeight: {
        'thinner':100,
        'thin': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
      },
     
      height: {
        '60': '25rem', 
      },
  
      colors:{
        teal:"#009688",
        red:"#ff585b",
        redButton:"#ff585b",
        bgBody:"#f6f6f6",
        grayd:"#908d8d",
        linecolor:"#b9b7b7"
      },
     
    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}





