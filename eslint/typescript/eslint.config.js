import typescriptEslint from "typescript-eslint";

const commonBannedImports = [];
const commonBannedImportPatterns = [];

export default [
  ...typescriptEslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        projectService: true
      }
    },

    plugins: {
      "@typescript-eslint": typescriptEslint.plugin
    },
    rules: {
      // Supported Rules
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/method-signature-style": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-find": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "error",
      "@typescript-eslint/prefer-regexp-exec": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",

      // Disable ESLint JavaScript rules
      "class-methods-use-this": "off",
      "consistent-return": "off",
      "default-param-last": "off",
      "init-declarations": "off",
      "no-invalid-this": "off",
      "no-loop-func": "off",
      "no-magic-numbers": "off",
      "no-restricted-imports": "off",
      "no-return-await": "off",
      "no-shadow": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": "off",
      "prefer-destructuring": "off",

      // Extension Rules
      "@typescript-eslint/class-methods-use-this": "warn",
      "@typescript-eslint/consistent-return": "warn",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/init-declarations": "warn",
      "@typescript-eslint/no-loop-func": "warn",
      "@typescript-eslint/no-magic-numbers": "warn",
      "@typescript-eslint/no-restricted-imports": [
        "warn",
        { paths: commonBannedImports, patterns: commonBannedImportPatterns }
      ],
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/prefer-destructuring": "warn",
      "@typescript-eslint/return-await": "error",

      // Stylistic Rules
      "@typescript-eslint/no-empty-interface": [
        "error",
        { allowSingleExtends: true }
      ]
    }
  }
];
