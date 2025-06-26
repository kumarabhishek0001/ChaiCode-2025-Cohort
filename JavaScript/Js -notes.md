
## 02-02-2025
### declaration of variable and constants
1. let -> identifier is varible
2. const -> identifier is constant

### type of variables 
<!-- Primitive Data Type -->
1. string
2. number/float
3. boolean
4. null
    - fetch temperature from server if it does not return anything and we show zero it's a blunder
    - null is not Zero (khali)

5. Undefined => kuch bhi nhi h. Khali bhi nhi h. Bas h
6. **Symbol**
7. BigInt

<!-- Non-Primitive Datatype -->
8. array 
9. Objects

<!-- Confusion in JS -->
Non-Primitive = Object
**type of Non-primitive data types is Object**

**type of undefined is Undefined**

**type of null is Object**

## 08-02-2025
- why stack memory does not grow or why it cannot contain varibles that are dynamic in size(array, objects)

### storage of different data types

- variables -> a certain memory variables
- primitive data types -> stored in stack
- non-primitive data types -> stored in heap

- data of non-primitive datatypes(arrays, objects) are stored in heap. And the varible name that is assigned to object is stored in stack which contains the location of data in heap.

### Garbage collector / Memory Leak
- JS has grabage collector - as soon as a non-primitive varible goes out of scope clearing it from the stack is not enough -> we need to clear it from the heap also as data is stored there. **Garbage collector does this automatically**.

- lets say p1 and p2 are pointing to the same memory address and i clear p2 (remove it from both stack and heap) now p1 is pointing to a memory location. If that memory location contains some other day p1 can also modify it. **This is memmory leak**.

- pass by reference/pass by value

### How to make a copy of object that does not refernce the data but makes a new one
**Spread Operator**
```JS
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

//*Method-2

mentor2 = {
    ...mentor1
}

console.log(mentor2)
```

**Spread Operator makes shallow copy -** If there is object inside object then the inside object is not copied by value it is copied by reference. Making a copy by value of parent object doesn't mean the object inside is also copied by value.

**how to make deep copies**
make object a string -> copy the string -> make string an object -> store it in the object

- serialization and Deserialization of trees/pickling in python

## 09-02-2025

**objects revesion**
- if keys have space how would you access
    - we use object["key name"]

**Prototypes**
- this 
- Array.prototype.forEach polyfill
- Array.prototype.map polyfill