import add from "../solution";

describe("Coding Playground - Example Function: add", () => {
	test("Example 1: 1 + 1 = 2", () => {
		expect(add(1, 1)).toBe(2);
	});

	test("Example 2: 5 + 3 = 8", () => {
		expect(add(5, 3)).toBe(8);
	});

	test("Example 3: 2.5 + 1.5 = 4", () => {
		expect(add(2.5, 1.5)).toBe(4);
	});

	test("should handle zero", () => {
		expect(add(0, 0)).toBe(0);
		expect(add(5, 0)).toBe(5);
		expect(add(0, 5)).toBe(5);
	});

	test("should handle negative numbers", () => {
		expect(add(-1, 1)).toBe(0);
		expect(add(-5, -3)).toBe(-8);
		expect(add(10, -3)).toBe(7);
	});

	test("should handle decimal numbers", () => {
		expect(add(0.1, 0.2)).toBeCloseTo(0.3);
		expect(add(1.5, 2.5)).toBe(4);
		expect(add(-1.5, 1.5)).toBe(0);
	});

	test("should handle large numbers", () => {
		expect(add(1000000, 1000000)).toBe(2000000);
		expect(add(999999, 1)).toBe(1000000);
	});
});

// ============================================
// TEST YOUR FUNCTIONS HERE
// ============================================
// Uncomment and modify these tests for your own functions:
/*
describe("Your Function Name", () => {
	test("should do something", () => {
		const result = yourFunction(input);
		expect(result).toBe(expected);
	});

	test("should handle edge cases", () => {
		// Test edge cases here
	});
});
*/
