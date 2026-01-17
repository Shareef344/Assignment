# AI Coding Agent Instructions for PWTraining

## Project Overview
PWTraining is a dual-language training codebase demonstrating core programming concepts in both JavaScript and TypeScript, with an emphasis on typed language practices.

**Structure:**
- `JS-Trainings/` – JavaScript examples (procedural, untyped)
- `TS-Trainings/` – TypeScript examples (typed, strict mode enabled)
- `package.json` – Node.js project with ts-node and TypeScript dev dependencies
- `tsconfig.json` – Strict TypeScript configuration with enhanced type safety

## Development Environment

### Setup & Execution
- **Node.js runtime:** Uses `module: "nodenext"` and `target: "esnext"`
- **Run TypeScript files:** `npx ts-node TS-Trainings/test.ts`
- **Run JavaScript files:** `node JS-Trainings/test.js`
- **Type checking only:** `npx tsc --noEmit`

### TypeScript Configuration Highlights
- **Strict mode enabled** – All strict flags active (`strict: true`)
- **Enhanced safety:** `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noUncheckedSideEffectImports`
- **Module system:** `verbatimModuleSyntax` enforces explicit module syntax
- **No implicit types** – All parameters and returns must have explicit type annotations

## Code Patterns & Conventions

### Typing Requirements
When adding TypeScript code:
1. **Always annotate function parameters and return types** – Even for simple functions like `function sum(a: number, b: number): number`
2. **Use primitive type annotations** – `number`, `string`, `boolean` for basic values
3. **No `any` type** – Be explicit with union types or generics instead
4. **Nested objects/arrays:** Use interfaces or type aliases for complex structures (see `object.js` example pattern converted to TS)

### File Organization
- **Training examples are minimal** – Focus is on demonstrating single concepts per file
- **No complex modules** – Keep files self-contained; example: `test.ts` contains only the function and its console.log call
- **No external imports required** – Built-in Node.js globals only

## Key Files as Reference
- [JS-Trainings/object.js](JS-Trainings/object.js) – Demonstrates object literals, nested arrays, property access patterns
- [TS-Trainings/test.ts](TS-Trainings/test.ts) – Demonstrates typed function declarations with explicit return types
- [tsconfig.json](tsconfig.json) – Enforcement baseline: use as-is for all new TypeScript code

## What Agents Should Know
- This is a **training/learning repository** – Prioritize clarity and explicit typing over cleverness
- **Dual-language comparison** – When adding new examples, consider providing both JS and TS versions to show the typing difference
- **No build step complexity** – Keep source organization flat; no need for dist/ or src/ directories
- **Consistency in examples** – Match the style: simple functions with console.log output, no external dependencies
