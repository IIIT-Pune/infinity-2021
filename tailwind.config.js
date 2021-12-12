module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				"78": "19.5rem",
			},
			colors: {
				pink: "#BE3A6F",
				archivePrimary: "#DB5370",
				archiveSecondary: "#39101D",
				archiveLight: "#F4CED6",
				archiveDark: "#C95782"
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
