let score = "zeeshan"

console.log(typeof score);
console.log(typeof(score));  //second way of write



let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // this console show Number
console.log(valueInNumber); // this console show NaN



// "33" => 33  // convert string into number
// "33abc" => NaN  // console show NaN
//  true => 1; false => 0



let isLoggedIn = "zeeshan"


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);



// 1 => true; 0 => false
// "" => false
// "zeeshan" => true



let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


//  ********************* Operation *********************


let value = 3
let negValue = -value

console.log(negValue);




     // Arithmetic operation //


// console.log(2+2);  // for addition 

// console.log(2-2);  // for subtract 

// console.log(2*2);  // for multiply 

// console.log(2**2);  // for power multiplication

// console.log(2**3);  // for power multiplication 

// console.log(2/2);  // for divide

// console.log(2%2);  // for remainder 



let str1 = 'hello'
let str2 = ' javascript'

let str3 = str2 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");

console.log("1" + 2 + 2);  // 1st is string all automatically convert into string and output is => 122

console.log(1 + 2 + "2");  // this operation output is => 32 


console.log(+true);
console.log(+"");



let game_Counter = 12;
game_Counter++   // postfix operators 

console.log(game_Counter);


let gameCounter = 14;
++gameCounter   // prefix operates 

console.log(gameCounter);



