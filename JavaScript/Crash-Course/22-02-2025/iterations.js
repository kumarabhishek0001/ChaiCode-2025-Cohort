let salesData = [
    {product:'Laptop', price:1200},
    {product:'Smartphone', price:800},
    {product:'Headphones', price:150},
    {product:'Keyboard', price:80}
]




function totalSalesCalculator(data){
    let totalSales = 0
    data.forEach((item) => {
        totalSales = totalSales + item.price
    })

    return totalSales
}

console.log(totalSalesCalculator(salesData))