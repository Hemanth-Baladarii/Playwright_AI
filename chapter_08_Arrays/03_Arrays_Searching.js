// searching elements
let nums = [1, 2, 3, 2, 5, 1];

console.log(nums.indexOf(2)); // searches the first occurance of an array

console.log(nums.lastIndexOf(2)); // searches the last occurance of an array

console.log(nums.find(x => x > 2)) // Returns the value of the first element in the array where predicate is true

console.log(nums.findIndex(x => x > 2)) // Returns the index of the first element in the array where predicate is true

console.log(nums.findLast(x => x > 2)) // Returns the value of the last element in the array where predicate is true

console.log(nums.findLastIndex(x => x > 2)) // Returns the index of the last element in the array where predicate is true