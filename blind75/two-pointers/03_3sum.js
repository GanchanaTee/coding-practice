/**
 * Problem: 3Sum (Two Pointers #3)
 * Difficulty: Medium
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Example 1:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 *
 * Example 2:
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum to 0.
 *
 * Example 3:
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 * Constraints:
 * - 3 <= nums.length <= 3000
 * - -10^5 <= nums[i] <= 10^5
 */

function threeSum(nums) {
	const result = [];
	// first sortedSums
	const sortedSums = nums.toSorted((a, b) => a - b);

	let leftPointer = 0;
	let rightPointer = nums.length - 1;


	while (leftPointer < rightPointer) {
		const missingValue =
			0 - (sortedSums[leftPointer] + sortedSums[rightPointer]);

		for (let i = leftPointer + 1; i < rightPointer; i++) {
			if (sortedSums[i] === missingValue) {
				result.push([
					sortedSums[leftPointer],
					sortedSums[i],
					sortedSums[rightPointer],
				]);
			}
		}

		if (missingValue < 0) {
			rightPointer--;
		} else {
			leftPointer++;
		}
	}

	// filter out duplicate in result
	const uniqueResult = result.reduce((acc, cur) => {
		let isExisted = false;
		for (item of acc) {
			let isSame = true;
			for (let i = 0; i < 3; i++) {
				if (item[i] !== cur[i]) {
					isSame = false;
				}
			}
			if (isSame) {
				isExisted = true;
			}
		}

		if (!isExisted) {
			acc.push(cur);
		}
		return acc;
	}, []);

	return uniqueResult;
}

// Export for testing
export default threeSum;
