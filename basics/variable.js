const accountId = 123456    //valu not changeable 
let accountEmail = "abcd@gmail.com"
var accountPassword = "09876"
accountCity = "Siwan"
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity])


// accountId = 2222  // not allowed

accountEmail = "zxcv@gmail.com"
accountPassword = "3456"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
