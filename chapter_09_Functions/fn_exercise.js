// Function Declaration
function validateStatusCode(code) {
    if (code >= 200 && code < 300) {
        console.log("Succesful status code", code);
    }
}

// Function Expression
const validateStatusCode_Ex = function (code) {
    if (code >= 200 && code < 300) {
        console.log("Succesful status code", code);
    }
}

// Arrow Function
const validateStatusCode_Arrow = (code) => {
    if (code >= 200 && code < 300) {
        console.log("Succesful status code", code);
    }
}

validateStatusCode(204);
validateStatusCode_Ex(205);
validateStatusCode_Arrow(207);