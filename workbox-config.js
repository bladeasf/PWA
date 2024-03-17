module.exports = {
	globDirectory: 'Develop/',
	globPatterns: [
		'**/*.{html,js}'
	],
	swDest: 'Develop/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};