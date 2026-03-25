const user = {
    name: "jhon",
    age: 30,
    email: "test@gmail.com"
}

console.log(user);

// Accessing the properties
console.log(user.name);
console.log(user.age);

// Dynamic key accessing
const key = "age";
console.log(user[key]);

// Adding/modifying the properties
 user.name = 'hemanth'; // if the user is defined with constant still there values can be changable
 console.log(user); // Object keys can be altered

 




