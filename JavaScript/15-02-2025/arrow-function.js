//*Normal function
const myFunntion = function(){
    console.log('hello world!!')
}

//* arrow function
const add = (x,y) => {
    return x+y
}

//if we only have one statement inside function, then
// this means return x+y
const add1 = (x,y) =>  x+y

//using () means return x+y
const add2 = (x,y) => (
    x+y
)

const result = add2(2,3)

console.log(result)