/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
			'poppins': ['Poppins', 'sans-serif'],
			'ubuntu': [ 'Ubuntu','sans-serif'],
			'convergence': ['Convergence','sans-serif'],
           
        },
		
	},
	plugins: [require('daisyui')],

	daisyui: {
		darkTheme: "light",
	   },
}
