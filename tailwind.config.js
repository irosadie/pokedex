/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mini': '320px',
      'phone': '360px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      content: {
        'triangle-up': 'url("/img/triangle-up.svg")',
        'triangle-down': 'url("/img/triangle-down.svg")',
      },
      colors: {
        'main-black': '#212121',
        'main-primary': '#E1991C',
        'poke-normal': '#A8A77A',
        'poke-fire': '#EE8130',
        'poke-water': '#6390F0',
        'poke-electric': '#F7D02C',
        'poke-grass': '#7AC74C',
        'poke-ice': '#96D9D6',
        'poke-fighting': '#C22E28',
        'poke-poison': '#A33EA1',
        'poke-ground': '#E2BF65',
        'poke-flying': '#A98FF3',
        'poke-psychic': '#F95587',
        'poke-bug': '#A6B91A',
        'poke-rock': '#B6A136',
        'poke-ghost': '#735797',
        'poke-dragon': '#6F35FC',
        'poke-dark': '#705746',
        'poke-steel': '#B7B7CE',
        'poke-fairy': '#D685AD',
      },
      animation: {
        fadeIn: 'fadeIn 0.2s forwards ease-in',
        fadeOut: 'fadeOut 0.2s forwards ease-in',
        bounce: 'bounce 2.7s infinite',
        'bounce-custom': 'bounce-custom 2.5s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { 'background-color': 'transparent', 'height': '100px' },
          '25%': { 'background-color': '#fff', 'color':'#212121', 'height': '90px' },
          '75%': { 'background-color': '#fff', 'color':'#212121', 'height': '80px' },
          '100%': { 'background-color': '#fff', 'color':'#212121'},
        },
        fadeOut: {
          '0%': { 'background-color': '#fff' },
          '100%': { 'background-color': 'transparent', 'color':'#212121'},
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-15%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        'bounce-custom': {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      }
    },
    // backgroundImage: {},
    backgroundPosition: {
      'custom': '-5% 20%',
    },
    backgroundSize: {
      'size-default': '115%',
      'size-oncursor': '135%'
    }
  },
  plugins: [],
}
