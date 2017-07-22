'use strict';
const alfy = require('alfy');

alfy.fetch('http://matrix.topdish.us/categories/all').then(data => {
	const items = alfy
		.inputMatches(data.categories, 'title')
		.map((x, index) => ({
			title: x.category,
			subtitle: x.category,
			arg: index,
		}));

		console.info('items: ', items); // wf
	alfy.output(items);
});
