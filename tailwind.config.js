/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'hulu-main': '#183949',
                'hulu-green': '#1ce783',
                'hulu-gradient-from': '#040405',
                'hulu-gradient-to': '#183949',
                'hulu-black': '#040405',
                'hulu-secondary': '#29A869',
            },
            screens: {
                '3xl': '2000px',
            },
            fontFamily: {
                'source-sans': ['Source Sans Pro', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('daisyui'),
        require('@tailwindcss/line-clamp'),
        require('prettier-plugin-tailwindcss'),
    ],
};
