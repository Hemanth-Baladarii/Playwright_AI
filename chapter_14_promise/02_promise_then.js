let apicall = new Promise(function (resolve, reject) {
    resolve({ status: 200, sucess: true });
})

apicall.then(function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.sucess);
})

// then runs only when the promise resolves successfully.