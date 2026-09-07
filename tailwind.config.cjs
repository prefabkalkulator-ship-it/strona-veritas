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
                gold: {
                    50: '#fbf9f4',
                    100: '#f4eee2',
                    200: '#eadcb9',
                    300: '#dec38a',
                    400: '#d3a45c',
                    500: '#ca8a3e',
                    600: '#bb7033',
                    700: '#9c542c',
                    800: '#814529',
                    900: '#693923',
                },
                surface: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
                playfair: ['"Playfair Display"', 'Georgia', 'serif'],
                inter: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'neon-glow': '0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.5)',
                'gold-glow': '0 0 25px rgba(202, 138, 62, 0.25)',
                'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'card-hover': '0 12px 30px -4px rgba(202, 138, 62, 0.15)',
            }
        },
    },
    plugins: [],
}
