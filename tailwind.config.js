/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                matter: 'Matter',
                ubuntu: 'Ubuntu'
            },
            colors: {
                defaultBg: '#0D1727',
                green: '#13AF6B',
                162236: '#162236',
            },
        },
    },
    plugins: [],
};
