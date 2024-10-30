const userName = []

if (userName) {
    console.log("Got user name");
    
} else {
    console.log("Don't have user name");
    
}


// falsy Values -> false, 0, -0, "", (BigInt -> 123n), null, undefined, NaN.


// truthy Values -> true, "0", 'false', " ", [], {}, function() {}



if (userName.length === 0) {
    console.log("Array is empaty");
    
}


const emptyObj = {}

// Object.keys() convert object to Array.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}


// Nullish Coalescing Operator (??) null, undefined

let val1;

// val1 = 7 ?? 20
// val1 = null ?? 45
// val1 = undefined ?? 87
val1 = null ?? 90 ?? 54

console.log(val1);



// Terniary Operator

// condition ? true : false

const ticketPrice = 100

ticketPrice <= 80 ? console.log("yes, less than 80") : console.log("No, more than 80");


