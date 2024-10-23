// types of memory : 1. Stack Memory; 2. Heap Memory

// 1. Stack memory (use for Primitive Data Types)

// wheneever Stack memory is used, we get a copy of whatever variable we have declared. 


let userName = "Mohammad Zeeshan"
let anotherUserName = userName

console.log(anotherUserName);

anotherUserName = "Mohammad"

console.log(userName);
console.log(anotherUserName);



// 2. Heap memory (use for Non-Primitive data types)

// whenever we use Heap memory, whatever Array, object and Function we have decleared. We get the reference of original Value. 


let userOne = {
    email : "user@gmail.com",
    name : "zeeshan",
}

let userTwo = userOne

userTwo.email = "123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

