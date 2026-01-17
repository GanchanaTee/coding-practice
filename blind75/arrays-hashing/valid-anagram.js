/**
 * Problem: Valid Anagram
 * Difficulty: Easy
 * LeetCode #: 242
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Example 3:
 * Input: s = "listen", t = "silent"
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length, t.length <= 5 * 10^4
 * - s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution?
 */

/**
 * Approach: [Name of approach]
 *
 * Algorithm:
 * 1. [Step 1]
 * 2. [Step 2]
 * 3. [Step 3]
 * ...
 *
 * Time Complexity: [Big O notation] - [Explanation]
 * Space Complexity: [Big O notation] - [Explanation]
 */
function isAnagram(s, t) {
	// TODO: Implement your solution here
	// Hint: Use hash map or array to count character frequencies
	// Your code goes here...
	//
	const sortedS = s.split("").sort().join("");
	const sortedT = t.split("").sort().join("");
	return sortedS === sortedT;
}

// Export for testing
export default isAnagram;

/*
 * TESTING INSTRUCTIONS
 * ===================
 *
 * To test this solution:
 *
 * 1. Run tests:
 *    npm test -- blind75/arrays-hashing/__spec__/valid-anagram.spec.js
 *
 * 2. Run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
