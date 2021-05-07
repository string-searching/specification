import {map} from '@iterable-iterator/map';

import {mock, StringSlice} from '../../src/index.js';

export const mockedSingle = (s, si, sj, p, pi, pj) =>
	map(
		(hit) => hit.si,
		mock(new StringSlice(s, si, sj), [new StringSlice(p, pi, pj)]),
	);
