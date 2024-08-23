import eslintImport from "eslint-plugin-import";

export default {
  ...eslintImport.configs.typescript,

  languageOptions: {
    ecmaVersion: "latest",
    sourceType:"module",
  },

  plugins: {
    import: eslintImport
  },

  rules: {
    ...eslintImport.configs.recommended.rules,
    ...eslintImport.configs.typescript.rules
  }
}
