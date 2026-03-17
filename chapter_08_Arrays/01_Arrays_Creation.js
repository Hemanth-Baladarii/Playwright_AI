// 1. Array literals
let colors = ['red', 'blue', 'green', 'yellow'];
console.log(colors); // [ 'red', 'blue', 'green', 'yellow' ]

// 2. Array Constructor
let nums = Array(3); // creates empty array with length 3
nums[0] = 1;
console.log(nums); // [ 1, <2 empty items> ]

let nums2 = Array(1, 2, 3);
console.log(nums2); // [ 1, 2, 3 ]

// 3. Array of is mostly for handling dynamic values.
let single = Array.of(3);
console.log(single); // [3]

const userId = 101;
const userName = "Hemanth";
const isActive = true;

const userArray = Array.of(userId, userName, isActive);
console.log(userArray); // [ 101, 'Hemanth', true ]

// 4. Array from - wraps into characters
let chars = Array.from('Hemanth');
console.log(chars);

