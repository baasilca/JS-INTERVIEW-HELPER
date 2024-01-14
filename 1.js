// -------------1--------------
// A
// const value1 = "5"
// const value2 = 9;
// let sum = value1 + value2;
// console.log(sum);  ans = 9  
//  The + operator in JavaScript can be used for both addition and string concatenation.
//  When we use it with a string and a number, it concatenates them together. 
//  In ou code, "5" (a string) and 9 (a number) are concatenated, resulting in the string "59"

// B
// const value1 = "5"
// const value2 = 9;
// let sum = Number(value1) + value2;
// console.log(sum);  ans = 14
// the code is modified by using Number(value1) to explicitly convert the string "5" to a number.
// Now, the + operator performs numerical addition, and the result is the sum of the numeric value of value1 and value2, which is 14.  

// C
// console.log(![]); ans = false
// The empty array [] is a truthy value in JavaScript.The logical NOT operator (!) negates the truthiness, resulting in false.

// console.log([] == ![]); ans = ??

// console.log([] === ![]); ans = ?? 

// console.log(null == true ); ans = false
// Different data types 

// console.log(null == true);  ans = false
// Different data types 

// D
// console.log(-"giddyup" + 409);  ans = NaN
// -"giddyup" is not a number
