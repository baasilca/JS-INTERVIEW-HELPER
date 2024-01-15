// --------bind()----------
// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
//   }
  
//   // Creating an object
//   const person = { name: 'John' };
  
//   // Using bind to create a new function with a specific context
//   const greetJohn = greet.bind(person, 'Hello');
//   greetJohn(); // Output: Hello, John!

// --------call()----------
// function greet(message) {
//     console.log(`${message}, ${this.name}!`);
//   }
  
//   // Creating an object
//   const person = { name: 'Emily' };
  
//   // Using call to invoke the function with a specific context and arguments
//   greet.call(person, 'Hi'); // Output: Hi, Emily!

// ---------apply()------
// function introduce(greeting, adjective) {
//     console.log(`${greeting}, I'm ${adjective} and my name is ${this.name}.`);
//   }
  
//   // Creating an object
//   const person = { name: 'Sam' };
  
//   // Using apply to invoke the function with a specific context and arguments as an array
//   introduce.apply(person, ['Hello', 'friendly']); 