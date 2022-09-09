/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Prime', 'sans-serif'],
            display: ['Orbitron', 'sans-serif'],
            mono: ['Jetbrains Mono', 'monospace'],
        },
        extend: {
            colors: {
                "fog-gray": "#EDEDED",
                "gunmetal-gray-light": "#273238",
                "gunmetal-gray-default": "#161F23",
                "gunmetal-gray-dark": "#0A0E11",
                "cyber-yellow": "#FFE000",
                "carmine-red-default": "#C10033",
                "carmine-red-dark": "#8E002C",
                "carmine-red-darker": "#5E0022"
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-1em)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                blink: {
                    '0%': {
                        visibility: 'visible'
                    },
                    '100%': {
                        visibility: 'hidden',
                    },
                },
                cursor: {
                    '0%': {
                        rotate: '0deg'
                    },
                    '100%': {
                        rotate: '360deg',
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.6s ease-in forwards',
                'blink': 'blink 0.75s steps(5, start) infinite',
                'underline-slide': 'background-size .4s ease-in-out',
                'cursor': 'cursor 3s linear infinite',
            }
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#FFE000",
                    "secondary": "#C10033",
                    "accent": "#5E0022",
                    "neutral": "#161F23",
                    "base-100": "#EDEDED",
                    "info": "#50a9d2",
                    "success": "#83e5a3",
                    "warning": "#e5bd85",
                    "error": "#b76969",
                },
                // disabled for now
                // dark: {
                // 	"primary": "#FFE000",
                // 	"secondary": "#C10033",
                // 	"accent": "#5E0022",
                // 	"neutral": "#EDEDED",
                // 	"base-100": "#273238",
                // 	"info": "#50a9d2",
                // 	"success": "#83e5a3",
                // 	"warning": "#e5bd85",
                // 	"error": "#b76969",
                // },
            },
        ],
        darkTheme: "dark",
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
}
