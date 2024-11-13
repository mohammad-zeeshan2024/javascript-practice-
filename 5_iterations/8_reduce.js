const item = [1, 2, 8]

// const totalItem = item.reduce(function(acc , currValue) {

//     console.log(`acc ${acc} currValue ${currValue}`);  // to check Accumulator and Current Value.
    
//     return acc + currValue
// },0)

// console.log(totalItem);


// ********* write in arrow function **********

const totalItem = item.reduce( (acc , currValue) => acc + currValue, 0)

console.log(totalItem);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const billToPay = shoppingCart.reduce ((acc, item) => acc + item.price, 0) 

console.log(billToPay)