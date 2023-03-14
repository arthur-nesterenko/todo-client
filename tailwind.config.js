/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'mark-pro': ['Mark Pro', 'sans-serif']
        },
        extend: {
            boxShadow: {
                card: '0 2px 16px 0 rgba(0, 0, 0, 0.1)'
            }
        }
    },
    plugins: [],
}
