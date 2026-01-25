import maxProfit from "../01_best-time-to-buy-and-sell-stock";

describe("Best Time to Buy and Sell Stock", () => {
	test("Example 1: [7,1,5,3,6,4] -> 5", () => {
		expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
	});

	test("Example 2: [7,6,4,3,1] -> 0", () => {
		expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
	});

	test("should handle single element", () => {
		expect(maxProfit([5])).toBe(0);
	});

	test("should handle two elements - profit possible", () => {
		expect(maxProfit([1, 5])).toBe(4);
	});

	test("should handle two elements - no profit", () => {
		expect(maxProfit([5, 1])).toBe(0);
	});

	test("should handle two elements - equal prices", () => {
		expect(maxProfit([5, 5])).toBe(0);
	});

	test("should handle all increasing prices", () => {
		expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
	});

	test("should handle all decreasing prices", () => {
		expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
	});

	test("should handle all equal prices", () => {
		expect(maxProfit([3, 3, 3, 3, 3])).toBe(0);
	});

	test("should handle best buy at start", () => {
		expect(maxProfit([1, 5, 3, 2, 4])).toBe(4);
	});

	test("should handle best buy in middle", () => {
		expect(maxProfit([5, 1, 3, 4, 2])).toBe(3);
	});

	test("should handle best buy at end (no profit)", () => {
		expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
	});

	test("should handle prices with zeros", () => {
		expect(maxProfit([0, 5, 0, 5, 0])).toBe(5);
	});

	test("should handle single zero", () => {
		expect(maxProfit([5, 0, 10])).toBe(10);
	});

	test("should handle large profit in middle", () => {
		expect(maxProfit([2, 4, 1, 5, 3, 7])).toBe(6);
	});

	test("should handle fluctuating prices", () => {
		expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
	});

	test("should handle alternating high and low", () => {
		expect(maxProfit([10, 1, 10, 1, 10])).toBe(9);
	});

	test("should handle price that keeps going up then down", () => {
		expect(maxProfit([1, 2, 3, 4, 3, 2, 1])).toBe(3);
	});

	test("should handle price that keeps going down then up", () => {
		expect(maxProfit([5, 4, 3, 2, 1, 2, 3, 4])).toBe(3);
	});

	test("should handle peak in middle", () => {
		expect(maxProfit([1, 2, 10, 2, 1])).toBe(9);
	});

	test("should handle valley in middle", () => {
		expect(maxProfit([5, 4, 1, 4, 5])).toBe(4);
	});

	test("should handle minimum at beginning with maximum at end", () => {
		expect(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(8);
	});

	test("should handle minimum at beginning with maximum in middle", () => {
		expect(maxProfit([1, 9, 2, 3, 4, 5])).toBe(8);
	});

	test("should handle minimum in middle with maximum at end", () => {
		expect(maxProfit([5, 4, 3, 2, 1, 9])).toBe(8);
	});

	test("should handle very large prices", () => {
		expect(maxProfit([10000, 1, 10000])).toBe(9999);
	});

	test("should handle small positive prices", () => {
		expect(maxProfit([1, 2, 3, 4])).toBe(3);
	});

	test("should handle single large price difference", () => {
		expect(maxProfit([100, 1])).toBe(0);
	});

	test("should handle prices that stay same then increase", () => {
		expect(maxProfit([3, 3, 3, 5, 6])).toBe(3);
	});

	test("should handle prices that increase then stay same", () => {
		expect(maxProfit([1, 2, 3, 3, 3])).toBe(2);
	});

	test("should handle long increasing sequence", () => {
		const prices = Array.from({ length: 100 }, (_, i) => i + 1);
		expect(maxProfit(prices)).toBe(99);
	});

	test("should handle long decreasing sequence", () => {
		const prices = Array.from({ length: 100 }, (_, i) => 100 - i);
		expect(maxProfit(prices)).toBe(0);
	});

	test("should handle profit of 1", () => {
		expect(maxProfit([5, 6])).toBe(1);
	});

	test("should handle buy before multiple higher prices", () => {
		expect(maxProfit([1, 5, 6, 4, 7])).toBe(6);
	});

	test("should handle multiple buying opportunities but only one transaction", () => {
		expect(maxProfit([1, 10, 1, 10, 1, 10])).toBe(9);
	});

	test("should handle prices with local maxima and minima", () => {
		expect(maxProfit([3, 8, 2, 9, 1, 10])).toBe(9);
	});

	test("should handle three element array with profit", () => {
		expect(maxProfit([2, 1, 5])).toBe(4);
	});

	test("should handle three element array with no profit", () => {
		expect(maxProfit([5, 4, 3])).toBe(0);
	});

	test("should handle prices going up and down repeatedly", () => {
		expect(maxProfit([1, 5, 3, 8, 2, 9])).toBe(8);
	});

	test("should handle large array with single profit", () => {
		const prices = [100, ...Array(98).fill(1), 50];
		expect(maxProfit(prices)).toBe(49);
	});

	test("should handle edge case with consecutive days", () => {
		expect(maxProfit([1, 2])).toBe(1);
		expect(maxProfit([2, 1])).toBe(0);
	});
});
