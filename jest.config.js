module.exports = {
  "preset": "ts-jest/presets/js-with-ts",
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "\\.(sc|sa|le|c)ss$": "<rootDir>/src/__mocks__/style.mock.js"
  },
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.jest.json"
    }
  }
}