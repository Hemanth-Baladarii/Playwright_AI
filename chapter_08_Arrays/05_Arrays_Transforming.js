// map 
// If we want to transform the inputs witout changing actual values.
// map always gives you a new array.

let numbers = [1, 2, 3, 4, 6, 8];

let transformedArray = numbers.map(num => num * 2);
console.log("numbers",numbers);
console.log("transformedArray",transformedArray);

// filter
// selects only certain elements that meet a condition. 
let filtered = numbers.filter(x => x > 2);
console.log(filtered);

// Reduce
// takes all the items in an array and combines them into a single value.
let sum = numbers.reduce((x , y) => x + y , 0);
console.log(sum);