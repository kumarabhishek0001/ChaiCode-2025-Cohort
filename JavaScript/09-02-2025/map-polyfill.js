//* Map signature
const arr = [1,2,3,4,5,6]

// const myFunction = function(x){
//    return x = x*3
// }
// const mappedArray = arr.map(myFunction)

// console.log(mappedArray)




//* Polyfill
if(!Array.prototype.myMap){

    Array.prototype.myMap = function(userFunction){
        const originalArray = this //context is defined
        const result = [];

        for(let i=0; i<originalArray.length; i++){
            const value = userFunction(originalArray[i], i)
            result.push(value)
        }

        return result
    }
}

const myFunction = function(x){
    return x = x*3
}

const testArray = arr.myMap(myFunction)

console.log(testArray)