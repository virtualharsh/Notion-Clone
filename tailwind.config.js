// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // ensure this path includes your React components
    ],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["Quicksand", "sans-serif"],
                cutive: ["Cutive Mono", "monospace"],
                kirang: ["Kirang Haerang", "cursive"],
            },
        },
    },
    plugins: [],
};
