/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
            // 'sans' será el nombre que usarás en tu HTML/CSS para referenciar la fuente
        },
	},
	plugins: [require('daisyui')],
}
