/**
 * Problem: Top K Frequent Elements
 * Difficulty: Medium
 * LeetCode #: 347
 *
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * Explanation: 1 appears 3 times, 2 appears 2 times. They are the two most frequent.
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * Example 3:
 * Input: nums = [4,1,-1,2,-1,2,3], k = 2
 * Output: [-1,2]
 * Explanation: -1 and 2 both appear twice.
 *
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * - k is in the range [1, the number of unique elements in the array].
 * - It is guaranteed that the answer is unique.
 *
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
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
function topKFrequent(nums, k) {
	// TODO: Implement your solution here
	// Hint: Use hash map to count frequencies, then use bucket sort or heap
	// Your code goes here...
	//
	const countMap = new Map();

	for (num of nums) {
		if (!countMap.get(num)) {
			countMap.set(num, 0);
		}
		countMap.set(num, countMap.get(num) + 1);
	}

	const result = [...countMap]
		.sort((a, b) => b[1] - a[1])
		.map((a) => a[0])
		.slice(0, k);

	return result;
}

// Export for testing
export default topKFrequent;

/*
 * TESTING INSTRUCTIONS
 * ===================
 *
 * To test this solution:
 *
 * 1. Run tests:
 *    npm test -- blind75/arrays-hashing/__spec__/top-k-frequent-elements.spec.js
 *
 * 2. Run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
