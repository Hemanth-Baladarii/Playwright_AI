// Instead of creating multiple variables we can use one

const user = { name1: "hemanth", age: 30, status: "active" };

// Basic Destructuring
const { name1, age } = user;
console.log(name1);
console.log(age);

// Rename variables
const { name1: fname, age: years } = user;
console.log(fname);
console.log(age);

// Default values
const {country = "india"} = user;
console.log(country);