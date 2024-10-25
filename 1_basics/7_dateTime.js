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

let myTimeStamp = Date.now()  // this function returns milliseconds 1 jan 1970 to till date

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  // convert milliseconds to seconds.



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  // month started from 0 index (0 -> january) and 11 index (11 -> December).

console.log(newDate.getDay());  // day started monday (monday -> 1)


newDate.toLocaleString('default', {   // we can also use as object.
    weekday : "long",

})











