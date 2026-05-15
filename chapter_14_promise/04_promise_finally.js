let finalRun = new Promise(function (resolve, reject) {
    reject("Assertion failed");
})

finalRun.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("I will be executed anyhow!")
})

// Runs no matter what at the end.