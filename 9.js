// ---Pass by Value---
// function doubleValue(value) {
//     value = value * 2;
//   }
  
//   let num = 5;
//   doubleValue(num);
//   console.log(num);  ans = 5 (unchanged)
//   In this example, the function doubleValue receives a copy of the value 5.
//   Changes made to value inside the function do not affect the original variable num outside the function.

// ---Pass by Reference---
// function addToArray(arr) {
//     arr.push(4);
//   }
  
//   let myArray = [1, 2, 3];
//   addToArray(myArray);
//   console.log(myArray);  ans = [1, 2, 3, 4] (modified)
  