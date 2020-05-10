module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".d.ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    jsx: true,
  },
  rules: {
    "prettier/prettier": [1, { trailingComma: "all", endOfLine: "auto" }],
    "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/interface-name-prefix": [1, "always"],
    "@typescript-eslint/explicit-function-return-type": [
      1,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "import/order": [
      1,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
  },
};
