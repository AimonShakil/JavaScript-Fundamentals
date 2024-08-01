// Iteration on Arrays
// Always have 2 types of loops on Arrays 

// For Each and Map 

// some of the loops on array are being directly added into the properties 
// in prototypes parameter of Loops such as "for each and map" is being injected in by deault

const coding = ["js", "ts", "ruby"]
coding.forEach((items) => {
    console.log(items);
})


// passing a function with a function as a Parameter
function printMe (item){
    console.log(item);
}
coding.forEach(printMe); // only passed refernce of function not () otherwise execute directly there

coding.forEach( (item,  index, arr) => {
    console.log(item, index, arr);

})


// [ {} , {}, {}]
// we have to learn iteration on Array of Objects 
// coz from DB data comes in the form of array from and each value is an Object
// Doing that using For Each Loop

let myCoding = [
    {
        languagename: "javaScript",
        lagFile: "js"
    },
    {
        languagename: "java",
        lagFile: "java"
    },
    {
        languagename: "pyhon",
        lagFile: "py"
    },
    {
        languagename: "Typescript",
        lagFile: "TS"
    },
]

myCoding.forEach( (item) => {
    item.languagename
})