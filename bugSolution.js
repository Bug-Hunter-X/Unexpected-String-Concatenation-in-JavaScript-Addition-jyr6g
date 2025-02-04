function foo(a, b) {
  // Explicit type checking before performing addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error('Error: Both arguments must be numbers.');
    return null; // Or handle the error appropriately
  }
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(10, '20')); // Output: Error: Both arguments must be numbers.