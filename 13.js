// In JavaScript, the this keyword refers to the object it is associated with and its value depends on the context in which it is used.
// In the global context, it points to the global object (e.g., window in a browser).
// In regular functions, this is influenced by how the function is called: as a standalone function,
// it refers to the global object, while as a method of an object, it refers to that object.
// In constructor functions used with new, this points to the newly created instance.
// Arrow functions, however, behave differently,
// maintaining the this value from their lexical context rather than being influenced by the function's invocation. 
// Understanding the context of this is crucial for proper usage in different scenarios, such as in methods, constructors,
// and event handlers.