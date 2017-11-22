'use strict';
const alfy = require('alfy');

const getParents = (parents) => {
	const list = parents.map(x => {
		return x.rankingName;
	});
	return `parents: ${list.join(', ')}`;
};

alfy.fetch('http://matrix.topdish.us/categories/all').then(data => {
	const cats = data.categories;
	const items = alfy
		.inputMatches(cats, 'category')
		.map(x => ({
			title: x.category,
			subtitle: getParents(x.parents),
			arg: `cat: ${x.category}`,
		}));

	alfy.output(items);
});
