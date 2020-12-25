module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    // Using this the css modules are not rendered to snapshots
    "\\.(sc|sa|le|c)ss$": "<rootDir>/src/__mocks__/style.mock.js"
  },
  "globals": {
    "ts-jest": {
      // So the ts-jest can render the JSX
      "tsconfig": "tsconfig.jest.json"
    }
  }
};