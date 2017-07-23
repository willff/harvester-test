'use strict';
const alfy = require('alfy');

alfy.fetch('http://matrix.topdish.us/categories/all').then(data => {
	const cats = data.categories;
	const items = alfy
		.inputMatches(cats, 'category')
		.map(x => ({
			title: x.category,
			subtitle: x.category,
			arg: `cat: ${x.category}`,
		}));

	alfy.output(items);
});
