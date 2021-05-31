module.exports = {
    purge: [
      './components/**/*.{vue,js}',
       './layouts/**/*.vue',
       './pages/**/*.vue',
       './plugins/**/*.{js,ts}',
       './nuxt.config.{js,ts}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          graybg: {
            DEFAULT: '#232731',
            dark: '#181a20',
            secondary: '#1f2127'
          }
        }
      },
      /*fontFamily: {
        'dosis':'Dosis, sans-serif',
        'nunito': 'Nunito, sans-serif'
      }*/
    },
    variants: {
      extend: {},
    }
  }
  