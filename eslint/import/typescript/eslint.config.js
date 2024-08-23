import eslintImport from "eslint-plugin-import";
import typescriptEslintParser from "@typescript-eslint/parser";

export default {
  ...eslintImport.configs.typescript,

  languageOptions: {
    ecmaVersion: "latest",
    sourceType:"module",
    parser: typescriptEslintParser,
    parserOptions: {
      projectService: true,
      defaultProject: import.meta.dirname
    }
  },

  plugins: {
    import: eslintImport
  },

  rules: {
    ...eslintImport.configs.recommended.rules,
    ...eslintImport.configs.typescript.rules
  }
}
