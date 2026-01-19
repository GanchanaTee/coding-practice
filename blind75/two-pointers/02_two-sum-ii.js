/**
 * Two Sum II - Input Array is Sorted
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number. Let these two numbers be
 * numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 *
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array
 * [index1, index2] of length 2.
 *
 * The tests are generated such that there is exactly one solution. You may not use the same
 * element twice. Your solution must use only constant extra space.
 *
 * Time Complexity: O(n) - where n is the length of the array
 * Space Complexity: O(1) - only using two pointers
 *
 * @param {number[]} numbers - sorted array of integers
 * @param {number} target - target sum
 * @return {number[]} - 1-indexed indices of two numbers that add up to target
 */
function twoSum(numbers, target) {
	const diffOfSum = numbers.map((n) => target - n);

	const indexMapByDiff = new Map(diffOfSum.map((sum, index) => [sum, index]));

	for (const [index, num] of Object.entries(numbers)) {
		const meetTargetIndex = indexMapByDiff.get(num);

		if (meetTargetIndex) {
			return [Number(index) + 1, meetTargetIndex + 1];
		}
	}

	return [];
}

/*
	function twoSum(numbers, target) {
	// Initialize two pointers at both ends of the array
	let left = 0;
	let right = numbers.length - 1;

	// Move pointers toward each other until they meet
	while (left < right) {
		const sum = numbers[left] + numbers[right];

		if (sum === target) {
			// Found the solution! Return 1-indexed indices
			return [left + 1, right + 1];
		} else if (sum < target) {
			// Sum is too small, move left pointer right to get larger number
			// This increases the sum since array is sorted in ascending order
			left++;
		} else {
			// Sum is too large, move right pointer left to get smaller number
			// This decreases the sum since array is sorted in ascending order
			right--;
		}
	}

	// According to problem constraints, there's always exactly one solution
	// So we should never reach here, but return empty array for safety
	return [];
}
*/

export default twoSum;
