const data = [
	{
		string: '',
		patterns: [
			{
				pattern: '',
				hits: [0],
			},
			{
				pattern: 'abcd',
				hits: [],
			},
		],
	},
	{
		string: 'abcd',
		patterns: [
			{
				pattern: '',
				hits: [0, 1, 2, 3, 4],
			},
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
	{
		string:
			'Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.',
		patterns: [
			{
				pattern: 'to',
				hits: [15, 36, 66],
			},
		],
	},
	{
		string: 'aaaaaaaaab',
		patterns: [
			{
				pattern: 'aaaab',
				hits: [5],
			},
		],
	},
	{
		string: 'tototo',
		patterns: [
			{
				pattern: 'to',
				hits: [0, 2, 4],
			},
		],
	},
	{
		string: 'aaaaa',
		patterns: [
			{
				pattern: 'aa',
				hits: [0, 1, 2, 3],
			},
		],
	},
];

export default data;
