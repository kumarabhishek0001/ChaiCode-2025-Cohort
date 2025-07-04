let bill = 2000;


// in afunction when return is encountered the next lines will not be executed
function calculateBill(amount){
    //* method-1
    /* if(amount>=1000){
        let effectivezCost = amount-[(10/100)*amount]
        return effectivezCost
    }
    return amount */

    //* method-2 -> ternary operator
    return amount > 100 ? amount*0.9 : amount
}

const result = calculateBill(bill)
// console.log(result)


const lightColor = 'green'



function trafficSignal(color){

    switch (color) {
        case 'red':
            console.log('STOP')
            break;

        case 'yellow':
            console.log('WAIT')
            break;

        case 'green':
            console.log('GO')
            break;

        default:
            break;
    }
}

// trafficSignal(lightColor)



//* truthy and falsy
function checkTruthyValue(value){
    if(value){
        console.log(`${value} is truthy`)
    }
    else{
        console.log(`'${value} is falsy`)
    }
}

// checkTruthyValue([])

//* and operator (&&) / Or operator(||)
function login(username, password){
    if(username==="Admin" && password===12345){
        console.log('Login successfull')
    }

    else{
        console.log('invalid credentials')
    }
}

login("Admin", 12345)