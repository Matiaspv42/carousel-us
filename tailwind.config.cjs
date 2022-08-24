/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Prime', 'sans-serif'],
			display: ['Orbitron', 'sans-serif'],
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
			}
		},
	},
	daisyui: {
		themes: [
			{
				underground: {
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
			},
		],
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
}
