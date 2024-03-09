let score1="33"
console.log(Number(score1)) //33 => 33

let score2="33abc"
console.log(Number(score2)) //33abc => NaN

let score3=null
console.log(Number(score3)) //null => 0

let score4=true
console.log(Number(score4)) //true => 1

let name1=""
console.log(Boolean(name1)) //"" => false

let name2="aman"
console.log(Boolean(name2)) //"aman" => true

let num1=NaN
console.log(Boolean(NaN)) // NaN => false

let obj1=null
console.log(Boolean(obj1)) // null => false



