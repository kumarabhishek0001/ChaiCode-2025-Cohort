let inventory = [
    {name:"widget A", stock: 30},
    {name:"widget B", stock: 120},
    {name:"widget C", stock: 45},
    {name:"widget D", stock: 70},
]

let result = inventory.filter((item) => item.stock<50)
console.log(result)