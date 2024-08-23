import eslint from "@worldofsoftware/eslint-config-javascript";
import typescriptEslint from "@worldofsoftware/eslint-config-typescript";
import eslintImport from "@worldofsoftware/eslint-config-import";

export default [eslint, ...typescriptEslint, eslintImport];
