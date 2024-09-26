import eslint from "@worldofsoftware/eslint-config";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";

const gitIgnorePath = path.resolve(import.meta.dirname, ".gitignore");

/**
 * @type {(import("eslint").Linter.Config | import("@typescript-eslint/utils").TSESLint.FlatConfig.Config)[]}
 */
const configurations = [includeIgnoreFile(gitIgnorePath), eslint];

try {
  await import("typescript");
  /**
   * @type {{ default: import("@typescript-eslint/utils").TSESLint.FlatConfig.Config}}
   */
  const { default: typescriptEslint } = await import(
    "@worldofsoftware/eslint-config-typescript"
  );
  configurations.push(typescriptEslint);
} catch {
  // Empty
}

export default configurations;
