
let p1 = {
    fname: 'hitesh'
}

let p2 = p1

console.log(p2)

p2.fname = 'piyush'

console.log(p1)

//* Problem: we cannot make a varible right now that contains the data of p1 but is referenced at a different memeory location

//* Solution-1
let mentor1 = {
    fname: "Hitesh",
    lname : "Chowdhary"
}

let mentor2 = {
    fname: mentor1.fname,
    lname: mentor1.lname
}

console.log(mentor1)
console.log(mentor2)

mentor2.fname = "piysuh Garg"

console.log(mentor2)

//*Method-2 -> spread operator creates shalow copies

mentor2 = {
    ...mentor1
}

console.log(mentor2)

//* Problems: Cannot copy by value an object inside an object.

//* Solution - deep copies
let studentData = {
    fname : "Abhishek",
    lname: "Jha",
    isMale: true,
    address : {
        house_number : 707,
        district : 'palwal',
        state: "Haryana",
        pin_code: 110085
    }
}

const studentDataString = JSON.stringify(studentData)
console.log(studentDataString)

let studentDataDeepCopy = JSON.parse(studentDataString)

console.log(studentDataDeepCopy)


