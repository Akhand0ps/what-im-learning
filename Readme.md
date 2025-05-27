# TypeScript Backend Learning Project

This project is a simple backend application written in TypeScript. The main goals of this project are:

- **Learning TypeScript basics:**  
  Understanding variable declarations, type annotations, and basic functions.

- **Practicing TypeScript compilation:**  
  Writing TypeScript code in the `src/` directory and compiling it to JavaScript in the `dist/` directory.

- **Exploring project structure:**  
  Organizing code using a standard project layout with `src`, `dist`, and configuration files.

- **Using console output:**  
  Practicing how to print messages and variables to the console.

## Example Code

The main file demonstrates:

- Declaring and using typed variables
- Writing and calling simple functions
- Outputting results to the console

```ts
let userName: string = "Akhand";
console.log(`Hello, ${userName}`);

let a: number = 1;
console.log(a);

function greet(firstname: string) {
    console.log("hello " + firstname);
}

greet("akhand");
```

## How to Run

1. Install dependencies (if any).
2. Compile TypeScript:
   ```sh
   tsc
   ```
3. Run the output JavaScript:
   ```sh
   node dist/index.js
   ```

---

This project is for learning and experimenting with TypeScript fundamentals.