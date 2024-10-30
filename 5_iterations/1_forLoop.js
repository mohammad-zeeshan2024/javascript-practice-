// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    // if (element == 7) {
        // console.log("7 Thala for a reason");
        // break;
    // }
    // console.log(element);
    
}


// nested for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`first loop ${element}`);

    for (let j = 1; j <= 10; j++) {
        const element2 = j;
        // console.log(`second loop ${element2}, first loop ${element}`);
        
        // console.log(`${element} * ${element2} = ${element * element2}`);
        
        
        
    }
    
    
}



let newArr = ["apple", "banana", "Chery"]

for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];
    // console.log(element);
    
    
}


// break and continue 


// break is used for break any control flow.
for (let index = 1; index <= 15 ; index++) {

    if (index == 8) {
        // console.log(`we find no 8`);
        // break;
        
    }
    const element = index;
    // console.log(index);
    
}


// countinue
for (let index = 1; index <= 15 ; index++) {

    if (index == 8) {
        console.log(`we find no 8`);
        continue;
        
    }
    const element = index;
    console.log(index);
    
}