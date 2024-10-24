const name = "zeeshan"
let age = 23


// console.log("hello my name is " + name + " my age is " + age);  // old way to write


console.log(`hello my name is ${name} and my age is ${age}`);  // modern way to write its called string interpolation


const gameName = new String('football')

console.log(gameName[0]);  // access key value pairs. Which one is 0 index
console.log(gameName.__proto__);  // (.__proto__) check proto types of string 


console.log(gameName.length);  // to check length
console.log(gameName.toUpperCase());  // to convert all characters to uppercase
console.log(gameName.charAt(2));  // to check which character is no-> 2 indexing
console.log(gameName.indexOf('b'));  // to check which position of indexing b coming out


const newString = gameName.substring(0, 4)  // substring used to extract a section the string, ex-> (0, 4) we can see subtraction is start to 0 indexing and goes one less than our given indexing.

// substring is doesn't accept negative indexing.
// if we give - indexing value substring ignore the value and he will consider 0 index.

console.log(newString);


const anotherString = gameName.slice(-6, 4)  // slice used to extract a section the string, ex-> (-6, 4) we can see slicing is start to -6 indexing and goes one less than our given indexing.

// slice is accept negative indexing its help we can reverse indexing.
console.log(anotherString);  


const newOneString = "   zeeshan   " 
console.log(newOneString);
console.log(newOneString.trim());  // trim is used for remove extra white space from string.


const url = "https://zeeshan.com/mohammed%20zeeshan"

console.log(url.replace( '%20', '-'));  // with the help of replace some value of given string.

console.log(url.includes('in'));  // with the help of we know, whether the value in string given by us is there or not.


const user = "mohammad-zeeshan-23"

console.log(user.split('-'));  // with the help of split() we can separate the character or regular expression the defines where the split() 














