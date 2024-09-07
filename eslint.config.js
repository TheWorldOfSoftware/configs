import eslint from "@worldofsoftware/eslint-config";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import typescriptEslint from "@worldofsoftware/eslint-config-typescript";

const gitIgnorePath = path.resolve(import.meta.dirname, ".gitignore");

export default [includeIgnoreFile(gitIgnorePath), eslint, ...typescriptEslint];
