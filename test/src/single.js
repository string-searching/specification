import test from 'ava';

import {map} from '@iterable-iterator/map';

import {mock, single, data, StringSlice} from '../../src/index.js';

const mockedSingle = (s, si, sj, p, pi, pj) =>
	map(
		(hit) => hit.si,
		mock(new StringSlice(s, si, sj), [new StringSlice(p, pi, pj)]),
	);

single({
	test,
	algorithms: [mockedSingle],
	data,
});
