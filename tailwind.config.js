/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'hulu-main': '#06202A',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
