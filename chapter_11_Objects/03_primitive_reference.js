// Primitive data types - call by value.
// int, big int, number, boolean, null, undefined

let a = 10;
let b = a;
b = 99;
console.log(a) // a refernce never changes
a = 90;
console.log(a);

// Objects - copied by reference, call by ref
// Reference - Object, array, function
// The object reference values can be changed
let obj = { name: "hemanth" };
let objRef = obj;
objRef.name = "bhavya";
console.log(obj.name);
