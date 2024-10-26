function sayMyName() {
    console.log("Z");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    
}

// sayMyName()


// function addTwoNumbers (num1, num2){
//     console.log(num1 + num2);
    
// }

// addTwoNumbers(4, 4)
// const result = addTwoNumbers(3, 4)
// console.log("Result", result);



function addTwoNumbers (num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);


function loginUserMessage (username){
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Zeeshan"));
// console.log(loginUserMessage());
console.log(loginUserMessage(""));




// function calculateCartPrice (num1){
//     return num1
// }

// console.log(calculateCartPrice(100, 200, 300, 500, 8932));


// now we use rest operator (...)
// function calculateCartPrice (...num1){
//     return num1
// }

// console.log(calculateCartPrice(100, 200, 300, 500, 8932));



function calculateCartPrice (val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 500, 8932));



const user = {
    username : "Zeeshan",
    price : 200,
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}

// handleobject(user)

handleobject({
    username : "Mohammed",
    price : 498,
})


const myNewArray = [100, 200, 300, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([300, 687, 78, 635,897]));
