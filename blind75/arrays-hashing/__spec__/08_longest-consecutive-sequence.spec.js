import longestConsecutive from "../08_longest-consecutive-sequence.js";

describe("Longest Consecutive Sequence", () => {
	// Basic Example Tests
	test("Example 1: nums = [100,4,200,1,3,2]", () => {
		const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
		expect(result).toBe(4);
	});

	test("Example 2: nums = [0,3,7,2,5,8,4,6,0,1]", () => {
		const result = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
		expect(result).toBe(9);
	});

	test("Example 3: nums = []", () => {
		const result = longestConsecutive([]);
		expect(result).toBe(0);
	});

	test("Example 4: nums = [1]", () => {
		const result = longestConsecutive([1]);
		expect(result).toBe(1);
	});

	// Edge Cases
	test("should handle array with one element", () => {
		const result = longestConsecutive([42]);
		expect(result).toBe(1);
	});

	test("should handle array with two consecutive elements", () => {
		const result = longestConsecutive([1, 2]);
		expect(result).toBe(2);
	});

	test("should handle array with two non-consecutive elements", () => {
		const result = longestConsecutive([1, 10]);
		expect(result).toBe(1);
	});

	// Negative Numbers
	test("should handle negative numbers", () => {
		const result = longestConsecutive([-1, -2, -3, 0, 1]);
		expect(result).toBe(5);
	});

	test("should handle all negative numbers", () => {
		const result = longestConsecutive([-5, -4, -3, -2, -1]);
		expect(result).toBe(5);
	});

	test("should handle mix of negative and positive", () => {
		const result = longestConsecutive([-2, -1, 0, 1, 2]);
		expect(result).toBe(5);
	});

	// Duplicate Elements - should be ignored in consecutive sequence
	test("should ignore duplicate elements", () => {
		const result = longestConsecutive([1, 1, 2, 2, 3, 3]);
		expect(result).toBe(3);
	});

	test("should handle all duplicate elements", () => {
		const result = longestConsecutive([5, 5, 5, 5]);
		expect(result).toBe(1);
	});

	// Single Long Sequence
	test("should find single long consecutive sequence", () => {
		const result = longestConsecutive([1, 2, 3, 4, 5]);
		expect(result).toBe(5);
	});

	test("should find longer consecutive sequence", () => {
		const result = longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(result).toBe(10);
	});

	// Multiple Sequences
	test("should handle multiple separate sequences", () => {
		const result = longestConsecutive([1, 2, 3, 10, 11, 12]);
		expect(result).toBe(3);
	});

	test("should return longest among multiple sequences", () => {
		const result = longestConsecutive([1, 2, 3, 10, 11, 12, 13]);
		expect(result).toBe(4);
	});

	// Scattered Numbers
	test("should handle scattered numbers", () => {
		const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
		expect(result).toBe(4);
	});

	test("should handle widely scattered numbers", () => {
		const result = longestConsecutive([1000, 2000, 3000, 1, 2, 3]);
		expect(result).toBe(3);
	});

	// Large Numbers
	test("should handle large positive numbers", () => {
		const result = longestConsecutive([1000000000, 1000000001, 1000000002]);
		expect(result).toBe(3);
	});

	test("should handle large negative numbers", () => {
		const result = longestConsecutive([-1000000000, -999999999, -999999998]);
		expect(result).toBe(3);
	});

	// Gap in Sequence
	test("should handle gaps in sequence", () => {
		const result = longestConsecutive([1, 2, 4, 5, 6]);
		expect(result).toBe(3);
	});

	test("should handle single number in sequence", () => {
		const result = longestConsecutive([1, 10, 100, 1000]);
		expect(result).toBe(1);
	});

	// Consecutive Starting from Zero
	test("should handle sequence starting from zero", () => {
		const result = longestConsecutive([0, 1, 2, 3]);
		expect(result).toBe(4);
	});

	test("should handle sequence including negative and zero", () => {
		const result = longestConsecutive([-3, -2, -1, 0]);
		expect(result).toBe(4);
	});

	// Reversed Order
	test("should work with elements in reversed order", () => {
		const result = longestConsecutive([5, 4, 3, 2, 1]);
		expect(result).toBe(5);
	});

	// Mixed Order
	test("should work with elements in random order", () => {
		const result = longestConsecutive([3, 1, 5, 2, 4]);
		expect(result).toBe(5);
	});

	// Single Element at Boundaries
	test("should handle minimum constraint value", () => {
		const result = longestConsecutive([-1000000000]);
		expect(result).toBe(1);
	});

	test("should handle maximum constraint value", () => {
		const result = longestConsecutive([1000000000]);
		expect(result).toBe(1);
	});

	// Large Array Test
	test("should handle large array efficiently", () => {
		const nums = Array.from({ length: 10000 }, (_, i) => i + 1);
		const result = longestConsecutive(nums);
		expect(result).toBe(10000);
	});

	// Multiple Small Sequences
	test("should find longest among many small sequences", () => {
		const result = longestConsecutive([1, 2, 10, 11, 20, 21, 22, 30]);
		expect(result).toBe(3);
	});

	// All Same Numbers (Edge Case) - duplicates should count as single element
	test("should handle all same numbers as single element", () => {
		const result = longestConsecutive([7, 7, 7, 7, 7]);
		expect(result).toBe(1);
	});

	// Sequence with Maximum Range
	test("should handle near-maximum range", () => {
		const result = longestConsecutive([2147483646, 2147483647, -2147483648]);
		expect(result).toBe(2);
	});

	// Unsorted Array
	test("should work with completely unsorted array", () => {
		const result = longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
		expect(result).toBe(7);
	});
});
