module.exports = {
  plugins: [
    "@typescript-eslint",
    "jest-dom",
    "react",
    "react-hooks",
    "testing-library",
  ],
  parser: "@typescript-eslint/parser", // For use with typescript
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:testing-library/recommended",
    // Add other extends before this line
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/prettier",
    "prettier/react",
  ],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
