// Primitive data type

// 7 types : String, Number, Boolean, null, Symbol, BigInt



let userName = "zeeshan"  // string data type
console.log(typeof userName);  


const scoreValue = 100.8  // Number data type
console.log(typeof scoreValue);


let score = 100  // Number data type
console.log(typeof score);  


let userLoggedIn = false  // Boolean data type
console.log(typeof userLoggedIn);


let weatherTemp = null  // null data type
console.log(typeof weatherTemp);


let userEmailId;  // undefined data type
console.log(typeof userEmailId);


let userId = Symbol('1234')  // symbol data type
let anotherId = Symbol('1234')
console.table([userId, anotherId])
console.log(userId === anotherId);


let bigNumber = 123456789123456789n  // BigInt data type
console.log(typeof bigNumber);



// Reference type (Non primitive)

// 3 types : Array, Objects, Functions

let fruits = ["apple", "banana", "Chery"]  // is Array (but console return object)
console.log(typeof fruits);



let myInfo = {             // Objects
    name : "zeeshan",
    age : 23,
}
console.log(typeof myInfo);



let myfunction = function(){           // function
    console.log("Hello World");
    
}
console.log(typeof myfunction);


