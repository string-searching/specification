const single = ({
	test,
	algorithms,
	data,
	skipEmptyString,
	skipEmptyPattern,
}) => {
	for (const algorithm of algorithms) {
		for (const {string, patterns} of data) {
			if (string === '' && skipEmptyString) continue;
			for (const {pattern, hits} of patterns) {
				if (pattern === '' && skipEmptyPattern) continue;
				test(macro, algorithm, string, pattern, hits);
			}
		}
	}
};

export default single;

const macro = (t, algorithm, s, p, hits) => {
	const name = algorithm.name;

	const si = 0;
	const sj = s.length;
	const pi = 0;
	const pj = p.length;

	let k = 0;
	for (const i of algorithm(s, si, sj, p, pi, pj)) {
		if (k < hits.length) {
			t.is(i, hits[k], `${name} > begin of '${p}' in '${s}'`);
			++k;
		} else {
			++k;
			t.fail(
				`"${name} > (${i}) callback called ${k} times for '${p}' in '${s}'`,
			);
		}
	}

	t.is(k, hits.length, `${name} > check number of hits for '${p}' in '${s}'`);
};

macro.title = (title, algorithm, string, pattern, hits) =>
	title ??
	`${algorithm.name}('${string}', '${pattern}') hits ${JSON.stringify(hits)}`;
