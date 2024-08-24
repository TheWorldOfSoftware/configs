import eslint from "@eslint/js";
import globals from "globals";

const commonBannedGlobals = [];
const commonBannedImportPatterns = [];
const commonBannedImports = [];
const commonBannedKeywords = [
  "object",
  "array",
  "null",
  "string",
  "number",
  "bool",
  "boolean",
  "bigint",
  "bigInt",
  "callback",
  "callBack",
  "data",
  "event"
];
const commonBannedProperties = [];
const commonBannedSyntax = [
  {
    selector: "DebuggerStatement",
    message: "Please use your IDE's built-in debugger instead."
  },
  {
    selector: "ClassExpression",
    message: "Class expressions are not allowed. Please use a named class instead."
  }
];
const commonShortKeywords = [];

export default {
  files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  ignores: ["**/dist/**"],

  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",

    globals: globals.nodeBuiltin,
  },
  linterOptions: {
    noInlineConfig: true,
    reportUnusedDisableDirectives: true
  },
  rules: {
    ...eslint.configs.recommended.rules,

    // Possible Problems
    "array-callback-return": "error",
    "default-param-last": "error",
    "no-await-in-loop": "error",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-new-native-nonconstructor": "error",
    // Disabled in favour of "no-new-native-nonconstructor"
    "no-new-symbol": "off",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-private-class-members": "error",
    "no-use-before-define": "error",
    "require-atomic-updates": "error",

    // Suggestions
    "accessor-pairs": "warn",
    "arrow-body-style": "warn",
    "block-scoped-var": "warn",
    camelcase: "warn",
    "capitalized-comments": "warn",
    "class-methods-use-this": "warn",
    complexity: "warn",
    "consistent-return": "warn",
    "consistent-this": "warn",
    curly: "warn",
    "default-case": "warn",
    "default-case-last": "warn",
    "dot-notation": "warn",
    eqeqeq: "warn",
    "func-name-matching": "warn",
    "func-style": "warn",
    "grouped-accessor-pairs": "warn",
    "guard-for-in": "warn",
    "id-denylist": ["warn", ...commonBannedKeywords],
    "id-length": ["warn", { exceptions: commonShortKeywords }],
    "init-declarations": "warn",
    "logical-assignment-operators": "warn",
    "max-classes-per-file": "warn",
    "max-depth": "warn",
    "max-lines": "warn",
    "max-lines-per-function": "warn",
    "max-nested-callbacks": "warn",
    "max-params": "warn",
    "max-statements": "warn",
    "multiline-comment-style": "warn",
    "new-cap": "warn",
    "no-alert": "warn",
    "no-array-constructor": "warn",
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-confusing-arrow": "warn",
    "no-console": "warn",
    "no-continue": "warn",
    "no-div-regex": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-empty-static-block": "warn",
    // Disabled in favour of rule "eqeqeq"
    "no-eq-null": "off",
    "no-eval": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",
    "no-inline-comments": "warn",
    "no-invalid-this": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-lonely-if": "warn",
    "no-loop-func": "warn",
    "no-magic-numbers": "warn",
    "no-mixed-operators": "warn",
    "no-multi-assign": "warn",
    "no-multi-str": "warn",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-wrappers": "warn",
    "no-object-constructor": "warn",
    "no-octal-escape": "warn",
    "no-param-reassign": "warn",
    "no-plusplus": "warn",
    "no-proto": "warn",
    "no-restricted-exports": [
      "warn",
      { restrictedNamedExports: commonBannedKeywords }
    ],
    "no-restricted-globals": ["warn", ...commonBannedGlobals],
    "no-restricted-imports": [
      "warn",
      { paths: commonBannedImports, patterns: commonBannedImportPatterns }
    ],
    "no-restricted-properties": ["warn", ...commonBannedProperties],
    "no-restricted-syntax": ["warn", ...commonBannedSyntax],
    "no-script-url": "warn",
    "no-sequences": "warn",
    "no-shadow": "warn",
    "no-throw-literal": "warn",
    "no-undef-init": "warn",
    "no-undefined": "warn",
    "no-underscore-dangle": "warn",
    "no-unneeded-ternary": "warn",
    "no-unused-expressions": "warn",
    "no-useless-call": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "no-void": ["warn", { allowAsStatement: true }],
    "no-warning-comments": "warn",
    "object-shorthand": "warn",
    "one-var": ["warn", { initialized: "never", uninitialized: "always" }],
    "one-var-declaration-per-line": "warn",
    "operator-assignment": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-object-has-own": "warn",
    "prefer-object-spread": "warn",
    "prefer-promise-reject-errors": "warn",
    "prefer-regex-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": ["warn", "as-needed"],
    radix: ["warn", "as-needed"],
    "require-await": "warn",
    "require-unicode-regexp": "warn",
    "sort-imports": "warn",
    "sort-keys": [
      "warn",
      "asc",
      { allowLineSeparatedGroups: true, minKeys: 3 }
    ],
    "sort-vars": "warn",
    "spaced-comment": "warn",
    strict: "warn",
    "symbol-description": "warn",
    "vars-on-top": "warn",
    yoda: ["warn", "never", { exceptRange: true }]
  }
}
