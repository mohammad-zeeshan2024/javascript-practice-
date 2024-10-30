// if

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==  // compare operator


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  // not execute, because there power variabe is an scope variable not a global variable. 


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  // this is not a good practice to write code.

if (balance < 500) {
    console.log(`less than 500`);

} else if (balance < 700) {
    console.log(`less than 700`);
    
} else {
    console.log(`balance is less than 2000`);
    
}


// CHECK CONDITION

const userLoggedIn = true
const userHaveDebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && operator compared both statements is true, then code is  execute. 
if (userLoggedIn && userHaveDebitCard) {
    console.log(`Allow to buy` );

  //  (or operator) || compared one statement is true, then code is execute and.
  
} else if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(`Allow to logged in user`);
    
}
