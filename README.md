# Unexpected String Concatenation in JavaScript Addition
This repository demonstrates a common JavaScript bug involving unexpected string concatenation when performing addition with mixed data types.

## Bug Description
JavaScript's loose typing can lead to unexpected behavior when adding numbers and strings.  Instead of throwing an error, it concatenates the string and number.

## Bug Reproduction
1. Clone this repository.
2. Run `node bug.js`
3. Observe the unexpected output: `1020` instead of `30`.

## Solution
The `bugSolution.js` file provides a solution using explicit type checking to ensure numerical addition.