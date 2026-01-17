import twoSum from "../01_two-sum.js";

describe("Two Sum", () => {
	test("Example 1: nums = [2,7,11,15], target = 9", () => {
		const result = twoSum([2, 7, 11, 15], 9);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 1].sort());
	});

	test("Example 2: nums = [3,2,4], target = 6", () => {
		const result = twoSum([3, 2, 4], 6);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([1, 2].sort());
	});

	test("Example 3: nums = [3,3], target = 6", () => {
		const result = twoSum([3, 3], 6);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 1].sort());
	});

	test("should handle negative numbers", () => {
		const result = twoSum([-1, -2, -3, -4, -5], -8);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([2, 4].sort());
	});

	test("should handle mix of positive and negative numbers", () => {
		const result = twoSum([-3, 4, 3, 90], 0);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 2].sort());
	});

	test("should find solution with first and last elements", () => {
		const result = twoSum([1, 5, 3, 7, 2], 3);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 4].sort());
	});

	test("should handle zero in the array", () => {
		const result = twoSum([0, 4, 3, 0], 0);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 3].sort());
	});

	test("should handle target of zero with non-zero elements", () => {
		const result = twoSum([5, -5, 3, 7], 0);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([0, 1].sort());
	});

	test("should work with larger array", () => {
		const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		const result = twoSum(nums, 130);
		expect(result.length).toBe(2);
		expect(nums[result[0]] + nums[result[1]]).toBe(130);
		expect(result[0]).not.toBe(result[1]);
	});

	test("should find solution when target is sum of middle elements", () => {
		const result = twoSum([5, 10, 15, 20, 25, 30], 35);
		expect(result.length).toBe(2);
		expect(result.sort()).toEqual([2, 3].sort());
	});

	test("should return indices in any order", () => {
		const result = twoSum([7, 2, 13, 11], 9);
		expect(result.length).toBe(2);
		expect(new Set(result)).toEqual(new Set([0, 1]));
	});

	test("should handle duplicate target values", () => {
		const result = twoSum([1, 1, 1, 1], 2);
		expect(result.length).toBe(2);
		expect(result[0]).toBeLessThan(result[1]);
	});
});
