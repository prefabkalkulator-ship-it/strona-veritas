/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFBF00", // Gold
                accent: "#00FFFF", // Cyan
                "background-dark": "#0A192F", // Dark Navy
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
            },
            boxShadow: {
                'neon-glow': '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
            }
        },
    },
    plugins: [],
}
