/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-red": "#DC143C",
                "main-yellow": "#FFD700",
                "main-blue": "#1E90FF",
            },
        },
    },
    plugins: [],
};
