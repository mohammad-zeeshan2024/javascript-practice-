const programmingLanguage = ["js", "py", "C++", "java"]

// programmingLanguage.forEach( function (val) {
//     console.log(val);
    
// } )



// programmingLanguage.forEach( (item) => {
//     console.log(item);
    
// } )



function print(value){
    console.log(value);
    
}

programmingLanguage.forEach(print)


// for each can access array items, array indexes & array 
programmingLanguage.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    

} )


// for each loops on array object

const codingLanguage = [
    {
        languageName : "Javascript",
        languageFileName : "js",
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "Python",
        languageFileName : "py",
    },
]

codingLanguage.forEach( (item) => {
    console.log(item.languageName);
    

} )