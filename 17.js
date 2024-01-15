
// Currying in JavaScript involves transforming a function into a sequence of functions, each taking a single argument.
// This technique enables partial application and reusability. Instead of taking all arguments at once,
// a curried function takes one argument and returns a new function until all arguments are collected, producing the final result.

// Non-curried function
// function add(x, y, z) {
//     return x + y + z;
//   }
  
//   console.log(add(1, 2, 3)); // Output: 6
  
//   // Curried function
//   function curryAdd(x) {
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       };
//     };
//   }
  
//   console.log(curryAdd(1)(2)(3)); // Output: 6