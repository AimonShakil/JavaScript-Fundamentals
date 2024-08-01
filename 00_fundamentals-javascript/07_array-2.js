//Imp Concepts for React & Node.js

const marvelsHeroes  = ["Thor", "Ironman", "Spiderman"];
const dcHeroes  = ["Superman", "flash", "batman"];

marvelsHeroes.push(dcHeroes);
console.log(marvelsHeroes); // it put dcHeroes array with In Marvel her Array which is not good, 
//it also took array as a data and acts as a single element here similar 

//Concats returns new Array and It merges two arrays

const allHeros = marvelsHeroes.concat(dcHeroes);
console.log(allHeros);

//Using Spread Operator is better than Concat

let all_new_heros = [...marvelsHeroes, ...dcHeroes];
console.log(all_new_heros); // 

const anotherArray= [1,2,3[4,5],6,7[8,9,10]];
const real_another_Array = anotherArray.flat(Infinity); // here we have to give nmbers to which depth we have to solve or Infinity
console.log(real_another_Array); // it will make it complete one array

//Another Imp thing about array when we were doing Data Scrapping , when we scrap data from webiste it comes 
// in another format like node list, ojects or string and we need Array coz we can loop on Array. so, over there we can use array like
// this , we can ask using . and can also convert 


console.log(Array.isArray("Cucumber")); // not an array False 
// Can Convert
console.log(Array.from("Cucumber")); // it will convert to an Array [c, u, c, u, m, b, e, r]

// when we pass an Object


// it returns an empty array , further in projects we tell that make an array from keys or values
console.log(Array.from({name : "cucumber"})); 


// we will have situation when we need to convert multiple vsriables to arrays 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // it will be converted to any array
