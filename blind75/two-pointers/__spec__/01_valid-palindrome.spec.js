import isPalindrome from "../01_valid-palindrome";

describe("Valid Palindrome", () => {
	test("Example 1: 'A man, a plan, a canal: Panama' -> true", () => {
		expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
	});

	test("Example 2: 'race a car' -> false", () => {
		expect(isPalindrome("race a car")).toBe(false);
	});

	test("Example 3: ' ' -> true", () => {
		expect(isPalindrome(" ")).toBe(true);
	});

	test("should handle simple palindrome", () => {
		expect(isPalindrome("aba")).toBe(true);
		expect(isPalindrome("abba")).toBe(true);
		expect(isPalindrome("abcba")).toBe(true);
	});

	test("should handle non-palindrome", () => {
		expect(isPalindrome("abc")).toBe(false);
		expect(isPalindrome("ab")).toBe(false);
		expect(isPalindrome("abca")).toBe(false);
	});

	test("should handle empty string", () => {
		expect(isPalindrome("")).toBe(true);
	});

	test("should handle single character", () => {
		expect(isPalindrome("a")).toBe(true);
		expect(isPalindrome("A")).toBe(true);
		expect(isPalindrome("5")).toBe(true);
	});

	test("should handle mixed case", () => {
		expect(isPalindrome("AbBa")).toBe(true);
		expect(isPalindrome("Madam")).toBe(true);
		expect(isPalindrome("RaceCar")).toBe(true);
	});

	test("should handle strings with spaces", () => {
		expect(isPalindrome("a b a")).toBe(true);
		expect(isPalindrome("a b c b a")).toBe(true);
		expect(isPalindrome("a b c")).toBe(false);
	});

	test("should handle strings with punctuation", () => {
		expect(isPalindrome("a,b,a")).toBe(true);
		expect(isPalindrome("a!b!a")).toBe(true);
		expect(isPalindrome("a,b,c,b,a")).toBe(true);
	});

	test("should handle strings with multiple spaces", () => {
		expect(isPalindrome("a  b  a")).toBe(true);
		expect(isPalindrome("  a  ")).toBe(true);
	});

	test("should handle numeric strings", () => {
		expect(isPalindrome("121")).toBe(true);
		expect(isPalindrome("12321")).toBe(true);
		expect(isPalindrome("123")).toBe(false);
	});

	test("should handle alphanumeric strings", () => {
		expect(isPalindrome("0P")).toBe(false);
		expect(isPalindrome("a1b2b1a")).toBe(true);
		expect(isPalindrome("A1B2B1a")).toBe(true);
	});

	test("should handle strings with only non-alphanumeric characters", () => {
		expect(isPalindrome("!!!")).toBe(true);
		expect(isPalindrome("@#$")).toBe(true);
		expect(isPalindrome(" , . ")).toBe(true);
	});

	test("should handle special characters in middle", () => {
		expect(isPalindrome("a, b, a")).toBe(true);
		expect(isPalindrome("a-b-a")).toBe(true);
		expect(isPalindrome("a.b.a")).toBe(true);
	});

	test("should handle longer palindromes", () => {
		expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
		expect(isPalindrome("No 'x' in Nixon")).toBe(true);
	});

	test("should handle consecutive same characters", () => {
		expect(isPalindrome("aaaa")).toBe(true);
		expect(isPalindrome("aaabaaa")).toBe(true);
		expect(isPalindrome("aaabbaaa")).toBe(true);
	});

	test("should handle strings with numbers and letters", () => {
		expect(isPalindrome("a1")).toBe(false);
		expect(isPalindrome("1a1")).toBe(true);
		expect(isPalindrome("123abc321")).toBe(false);
	});

	test("should ignore case and non-alphanumeric", () => {
		expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
		expect(isPalindrome("race a car")).toBe(false);
	});

	test("should handle tab and newline characters", () => {
		expect(isPalindrome("a\tb\ta")).toBe(true);
		expect(isPalindrome("a\nb\na")).toBe(true);
		expect(isPalindrome("a\tb\nc")).toBe(false);
	});
});
