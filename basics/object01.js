// singleton 
// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //using symbol in object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) //ways to access object property
// console.log(JsUser["email"]) //another way to access object property
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) //access symbol in objects

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //changes made after this in object will not work
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);