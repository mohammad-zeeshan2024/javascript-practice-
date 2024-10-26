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