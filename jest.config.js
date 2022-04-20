module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/testsSetup/setupTest.js"],
  testEnvironment: "jsdom",
};
