import test from 'ava';

import {single, data} from '../../src/index.js';

import {algorithmsForSinglePattern} from './_fixtures.js';

single({
	test,
	algorithms: algorithmsForSinglePattern,
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});
