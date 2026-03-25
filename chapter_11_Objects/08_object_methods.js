const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// for loop
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// for each
Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`);
})

