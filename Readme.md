# TypeScript Learning Project

This repository documents my journey learning TypeScript, including both backend and frontend (React) concepts. The code is organized by topic and includes comments and examples for each concept.

---

## Topics Covered

### 1. **TypeScript Basics**
- Variable declarations and type annotations
- Functions with typed parameters and return values

### 2. **Types**
- Using `type` to define custom types
- Union types (e.g., `number | string`)
- Example: [`src/types.ts`](backend/src/types.ts)

### 3. **Interfaces**
- Defining object shapes with `interface`
- Optional properties in interfaces
- Using interfaces with functions and classes
- Example: see commented code in [`src/index.ts`](backend/src/index.ts)

### 4. **Classes and Implements**
- Creating classes that implement interfaces
- Example: `Employee` class implements `Person` interface in [`src/index.ts`](backend/src/index.ts)

### 5. **Intersection Types**
- Combining multiple types using `&`
- Example: `TeamLead` combines `Employee` and `Manager` in [`src/intersection.ts`](backend/src/intersection.ts)

### 6. **Arrays and Functions**
- Typing arrays
- Writing functions to process arrays (e.g., finding the max value)
- Example: [`src/array.ts`](backend/src/array.ts)

### 7. **React + TypeScript**
- Creating React components with typed props
- Example: `Todo` component in [`frontend/src/App.tsx`](frontend/src/App.tsx)

---

## Project Structure

```
backend/
  src/
    array.ts         # Array and function examples
    index.ts         # TypeScript basics, interfaces, classes
    intersection.ts  # Intersection types
    types.ts         # Union types
frontend/
  src/
    App.tsx          # React + TypeScript Todo example
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

- Each file contains comments explaining the concept being demonstrated.
- The code is intentionally simple and focused on learning, not production use.

---

Happy learning!