/*
import solve from "../[problem-name].js";

describe("[Problem Name]", () => {
	// Basic Example Test
	test("Example 1: [brief description of what's being tested]", () => {
		const result = solve([input]);
		expect(result).toBe([expected]);
	});

	// Additional Examples
	test("Example 2: [brief description]", () => {
		const result = solve([input]);
		expect(result).toBe([expected]);
	});

	test("Example 3: [brief description]", () => {
		const result = solve([input]);
		expect(result).toBe([expected]);
	});

	// Edge Cases
	test("should handle [edge case scenario]", () => {
		const result = solve([edge case input]);
		expect(result).toBe([expected]);
	});

	test("should handle [another edge case]", () => {
		const result = solve([edge case input]);
		expect(result).toBe([expected]);
	});

	// Boundary Cases
	test("should handle minimum input", () => {
		const result = solve([minimum input]);
		expect(result).toBe([expected]);
	});

	test("should handle maximum input", () => {
		const result = solve([maximum input]);
		expect(result).toBe([expected]);
	});

	// Special Cases
	test("should handle [special condition]", () => {
		const result = solve([input with special condition]);
		expect(result).toBe([expected]);
	});

	// Additional Test Cases
	test("should handle [specific scenario]", () => {
		const result = solve([input]);
		expect(result).toBe([expected]);
	});

	test("should work with [different data type or structure]", () => {
		const result = solve([input]);
		expect(result).toBe([expected]);
	});
});

/*
 * TESTING TEMPLATES
 * =================
 *
 * For different types of problems, use these assertion patterns:
 *
 * 1. Single value comparisons:
 *    expect(result).toBe(expected);
 *
 * 2. Array comparisons:
 *    expect(result).toEqual(expectedArray);
 *    expect(result.length).toBe(expectedLength);
 *
 * 3. Unordered array results (order doesn't matter):
 *    expect(result.sort()).toEqual(expected.sort());
 *    expect(new Set(result)).toEqual(new Set(expected));
 *
 * 4. Object comparisons:
 *    expect(result).toEqual(expectedObject);
 *
 * 5. Number comparisons with tolerance:
 *    expect(result).toBeCloseTo(expected, precision);
 *
 * 6. Boolean checks:
 *    expect(result).toBe(true);
 *    expect(result).toBeFalsy();
 *
 * 7. Checking for thrown errors:
 *    expect(() => solve(input)).toThrow(ErrorType);
 *
 * 8. Array/object contains:
 *    expect(result).toContain(value);
 *    expect(result).toHaveProperty('key');
 *
 * CUSTOM TEST NAMES
 * =================
 *
 * Make test names descriptive:
 * - "should handle empty array"
 * - "should return 0 for negative input"
 * - "should find solution in O(n) time"
 * - "should throw error for invalid input"
 *
 * RUNNING TESTS
 * =============
 *
 * Run specific test file:
 *   npm test -- [category]/__spec__/[problem-name].spec.js
 *
 * Run all tests:
 *   npm test
 *
 * Run tests in watch mode:
 *   npm run test:watch
 *
 * Run tests with coverage:
 *   npm run test:coverage
 */
