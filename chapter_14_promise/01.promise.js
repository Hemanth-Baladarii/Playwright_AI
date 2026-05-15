//   A Promise in JavaScript is an object that represents the eventual completion 
//   (or failure) of an asynchronous operation.
//   A promise can be in one of three states:
// - Pending → initial state, operation not finished yet.
// - Fulfilled → operation completed successfully, returns a value.
// - Rejected → operation failed, returns a reason (error).

let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered");
    } else {
        reject("Order is cancelled");
    }
})

console.log(order);