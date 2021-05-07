const data = [
	{
		string: 'abcd',
		patterns: [
			{
				pattern: 'abcde',
				hits: [],
			},
			{
				pattern: 'abcd',
				hits: [0],
			},
			{
				pattern: 'bc',
				hits: [1],
			},
		],
	},
	{
		string: 'abcdbdbc',
		patterns: [
			{
				pattern: 'bc',
				hits: [1, 6],
			},
		],
	},
	{
		string: 'abcdbdbcazertyuiopqsdfghjklmwxcvbn',
		patterns: [
			{
				pattern: 'bc',
				hits: [1, 6],
			},
		],
	},
];

export default data;
