Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function greet(name){
    return `Hello ${name}`
}

// greet.describe()

//* fucntion declaration
function add(a,b){
    return a+b
}

//* function expression
const subtract = function(a,b){
    return a-b
}

//* arrow function
const multiply = (a,b) => a*b

//* first class function
function applyoperation(a, b, operation){
    return operation(a,b)
}

const result = applyoperation(5,4, (x,y)=>x/y);

//* closure
//* tiffin concept
function createCounter(){
    let count = 0;
    return function(){
        count++
        return count;
    }
}

const counter = createCounter()
console.log(counter())


//* Immediately Invoked Function Expression
//()()

(function(){
    console.log('function executed without calling')
})()


//*