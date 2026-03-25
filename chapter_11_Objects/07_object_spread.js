// objects can be merges
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
const copy = { ...obj1 }
const merged = { ...copy, ...obj2 };
console.log(merged);