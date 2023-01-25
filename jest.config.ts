/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest/presets/js-with-ts",
  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ["dotenv/config"],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.mjs$": "ts-jest",
  },
};
