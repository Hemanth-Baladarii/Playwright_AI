// Slicing
// slice(start, end) - returns new value, does not change value and gives values btwn (start ,end -1)
let arr = [1, 2, 4, 5, 6, 6, 7];
console.log(arr.slice(2, 3)); // [4]
console.log(arr.slice(-4)); // [ 5, 6, 6, 7 ]

// concatination
let a = [1, 3, 3];
let b = [3, 4];

let c = a.concat(b, [5, 6]);
console.log(c);

let d = a.concat(b);
console.log(d);


// join
let a1 = [1, 3, 3].join('|');
console.log(a1)


