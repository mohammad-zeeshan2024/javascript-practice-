// Immediately Invoked Function Expression (IIFE)

// to avoid pollution of global scope we used (IIFE)

(function call (){
    // Named IIFE
    console.log(`Database Connected`);  
})();


// iife in arrow function
( (name) => {
    console.log(`Database Connected Two ${name}`);
}) ("Zeeshan");


