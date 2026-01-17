import productExceptSelf from "../product-of-array-except-self.js";

describe("Product of Array Except Self", () => {
	// Basic Example Tests
	test("Example 1: nums = [1,2,3,4]", () => {
		const result = productExceptSelf([1, 2, 3, 4]);
		const expected = [24, 12, 8, 6];
		expect(result).toEqual(expected);
	});

	test("Example 2: nums = [-1,1,0,-3,3]", () => {
		const result = productExceptSelf([-1, 1, 0, -3, 3]);
		const expected = [0, 0, 9, 0, 0];
		expect(result).toEqual(expected);
	});

	test("Example 3: nums = [1,0]", () => {
		const result = productExceptSelf([1, 0]);
		const expected = [0, 1];
		expect(result).toEqual(expected);
	});

	// Edge Cases
	test("should handle two element array", () => {
		const result = productExceptSelf([2, 3]);
		const expected = [3, 2];
		expect(result).toEqual(expected);
	});

	test("should handle array with zeros", () => {
		const result = productExceptSelf([0, 1, 2, 3]);
		const expected = [6, 0, 0, 0];
		expect(result).toEqual(expected);
	});

	test("should handle array with multiple zeros", () => {
		const result = productExceptSelf([0, 0, 1, 2]);
		const expected = [0, 0, 0, 0];
		expect(result).toEqual(expected);
	});

	// All Positive Numbers
	test("should handle all positive numbers", () => {
		const result = productExceptSelf([1, 1, 1, 1]);
		const expected = [1, 1, 1, 1];
		expect(result).toEqual(expected);
	});

	test("should handle consecutive positive numbers", () => {
		const result = productExceptSelf([1, 2, 3, 4, 5]);
		const expected = [120, 60, 40, 30, 24];
		expect(result).toEqual(expected);
	});

	// All Negative Numbers
	test("should handle all negative numbers", () => {
		const result = productExceptSelf([-1, -1, -1, -1]);
		const expected = [1, 1, 1, 1];
		expect(result).toEqual(expected);
	});

	test("should handle consecutive negative numbers", () => {
		const result = productExceptSelf([-1, -2, -3, -4]);
		const expected = [24, 12, 8, 6];
		expect(result).toEqual(expected);
	});

	// Mixed Positive and Negative
	test("should handle mix of positive and negative", () => {
		const result = productExceptSelf([1, -1, 2, -2]);
		const expected = [4, -4, 2, -2];
		expect(result).toEqual(expected);
	});

	// Single Element with Neighbor
	test("should handle single negative with positive neighbors", () => {
		const result = productExceptSelf([1, -1, 1]);
		const expected = [-1, 1, -1];
		expect(result).toEqual(expected);
	});

	// Large Numbers
	test("should handle large numbers", () => {
		const result = productExceptSelf([10, 20, 30]);
		const expected = [600, 300, 200];
		expect(result).toEqual(expected);
	});

	test("should handle large negative numbers", () => {
		const result = productExceptSelf([-10, -20, -30]);
		const expected = [600, 300, 200];
		expect(result).toEqual(expected);
	});

	// Numbers at Boundaries
	test("should handle numbers at constraint boundaries", () => {
		const result = productExceptSelf([-30, -30, 30, 30]);
		const expected = [-27000, -27000, 27000, 27000];
		expect(result).toEqual(expected);
	});

	// Product Results
	test("should verify product is correct for each position", () => {
		const nums = [2, 3, 4];
		const result = productExceptSelf(nums);
		expect(result[0]).toBe(3 * 4);
		expect(result[1]).toBe(2 * 4);
		expect(result[2]).toBe(2 * 3);
	});

	// Array Length Tests
	test("should handle minimum length array (2)", () => {
		const result = productExceptSelf([1, 2]);
		const expected = [2, 1];
		expect(result).toEqual(expected);
	});

	test("should handle array of length 3", () => {
		const result = productExceptSelf([1, 2, 3]);
		const expected = [6, 3, 2];
		expect(result).toEqual(expected);
	});

	// Special Cases
	test("should handle array with one zero", () => {
		const result = productExceptSelf([1, 2, 3, 0]);
		const expected = [0, 0, 0, 6];
		expect(result).toEqual(expected);
	});

	test("should handle array with zero at start", () => {
		const result = productExceptSelf([0, 1, 2, 3]);
		const expected = [6, 0, 0, 0];
		expect(result).toEqual(expected);
	});

	test("should handle array with zero at end", () => {
		const result = productExceptSelf([1, 2, 3, 0]);
		const expected = [0, 0, 0, 6];
		expect(result).toEqual(expected);
	});

	// Duplicate Values
	test("should handle duplicate values", () => {
		const result = productExceptSelf([2, 2, 2, 2]);
		const expected = [8, 8, 8, 8];
		expect(result).toEqual(expected);
	});

	// Product of One
	test("should handle array with all ones", () => {
		const result = productExceptSelf([1, 1, 1, 1, 1]);
		const expected = [1, 1, 1, 1, 1];
		expect(result).toEqual(expected);
	});

	// Larger Array Test
	test("should handle larger array efficiently", () => {
		const nums = Array.from({ length: 100 }, (_, i) => i + 1);
		const result = productExceptSelf(nums);
		expect(result).toHaveLength(100);
	});

	// Negative Zero Test
	test("should handle negative zero correctly", () => {
		const result = productExceptSelf([-1, 0, 1]);
		const expected = [0, -1, 0];
		expect(result).toEqual(expected);
	});

	// Verify Output Length
	test("should return array of same length as input", () => {
		const nums = [1, 2, 3, 4, 5];
		const result = productExceptSelf(nums);
		expect(result).toHaveLength(nums.length);
	});

	// Edge: No Zeros
	test("should handle array with no zeros", () => {
		const result = productExceptSelf([2, 3, 5, 7]);
		const expected = [105, 70, 42, 30];
		expect(result).toEqual(expected);
	});
});
