const accountId = 1234
let accountEmail = "ankit005@gmail.com"
var accountPassword = "1235456"
accountCity = "katangi"
let accountState;
//accountId = 456 /not allowed
console.log(accountId)

accountEmail = "chahak@gmail.com"
accountPassword = "1266"
accountCity = "bisapur"

/*  
prefer not to use var 
because of issue in block scope and functiuonal scope
*/

console.table([accountEmail ,accountPassword ,accountCity ,accountState])