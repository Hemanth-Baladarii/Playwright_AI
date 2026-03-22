// Arrow function (ES6)
// If we want to make normal function to array function
// remove function keyword, remove return and curly braces and add =>

let greet = (name) => `hello ${name}`;
console.log(greet("hemanth"));

// Multiple lines
const greet1 = (score) => {
    if (score >= 70) return "pass";
    return "fail";
} 

console.log(greet1(60));