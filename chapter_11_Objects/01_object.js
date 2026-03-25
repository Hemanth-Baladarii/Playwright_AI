// Objects
// An object is a collection of Key-value pairs

let student = { name: "hemanth", age: 30 };

// Key will not be in double quotes
// If it is then it is JSON
let json = { "name": "hemanth", "age": 30 };

// Access the values, we can do practice in jsbin
console.log(student.age);
console.log(student["age"]);

// Keys are case sensitive
let a1 = { status: "pass", Status: "fail" };

let b = a1; // b points a if any value changes it changes in a1
b.status = "pass";
console.log(a1.status);

let c = { status: "pass" };
let d = { status: "pass" };

console.log("bcjshbdc", c === d);