# Implicit Type Coercion Bug in JavaScript Addition

This repository demonstrates a subtle bug in JavaScript related to implicit type coercion during addition. The `foo` function, in `bug.js`, attempts to add two numbers but doesn't explicitly handle cases where the inputs are not numbers or are null.  This leads to unexpected behavior and potential errors.

The solution, found in `bugSolution.js`, addresses the problem by implementing explicit type checking and handling of non-numeric or null values, providing more robust and predictable functionality.

## How to reproduce the bug

1. Clone this repository.
2. Open `bug.js`.
3. Run the `foo` function with non-numeric or null arguments (e.g., foo("hello", 5), foo(null, 10)).
4. Observe the unexpected results.