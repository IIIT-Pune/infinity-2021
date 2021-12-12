module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"pink-squid": "#BE3A6F",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				squidgame: ["Squid-game", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
