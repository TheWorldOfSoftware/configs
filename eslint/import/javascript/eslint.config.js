import eslintImport from "eslint-plugin-import";

export default {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType:"module",
  },

  plugins: {
    import: eslintImport
  },

  settings: {
    "import/extensions": [".js", ".cjs", ".mjs"],
    "import/parsers": {
      espree: [".js", ".cjs", "mjs"]
    },
    "import/resolver": {
      node: true
    }
  },

  rules: {
    ...eslintImport.configs.recommended.rules,

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
    "import/no-internal-modules": ["error", { allow: ["**/util/**/*"] }],
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            from: "src/*",
            message: "Do not access application files from logic!",
            target: "src/*/**/*"
          },
          {
            from: "src/routes/**/*",
            message: "Do not access routes from feature functionality!",
            target: "src/features/**/*"
          },
          {
            from: "src/!(lib)/**/*",
            message: "Lib files cannot access application logic!",
            target: "src/lib/**/*"
          },
          {
            from: [
              "src/features/**/*",
              "src/repositories/**/*",
              "src/routes/**/*"
            ],
            message: "Do not access logic from a data model!",
            target: "src/models/**/*"
          },
          {
            from: ["src/features/**/*", "src/routes/**/*"],
            message: "Do not access logic from a repository!",
            target: "src/repositories/**/*"
          },
          {
            from: "src/repositories/**/*",
            message: "Do not access repositories directly!",
            target: "src/routes/**/*"
          },
          {
            except: ["src/models/**/*", "src/types/**/*"],
            from: "src/**/*",
            message: "Do not access logic from type definitions!",
            target: "src/types/**/*"
          }
        ]
      }
    ],
    "import/no-self-import": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error"
  }
}

