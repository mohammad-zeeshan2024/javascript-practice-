const programmingLanguage = ["js", "py", "C++", "java"]

const values = programmingLanguage.forEach( (item) => {
    console.log(item);
    return item
    
} )

console.log(values);  // for each loop can't return values if you want or not.


// ************* Filter Method *************


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ******** 1st Mehhod ********* 
// const newNums = myNums.filter( (numbers) => numbers > 3)


// ********** 2nd Method ********* 
// when we open | scope -> {} | in arrow function then compulsory to write return before conditions. if we can't write return before condition rturn empty array.

// const newNums = myNums.filter( (numbers) => {
//    return numbers > 4

//    })


// *********** 3rd Method **********
const newNums = []

myNums.forEach( (number) => {
    if(number > 4){
        newNums.push(number)
    }
})

console.log(newNums);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// const userBooks = books.filter( (bk) => bk.genre === 'History')


const userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === 'Science'
})


console.log(userBooks);
  



