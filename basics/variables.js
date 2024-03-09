const accountId=109210 //const can not change value once assigned
let userMail="aman@gmail.com" //variables declared using let are block Scope and functional scope
var accountPassword="12345678"// variables declared using var are not block Scope and functional scope
accountCity="Lucknow" // not prefered way of declaring a variable;
let accountState // if value not assigned to variable then it is undefined

//accountId=78910 // this will throw error

/*
avoid declaring varibales using var due to issue with block scope and functional scope;
*/

console.table([accountId,userMail,accountPassword,accountCity,accountState])
