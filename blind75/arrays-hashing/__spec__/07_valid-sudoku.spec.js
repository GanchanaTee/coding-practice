import isValidSudoku from "../07_valid-sudoku.js";

describe("Valid Sudoku", () => {
	// Basic Example Tests
	test("Example 1: Valid Sudoku board", () => {
		const board = [
			["5", "3", ".", ".", "7", ".", ".", ".", "."],
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(true);
	});

	test("Example 2: Invalid Sudoku board", () => {
		const board = [
			["8", "3", ".", ".", "7", ".", ".", ".", "."],
			["6", ".", ".", "1", "9", "5", ".", ".", "."],
			[".", "9", "8", ".", ".", ".", ".", "6", "."],
			["8", ".", ".", ".", "6", ".", ".", ".", "3"],
			["4", ".", ".", "8", ".", "3", ".", ".", "1"],
			["7", ".", ".", ".", "2", ".", ".", ".", "6"],
			[".", "6", ".", ".", ".", ".", "2", "8", "."],
			[".", ".", ".", "4", "1", "9", ".", ".", "5"],
			[".", ".", ".", ".", "8", ".", ".", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(false);
	});

	// Edge Cases
	test("should handle empty board", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		expect(isValidSudoku(board)).toBe(true);
	});

	test("should handle board with single digit", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "5";
		expect(isValidSudoku(board)).toBe(true);
	});

	// Row Violations
	test("should detect duplicate in row", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "5";
		board[0][5] = "5";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should detect multiple duplicates in row", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[3][1] = "9";
		board[3][4] = "9";
		board[3][8] = "9";
		expect(isValidSudoku(board)).toBe(false);
	});

	// Column Violations
	test("should detect duplicate in column", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][2] = "7";
		board[5][2] = "7";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should detect multiple duplicates in column", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "1";
		board[3][0] = "1";
		board[7][0] = "1";
		expect(isValidSudoku(board)).toBe(false);
	});

	// 3x3 Box Violations
	test("should detect duplicate in 3x3 box", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "3";
		board[1][2] = "3";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should detect duplicate in middle 3x3 box", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[4][4] = "5";
		board[5][3] = "5";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should detect duplicate in bottom-right 3x3 box", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[6][6] = "8";
		board[8][7] = "8";
		expect(isValidSudoku(board)).toBe(false);
	});

	// Valid Complete Board
	test("should accept fully filled valid board", () => {
		const board = [
			["5", "3", "4", "6", "7", "8", "9", "1", "2"],
			["6", "7", "2", "1", "9", "5", "3", "4", "8"],
			["1", "9", "8", "3", "4", "2", "5", "6", "7"],
			["8", "5", "9", "7", "6", "1", "4", "2", "3"],
			["4", "2", "6", "8", "5", "3", "7", "9", "1"],
			["7", "1", "3", "9", "2", "4", "8", "5", "6"],
			["9", "6", "1", "5", "3", "7", "2", "8", "4"],
			["2", "8", "7", "4", "1", "9", "6", "3", "5"],
			["3", "4", "5", "2", "8", "6", "1", "7", "9"],
		];
		expect(isValidSudoku(board)).toBe(true);
	});

	// Diagonal Testing
	test("should not care about diagonals", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "1";
		board[1][1] = "1";
		board[2][2] = "1";
		expect(isValidSudoku(board)).toBe(true);
	});

	// Mixed Digits
	test("should handle all digits 1-9 in a row", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		for (let i = 0; i < 9; i++) {
			board[0][i] = String(i + 1);
		}
		expect(isValidSudoku(board)).toBe(true);
	});

	test("should handle all digits 1-9 in a column", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		for (let i = 0; i < 9; i++) {
			board[i][0] = String(i + 1);
		}
		expect(isValidSudoku(board)).toBe(true);
	});

	test("should handle all digits 1-9 in a 3x3 box", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		let count = 1;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				board[i][j] = String(count++);
			}
		}
		expect(isValidSudoku(board)).toBe(true);
	});

	// Multiple Violations
	test("should detect multiple violations", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "5";
		board[0][1] = "5"; // row violation
		board[1][0] = "5"; // column violation
		board[1][1] = "5"; // box violation
		expect(isValidSudoku(board)).toBe(false);
	});

	// Board Boundaries
	test("should handle first row", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "1";
		board[0][8] = "1";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should handle last row", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[8][0] = "1";
		board[8][8] = "1";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should handle first column", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "2";
		board[8][0] = "2";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should handle last column", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][8] = "3";
		board[8][8] = "3";
		expect(isValidSudoku(board)).toBe(false);
	});

	// All Boxes Valid
	test("should validate all 3x3 boxes simultaneously", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		// Fill each box with different numbers
		for (let boxRow = 0; boxRow < 3; boxRow++) {
			for (let boxCol = 0; boxCol < 3; boxCol++) {
				let num = 1;
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						board[boxRow * 3 + i][boxCol * 3 + j] = String(num++);
					}
				}
			}
		}
		expect(isValidSudoku(board)).toBe(true);
	});

	// Sparse Board
	test("should validate sparse board correctly", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "1";
		board[2][2] = "2";
		board[4][4] = "3";
		board[6][6] = "4";
		board[8][8] = "5";
		expect(isValidSudoku(board)).toBe(true);
	});

	// Edge Cases with Digits
	test("should handle digit 1 at all corners", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[0][0] = "1";
		board[0][8] = "1";
		expect(isValidSudoku(board)).toBe(false);
	});

	test("should handle digit 9 at center", () => {
		const board = Array(9)
			.fill(null)
			.map(() => Array(9).fill("."));
		board[4][4] = "9";
		expect(isValidSudoku(board)).toBe(true);
	});
});
