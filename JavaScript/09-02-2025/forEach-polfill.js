const arr = [1,2,3,4,5,6]

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFunction){
        const originalArray = this
        for(let i=0; i<originalArray.length; i++){
            userFunction(originalArray[i], i)
        }
    }
}

arr.myForEach(function(value, index){
    console.log(`My for each value at index ${index} is ${value}`)
})