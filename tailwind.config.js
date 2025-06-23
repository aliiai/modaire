/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.twig", // تأكد من وجود هذا السطر
  ],
  theme: {
    extend: {
      colors: {
          primary: '#0B947B',
          primary2: '#DC5AE7',
          secondary: '#f4f4f4',
          background: '#fAFFFE',
          heading: '#ff4d4f',
          text: '#ff4d4f',
          btn: '#ff4d4f',
          btnHover: '#ff4d4f',
          link: '#ff4d4f',
          linkHover: '#ff4d4f',
          success: '#28a745',
          error: '#dc3545',
          warning: '#ffc107',
        },
        screens: {
          'xl': { max: '1600px' },
          'lg': { max: '1280px' },
          'md': { max: '992px' },
          'sm': { max: '768px' },
          'xsm': { max: '480px' },
        },
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'base': '1rem',
          'md': '1.5rem',
          'lg': '2rem',
          'xlg': '3rem',
        },
        fontFamily: {
          primaryFont: ['Tajawal', 'sans-serif'],
          secondaryFont: ['Merriweather', 'serif'],
        },
        boxShadow: {
          'custom': '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
        },
    },
  },
  plugins: [],
}