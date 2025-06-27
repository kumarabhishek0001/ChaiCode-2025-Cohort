const obj1 = {
    fname: 'Abhishek',
    lname: 'Jha',
    getFullName: function(){
        return (`${this.fname} ${this.lname}`)
    }
}

const obj2 = {
    fname: 'Abinash',
    lname: 'Jha',
    getFullName: function(){
        return (`${this.fname} ${this.lname}`)
    }
}

//console.log(obj1.getFullName())

//! Violating dry principle here

//* prototypal inheritance 
const student1 = {
    fname : "abhishek",
    lname : "jha",

    getFullName: function(){
        return (`${this.fname} ${this.lname}`)
    }
}

const student2 = {
    fname : "diviyansh",
    lname : "jha"
}

//when the program run and try to access a key using (.) the compiler first check the key in the object in which it is called.
//if key is not found it look in to the __proto__
//this keep going until __proto__ == null
student2.__proto__ = student1
//in student2 we cannot directuly access the getfullname so we do


// now the refernce of student1 is passed in student2.__proto__
console.log(student2.getFullName())

//even though the student2.__proto__ points to student1 the student1.__proto__ still has all the properties of Object
console.log(student2.toString())


