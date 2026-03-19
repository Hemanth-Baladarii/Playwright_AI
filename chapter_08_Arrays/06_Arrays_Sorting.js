// Sorting
let fruits = ["grapes", "apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);

let num = [1, 13, -1, 0, 4, 8, 7, 6, 4];
num.sort((a, b) => a - b); // Ascending
console.log(num);

num.sort((a, b) => b - a); // Desending
console.log(num);