/**
 * Problem: Two Sum (Arrays & Hashing #1)
 * Difficulty: Easy
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the
 * same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

/**
 * Approach: [Your approach here]
 *
 * Algorithm:
 * 1. [Step 1]
 * 2. [Step 2]
 * 3. [Step 3]
 * ...
 *
 * Time Complexity: [Your analysis here]
 * Space Complexity: [Your analysis here]
 */

function twoSum(nums, target) {
	// TODO: Implement your solution here
	// Hint: Consider using a hash map for O(n) time complexity
	// Your code goes here...

	// First idea
	// const passedValues = [];
	// for (const [index, num] of Object.entries(nums)) {
	// 	const findNum = target - num;

	// 	const findedNumIndex = passedValues.findIndex((v) => v === findNum);

	// 	if (findedNumIndex != -1 && Number(findedNumIndex) != index) {
	// 		return [findedNumIndex, Number(index)];
	// 	}

	// 	passedValues.push(num);
	// }
	//

	// Second idea use map
	const numToIndex = new Map();

	for (const [index, num] of Object.entries(nums)) {
		const findedNum = target - num;

		const finedNumIndex = numToIndex.get(findedNum);

		if (finedNumIndex !== undefined) {
			return [Number(finedNumIndex), Number(index)];
		}

		numToIndex.set(num, index);
	}

	return [];
}

// Export for testing
export default twoSum;
