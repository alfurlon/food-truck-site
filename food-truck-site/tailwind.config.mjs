/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-bg-color': '#FDFAE7',
				'nav-link-color': '#D10100',
				'offwhite-text-color': '#F7F7F7',
				'cta-color': '#FED201',
				'dark-text-color': '#222222',
				'yellow-overlay-color': '#9B8100'
			},
			spacing: {
				'60vh': '60vh',
				'40vh': '40vh'
			}
		},
	},
	plugins: [],
}
