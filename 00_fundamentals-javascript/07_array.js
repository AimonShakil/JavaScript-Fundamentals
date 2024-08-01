const myArray = [ 0, 1, 2, 3, 4, 5]
//push
//pop
//shift
//unshift

console.log(myArray.includes(9)); // result will be boolean type False
console.log(myArray.indexOf(9)); // value which does not exisit result comes -1 whatever the value is 

const newArr = myArray.join()// this method join the array also convers to string
console.log(typeof newArr); 

//Slice and Splice 
// Interview Questions : Tell Difference in Slice and Splice?
// Operation Splice manipulates Original Array and Slice do not range changes but also  main is manipulation

console.log("A", myArray); // original

const myn1 = myArray.slice(1,3) // last range not included
console.log(myn1); // [1,2]

console.log("B", myArray);  //[0,1,2,3,4,5]   , org array remains same and not manipulated 

const myn2 = myArray.splice(1,3) 
console.log("C", myArray); [0,4,5] // portion omitted, or array manipulated
console.log(myn2); // [1,2,3]

// Which Operation Manipulates Original Arrays and which Not --> Most Imp Concept

//+++++++++++++++++++++++++++++++++++

let number_s = [61, 32, 33, 44, 55, 65, 77, 99, 22];
// let names: string[]
//
//console.log(numbers[7]); // [0, 1,2,3,4,5,6,7,8,9] this is array indexing
console.log(number_s);
console.log(number_s.length);
console.log(number_s.push(101)); // [0, 1,2,3,4,5,6,7,8,9101] through this we can incorporate 3 functions in 1
console.log(number_s.length);
console.log(number_s.pop()); // it will print he value it has popped out
console.log(number_s);
console.log(number_s.length);

//
let mixTypes = ["Singleton", "true", "10"]; // one of a type at a time
let mixType2 = [true, false];
let mixType3 = [1, 2, 3, 4];
mixType.push("Alpha");

//mixType.push("True");
//mixType.push("10");
numbers.splice(8, 0, 500);
console.log(numbers.splice(8, 0, 500));
console.log(numbers.splice(8, 2, 500, 600, 700, 800)); // 8th index se 2 elements delete kr diye
console.log(numbers);
let myslice = numbers.slice(8, 11);
console.log(myslice);
let number = [21, 12, 43, 54, 45, 66, 17, 81, 91, 10]; // when we declare array type variable typescript gives somes functions and properties with arrays

//                    [0,  1, 2 ,3 ,4 ,5 , 6, 7, 8, 9] this is indexing
console.log(numbers[7]);
console.log(number[7]);
console.log(numbers.length); // means how many elements are present in the array,Method and function is same 
console.log(number.push(101)); // this method/function push 101 at the end of array
number.pop();
console.log(numbers.splice(5, 2, 600, 700, 800)); //makes a new array and doing in that
console.log(numbers);


// Slice
//Session3
let mySlice = numbers.slice(8, 11);
console.log(mySlice);
let tempArray = [];
let cnincs = []; //empty array declared but not initilaized 
let names = [];
let cLanguages = ["C#", "Java", "COBOL", "C++", "Assembly", "Typescript"];
let mixArray2 = [123,]; // here we can have only one type string or number, one type at a time
mixArray2.push(123);
mixArray2.push(124);
mixArray2.push(34);
mixArray2.push(11);
console.log(mixArray2);
mixArray2 = ["Alpha", "Beta", "Gamma"];
console.log(mixArray2);

//Another way , Arrays is an object having properties and Functions
let mixArray = ["Alpha", "124"]; // can have here both types of data,2 types ja sakhte hai but decison initiliaze krty tim ekrna ho
// this is direct initiliazation

//Another Array
mixArray2.reverse().reverse;
console.log(mixArray2);

// Copying an array
let copyofArray = mixArray2.copyWithin(0, 0);
console.log(copyofArray);

//Looping on Array
const dcHeros = ["Batman", "Thor", "Ironman"];
dcHeros.map(dcHeros => {
    return ` Hero is ${dcHeros}`;
});



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



//MAP Callback function


const myNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]// intendedto add 10 to every number  
const newNumss = myNumss.map((num) => num + 10) // map returns
console.log(newNumss);

// Chaining Concept
// means map() with in map() or filter with in map

const Nums2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumss2 = Nums2
                        .map( (num) => num * 10 ) // cha
                        .map( (num) => num + 1 ) // chaining works on above method
                        .filter( (num) => num >=40 ) // filter whichevre is true / false will return  
console.log(newNumss2);


// for each, Fliter
const coding = ["js", "ts", "ruby"] // dont returns 


const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = numsArr.filter( (num) => num > 4)
console.log(newNums); // givves array from 5 to 10

//but mistake

const newNums2 =  numsArr.filter ( (num) => {
    // num > 4  this gives an error/ empty array coz after new scope return is ,must
})

//
const books = [
    {
      "id": 1,
      "name": "The Russian",
      "type": "fiction",
      "available": true
    },
    {
      "id": 2,
      "name": "Just as I Am",
      "type": "non-fiction",
      "available": false
    },
    {
      "id": 3,
      "name": "The Vanishing Half",
      "type": "fiction",
      "available": true
    },
    {
      "id": 4,
      "name": "The Midnight Library",
      "type": "fiction",
      "available": true
    },
    {
      "id": 5,
      "name": "Untamed",
      "type": "non-fiction",
      "available": true
    },
    {
      "id": 6,
      "name": "Viscount Who Loved Me",
      "type": "fiction",
      "available": true
    }
  ]

//   const userBooks = books.filter ( (bk) => bk.type == 'fiction' )
//   console.log(userBooks);

const userBooks = books.filter ( (bk) => {
bk.id >=4 && bk.type == 'fiction'})
console.log(userBooks); //id 4 and 6 should come









export {};



       

