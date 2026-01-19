import twoSum from "../02_two-sum-ii";

describe("Two Sum II - Input Array is Sorted", () => {
	test("Example 1: numbers = [2,7,11,15], target = 9 -> [1,2]", () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
	});

	test("Example 2: numbers = [2,3,4], target = 6 -> [1,3]", () => {
		expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
	});

	test("Example 3: numbers = [-1,0], target = -1 -> [1,2]", () => {
		expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
	});

	test("should handle minimum array size (2 elements)", () => {
		expect(twoSum([1, 2], 3)).toEqual([1, 2]);
		expect(twoSum([-1, 1], 0)).toEqual([1, 2]);
		expect(twoSum([0, 5], 5)).toEqual([1, 2]);
	});

	test("should handle negative numbers", () => {
		expect(twoSum([-10, -3, 0, 1, 2, 5], -13)).toEqual([1, 2]);
		expect(twoSum([-8, -5, -3, -1, 0], -9)).toEqual([1, 4]);
	});

	test("should handle arrays with duplicates", () => {
		expect(twoSum([1, 1, 2, 3], 2)).toEqual([1, 2]);
		expect(twoSum([2, 3, 3, 4], 6)).toEqual([1, 4]);
		expect(twoSum([0, 0, 1, 2], 0)).toEqual([1, 2]);
	});

	test("should find solution at the beginning", () => {
		expect(twoSum([1, 2, 3, 4, 5], 3)).toEqual([1, 2]);
		expect(twoSum([0, 5, 10, 15], 5)).toEqual([1, 2]);
	});

	test("should find solution at the end", () => {
		expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
		expect(twoSum([5, 10, 15, 20], 35)).toEqual([3, 4]);
	});

	test("should find solution in the middle", () => {
		expect(twoSum([1, 2, 3, 4, 5], 5)).toEqual([1, 4]);
		expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 5]);
		expect(twoSum([1, 2, 3, 4, 5], 8)).toEqual([3, 5]);
	});

	test("should handle large numbers", () => {
		expect(twoSum([1000000, 2000000, 3000000], 3000000)).toEqual([1, 2]);
		expect(twoSum([5000000, 10000000, 15000000], 20000000)).toEqual([1, 3]);
	});

	test("should handle zeros in array", () => {
		expect(twoSum([0, 1, 2, 3], 3)).toEqual([1, 4]);
		expect(twoSum([0, 0, 1, 2], 1)).toEqual([1, 3]);
		expect(twoSum([-1, 0, 1, 2], 0)).toEqual([1, 3]);
	});

	test("should handle larger arrays", () => {
		expect(twoSum([1, 3, 5, 7, 9, 11, 13, 15], 16)).toEqual([1, 8]);
		expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)).toEqual([1, 10]);
	});

	test("should handle array with consecutive numbers", () => {
		expect(twoSum([1, 2, 3, 4, 5], 6)).toEqual([1, 5]);
		expect(twoSum([10, 11, 12, 13, 14], 23)).toEqual([1, 4]);
	});

	test("should handle array with widely spaced numbers", () => {
		expect(twoSum([1, 10, 100, 1000], 1010)).toEqual([2, 4]);
		expect(twoSum([5, 50, 500, 5000], 505)).toEqual([1, 3]);
	});

	test("should handle equal numbers (but different indices)", () => {
		expect(twoSum([2, 2, 3, 4], 4)).toEqual([1, 2]);
		expect(twoSum([5, 5, 5, 5], 10)).toEqual([1, 4]);
	});

	test("should handle negative and positive mix", () => {
		expect(twoSum([-5, -3, 0, 3, 5], 0)).toEqual([1, 5]);
		expect(twoSum([-10, -5, 0, 5, 10], 5)).toEqual([2, 5]);
		expect(twoSum([-10, -5, 0, 5, 10], 15)).toEqual([4, 5]);
	});

	test("should handle when one number is zero", () => {
		expect(twoSum([0, 1, 2, 3, 4], 4)).toEqual([1, 5]);
		expect(twoSum([0, 2, 3, 4, 5], 2)).toEqual([1, 2]);
	});

	test("should return indices in ascending order (1-indexed)", () => {
		const result = twoSum([2, 7, 11, 15], 9);
		expect(result[0]).toBeLessThan(result[1]);
		expect(result[0]).toBeGreaterThan(0);
	});

	test("should handle array where both numbers needed are at edges", () => {
		expect(twoSum([1, 2, 3, 4, 5, 6], 7)).toEqual([1, 6]);
		expect(twoSum([-3, -2, -1, 0, 1, 2, 3], 0)).toEqual([1, 7]);
	});

	test("should handle single large number with smaller ones", () => {
		expect(twoSum([1, 2, 3, 4, 5, 100], 101)).toEqual([1, 6]);
		expect(twoSum([1, 2, 3, 50, 100, 150], 151)).toEqual([1, 6]);
	});

	test("should handle array with all negative numbers", () => {
		expect(twoSum([-100, -50, -25, -10, -5], -30)).toEqual([3, 5]);
		expect(twoSum([-20, -15, -10, -5], -25)).toEqual([1, 4]);
	});

	test("should verify that sum of returned indices equals target", () => {
		const testCases = [
			{ nums: [2, 7, 11, 15], target: 9 },
			{ nums: [1, 3, 5, 7, 9], target: 10 },
			{ nums: [-5, -3, 0, 3, 5], target: 0 },
		];

		testCases.forEach(({ nums, target }) => {
			const result = twoSum(nums, target);
			expect(nums[result[0] - 1] + nums[result[1] - 1]).toBe(target);
		});
	});

	test("should ensure indices are different", () => {
		const result = twoSum([1, 2, 3, 4, 5], 6);
		expect(result[0]).not.toBe(result[1]);
	});

	test("should work with array of size 3", () => {
		expect(twoSum([1, 2, 3], 3)).toEqual([1, 2]);
		expect(twoSum([1, 2, 3], 4)).toEqual([1, 3]);
		expect(twoSum([1, 2, 3], 5)).toEqual([2, 3]);
	});

	test("should handle target equal to sum of adjacent elements", () => {
		expect(twoSum([5, 10, 15, 20], 15)).toEqual([1, 2]);
		expect(twoSum([5, 10, 15, 20], 30)).toEqual([2, 4]);
		expect(twoSum([5, 10, 15, 20], 35)).toEqual([3, 4]);
	});
});
