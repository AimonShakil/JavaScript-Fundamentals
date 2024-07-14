//Reduce Method

const myNums =  [1, 2, 3,];
console.log(`acc: ${acc} and curval: ${currval}`);
const myTotal = myNums.reduce ( function (acc, currval) {
    acc +currval} , 0 )

    console.log(myTotal);


// writing same in Arrow Function

const myTotal2 = myNums.reduce ( (acc, currval) => acc +currval , 0 )

// Shopping cart Example
// need to make a functionality to add all prices in shopping cart, and we will be using quite basic reduce

const ShoppingCart = [
    {   
        itemname: "js Course",
        price: 2999,
    },
    {   
        itemname: "TS Course",
        price: 3999,
    },
    {   
        itemname: "py Course",
        price: 4999,
    },
    {   
        itemname: "Rs Course",
        price: 7999,
    },
];

const pricetoPay = ShoppingCart.reduce( (acc, item) => acc + item.price, 0 ) // practically we varify that price is in number not string etc before
console.log(pricetoPay);