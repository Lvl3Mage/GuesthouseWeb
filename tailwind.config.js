/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html","./src/html/**/*.html","./src/js/**/*.js"],
  theme: {
    fontFamily: {
      'playfair': ['PlayfairDisplay'],
      'playfairSC': ['PlayfairDisplaySC'],
      'rum': ['RumRaisin'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '639px',
        md: '767px',
        lg: '1023px',
        xl: '1279px',
      },
    },
    extend: {
      dropShadow: {
        '3xl': '0 4px 4px #0004',
        'heavy': '0 4px 8px #0009',
      },
      boxShadow: {
        'inset-lg': 'inset 0 0 10px 4px rgb(0 0 0 / 0.3)',
      },
      transitionTimingFunction: {
        'out-wobble': 'cubic-bezier(.65,1.77,.73,.86)',
      },
      colors: {
        'gray': {
          300: '#D1D0D3',
          350: '#C3C2C6',
        }
        // 'brown':"#623E2A",
        // 'beige':{
        //   DEFAULT:"#F4F1ED",
        //   "light":"#F4F1ED",
        //   "dark":"#EFEBE5",
        // },
        // 'cyan':'#2380BB',
        // 'blue':'#034EA2',
        // 'orange': "#FF914D",
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
  },
  plugins: [],
}

