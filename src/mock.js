import assert from 'assert';

import Hit from './Hit.js';
import StringSlice from './StringSlice.js';

/**
 * A brute-force string searching algorithm leveraging String#indexOf.
 *
 * @param {StringSlice} string
 * @param {Iterable<StringSlice>} patterns
 * @return {IterableIterator<Hit>}
 */
export default function* mock(string, patterns) {
	assert(string instanceof StringSlice);
	const s = string.s.slice(string.i, string.j);
	for (const pattern of patterns) {
		assert(pattern instanceof StringSlice);
		const p = pattern.s.slice(pattern.i, pattern.j);
		let fromIndex = 0;
		while (true) {
			const i = s.indexOf(p, fromIndex);
			if (i === -1) break;
			yield new Hit(string.i + i, pattern, pattern.i);
			if (fromIndex >= s.length) break;
			fromIndex = i + 1;
		}
	}
}
