import eslintImport from "eslint-plugin-import";
import typescriptEslintParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.Config} */
export default {
  ...eslintImport.flatConfigs.typescript,

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    parser: typescriptEslintParser,
    parserOptions: { projectService: true }
  },

  plugins: { import: eslintImport },

  rules: {
    ...eslintImport.configs.recommended.rules,
    ...eslintImport.configs.typescript.rules
  }
};
