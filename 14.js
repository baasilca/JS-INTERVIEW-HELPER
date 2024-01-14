// A
// function doSomething(){
//     console.log(this);  ans = window
// }
// doSomethin();

// B
// var obj = {
//     name:"Vivek",
//     getName:function(){
//         console.log(this.name);  ans = "Vivek"
//     }
// }
// obj.getName();

// C
// var obj = {
//     name:"Vivek",
//     getName:function(){
//         console.log(this.name);  ans = "Akshay"
//     }
// }
// var getName = obj.getName;
// var obj2= {name:"Akshay",getName};
// obj2.getName();

// D
// var obj = {
//     address:"Mumbai , India",
//     getAddress:function(){
//         console.log(this.address);  ans = "type error, obj2.getAddress is not fn"
//     }
// }
// var getAddress = obj.getAddress;
// var obj2 = {name : "Akshay"};
// obj2.getAddress();