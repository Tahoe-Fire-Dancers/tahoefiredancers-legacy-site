/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
//const { heroui } = require("@heroui/react");
//const {daisyui} = require("@tailwindcss/vite");
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	daisyui: {
	logs: true, 	
	themes: [
		"light",
		"dark",
	  ],
	},
	theme: {
		extend: {
			colors: {
				'primary': 'colors.indigo',
				'secondary': 'colors.yellow',
				'neutral': 'colors.black',
				'tblack':'#0c1323',
				'torange':'#d69b4d',
				'tblue':'#3b6e9e',
				'tteal':'#6894ba',
				'twhite':'#ffffff',
				'tertiary': '#0000FF',
				'accent': '#FF00FF',
				'background': '#FFFFFF',
				'foreground': '#000000',
				'tprimary': '#FF0000',
				'tsecondary': '#00FF00',
				'ttertiary': '#0000FF',
				'taccent': '#FF00FF',
				'tbackground': '#FFFFFF',
				'tforeground': '#000000',
			},
			fontFamily: {
				'sans': ['"Inter var"', 'Inter', 'sans-serif'],
				'serif': ['"Merriweather"', 'Merriweather', 'serif'],
				'mono': ['"Fira Code"', 'Fira Code', 'monospace'],
				...defaultTheme.fontFamily.sans,
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.foreground'),
						a: {
							color: theme('colors.primary'),
							'&:hover': {
								color: theme('colors.primary'),
							},
						},
					},
				},
			}),
		},
	},
	plugins: [require('daisyui'),
	],
}
