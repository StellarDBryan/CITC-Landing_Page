/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-clear-citc': '#F7F7F7', 
        'gray-dark-citc': '#656565', 
        'regular-dark': '#1E1E1E', 
        'blue-light-citc': '#126FB2', 
      },
      transitionProperty: {
        'color': 'background-color, border-color, color',
        'opacity': 'opacity',
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(to top, rgba(18, 111, 178, 0) 0%, rgba(18, 111, 178, 0.35) 13%, rgba(18, 111, 178, 0.7) 25%, rgba(18, 111, 178, 0.9) 50%, rgba(18, 111, 178, 1) 100%)',
      }
    },
    fontSize: {
      'h1': '61.04px', 
      'h2': '48.83px',
      'h3': '39.06px', 
      'h4': '31.25px', 
      'h5': '25px', 
      'h6': '20px',  
      'regular': '16px',  
      'small-1': '12.8px', 
      'small-2': '10.24px',   
    }, 
  },
  plugins: [],
  safelist: ['bg-blue-light-citc'], 
};
