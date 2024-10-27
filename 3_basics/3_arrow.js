const user = {
    userName : "zeeshan",
    price : 899,

    welcomeMessage : function(){
        console.log(`${this.userName}, Welcome to website`);
        console.log(this); // here (this) stand for current contexts(values).
        
    }
}

user.welcomeMessage()
user.userName = "Ahmad"
user.welcomeMessage()

console.log(this);  // here (this) is empty object print {}, because we are in node environment not the browser.



// function zeeshan(){
//     let education = "BCA"
//     // console.log(this);  // please check
//     console.log(this.education);  //  here console.log(this.education); not work, because it is a function, it will be only work on object.
    
// }
// zeeshan()




// Arrow functions declared as ->

// () => {

// }


const zeeshan = () => {
    let qualification = "BCA"
    console.log(this);
    
}

zeeshan()

// basics arrow function
// const addTwo = (num1, num2) => {
//    return console.log(num1 + num2);
   
// }
// addTwo(4, 6)

// importaint note -> if we used {} in arrow function, compulsory to write return. and we used () not need to write return.

// implicit return
const addTwo = (num1, num2) => ( console.log(num1 + num2) );
   
addTwo(4, 6)


