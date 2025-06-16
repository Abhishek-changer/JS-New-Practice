const accountId = 144553
let accountEmail = "abhisheksaha@google.com"
var accountpassword = "12345"
accountCity =  "Kolkata"
let accountState;

// accountId = 2 // not allowed


accountEmail = "abhi@google.com"
accountpassword ="67893"
accountCity =  "Bangaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountpassword,accountCity,accountState])
