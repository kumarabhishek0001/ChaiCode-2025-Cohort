//* signature
const arr = [1,2,3,4,5,6]

// const result = arr.filter((E) => (E%2 == 0))

// console.log(result)

//* polyfill
if(!Array.prototype.myFilter){
 
    Array.prototype.myFilter = function(userFuntion){
        const originalArray = this
        const result = [];
        
        for(let i=0; i<originalArray.length; i++){
            if( userFuntion(this[i]) ){
                result.push(this[i])
            }
        }
        return result
    }
}
const finalArr = arr.myFilter((E) => (E%2 == 0))
console.log(finalArr)