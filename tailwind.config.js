/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {

        nome1: ["Public Sans", "serif"],
        nome2: ["Ephesis", "serif"],
        corpo1: ["Nunito", "serif"],
        corpo2: ["Nunito Sans", "serif"],

      },
      colors: {

        cor1: '#F0F0F0',
        cor2: '#FFD700',
        cor3: '#4169e1',
        cor4: '#000000 ',

      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },



  plugins: [],

};
