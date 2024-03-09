const user="aman"
const age=27

console.log(`Hello this is ${user} and my age is ${age}`) //prefer using backticks

const myname=new String("Aman-Gupta"); // not prefered way beacause this use extra wrapper around primtitve string type

// console.log(myname.length);
// console.log(myname.toUpperCase());
console.log(myname.charAt(2)); //a
console.log(myname.indexOf('t')); //8

const newString = myname.substring(0, 4) //Aman 0,1,2,3
console.log(newString);

const anotherString = myname.slice(2, -6) //an slice(start,end) if -value then from end
console.log(anotherString);

const newStringOne = "   Aman    "
console.log(newStringOne.trim()); //Aman clear whitespace

const url = "https://aman.com/aman%20gupta" 

console.log(url.replace('%20', '-')) // https://aman.com/aman-gupta replaced %20 with -

console.log(url.includes('gupta')) //true

console.log(myname.split('-')); //split into array using seprator -
