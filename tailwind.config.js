const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        'white-darker': '#ECECEC',
        'regular-dark': '#1E1E1E', 
        'blue-light-citc': '#136FB2', 
        'blue-dark-citc': '#125193', 
        'citc-livinglab': '#71bfc8', 
      },
      transitionProperty: {
        'color': 'background-color, border-color, color',
        'opacity': 'opacity',
      },
      maskImage: {
        'heroSection': 'linear-gradient(to right, var(--tw-regular-dark), transparent)',
      },
      backgroundImage: {
        'navbar-gradient': 
          'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.7) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)',
        'navbar-mobile': 
          'linear-gradient(to right, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.7) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)',
        'navbar-hover': 
          'linear-gradient(to top, rgba(19, 111, 178, 0) 0%, rgba(19, 111, 178, 0.35) 13%, rgba(19, 111, 178, 0.7) 25%, rgba(19, 111, 178, 0.9) 50%, rgba(19, 111, 178, 1) 100%)',
        'light-gradient': 
          'linear-gradient(to bottom, rgba(247, 247, 247, 1) 0%, rgba(247, 247, 247, 0.85) 17%, rgba(247, 247, 247, 0.8) 34%, rgba(247, 247, 247, 0.75) 50%, rgba(247, 247, 247, 0.8) 67%, rgba(247, 247, 247, 0.85) 82%, rgba(247, 247, 247, 1) 100%)',
        'radial-gradient': 
          'radial-gradient(circle, rgb(243,241,246) 50%, transparent 70%)', 
        }, 
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      }, 
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
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
      'sm1': '12.8px', 
      'sm2': '10.24px',   
    }, 
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    addVariablesForColors, 
  ],
  safelist: ['bg-blue-light-citc'], 
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}