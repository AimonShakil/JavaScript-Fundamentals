//Generators
/* They are special Class of functions that simplify the task of writing iterators. */

function normalfunction () {} // Normal Function

function* generatorFunction () {
// Generators functions can stop midwway and thencontinue from where it stops , or can say it pases the execution
yield 'Hello' // yield is a opertor with which a generator can pause itself
yield 'world'
}  

const generatorObject = generatorFunction() // it always returns a generator Object
for (const word of generatorObject) { // simpler custom iterator behavior
    console.log(word);
}