// Checking array
let arr = Array.isArray([1, 2, 3]);
console.log(arr);

let arr1 = Array.isArray("a");
console.log(arr1);

// every
console.log([80,90,95].every(a => a>=70));

// some - atleast one should pass
console.log([80,60,95].some(a => a>=70));