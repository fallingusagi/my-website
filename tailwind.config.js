module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display' : ['"Work Sans"',],
    },

    extend: {

      colors: {
        'mytheme-pearl':'#FAF8F7',
        'mytheme-sand':'#F5F2EF',
        'mytheme-shell':'#DAD5D6',
        'mytheme-beigegray':'#BAB2B5',
        'mytheme-beigepink':'#C5B4B8',
        'mytheme-ebony':'#6C6974',
        'mytheme-charcoal':'#3F3D43',
      },
      fill: {
        'mytheme-sand':'#F5F2EF',
        'mytheme-shell':'#DAD5D6',
        'mytheme-beigegray':'#BAB2B5',
        'mytheme-beigepink':'#C5B4B8',
        'mytheme-ebony':'#6C6974',
        'mytheme-charcoal':'#3F3D43',
      },
      animation: {
        'spin-slow':'spin 3s linear infinte',
        'bouncelr': 'bouncelr 1s infinite',

        
      },
      keyframes: {
        bouncelr:{
            '0%, 100%': {
              transform: 'translateX(-25%)',
              animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
            },
            '50%': {
              transform: 'translateX(0)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],

}
