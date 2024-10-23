console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);



// always compare same data type because we compare two different data types many times values are unpredictable. 

console.log("2" > 1);  // true (JavaScript uses type coercion when comparing a string to a number. In this case, the string "2" is automatically converted to the number 2).

console.log("02" > 1);  // true (JavaScript uses type coercion again. The string "02" is converted to the number 2 (leading zeros are ignored when converting strings to numbers)).


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// The reason is that an equality check == and >, <, >=, <= work differently.

//Comparision converted null to a number, treating it as 0. That's way (null >= 0) is true and (null > 0) is false.


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===  strict equality operator

console.log("2" === 2);  // false (because first is string and second is number)

console.log(2 === 2);  // true (besause both are number)


console.log("2" == 2);  // true (because string "2" is converted to the number 2)



