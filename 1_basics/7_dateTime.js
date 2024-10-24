// Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());

console.log(typeof myDate);


let myCreatedDate = new Date(2022, 2, 12)
console.log(myCreatedDate.toDateString());

let anotherMyCreatedDate = new Date(2022, 2, 12, 5, 7)
console.log(anotherMyCreatedDate.toLocaleString());




