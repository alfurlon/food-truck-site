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
				'yellow-overlay-color': '#9B8100',
				'saturated-yellow-bg': '#F5D63D'
			},
			spacing: {
				'60vh': '60vh',
				'40vh': '40vh',
				'500px': '500px'
			}
		},
	},
	plugins: [],
}
