//* Problem: create an object
const teas = {
    name : "Lemon Tea",
    "type of tea" : "Green Tea",
    type : "Green Tea",
    cafine: "low"
}

//* Access and Print the name and type properties
//console.log(teas["type of tea"])

//* add a property origin to the object
teas.origin = "China"

//* change a property 
teas.cafine = "meduim"

//* remove a property
delete teas.type

//* check origin property exists in teas
//console.log("origin" in teas)

//* use for in loop to print all the properties in an object
for(let key in teas){
    console.log(`${key} : ${teas[key]}`) //string manipulation
}


//*nested object
const myTea = {
    greentea: {
        name: "Matcha"
    },

    blackTea : {
        name: "Keemun"
    }
}

//* create a copy ofmyTea

const teaShallowCopy = {
    ...myTea
}

const teaDeepCopy = JSON.stringify(teaShallowCopy)
const temp = teaDeepCopy
const myTeaDeepCopy = JSON.parse(temp)

console.log(teaShallowCopy)
console.log(myTeaDeepCopy)

teaShallowCopy.blackTea.name = "Secha"


console.log(myTea)
console.log(myTeaDeepCopy)