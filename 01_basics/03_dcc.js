// datatype conversion confusion

let score = true

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" = 33
//"33abc" = NaN
// true = 1; false = 0

let isLoggedIn = "ankit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 = true; 0 = false 
// "" = false 
// "ankit" = true

let someNumber = 13

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);