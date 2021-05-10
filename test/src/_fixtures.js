import {map} from '@iterable-iterator/map';

import {search as _stringAlgorithmsKMP} from 'string-algorithms';
import {mock, StringSlice} from '../../src/index.js';

export const mockedSingle = (s, si, sj, p, pi, pj) =>
	map(
		(hit) => hit.si,
		mock(new StringSlice(s, si, sj), [new StringSlice(p, pi, pj)]),
	);

export const stringAlgorithmsKMP = (s, si, sj, p, pi, pj) =>
	map((x) => si + x, _stringAlgorithmsKMP(s.slice(si, sj), p.slice(pi, pj)));

export const algorithmsForSinglePattern = [mockedSingle, stringAlgorithmsKMP];
