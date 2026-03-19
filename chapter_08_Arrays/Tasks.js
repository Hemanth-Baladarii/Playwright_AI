// Exercise 1 : API Response Validation
// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503];

// 1. Check if ALL responses are successful (200–299)
let allSuccess = responses.every(code => code >= 200 && code < 300);
console.log("All Successful:", allSuccess); // false

// 2. Find the FIRST non-success code
let firstError = responses.find(code => code < 200 || code >= 300);
console.log("First error code:", firstError);

// 3. Return all unique error codes
let errorCodes = [... new Set(responses.filter(code => code < 200 || code >= 300))];
console.log("Unique Error Codes:", errorCodes); // [404, 500]

// What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((a, b) => a - b);
console.log("Fastest:", sorted[0]);

// Exercise 3 — Deep vs Shallow Copy (Tricky)
// What is the output and why? How would you fix it?
let original = [{ name: "login", status: "pass" }];
let shallow = [...original]; // shallow copy
shallow[0].status = "fail";
// console.log(original[0].status); // When we change any value in shallow it changes the originalalso

// Deepcopy can be done by follwing functions
let deepcopy = structuredClone(original);
// let deepcopy = JSON.parse(JSON.stringify(original));

deepcopy[0].name = 'dashboard';
console.log(deepcopy);
console.log(original);

