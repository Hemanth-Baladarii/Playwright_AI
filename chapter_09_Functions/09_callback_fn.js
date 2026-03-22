// Callback function
// A function is passed as a argument to an another function to be called later.

function runTest(testname, callback) {
    let result = 'pass';
    // sjhcbsjd csd
    // when you done with your task call me
    callback(testname, result);
}

function oncomplete(name, result) {
    console.log(`${name} finised with: ${result}`)
}

runTest("LoginTest", oncomplete);