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
// Operation Splice manipulates Original Array and Slice do not range changes but also but main is manipulation

console.log("A", myArray); // original

const myn1 = myArray.slice(1,3) // last range not included
console.log(myn1); // [1,2]

console.log("B", myArray);  //[0,1,2,3,4,5]   , org arayr remains same and not manipulated 

const myn2 = myArray.splice(1,3) 
console.log("C", myArray); [0,4,5] // portion omitted, or array manipulated
console.log(myn2); // [1,2,3]

// Which Operation Manipulates Original Arrays and which Not --> Most Imp Concept
