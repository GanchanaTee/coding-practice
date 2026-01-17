import groupAnagrams from "../group-anagrams.js";

describe("Group Anagrams", () => {
	// Helper function to sort arrays within arrays for comparison
	const sortResult = (result) => {
		return result
			.map((group) => group.sort())
			.sort((a, b) => {
				if (a.length !== b.length) return a.length - b.length;
				return a[0].localeCompare(b[0]);
			});
	};

	// Basic Example Tests
	test("Example 1: strs = ['eat','tea','tan','ate','nat','bat']", () => {
		const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
		const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	test("Example 2: strs = ['']", () => {
		const result = groupAnagrams([""]);
		expect(sortResult(result)).toEqual(sortResult([[""]]));
	});

	test("Example 3: strs = ['a']", () => {
		const result = groupAnagrams(["a"]);
		expect(sortResult(result)).toEqual(sortResult([["a"]]));
	});

	// Edge Cases
	test("should handle all strings being anagrams", () => {
		const result = groupAnagrams(["abc", "bac", "cab"]);
		const expected = [["abc", "bac", "cab"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	test("should handle all strings being unique", () => {
		const result = groupAnagrams(["abc", "def", "ghi"]);
		const expected = [["abc"], ["def"], ["ghi"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	test("should handle empty array", () => {
		const result = groupAnagrams([]);
		expect(sortResult(result)).toEqual(sortResult([]));
	});

	// Single Characters
	test("should group single character anagrams", () => {
		const result = groupAnagrams(["a", "b", "a", "c", "b"]);
		const expected = [["a", "a"], ["b", "b"], ["c"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Repeated Words
	test("should handle repeated words", () => {
		const result = groupAnagrams(["eat", "eat", "eat"]);
		const expected = [["eat", "eat", "eat"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Mixed Length Strings
	test("should handle strings of different lengths", () => {
		const result = groupAnagrams(["a", "ab", "ba", "abc", "cba"]);
		const expected = [["a"], ["ab", "ba"], ["abc", "cba"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Strings with All Same Characters
	test("should group strings with all same characters", () => {
		const result = groupAnagrams(["aaa", "aaa", "bbb"]);
		const expected = [["aaa", "aaa"], ["bbb"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Common English Words
	test("should group common anagram pairs", () => {
		const result = groupAnagrams(["listen", "silent", "enlist", "google"]);
		const expected = [["listen", "silent", "enlist"], ["google"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	test("should group 'tea', 'eat', 'ate' together", () => {
		const result = groupAnagrams(["tea", "eat", "ate", "dog"]);
		const expected = [["tea", "eat", "ate"], ["dog"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Longer Words
	test("should group longer anagram words", () => {
		const result = groupAnagrams(["abcd", "bcda", "cdab", "dabc", "word"]);
		const expected = [["abcd", "bcda", "cdab", "dabc"], ["word"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Palindrome Anagrams
	test("should handle palindrome anagrams", () => {
		const result = groupAnagrams(["racecar", "carrace", "level"]);
		const expected = [["racecar", "carrace"], ["level"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// No Anagrams (All Unique)
	test("should return each string in its own group when no anagrams exist", () => {
		const result = groupAnagrams(["cat", "dog", "bird"]);
		const expected = [["cat"], ["dog"], ["bird"]];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Multiple Groups
	test("should handle multiple anagram groups", () => {
		const result = groupAnagrams([
			"eat",
			"tea",
			"tan",
			"ate",
			"nat",
			"bat",
			"tab",
			"act",
		]);
		const expected = [
			["eat", "tea", "ate"],
			["tan", "nat"],
			["bat", "tab"],
			["act"],
		];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Empty Strings Mixed
	test("should handle mix of empty strings and regular strings", () => {
		const result = groupAnagrams(["", "", "a", "a"]);
		const expected = [
			["", ""],
			["a", "a"],
		];
		expect(sortResult(result)).toEqual(sortResult(expected));
	});

	// Large Input Test (performance)
	test("should handle large input efficiently", () => {
		const largeInput = [];
		for (let i = 0; i < 100; i++) {
			largeInput.push("abc");
			largeInput.push("def");
			largeInput.push("ghi");
		}
		const result = groupAnagrams(largeInput);
		expect(result.length).toBe(3);
		expect(result.every((group) => group.length === 100)).toBe(true);
	});

	// Test that all original strings are present
	test("should preserve all original strings", () => {
		const input = ["eat", "tea", "tan"];
		const result = groupAnagrams(input);
		const flattened = result.flat();
		expect(flattened.sort()).toEqual(input.sort());
	});
});
