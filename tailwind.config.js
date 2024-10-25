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
        'gray-dark-citc': '#838383', 
        'regular-dark': '#1E1E1E', 
        'blue-light-citc': '#126FB2',
      },
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
