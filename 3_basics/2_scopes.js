// var variable prefer to note use

// var c = 300
let a = 300  // global Scope  // if this varible comment out console.log(a) not print in terminal.

if (true) {
    let a = 10  // local scope
    const b = 20  // local scope
    var c = 567   // local scope
    console.log("inner : ", a);
    
}

console.log(a); 
// console.log(b);  // not print in trminal
// console.log(c);  // this is accessible and also create a problem to creating a project.




function one(){
    const userName = "zeeshan"

    function two(){
        const website = "zeeshan.com"
        console.log(userName);
    }

    // console.log(website);  // this is a local variable function of two, because it is not accessible out of function two().
    
    two()
}

one()



if (true){
    const userName = "Zeeshan"
    if(userName === "Zeeshan"){
        const website = " zeeshan.com"
        console.log(userName + website);
    }

    // console.log(website);  // not print in terminal, because website is local scope.

    console.log(userName);
    
}
// console.log(userName);  // not print in terminal, because userName is local scope.



//  *************** Interesting **************


console.log(addOne(6));  // this will work.
function addOne(num){
    return num + 1
}

// console.log(addOne(6));



// sometime its called expressions, but it is a funnction
console.log(addTwo(7)); // this will not work because function declared in variable.
const addTwo = function(num){   
    return num + 3
}

// console.log(addTwo(7));

