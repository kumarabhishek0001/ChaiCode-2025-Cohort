class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }

    getfullName(){
        return (`${this.fname} ${this.lname}`)
    }
}

const p1 = new Person('Abhishek', 'Jha')
const p2 = new Person('Divyansh', 'Jha')

console.log(p1.getfullName())
console.log(p2.getfullName())

//* How the function is available in p1 and p2

//what JS does is simple it takes the constructor and Person class adds it to the prototype of p1 and p2
///what this const p1 = new Person('Abhishek', 'Jha') is
//p1.__proto__ = Person.Prototype
//p1.__proto__ = Person.Prototype
//both p1 and p2 are objects of same class


//*Problem : I should be able to access the fuctions inside A using Class B without copying the code.
// - B.prototype = A.prototype -> this is what extends does
class A{
    functionInA(){

    }
}
class B extends A{
    functionInB(){

    }
}

const objB = new B()

//now can access functions inside A
console.log(objB.functionInA)