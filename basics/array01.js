// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //insert from back
// myArr.push(7)
// myArr.pop() //remove from back

// myArr.unshift(9) //insert from front
// myArr.shift() //remove from front

// console.log(myArr.includes(9)); //return true if present
// console.log(myArr.indexOf(3)); //return index of value if in array else return -1 

// const newArr = myArr.join() //convert into string 0,1,2,3,4,5

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //[1,2] does not change origninal array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //[1,2,3] change original array
console.log("C ", myArr); // after splice operation [0,4,5]
console.log(myn2);