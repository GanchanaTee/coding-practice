/**
 * Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Time Complexity: O(n) - where n is the length of the string
 * Space Complexity: O(1) - only using two pointers
 *
 * @param {string} s - input string
 * @return {boolean} - true if palindrome, false otherwise
 */
function isPalindrome(s) {
	const lowercaseOfStr = s
		.split("")
		.map((s) => s.toLowerCase())
		.filter((s) => !!s)
		.join("")
		.replace(/[^a-z0-9]+/g, "");

	return lowercaseOfStr === lowercaseOfStr.split("").reverse().join("");
}

export default isPalindrome;
