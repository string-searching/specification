import test from 'ava';

import {algorithmsForSinglePattern} from './_fixtures.js';

import {single, data} from '#module';

single({
	test,
	algorithms: algorithmsForSinglePattern,
	data,
	skipEmptyString: true,
	skipEmptyPattern: true,
});
