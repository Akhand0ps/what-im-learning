# TypeScript Learning Project

This repository documents my journey learning TypeScript, including both backend and frontend (React) concepts.  
**I also write a lot of comments in the code to explain what I'm learning, why something is used, and how it works.**  
The code is organized by topic and each file contains comments and examples for each concept.

---

## Topics Covered

### 1. **TypeScript Basics**
- Variable declarations and type annotations
- Functions with typed parameters and return values
- **Comments:** Why and how to use types, function signatures, and simple examples

### 2. **Types**
- Using `type` to define custom types
- Union types (e.g., `number | string`)
- **Comments:** When to use `type`, how to use union types, and practical examples
- Example: [`backend/src/types.ts`](backend/src/types.ts)

### 3. **Interfaces**
- Defining object shapes with `interface`
- Optional properties in interfaces
- Using interfaces with functions and classes
- **Comments:** Difference between `type` and `interface`, when to use each, and code samples
- Example: see commented code in [`backend/src/index.ts`](backend/src/index.ts)

### 4. **Classes and Implements**
- Creating classes that implement interfaces
- **Comments:** How to use `implements`, why interfaces are useful with classes
- Example: `Employee` class implements `Person` interface in [`backend/src/index.ts`](backend/src/index.ts)

### 5. **Intersection Types**
- Combining multiple types using `&`
- **Comments:** What intersection types are, why they're useful, and how to use them
- Example: `TeamLead` combines `Employee` and `Manager` in [`backend/src/intersection.ts`](backend/src/intersection.ts)

### 6. **Arrays and Functions**
- Typing arrays
- Writing functions to process arrays (e.g., finding the max value)
- Filtering arrays using interfaces
- **Comments:** How to type arrays, why type safety matters, and practical filtering examples
- Example: [`backend/src/array.ts`](backend/src/array.ts)

### 7. **Generics**
- Creating generic functions for type-safe code
- **Comments:** Why generics are important, how they prevent bugs, and usage patterns
- Example: [`backend/src/generics.ts`](backend/src/generics.ts)

### 8. **Enums**
- Using enums for readable and maintainable code
- **Comments:** Why enums make code cleaner, real-world use cases (like HTTP status codes), and how to use them in Express
- Example: [`backend/src/enums.ts`](backend/src/enums.ts)

### 9. **Modules (Import/Export)**
- Importing and exporting modules in TypeScript
- **Comments:** Difference between CommonJS and ES Modules, how to use `import`/`export` in TS
- Example: [`backend/src/imp.ts`](backend/src/imp.ts), [`backend/src/imp.exp.ts`](backend/src/imp.exp.ts)

### 10. **React + TypeScript**
- Creating React components with typed props
- **Comments:** How to type props, why it's useful, and simple component examples
- Example: `Todo` component in [`frontend/src/App.tsx`](frontend/src/App.tsx)

---

## Project Structure

```
backend/
  src/
    array.ts         # Array and function examples (with comments)
    enums.ts         # Enum usage and explanation
    generics.ts      # Generics with comments
    imp.ts           # Module import/export basics
    imp.exp.ts       # Module import/export with Express
    index.ts         # TypeScript basics, interfaces, classes (with lots of comments)
    intersection.ts  # Intersection types (with comments)
    types.ts         # Union types (with comments)
frontend/
  src/
    App.tsx          # React + TypeScript Todo example (with comments)
    ...
```

---

## How to Run

### Backend

1. Install dependencies (if any).
2. Compile TypeScript:
   ```sh
   tsc
   ```
3. Run the output JavaScript:
   ```sh
   node dist/index.js
   ```

### Frontend

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

---

## Notes

- **Every file contains comments explaining the concept being demonstrated, why it's used, and how it works.**
- The code is intentionally simple and focused on learning, not production use.
- I use comments to explain not just the "how" but also the "why" behind each concept.

---

Happy learning!