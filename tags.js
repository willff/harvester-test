'use strict';
const alfy = require('alfy');

alfy.fetch('http://matrix.topdish.us/tags/all').then(data => {
	const cats = data.data.tags;
	const items = alfy
		.inputMatches(cats)
		.map(x => ({
			title: x,
			subtitle: x,
			arg: `cat: ${x}`,
		}));

	alfy.output(items);
});
