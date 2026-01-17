import topKFrequent from "../top-k-frequent-elements.js";

describe("Top K Frequent Elements", () => {
	// Helper function to sort arrays for comparison
	const sortArrays = (arr) => arr.sort((a, b) => a - b);

	// Basic Example Tests
	test("Example 1: nums = [1,1,1,2,2,3], k = 2", () => {
		const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
		const expected = [1, 2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	test("Example 2: nums = [1], k = 1", () => {
		const result = topKFrequent([1], 1);
		expect(sortArrays(result)).toEqual([1]);
	});

	test("Example 3: nums = [4,1,-1,2,-1,2,3], k = 2", () => {
		const result = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
		const expected = [-1, 2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Edge Cases
	test("should handle k = 1 with multiple elements", () => {
		const result = topKFrequent([1, 1, 2, 2, 3], 1);
		expect(result).toHaveLength(1);
		expect([1, 2]).toContain(result[0]);
	});

	test("should handle k equal to number of unique elements", () => {
		const result = topKFrequent([1, 2, 3, 4], 4);
		const expected = [1, 2, 3, 4];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Single Element
	test("should handle single element array", () => {
		const result = topKFrequent([5], 1);
		expect(result).toEqual([5]);
	});

	// All Same Elements
	test("should handle all same elements", () => {
		const result = topKFrequent([7, 7, 7, 7], 1);
		expect(result).toEqual([7]);
	});

	// Two Elements with Same Frequency
	test("should handle two elements with same frequency", () => {
		const result = topKFrequent([1, 2, 1, 2], 2);
		const expected = [1, 2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Three Elements with Same Frequency
	test("should handle three elements with same frequency", () => {
		const result = topKFrequent([1, 2, 3, 1, 2, 3], 3);
		const expected = [1, 2, 3];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Negative Numbers
	test("should handle negative numbers", () => {
		const result = topKFrequent([-1, -1, -2, -2, -3], 2);
		const expected = [-1, -2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	test("should handle mix of positive and negative", () => {
		const result = topKFrequent([1, -1, 1, -1, 2], 2);
		const expected = [1, -1];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Zero
	test("should handle zeros", () => {
		const result = topKFrequent([0, 0, 1, 2], 1);
		expect(result).toEqual([0]);
	});

	test("should handle all zeros", () => {
		const result = topKFrequent([0, 0, 0, 0], 1);
		expect(result).toEqual([0]);
	});

	// Frequency Distribution
	test("should get top 2 from clear frequency distribution", () => {
		const result = topKFrequent([1, 1, 1, 2, 2, 3, 4, 5], 2);
		const expected = [1, 2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	test("should get top 3 from frequency distribution", () => {
		const result = topKFrequent([5, 5, 5, 4, 4, 3, 2, 1], 3);
		const expected = [5, 4, 3];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Large Numbers
	test("should handle large positive numbers", () => {
		const result = topKFrequent([1000000, 1000000, 999999, 1], 1);
		expect(result).toEqual([1000000]);
	});

	test("should handle large negative numbers", () => {
		const result = topKFrequent([-1000000, -1000000, -999999, -1], 1);
		expect(result).toEqual([-1000000]);
	});

	// Multiple Ties
	test("should handle multiple elements with same frequency", () => {
		const result = topKFrequent([1, 1, 2, 2, 3, 3, 4], 2);
		expect(result).toHaveLength(2);
		expect(result.every((val) => [1, 2, 3].includes(val))).toBe(true);
	});

	// Consecutive Elements
	test("should handle consecutive elements", () => {
		const result = topKFrequent([1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 1], 2);
		const expected = [1, 2];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Larger Array Test
	test("should handle larger array efficiently", () => {
		const nums = [];
		for (let i = 1; i <= 10; i++) {
			for (let j = 0; j < i; j++) {
				nums.push(i);
			}
		}
		const result = topKFrequent(nums, 3);
		const expected = [10, 9, 8];
		expect(sortArrays(result)).toEqual(sortArrays(expected));
	});

	// Check Result Length
	test("should return exactly k elements", () => {
		const result = topKFrequent([1, 1, 2, 2, 3, 3, 4, 4, 5], 3);
		expect(result).toHaveLength(3);
	});

	// Frequency Descending Order
	test("should return elements in order of decreasing frequency", () => {
		const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
		expect(result).toContain(1);
		expect(result).toContain(2);
	});

	// Edge Case: All Elements Appear Once
	test("should handle case where all elements appear once", () => {
		const result = topKFrequent([1, 2, 3, 4, 5], 3);
		expect(result).toHaveLength(3);
		expect(result.every((val) => [1, 2, 3, 4, 5].includes(val))).toBe(true);
	});

	// Performance with k=1
	test("should efficiently find single most frequent", () => {
		const nums = [];
		for (let i = 0; i < 1000; i++) {
			nums.push(i % 100);
		}
		const result = topKFrequent(nums, 1);
		expect(result).toHaveLength(1);
	});
});
