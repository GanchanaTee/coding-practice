import isAnagram from "../03_valid-anagram.js";

describe("Valid Anagram", () => {
	// Basic Example Tests
	test("Example 1: s = 'anagram', t = 'nagaram'", () => {
		const result = isAnagram("anagram", "nagaram");
		expect(result).toBe(true);
	});

	test("Example 2: s = 'rat', t = 'car'", () => {
		const result = isAnagram("rat", "car");
		expect(result).toBe(false);
	});

	test("Example 3: s = 'listen', t = 'silent'", () => {
		const result = isAnagram("listen", "silent");
		expect(result).toBe(true);
	});

	// Edge Cases
	test("should handle single character anagram", () => {
		const result = isAnagram("a", "a");
		expect(result).toBe(true);
	});

	test("should handle single character non-anagram", () => {
		const result = isAnagram("a", "b");
		expect(result).toBe(false);
	});

	test("should handle strings of different lengths", () => {
		const result = isAnagram("abc", "ab");
		expect(result).toBe(false);
	});

	// Special Cases
	test("should handle empty strings", () => {
		const result = isAnagram("", "");
		expect(result).toBe(true);
	});

	test("should handle strings with repeated characters", () => {
		const result = isAnagram("aabbcc", "abcabc");
		expect(result).toBe(true);
	});

	test("should handle strings with all same characters", () => {
		const result = isAnagram("aaa", "aaa");
		expect(result).toBe(true);
	});

	test("should handle strings with all same characters but different counts", () => {
		const result = isAnagram("aaa", "aa");
		expect(result).toBe(false);
	});

	// Case Sensitivity (if applicable)
	test("should be case sensitive for standard implementation", () => {
		const result = isAnagram("Hello", "hello");
		expect(result).toBe(false);
	});

	// Longer Strings
	test("should handle longer anagram strings", () => {
		const result = isAnagram(
			"abcdefghijklmnopqrstuvwxyz",
			"zyxwvutsrqponmlkjihgfedcba",
		);
		expect(result).toBe(true);
	});

	test("should handle longer non-anagram strings", () => {
		const result = isAnagram(
			"abcdefghijklmnopqrstuvwxy",
			"abcdefghijklmnopqrstuvwxyz",
		);
		expect(result).toBe(false);
	});

	// Same Characters Different Count
	test("should return false when same characters but different counts", () => {
		const result = isAnagram("aab", "abb");
		expect(result).toBe(false);
	});

	test("should return false when one extra character", () => {
		const result = isAnagram("abcd", "abcde");
		expect(result).toBe(false);
	});

	// Palindrome Anagrams
	test("should handle palindrome anagrams", () => {
		const result = isAnagram("racecar", "carrace");
		expect(result).toBe(true);
	});

	// Common English Words
	test("should recognize 'tea' and 'eat' as anagrams", () => {
		const result = isAnagram("tea", "eat");
		expect(result).toBe(true);
	});

	test("should recognize 'below' and 'elbow' as anagrams", () => {
		const result = isAnagram("below", "elbow");
		expect(result).toBe(true);
	});

	test("should not recognize 'state' and 'taste' as anagrams", () => {
		const result = isAnagram("state", "taste");
		expect(result).toBe(true);
	});

	test("should not recognize 'state' and 'tests' as anagrams", () => {
		const result = isAnagram("state", "tests");
		expect(result).toBe(false);
	});

	// Performance Test (larger strings)
	test("should handle large strings efficiently", () => {
		const s = "a".repeat(50000);
		const t = "a".repeat(50000);
		const result = isAnagram(s, t);
		expect(result).toBe(true);
	});

	test("should handle large strings with slight difference", () => {
		const s = "a".repeat(50000);
		const t = "a".repeat(49999) + "b";
		const result = isAnagram(s, t);
		expect(result).toBe(false);
	});
});
