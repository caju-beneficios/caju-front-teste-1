module.exports = {
  ignorePatterns: [
    "**/.eslintrc.cjs",
    "cypress/**",
    "jest.config.ts",
    "cypress.config.ts",
    "jest-setup.ts",
    "vite.config.ts",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-named-as-default": 0,
    "import/no-unresolved": ["error", { ignore: ["^@/"] }],
    "react/display-name": "off",
    "@typescript-eslint/ban-types": "off",
    "import/named": "off",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  parserOptions: {
    tsconfigRootDir: "./",
    project: "./tsconfig.json",
  },
};
