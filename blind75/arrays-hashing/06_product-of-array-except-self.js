/**
 * Problem: Product of Array Except Self (Arrays & Hashing #6)
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
	//
	//
	const numberOfZero = nums.filter((num) => num === 0).length;
	if (numberOfZero === 1) {
		const indexOfZero = nums.findIndex((num) => num === 0);
		const productOfArrayWithoutZero = nums
			.filter((num) => num !== 0)
			.reduce((acc, num) => {
				acc = acc * num;
				return acc;
			}, 1);
		return Array(nums.length)
			.fill(0)
			.map((_, index) => {
				if (index === indexOfZero) {
					return productOfArrayWithoutZero;
				}
				return 0;
			});
	}
	if (numberOfZero > 1) {
		return Array(nums.length).fill(0);
	}
	// //
	// const totalOfProduct = nums.reduce((acc, num) => {
	// 	return acc * num;
	// }, 1);
	// const result = nums.map((num) => totalOfProduct / num);
	// return result;

	const n = nums.length;
	const prefix = new Array(n).fill(1);
	const suffix = new Array(n).fill(1);

	// Calculate prefix products
	for (let i = 1; i < n; i++) {
		prefix[i] = prefix[i - 1] * nums[i - 1];
	}

	// Calculate suffix products
	for (let i = n - 2; i >= 0; i--) {
		suffix[i] = suffix[i + 1] * nums[i + 1];
	}

	// Combine prefix and suffix
	return nums.map((_, i) => {
		return prefix[i] * suffix[i];
	});
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
 *    npm test -- blind75/arrays-hashing/__spec__/06_product-of-array-except-self.spec.js
 *
 * 2. Run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
