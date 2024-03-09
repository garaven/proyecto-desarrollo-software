/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'codec-bold': ['Codec Pro Bold', 'sans-serif'],
				'codec-regular': ['Codec Pro Regular', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
