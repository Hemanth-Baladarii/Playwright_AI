// promise chaining

function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser is opened");
    })
} 

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("login is successfully");
    })
}

openBrowser().then(function (msg){
    console.log("step 1", msg);
    return clickLogin();
}).then(function(msg) {
    console.log("step 2", msg);
}).catch(function (error){
    console.log("Error", error);
})