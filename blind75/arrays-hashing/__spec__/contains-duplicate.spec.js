import containsDuplicate from "../contains-duplicate.js";

describe("Contains Duplicate", () => {
	// Basic Example Tests
	test("Example 1: nums = [1,2,3,1]", () => {
		const result = containsDuplicate([1, 2, 3, 1]);
		expect(result).toBe(true);
	});

	test("Example 2: nums = [1,2,3,4]", () => {
		const result = containsDuplicate([1, 2, 3, 4]);
		expect(result).toBe(false);
	});

	test("Example 3: nums = [1,1,1,3,3,4,3,2,4,2]", () => {
		const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
		expect(result).toBe(true);
	});

	// Edge Cases
	test("should handle single element array", () => {
		const result = containsDuplicate([1]);
		expect(result).toBe(false);
	});

	test("should handle two identical elements", () => {
		const result = containsDuplicate([5, 5]);
		expect(result).toBe(true);
	});

	test("should handle two different elements", () => {
		const result = containsDuplicate([5, 10]);
		expect(result).toBe(false);
	});

	// Special Cases
	test("should handle negative numbers", () => {
		const result = containsDuplicate([-1, -2, -3, -1]);
		expect(result).toBe(true);
	});

	test("should handle mix of positive and negative", () => {
		const result = containsDuplicate([-5, 5, -5, 10]);
		expect(result).toBe(true);
	});

	test("should handle zeros", () => {
		const result = containsDuplicate([0, 1, 2, 0]);
		expect(result).toBe(true);
	});

	test("should handle array with all zeros", () => {
		const result = containsDuplicate([0, 0, 0, 0]);
		expect(result).toBe(true);
	});

	// Large Array Tests
	test("should handle large array with no duplicates", () => {
		const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
		const result = containsDuplicate(arr);
		expect(result).toBe(false);
	});

	test("should handle large array with one duplicate", () => {
		const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
		arr[999] = 1;
		const result = containsDuplicate(arr);
		expect(result).toBe(true);
	});

	// Boundary Cases
	test("should handle minimum value", () => {
		const result = containsDuplicate([-1000000000, 1, -1000000000]);
		expect(result).toBe(true);
	});

	test("should handle maximum value", () => {
		const result = containsDuplicate([1000000000, 1, 1000000000]);
		expect(result).toBe(true);
	});

	// Multiple Duplicates
	test("should detect multiple different duplicates", () => {
		const result = containsDuplicate([1, 2, 1, 3, 2, 4]);
		expect(result).toBe(true);
	});

	test("should return false for array where duplicates are at ends", () => {
		const result = containsDuplicate([5, 1, 2, 3, 4, 5]);
		expect(result).toBe(true);
	});

	// Consecutive Elements
	test("should handle consecutive duplicates", () => {
		const result = containsDuplicate([1, 2, 2, 3]);
		expect(result).toBe(true);
	});

	test("should handle non-consecutive duplicates", () => {
		const result = containsDuplicate([1, 2, 3, 1]);
		expect(result).toBe(true);
	});
});
