/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {

        fontFamily: {
          corpo: ["Roboto", "serif"],
          corpo2: ["Poppins", "serif"],
          nome2: ["Open Sans", "serif"],
          nome3: ["Italianno", "serif"],
          nome4: ["Ubuntu", "serif"],
          nome5: ["Ephesis", "serif"],
          nome6: ["Sacramento", "serif"],

    
          },
        colors: { 

          cor1:'#F0F0F0',
          cor2:'#FFD700',
          cor3:'#4169e1',
          cor4:'#000000 ',
          
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
  