/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
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
        'main-white': '#FAFAFA',
        'main-black': '#212121',
        'main-primary': '#c5312a',
        'main-light': '#D8D9DE',
        'poke-normal': '#A8A77A',
        'poke-fire': '#EE8130',
        'poke-water': '#6390F0',
        'poke-electric': '#E0991C',
        'poke-grass': '#5FA634',
        'poke-ice': '#79b1AF',
        'poke-fighting': '#C22E28',
        'poke-poison': '#A33EA1',
        'poke-ground': '#7d8290',
        'poke-flying': '#8A6ED8',
        'poke-psychic': '#F95587',
        'poke-bug': '#95a515',
        'poke-rock': '#B6A136',
        'poke-ghost': '#735797',
        'poke-dragon': '#4818BC',
        'poke-dark': '#705746',
        'poke-steel': '#B7B7CE',
        'poke-fairy': '#D685AD',
        'poke-unknown': '#F2B807',
        'main-white-smooth': '#FAFAFA47',
        'main-black-smooth': '#21212147',
        'main-primary-smooth': '#c5312a47',
        'main-light-smooth': '#D8D9DE47',
        'poke-normal-smooth': '#A8A77A47',
        'poke-fire-smooth': '#EE813047',
        'poke-water-smooth': '#6390F047',
        'poke-electric-smooth': '#E0991C47',
        'poke-grass-smooth': '#5FA63447',
        'poke-ice-smooth': '#79b1AF47',
        'poke-fighting-smooth': '#C22E2847',
        'poke-poison-smooth': '#A33EA147',
        'poke-ground-smooth': '#7d829047',
        'poke-flying-smooth': '#8A6ED847',
        'poke-psychic-smooth': '#F9558747',
        'poke-bug-smooth': '#95a51547',
        'poke-rock-smooth': '#B6A13647',
        'poke-ghost-smooth': '#73579747',
        'poke-dragon-smooth': '#4818BC47',
        'poke-dark-smooth': '#70574647',
        'poke-steel-smooth': '#B7B7CE47',
        'poke-fairy-smooth': '#D685AD47',
        'poke-unknown-smooth': '#F2B80747',
        'gray-border': '#F6F7F9'
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
