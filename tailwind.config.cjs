/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/**/*.{svelte,js,ts}'],
	plugins: [require('daisyui')],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['halloween', 'dark', 'light']
	}
};
