import threeSum from "../03_3sum";

describe("3Sum", () => {
	test("Example 1: nums = [-1,0,1,2,-1,-4]", () => {
		const result = threeSum([-1, 0, 1, 2, -1, -4]);
		const expected = [
			[-1, -1, 2],
			[-1, 0, 1],
		];
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("Example 2: nums = [0,1,1]", () => {
		const result = threeSum([0, 1, 1]);
		expect(result).toEqual([]);
	});

	test("Example 3: nums = [0,0,0]", () => {
		const result = threeSum([0, 0, 0]);
		expect(result).toEqual([[0, 0, 0]]);
	});

	test("should handle empty array", () => {
		expect(threeSum([])).toEqual([]);
	});

	test("should handle array with less than 3 elements", () => {
		expect(threeSum([0])).toEqual([]);
		expect(threeSum([1, 2])).toEqual([]);
	});

	test("should handle array with exactly 3 elements that sum to zero", () => {
		const result = threeSum([-1, 0, 1]);
		expect(result.length).toBe(1);
		expect(result[0].sort()).toEqual([-1, 0, 1]);
	});

	test("should handle array with exactly 3 elements that don't sum to zero", () => {
		expect(threeSum([1, 2, 3])).toEqual([]);
		expect(threeSum([-1, -2, -3])).toEqual([]);
	});

	test("should handle all zeros", () => {
		const result = threeSum([0, 0, 0]);
		expect(result).toEqual([[0, 0, 0]]);
		expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
	});

	test("should handle all positive numbers", () => {
		expect(threeSum([1, 2, 3, 4])).toEqual([]);
		expect(threeSum([1, 1, 1, 1])).toEqual([]);
	});

	test("should handle all negative numbers", () => {
		expect(threeSum([-1, -2, -3, -4])).toEqual([]);
		expect(threeSum([-1, -1, -1, -1])).toEqual([]);
	});

	test("should handle array with multiple solutions", () => {
		const result = threeSum([-2, -1, 0, 1, 2, 3]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array with duplicates", () => {
		const result = threeSum([-2, -2, 0, 2, 2]);
		expect(result.length).toBe(1);
		expect(result[0].sort()).toEqual([-2, 0, 2]);
	});

	test("should not return duplicate triplets", () => {
		const result = threeSum([-2, -2, 0, 2, 2]);
		expect(result.length).toBe(1);
		expect(result[0].sort()).toEqual([-2, 0, 2]);
	});

	test("should handle array with consecutive numbers", () => {
		const result = threeSum([-3, -2, -1, 0, 1, 2, 3]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array with zeros and other numbers", () => {
		const result = threeSum([-2, -1, 0, 0, 1, 2]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should verify that all returned triplets sum to zero", () => {
		const testCases = [
			[-1, 0, 1, 2, -1, -4],
			[-2, -1, 0, 1, 2, 3],
			[0, 0, 0],
		];

		testCases.forEach((nums) => {
			const result = threeSum(nums);
			result.forEach((triplet) => {
				expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
			});
		});
	});

	test("should ensure triplets don't use the same element twice", () => {
		const nums = [-1, 0, 1, 2, -1, -4];
		const result = threeSum(nums);
		result.forEach((triplet) => {
			triplet.forEach((num) => {
				const count = triplet.filter((n) => n === num).length;
				const available = nums.filter((n) => n === num).length;
				expect(count).toBeLessThanOrEqual(available);
			});
		});
	});

	test("should handle array with one zero and other numbers", () => {
		const result = threeSum([-1, 0, 1]);
		expect(result.length).toBe(1);
		expect(result[0].sort()).toEqual([-1, 0, 1]);
	});

	test("should handle array with two zeros", () => {
		const result = threeSum([0, 0, 1, -1]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle larger array", () => {
		const result = threeSum([-4, -2, -1, -1, 0, 1, 2, 2, 3]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array with widely spaced numbers", () => {
		const result = threeSum([-100, -50, 0, 50, 100]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array where no triplet sums to zero", () => {
		expect(threeSum([1, 2, 3])).toEqual([]);
		expect(threeSum([1, 2])).toEqual([]);
		expect(threeSum([5, 10, 15, 20])).toEqual([]);
	});

	test("should handle array with one valid triplet and many invalid", () => {
		const result = threeSum([-5, -4, -3, -2, -1, 0, 1, 2, 3, 10, 20, 30]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array with symmetric values", () => {
		const result = threeSum([-3, -2, -1, 1, 2, 3]);
		expect(result.length).toBeGreaterThan(0);
		result.forEach((triplet) => {
			expect(triplet.reduce((a, b) => a + b, 0)).toBe(0);
		});
	});

	test("should handle array with all same positive numbers", () => {
		expect(threeSum([1, 1, 1, 1])).toEqual([]);
	});

	test("should handle array with all same negative numbers", () => {
		expect(threeSum([-1, -1, -1, -1])).toEqual([]);
	});
});
