/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00D9FF',
                    dark: '#00B8D9',
                    light: '#33E0FF',
                },
                secondary: {
                    DEFAULT: '#7B61FF',
                    dark: '#6247EA',
                    light: '#9B84FF',
                },
                dark: {
                    DEFAULT: '#0A0E27',
                    lighter: '#151A35',
                    card: '#1A1F3A',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF' },
                    '100%': { boxShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF' },
                },
            },
        },
    },
    plugins: [],
}
