// declaration
let name = 'abhishek'
const pi = 3.14

// datatypes

//primitives
let number = 42 //Number
let text = "Hello" //String
let isTrue = false //Boolean

let nothing = null //Object
let notDefined = undefined //undefined
let symbolVar = Symbol //symbol

//non-primitive


//object
const person = {
    name:"abhishek",
    age:10,
    isStudent:true,
}

//conversion 
let num="42abvcd"
let convertedNum = Number(num)


// console.log(convertedNum)
// console.log(typeof convertedNum)

//*method 2 of conversion

let convertedNum2 = +num
// console.log(convertedNum2) -return NaN
// console.log(typeof convertedNum2) -> gives nubmer again wrong

//*method 3 of conversion

let convertedNum3 = parseInt(num)
// console.log(convertedNum3) -> this however does not let it give strings and returns number only
// console.log(typeof convertedNum3)



//!amiguity 
num="42a"
convertedNum = Number(num)
//console.log(convertedNum) //-> returns NAN
//onsole.log(typeof convertedNum) //-> but this still show number 

//do type checking 
if(isNaN(num)){
    console.log('inalid input')
}
else console.log('success')

/*
NaN is the only value in JavaScript that is not equal to itself, 
even when using the strict equality operator.
Therefore, variable === NaN will always evaluate to false, 
even if variable actually holds the NaN value. 
This behavior is defined by the IEEE 754 floating-point standard, 
which dictates how floating-point numbers, including NaN, are represented and compared. 
*/

//! Abiguity this only happens in NaN
console.log(NaN === NaN) 

//* converting number to string
let num1 = 1234
let convertedString = String(num1)

// console.log(typeof convertedString)

