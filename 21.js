// A
// function real(){
//     console.log("I am real, Always run me");
// }
// function real(){
//     console.log("No I'm real one");
// }
// real(); ans = You both are wasted
// function real(){
//     console.log("You both are wasted");
// }
// You both are wasted

// B
// var b = 1;
// function outer() {
//     var b = 2;
//     function inner() {
//         b++;
//         console.log(b); ans =  NaN
//         var b = 3;
//         console.log(b);  ans =  3
//     }
//     inner()
// }
// outer()


// C
// var d = 1;
// function test(){
//     d = "2";
//     console.log(typeof d); ans = string
//     function d(){}
// };
// test()
// console.log(typeof d);  ans = number
