import eslintImport from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config} */
export default {
  languageOptions: { ecmaVersion: "latest", sourceType: "module" },

  plugins: { import: eslintImport },

  rules: {
    ...eslintImport.flatConfigs.recommended.rules,

    // Helpful warnings
    "import/no-deprecated": "warn",
    "import/no-empty-named-blocks": "warn",
    "import/no-extraneous-dependencies": ["warn", { devDependencies: false }],
    "import/no-mutable-exports": "warn",
    "import/no-unused-modules": ["warn", { missingExports: true }],

    // Module systems
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-import-module-exports": "error",
    "import/no-nodejs-modules": "off",
    "import/unambiguous": "error",

    // Static analysis
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "error",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-restricted-paths": "error",
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error"
  }
};
