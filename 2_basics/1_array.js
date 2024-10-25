const myArr = [1, 2, 3, 4, 5, 6]  // Array indexing started from 0. And Array Contain many types of data Ex -> Number, String etc.

const fruits = ['Apple', 'Mango', 'Banana']
console.log(typeof fruits);


const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[1]);


// Array Method

myArr.push(7) // this meyhod we can used to insert a element in last of Array.
console.log(myArr);

myArr.pop() // this meyhod we can used to remove a element in last of array.
console.log(myArr);

myArr.unshift(5)  // this method insert a elements at the start of the Array.
console.log(myArr);

myArr.shift()  // this method remove a elements at the start of the Array.
console.log(myArr);


console.log(myArr.includes(9));  // to know element are exist or not.

console.log(myArr.indexOf(4));  // to know elements indexing.

const newArr = myArr.join()  // to convert all elements of array in string.
console.log(myArr);

// slice and splis

// Slice -> Returns a copy of a section of an array.

// Splice -> Removes elements from an original array. An array containing the elements that were deleted. 

console.log("A ", myArr);

const myArr3 = myArr.slice(1, 3)
console.log(myArr3);
console.log("B ", myArr);

const myArr4 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myArr4);










