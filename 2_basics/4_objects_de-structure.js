// Object Singleton
 
// const user = new Object()  // singleton object
const user = {}  // non singleton Object

user.id = "123abc"
user.name = "zeeshan"
user.loggedIn = false

console.log(user);


const regularUser = {
    email : "zeeshan@gmail.com",
    fullName : {
        userFullName : {
            firstName : "mohammad",
            lastName : "zeeshan",
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// merge two object .assign() method.
// const obj3 = Object.assign({}, obj1, obj2)
// if we not assign {}, obj1 is trite like target and obj2 is a source.

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(user);

console.log(Object.keys(user));  // the help of .key() method we can access the object keys in array. 

console.log(Object.values(user));  // the help of .values() method we can access the object values in array. 

console.log(Object.entries(user));  // the help of .entries() method convert object keys values in one Array.

// Determines whether an object has a property with the specified name.
console.log(user.hasOwnProperty('email'));



// *************** Objects De-structure ***************


const myEducation = {
    course : "BCA",
    fees : "10800",
    collegeName : "Du-Sol",
}

// const {collegeName} = myEducation
// console.log(collegeName);

// Objects De-structure
const {collegeName : college} = myEducation
console.log(college);









