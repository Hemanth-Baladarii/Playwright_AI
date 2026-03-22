// Function is a reusable block of code, that performs a specific task.
// Instead of repeating logic, you define it once and call it when needed.

// Type 1 Basic function
// Define
function greet() {
    console.log("Hi");
}
// Call
greet();

// -------------------------------------------------------
// Type 2 - with argument/parameter but no return type.
function greetByName(name) {
    console.log("Hi", name);
}
greetByName("hemanth");
greetByName("bhavya");

// -------------------------------------------------------
// Type 3 - without argument but returns
function sayHello() {
    return "Hello";
}

let result = sayHello();
console.log(result);

// -------------------------------------------------------
// Type 4 - with arguments and return
function sum(a, b) {
    return a + b;
}

let sumValue = sum(2, 7);
console.log(sumValue);