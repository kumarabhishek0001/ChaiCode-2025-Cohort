let chaiRecipie = {
    name : 'masala chai',
    ingredients : {
        "Tea Leaves" : "Assam Tea",
        milk : 'Full Cream Milk',
        sugar : 'brown sugar',
        spices : ['Daalchini', 'ginger']
    },
    instructions : "1. Boil water 2. Add ingrdients"
    
}

//* how to provide key with spaces
// console.log(chaiRecipie.ingredients['Tea Leaves'])


//* overiding of keys
const updatedChaiRecipie ={
    ...chaiRecipie,
    instructions : "1. Boil water, 2. Add ingredients, 3. Serve"
}

// console.log(updatedChaiRecipie)

//* Destrucuring of objects
let {naem, ingredients} = chaiRecipie
console.log(ingredients)





