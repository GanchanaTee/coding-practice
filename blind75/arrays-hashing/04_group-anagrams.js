/**
 * Problem: Group Anagrams (Arrays & Hashing #4)
 * Difficulty: Medium
 * LeetCode #: 49
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * Explanation:
 * - "bat" has no anagrams
 * - "nat" and "tan" are anagrams
 * - "ate", "eat", and "tea" are anagrams
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Constraints:
 * - 1 <= strs.length <= 10^4
 * - 0 <= strs[i].length <= 100
 * - strs[i] consists of lowercase English letters.
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
function groupAnagrams(strs) {
	// TODO: Implement your solution here
	// Hint: Use a hash map where key is sorted string or character count
	// Your code goes here...
	//
	//
	const sortedStrsByLength = strs.toSorted((a, b) => a.length - b.length);

	const anagramsMap = new Map();

	for (const str of strs) {
		const sortedStr = str.split("").toSorted().join("");
		if (anagramsMap.has(sortedStr)) {
			anagramsMap.get(sortedStr).push(str);
		} else {
			anagramsMap.set(sortedStr, [str]);
		}
	}

	const result = Array.from(anagramsMap.values());

	return result;
}

// Export for testing
export default groupAnagrams;

/*
 * TESTING INSTRUCTIONS
 * ===================
 *
 * To test this solution:
 *
 * 1. Run tests:
 *    npm test -- blind75/arrays-hashing/__spec__/04_group-anagrams.spec.js
 *
 * 2. Run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
