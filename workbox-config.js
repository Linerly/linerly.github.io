module.exports = {
	globDirectory: 'linerly.github.io/',
	globPatterns: [
		'**/*.{html,png,jpg,ico,svg,css,txt,json,md,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'linerly.github.io/service-worker.js'
};