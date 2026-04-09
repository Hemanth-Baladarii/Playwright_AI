// shallow copy duplicates only top level objects/arrays. But the Nested Objects
// still referes to Original any changes in nested will effect in parent nested.

// deep copy create a individual copy and changes in nested will not effect .

// shallow copy
// Used spread operator

let original = [1, 3, 4, 5];

let copy1 = [...original, 6]
console.log(copy1)
console.log('Oraginal array - ',original)

let copy2 = original.slice();
console.log(copy2)
console.log('Oraginal array - ',copy2.push[89]);


let copy3 = Array.from(original);
console.log(copy3)

let copy4 = original.concat()
console.log(copy4)


// Deep copy
original.push(99);
console.log(original);

// Deep and shallow example
let arr = [1,2,3,4];
let cp = arr;
cp.push(8);
console.log(cp);
console.log(arr);