//*Problem : array contaning different types of teas
const teas = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"]

//*Problem : Add "Chamolina Tea"
teas.push("Chamoline Tea")

//*remove oolong tea from the list of tea
const index = teas.indexOf("Oolong tea")
//if(index > -1){
    // const removed = teas.splice(index,1)
//}

// console.log(teas)
// console.log(removed)

//* filter the list to only include teas that are caffinated
// const caffinated_Tea = teas.filter((tea) => tea !== "Herbal Tea")
// console.log(caffinated_Tea)


//* Problem: Sort the list of teas in alphabetical order
teas.sort()
console.log(teas)


//* Problem: Use a For loop to print 
// for(let i=0; i<teas.length; i++){
//     console.log(teas[i])
// }

//* Problem: Use for loop to count the number of Caffinated tea
// let count=0;
// for(let i=0; i<teas.length; i++){
//     if(teas[i]!=="Herbal Tea"){
//         count = count + 1
//     }
// }
// console.log(`Count of cafffnated tea ${count}`)

//* Problem: Use for loop to creat a new array with all tea names in uppercase
// for(let i=0; i<teas.length; i++){
//     teas[i]=teas[i].toUpperCase()
// }
// console.log(teas)

//* problem : using for loop to find tea name with most charecter
// let maxCharecters = 0;
// for(let i=0; i<teas.length; i++){
//     const lengthOfTea = teas[i].length
//     if(lengthOfTea>maxCharecters){
//         maxCharecters = lengthOfTea
//     }
// }

//console.log(maxCharecters)

//? checking

// for(let i=0; i<teas.length; i++){
//     console.log(`length of ${teas[i]} is ${teas[i].length}`)
// }


//* Problem : use a for loop to reverse the order of teas in the array.
teas.reverse()
console.log(teas)