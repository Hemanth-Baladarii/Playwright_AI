let apicall = new Promise(function (resolve, reject) {
    reject("500 error")
})

apicall.then(function (data) {
    console.log("Data is success!");
}).catch(function (error) {
    console.log(error);
})

// catch is called when promise is rejected.
// Here then is completely skipped beacause there is no resolve.