import eslint from "./javascript/eslint.config.js";
import typescriptEslint from "./typescript/eslint.config.js";

export default [eslint, ...typescriptEslint];
