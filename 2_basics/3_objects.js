// object literals

const  mySymb = Symbol("key1")  
// Symbol declared in object alwas contain [].

const JsUser = {
    name : "Zeeshan",
    "full name" : "mohammad Zeeshan",
    [mySymb] : "mykey1",
    age : 23,
    location : "Delhi",
    email : "zeeshan@gmail.com",
    isLoggedIn : false,
}

console.log(JsUser.email);
console.log(JsUser["email"]);  // second way to access the object
console.log(JsUser["full name"]);

console.log(JsUser[mySymb]);
console.log(typeof JsUser[mySymb]);

JsUser.email = "zeeshan@google.com"  
// (=) change object contain value | object_name.element_name = "change value"|

console.log(JsUser["email"]);

// Object.freeze(JsUser)
// .freeze() method Object on which to lock the attributes

JsUser.email = "zeeshan@outlook.com" 

console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User");    
}

JsUser.greeting2 = function() {
    console.log(`Hello Js User ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





