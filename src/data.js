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
				pattern: 'a',
				hits: [0],
			},
			{
				pattern: 'b',
				hits: [1],
			},
			{
				pattern: 'c',
				hits: [2],
			},
			{
				pattern: 'd',
				hits: [3],
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
				pattern: 'ab',
				hits: [0],
			},
			{
				pattern: 'bc',
				hits: [1],
			},
			{
				pattern: 'cd',
				hits: [2],
			},
			{
				pattern: 'abc',
				hits: [0],
			},
			{
				pattern: 'bcd',
				hits: [1],
			},
			{
				pattern: 'dcba',
				hits: [],
			},
			{
				pattern: 'xyz',
				hits: [],
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
		string: 'aaaaaaaaaab',
		patterns: [
			{
				pattern: 'aaa',
				hits: [0, 1, 2, 3, 4, 5, 6, 7],
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
		string: 'aaaa',
		patterns: [
			{
				pattern: 'a',
				hits: [0, 1, 2, 3],
			},
			{
				pattern: 'aa',
				hits: [0, 1, 2],
			},
			{
				pattern: 'aaa',
				hits: [0, 1],
			},
			{
				pattern: 'aaaa',
				hits: [0],
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
	{
		string: 'xyyzxxyxzzzxyxyxxyzxyzxzxyxyzz',
		patterns: [
			{
				pattern: 'xyz',
				hits: [16, 19, 26],
			},
			{
				pattern: 'zz',
				hits: [8, 9, 28],
			},
			{
				pattern: 'xyx',
				hits: [5, 11, 13, 24],
			},
		],
	},
	{
		string: 'ABC ABCDAB ABCDABCDABDE',
		patterns: [
			{
				pattern: 'ABCDABD',
				hits: [15],
			},
		],
	},
	{
		string: 'ABCABCDABABCDABCDABDE',
		patterns: [
			{
				pattern: 'ABCDABD',
				hits: [13],
			},
			{
				pattern: 'ABCDAB',
				hits: [3, 9, 13],
			},
			{
				pattern: 'ABCABC',
				hits: [0],
			},
			{
				pattern: 'ABC',
				hits: [0, 3, 9, 13],
			},
			{
				pattern: 'ABD',
				hits: [17],
			},
		],
	},
	{
		string: 'babcbabcabcaabcabcabcacabc',
		patterns: [
			{
				pattern: 'abcabcacab',
				hits: [15],
			},
		],
	},
];

export default data;
