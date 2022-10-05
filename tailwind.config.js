/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hulu-main': '#06202A',
        'hulu-sub': '#183949',
        'hulu-green': '#1ce783',
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('daisyui')],
};
