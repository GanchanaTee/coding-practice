export default {
	// Test environment
	testEnvironment: "node",

	// Test files pattern - looks for .spec.js files in __spec__ folders
	testMatch: ["**/__spec__/**/*.spec.js"],

	// Transform files using babel-jest
	transform: {
		"^.+\\.js$": "babel-jest",
	},

	// Module file extensions for importing
	moduleFileExtensions: ["js", "json"],

	// Collect coverage from all solution files
	collectCoverageFrom: [
		"exercises/**/solution.js",
		"!node_modules/**",
		"!**/__spec__/**",
	],

	// Coverage directory
	coverageDirectory: "coverage",

	// Coverage reporters
	coverageReporters: ["text", "lcov", "html"],

	// Verbose output
	verbose: true,

	// Module name mapper for imports (if needed in the future)
	moduleNameMapper: {
		// Add aliases here if needed, e.g.:
		// '^@/(.*)$': '<rootDir>/src/$1',
	},

	// Setup files (if needed)
	// setupFilesAfterEnv: ['./jest.setup.js'],
};
