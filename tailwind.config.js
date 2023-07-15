/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: true,
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
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        pageactive: '#4AC3BE',
        primary: {
          '0': '#D1F9F1',
          '25': '#87DED6',
          '50': '#4AC3BE',
          '100': '#326D82'
        },
        success: {
          '0': '#DDF5FC',
          '25': '#56CCF2',
          '50': '#2D9CDB',
          '100': '#2F80ED'
        },
        error: {
          '0': '#FBDDDD',
          '25': '#F7BCBC',
          '50': '#EB5757',
          '100': '#B61515'
        },
        alert: {
          '0': '#FCF9CE',
          '25': '#F9F29D',
          '50': '#F0DF09',
          '100': '#C4B607'
        },
        warning: {
          '0': '#FEEEE0',
          '25': '#FDDEC1',
          '50': '#FAAC64',
          '100': '#C56206'
        },
        main: {
          '-50': '#EDEFF3',
          '-25': '#E2E4E9',
          '0': '#D8D9DE',
          '25': '#9D9EA1',
          '50': '#545455',
          '100': '#242424'
        }
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
