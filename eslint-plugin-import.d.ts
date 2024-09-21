import type { EcmaVersion } from "@typescript-eslint/utils/ts-eslint";

declare module "eslint-plugin-import" {
  export const configs: {
    recommended: {
      plugins: string[];
      rules: Record<
        string,
        string | number | object | [string, string | object]
      >;
      parserOptions: {
        sourceType: "module";
        ecmaVersion: EcmaVersion;
      };
    };
    errors: {
      plugins: string[];
      rules: Record<
        string,
        string | number | object | [string, string | object]
      >;
    };
    warnings: {
      plugins: string[];
      rules: Record<
        string,
        string | number | object | [string, string | object]
      >;
    };
    "stage-0": {
      plugins: string[];
      rules: Record<
        string,
        string | number | object | [string, string | object]
      >;
    };
    react: {
      settings: Record<string, unknown>;
      parserOptions: {
        ecmaFeatures: { jsx: true };
      };
    };
    "react-native": {
      settings: Record<string, unknown>;
    };
    electron: {
      settings: Record<string, string[]>;
    };
    typescript: {
      settings: Record<string, unknown>;
      rules: Record<
        string,
        string | number | object | [string, string | object]
      >;
    };
  };
}

export default {};
