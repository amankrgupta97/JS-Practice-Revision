//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId); //false

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //symbol
console.log(typeof outsideTemp); //object
console.log(typeof userEmail); //undefined
console.log(typeof bigNumber); //bigint
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function

//Stack (primitive) 

let user1="amankrgupta@gmail.com"
let user2=user1;
console.log(user2) //amankrgupta97@gmail.com
user2="akgupta@gmail.com"
console.log(user1); //amankrgupta97@gmail.com
console.log(user2); //akgupta97@gmail.com

// heap memory 

const obj1={
    email:"aman@gmail.com",
    age:27,
}

const obj2=obj1;
console.log(obj2.email); //aman@gmail.com
obj2.email="amangupta@gmail.com"
console.log(obj1.email); //amangupta@gmail.com
console.log(obj2.email); //amangupta@gmail.com
