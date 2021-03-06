// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

// Example :
// Input:
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.

var customSortString = function (S, T) {
	const hash = {};
	let result = '';

	for (let i = 0; i < T.length; i++) hash[T[i]] = hash[T[i]] + 1 || 1;

	for (let i = 0; i < S.length; i++) {
		result += S[i].repeat(hash[S[i]]);
		delete hash[S[i]];
	}

	for (let key in hash) result += key.repeat(hash[key]);
	return result;
};
