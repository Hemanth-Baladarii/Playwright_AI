// Array Destructuring
let [x, y, ...z] = [10, 1, 23, 8, 9];
console.log(x, y, z) //10 1 [ 23, 8, 9 ]
console.log(z); // [ 23, 8, 9, 8 ]

// Object Destructuring
let person = { name: 'Hemanth', city: 'Isukapudi', age: 30 };
let { name, city } = person;
console.log(name, city); // Hemanth Isukapudi

// Nested Destructuring
let user = {
    id: 1,
    profile: {
        username: 'Hemanth1',
        email: 'test@gmail.com'
    }
}

let { profile: { username, email } } = user;
console.log(username);
