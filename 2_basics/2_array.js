const marvelHeros = ["Ironman", "Thor", "Hulk"]
const dcHeros = ["batman", "Superman", "Aquaman"]

console.log(marvelHeros);
console.log(dcHeros);


// marvelHeros.push(dcHeros) // not prefer this method because access the elements is difficult.

// console.log(marvelHeros);

// if we want to access the dcHeros (Superman) so write this type of Array indexing.

// console.log(marvelHeros[3][1]);


// .concat() method Combines two or more arrays. This method returns a new array without modifying any existing arrays.

const superHeros = marvelHeros.concat(dcHeros)
console.log(superHeros);


// Spred operator

const allSuperHeros = [...marvelHeros, ...dcHeros]
console.log(allSuperHeros);
console.log(typeof allSuperHeros);
console.log(allSuperHeros[3]);



const newArray = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10], 11, 12, 13, 14, [15, 16]]

// .flat() method Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const solveNewArray = newArray.flat(Infinity)
console.log(solveNewArray);


//.isArray() method is used to check providing data types is Array or Not.
console.log(Array.isArray("Zeeshan"));

// .form() method is used to convert data types to Array.
console.log(Array.from("Zeeshan"));
console.log(Array.from(123456));  // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

// Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));










