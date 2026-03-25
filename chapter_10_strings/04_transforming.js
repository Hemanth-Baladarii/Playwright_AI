let str = ' Hello world!';

// Trim whitespace
console.log(str.trim());

str.trimStart();
str.trimEnd();

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
msg.replace("FAIL", "PASS");
msg.replaceAll("FAIL", "PASS");
msg.replace(/FAIL/g, "PASS"); // /g refers to global

// Spliting and joint
"pass,fail,fail".split(",") // ["pass", "fail", "fail"]

"test_login_1".split("_").join("*"); //test*login*1




