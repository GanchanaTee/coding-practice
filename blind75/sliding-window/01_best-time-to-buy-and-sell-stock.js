/*
 * Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * LeetCode #: 121
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any
 * profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 */

/**
 * Approach: Sliding Window / Single Pass
 *
 * Algorithm:
 * 1. Initialize minPrice to track the minimum price seen so far (start with prices[0])
 * 2. Initialize maxProfit to track the maximum profit achievable (start with 0)
 * 3. Iterate through the array from index 1 to end:
 *    - Calculate potential profit: prices[i] - minPrice
 *    - Update maxProfit if current profit is greater
 *    - Update minPrice if current price is lower
 * 4. Return maxProfit
 *
 * Why this works:
 * - For each day, we want to know the minimum price seen before it
 * - The maximum profit achievable on day i is prices[i] - minimum price before day i
 * - By tracking the minimum price as we go, we can calculate the best profit at each step
 * - The global maximum will be found during this single pass
 *
 * Time Complexity: O(n) - we traverse the array once
 * Space Complexity: O(1) - only using constant extra space for variables
 */
function maxProfit(prices) {
	// Your solution code here

	let maxPreviousProfit = 0;
	let buy = prices[0];
	let sell = 0;

	for (const price of prices) {
		if (price < buy) {
			const currentProfit = buy < sell ? sell - buy : 0;

			if (currentProfit > maxPreviousProfit) {
				maxPreviousProfit = currentProfit;
			}

			buy = price;
			sell = 0;
		}

		if (price > sell) {
			sell = price;
		}
	}

	return Math.max(maxPreviousProfit, buy < sell ? sell - buy : 0);
}

// Export for testing
export default maxProfit;

/*
 * TESTING INSTRUCTIONS
 * ===================
 *
 * To test this solution:
 *
 * 1. Create a spec file in the __spec__ folder:
 *    sliding-window/__spec__/01_best-time-to-buy-and-sell-stock.spec.js
 *
 * 2. Add your test cases using Jest:
 *
 *    import maxProfit from "../01_best-time-to-buy-and-sell-stock.js";
 *
 *    describe("Best Time to Buy and Sell Stock", () => {
 *      test("Example 1", () => {
 *        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
 *      });
 *
 *      test("Example 2", () => {
 *        expect(maxProfit([7,6,4,3,1])).toBe(0);
 *      });
 *    });
 *
 * 3. Run the tests:
 *    npm test -- sliding-window/__spec__/01_best-time-to-buy-and-sell-stock.spec.js
 *
 * OR run tests in watch mode:
 *    npm run test:watch
 *
 * Good luck! 🚀
 */
