function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-numeric inputs
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 10)); // Output: 15
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(5, undefined)); // Output: 0
console.log(foo('abc', 5)); // Output: NaN
console.log(foo(5, 'abc')); // Output: NaN