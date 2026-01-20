/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: "#00f2ff",
                dark: "#0a0a0a",
            },
            boxShadow: {
                'brand': '0 0 40px rgba(0, 242, 255, 0.1)',
            },
            dropShadow: {
                'brand': '0 0 10px rgba(0, 242, 255, 0.5)',
            },
        },
    },
    plugins: [],
}
