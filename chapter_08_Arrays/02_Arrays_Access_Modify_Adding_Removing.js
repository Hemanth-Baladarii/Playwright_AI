// Accessing Array Element
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"

// Modifying Array Elements
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]

// ---------------------------------------------------------------------------
// Adding and modifying in Arrays

// push -> At the end:
fruits.push('grapes')
console.log(fruits); // [ 'apple', 'blueberry', 'cherry', 'grapes' ]

// unshift -> At the beginning:
fruits.unshift('mango');
console.log(fruits); // [ 'mango', 'apple', 'blueberry', 'cherry', 'grapes' ]


// slice -> - At a specific position
fruits.splice(2, 0, "hem"); 
console.log(fruits); // ["kiwi", "apple", "hem", "blueberry", "cherry", "mango"]

// -------------------------------------------------------------
// removing

// shift -> remove At the beginning:
fruits.shift();
console.log(fruits); // [ 'mango', 'apple', 'blueberry', 'cherry', 'grapes' ]

// pop -> Removes the last element
fruits.pop();
console.log(fruits); // [ 'apple', 'hem', 'blueberry', 'cherry' ]