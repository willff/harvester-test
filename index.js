'use strict';
const alfy = require('alfy');

alfy.fetch('http://matrix.topdish.us/categories/all').then(data => {
	console.info('data: ', data.categories); // wf
	const items = alfy
		.inputMatches(data.categories, 'title')
		.map(x => ({
			title: x.category,
		}));

	alfy.output(items);
});
