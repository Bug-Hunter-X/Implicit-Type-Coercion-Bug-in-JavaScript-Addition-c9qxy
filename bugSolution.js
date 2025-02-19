function foo(a, b) {
  // Explicit type checking and handling for non-numeric and null values
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Return NaN to indicate invalid input 
  }
  return a + b; 
}
//Example of robust usage
console.log(foo(5,10)); //Output: 15
console.log(foo(5,"hello")); //Output: NaN
console.log(foo(null,10)); //Output: NaN