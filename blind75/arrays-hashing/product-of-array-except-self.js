/**
 * Problem: Product of Array Except Self
 * Difficulty: Medium
 * LeetCode #: 238
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements
 * of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Explanation: For each position i, multiply all elements except nums[i]
 *
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * Explanation:
 * - answer[0] = 1 * 0 * -3 * 3 = 0
 * - answer[1] = -1 * 0 * -3 * 3 = 0
 * - answer[2] = -1 * 1 * -3 * 3 = 9
 * - answer[3] = -1 * 1 * 0 * 3 = 0
 * - answer[4] = -1 * 1 * 0 * -3 = 0
 *
 * Example 3:
 * Input: nums = [1,0]
 * Output: [0,1]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
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
function productExceptSelf(nums) {
	// TODO: Implement your solution here
	// Hint: Use prefix and suffix products
	// Your code goes here...
}

// Export for testing
export default productExceptSelf;

/*
 * TESTING INSTRUCTIONS
 * ===================
 *
 * To test this solution:
 *
 * 1. Run tests:
 *    npm test -- blind75/arrays-hashing/__spec__/product-of-array-except-self.spec.js
 *
 * 2. Run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
