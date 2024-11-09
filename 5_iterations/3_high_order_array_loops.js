//  for of loops  -> not to need initialized loops iteration and check conditions. 

//  [" ", " ", " "]  -> string in array
//  [{}, {}, {}]  -> object in array


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    
}


const str = "hello world"

for (const string of str) {
    // if (string == " ") {
    //     break;
    // }
    console.log(string);
    
}



// Maps -> store unique value.

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('IN' , "India")
map.set('FR' , "France")

// console.log(map);

for (const key of map) {
    console.log(key);
    
}

// after destructuring in array
for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    fruit : 'apple',
    fruit2 : 'banana',
}

// object is not iterable.

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


