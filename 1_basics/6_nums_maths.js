// ************************ Numbers ************************

const score = 400
console.log(score);

const balance = new Number(400)  // best way to write 
console.log(balance);


console.log(balance.toString().length);  // Number convert in string.

console.log(balance.toFixed(2));



let num = new Number(12.546783)

console.log(num.toFixed(2));  
// with the help of toFixrd() method its allow the Number of digits after the decimal point. Ex -> output is 12.55

console.log(num.toFixed(4));  // output is -> 12.5468



// toPrecision() method formats a number to a specified length (precision), including both the integer and fractional parts. The result is returned as a string.

let numb = 123.4567;

console.log(numb.toPrecision(4)); // Output: "123.5"
console.log(numb.toPrecision(2)); // Output: "1.2e+2"
console.log(numb.toPrecision(6)); // Output: "123.457"

// toPrecision(4) means the number will be represented with four significant digits, regardless of whether they're before or after the decimal point.

// If the number of significant digits is smaller than the length of the integer part, it rounds the number.

// This method also returns the result as a string.


const hundreds = 1000000

console.log(hundreds.toLocaleString());  
// if we only call toLocaleString() method value we provide US standards values.

console.log(hundreds.toLocaleString('en-IN'));  
// if we call toLocaleString('en-IN) method value we provide indian standards values.



// ************************ Maths ************************


console.log(Math);
console.log(Math.abs(-5));  
// this method Maths.abs() method we provide positive number. 
// Return -> 4

console.log(Math.round(4.6));  
// this method round the number of nearest integer.
// if fraction part of the number is 0.5 or greater, the argument is rounded up to the next integer.
// if fraction part is less than 0.5, the argument is rounded down.

console.log(Math.ceil(4.2));  
// this methode is used to round a number up the next largest intiger, even if the number is already an integer.
// this method is useful when you always want to round a number upwards.

console.log(Math.floor(4.9));  
// this method is useful when you always want to round a number downwards. // Return -> 4

console.log(Math.min(7,8,9,5,7));
console.log(Math.max(7,8,9,5,7));


console.log(Math.random());  // always returns the value between 0 and 1.

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1 
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1))+ min);

