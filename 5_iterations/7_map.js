const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // add 10 in each array.

// const newNum = myNumbers.map( (num) => num + 10)
// console.log(newNum);


// ************** Chaining Method ****************

const newNums = myNumbers
                .map((num) => num * 10)  // output of this code is -> [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map((num) => num + 1)  // output of this code is -> [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                .filter((num) => num >= 30)    // output of this code is -> [31, 41, 51, 61, 71, 81, 91, 101]

console.log(newNums);



