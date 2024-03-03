import test from 'ava';

import {mockedSingle} from './_fixtures.js';
import {single, data} from '#module';

single({
	test,
	algorithms: [mockedSingle],
	data,
});
