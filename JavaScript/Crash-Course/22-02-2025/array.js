//declaration
let chaiTypes = ['masala chai', 'ginger tea', 'green tea', 'lemon tea']

//accessing 
// console.log(chaiTypes[0])

// console.log(`total chai types: ${chaiTypes.length}`)

//methods
chaiTypes.push('herbal tea')
const poped_chai = chaiTypes.pop()
// console.log(poped_chai)

let index = chaiTypes.indexOf('green tea')// reutrn -1 if item is not in array

//loops in array
/*
chaiTypes.forEach((item, index) => {
    console.log(`${index+1} : ${item}`)
})*/

let moreChaiTypes = ['oolong tea', 'white tea']

let allChaiTypes = chaiTypes.concat(moreChaiTypes)
console.log(allChaiTypes)

let allChaiTypes2 = [...chaiTypes, 'chamoline tea'] // ...(spread operator) -> unpacks the array
console.log(allChaiTypes2)

//* array destructuring
const array1 = [1,2,3,4,5,6,7,8]
const [firstVar, secondVar] = array1

// console.log(firstVar, secondVar)