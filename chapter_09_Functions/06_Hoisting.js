// Hoisting
// Function declarations are Hoisted.
// you can call them before they are Hoisted
// Arrow and function expressions are NOT

sayHello();

function sayHello() {
    return "Hello";
}

// Below function expression won't work with Hoisting
const sayHello1 = function () {
    return "Hello";
}