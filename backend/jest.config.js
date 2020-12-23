module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ["src/**/*.ts"],
  // The directory where Jest should output its coverage files
  coverageDirectory: "__tests__/coverage",
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ["text", "lcov"],
  // An array of file extensions your modules use
  // moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  // The test environment that will be used for testing
  testEnvironment: "node",
  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.test.ts"],
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest",
};
