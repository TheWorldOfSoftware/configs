import typescriptEslint from "typescript-eslint";

const reducedConfigs = typescriptEslint.configs.strictTypeChecked.reduce(
  /**
   * @param {readonly import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} flattenedConfig
   * @param {readonly import("@typescript-eslint/utils").TSESLint.FlatConfig.Config} config
   */
  (flattenedConfig, config) => ({
    ...flattenedConfig,
    ...config,
    rules: { ...flattenedConfig.rules, ...config.rules }
  }),
  {}
);

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.Config}*/
export default {
  ...reducedConfigs,

  ignores: ["**/*.d.ts"],

  languageOptions: {
    ...reducedConfigs.languageOptions,
    parserOptions: { projectService: true }
  },

  rules: {
    ...reducedConfigs.rules,

    // Disable ESLint JavaScript rules
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "default-param-last": "off",
    "init-declarations": "off",
    "no-invalid-this": "off",
    "no-loop-func": "off",
    "no-magic-numbers": "off",
    "no-restricted-imports": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "prefer-destructuring": "off",

    // TypeScript Rules
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
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

    // ESLint Extension Rules
    "@typescript-eslint/class-methods-use-this": "warn",
    "@typescript-eslint/consistent-return": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/init-declarations": "warn",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-magic-numbers": "error",
    "@typescript-eslint/no-restricted-imports": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/prefer-destructuring": "warn"
  }
};
