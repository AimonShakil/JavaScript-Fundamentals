//MAP Callback function


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]// intendedto add 10 to every number  
const newNums = myNums.map((num) => num + 10) // map returns
console.log(newNums);

// Chaining Concept
// means map() with in map() or filter with in map

const Nums2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums2 = Nums2
                        .map( (num) => num * 10 ) // cha
                        .map( (num) => num + 1 ) // chaining works on above method
                        .filter( (num) => num >=40 ) // filter whichevre is true / false will return  
console.log(newNums2);