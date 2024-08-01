// Truthee and Falsee's values concept in JS

/* falsy Values & Truthy values concept.
truthy and falsy values exist in TypeScript, just like in JS. Truthy and falsy values are values that /n
evaluate to true or false when used in a boolean context.

In TypeScript (as in JavaScript), the following values are considered falsy:

false: The boolean value false.
0: The number zero.
-0: Negative zero.
0n: BigInt zero.
'' or "": An empty string.
null: The value null.
undefined: The value undefined.
NaN: Not a Number.
All other values are considered truthy. This includes non-empty strings, non-zero numbers, non-empty arrays, /n
objects, functions, and any non-null object.

Truthy : "0", 'false', " " ,[] Array empty , {} object empty , function (){} empty function */
//Detecting if array or Object is empty or not:
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) { // return an array 
    console.log("Object is empty");
}


/* Fasly Value; means values assumed as False
false
0
-0
bigIn 0n
""
null
undefined
Nan

Truthy Values
[ ] : empty array
" 0 " 0 in string 
'false'
" " strring with space is even truthy 
{}
function (){} --> this is an empty function */

// Next Important is detecting an empty Array and An Empty Object

let userEmail = [];
if (userEmail.length === 0 ) { // call length properyt and check it with === 0 
    console.log(" array is Empty");
}

// Empty Objects

let emptyObjects = {};
if (Object.keys(emptyObjects).length === 0);  /* writng "Key()" " like this end of day comes as an Array of Keys,
now " (Object.keys(emptyObjects)" this complete situation returns an array" this is a v common practice */
console.log("obj is empty");

// Nullish Coalsing Operator ?? : null and Undefined


// using of Nullish opr means that specially when we call from DB or using firebase we get two responses and dot get 1 value
// and chances are we get null respone or undefinedin that case whole structure of code can be distrubed so for that
// cases, we have to treat values that if null comes so assign null in that so we can adjust case accordingly, if undefined
// its fine otherwise if value is coming assign a value  


let val1;

//val1 = 5 ?? 10
val1 = null ?? 10 // if null value comes it do a safety check

console.log(val1); // gives 1st value 

// Nullish coelises operator ad ternary Operators are Different

// Ternary Operator
condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >=80 ? console.log("less than Hundred") : console.log("more Than 80");

