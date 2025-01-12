import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
				mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
				body: ['Fira Code', ...defaultTheme.fontFamily.mono],
			  },
		},
	},
	plugins: [],
}
