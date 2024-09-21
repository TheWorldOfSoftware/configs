import type { EcmaVersion } from "@typescript-eslint/utils/ts-eslint";
import type { Linter } from "eslint";

declare module "eslint-plugin-import" {
  export const configs: {
    recommended: {
      plugins: string[];
      rules: Partial<Linter.RulesRecord>;
      parserOptions: {
        sourceType: "module";
        ecmaVersion: EcmaVersion;
      };
    };
    errors: {
      plugins: string[];
      rules: Partial<Linter.RulesRecord>;
    };
    warnings: {
      plugins: string[];
      rules: Partial<Linter.RulesRecord>;
    };
    "stage-0": {
      plugins: string[];
      rules: Partial<Linter.RulesRecord>;
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
      rules: Partial<Linter.RulesRecord>;
    };
  };
}

export default { configs };
