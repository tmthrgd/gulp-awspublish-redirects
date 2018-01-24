'use strict';

const from = require('from2');
const File = require('vinyl');
const toThrough = require('to-through');

module.exports = function(redirects) {
	const entries = Object.entries(redirects).map(([path, location]) => new File({
		path: path,
		contents: new Buffer(''),
		s3: {
			path: path,
			headers: {
				'Website-Redirect-Location': location,
			},
		},
	}));

	const stream = from.obj((size, next) => next(null, entries.shift() || null));

	return toThrough(stream);
};