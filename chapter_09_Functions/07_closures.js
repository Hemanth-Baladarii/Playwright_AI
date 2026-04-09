// Closures
// A closure is formed when an inner function is defined inside another function 
// and still has access to the outer function’s variables.

// Closures in JavaScript allow a function to “remember” variables from its outer 
// scope even after that outer function has finished executing. They’re used for 
// data privacy, encapsulation, and maintaining state across function calls.

function makeRetry(max) {
    let attempts = 0;
    return (testName) => {
        attempts++;
        if (attempts > max) { return `${testName} exceeds max tries (${max})` };
        return `Attempts ${attempts}/${max} for ${testName}`;
    };
}

let retry = makeRetry(3);
console.log(retry('login'));
console.log(retry('login'));
console.log(retry('login'));
console.log(retry('login'));