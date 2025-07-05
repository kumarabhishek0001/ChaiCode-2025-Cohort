let salesData = [
    {product:'Laptop', price:1200},
    {product:'Smartphone', price:800},
    {product:'Headphones', price:150},
    {product:'Keyboard', price:80}
]

const initialValue = 0
const totalSales = salesData.reduce((acc, sale) => (
    acc+sale.price
), initialValue)

// console.log(totalSales)

let userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33},
]


const maxUserActivity = userActivity.reduce((maxUser, user) => (
    user.activityCount > maxUser.activityCount ? user : maxUser
))

console.log(maxUserActivity)


