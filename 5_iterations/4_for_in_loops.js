// for in loops for object iterations.

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
}

for (const key in myObject) {
    // console.log(key);  // this console only output object key.

    // console.log(myObject[key]);  // this console only output object value.

    // console.log(`${key} is shortcut of ${myObject[key]}`);
        
 
}



// for in loops on Array iteration.

const programmingLanguage = ["js", "py", "C++", "java"]

for (const key in programmingLanguage) {
    // console.log(key);  // this console print array indexing.

    // console.log(programmingLanguage[key]);  // this console print array value.
      
}



// for in loops on Map not iterable.
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('IN' , "India")
map.set('FR' , "France")

// console.log(map);

for (const key in map) {
    console.log(key);
    
}


