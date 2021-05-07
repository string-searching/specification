import test from 'ava';

import {single, data} from '../../src/index.js';

import {mockedSingle} from './_fixtures.js';

single({
	test,
	algorithms: [mockedSingle],
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});
