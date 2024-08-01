function outer() {
    let counter = 0
    function inner() {
        counter ++
        console.log(counter);
    } inner()
}outer()  // we will invoke inner function within outer function
outer () // calling fnc twice creates another memory and ini state again zero and we get 1


/* Above we have defined inner function and invoked it within outer function, lets say we dont necessarily need to 
invoke inner function right away, instead we want to return a function and invoke it at a later point in time 
in JS it is possible to return functions from another functions so lets return inner, in doing so we can assign the
result of a invoking out of a function to a variable lets say const fn is equal to  invoking the outer functions,
this results in the inner function, so lets invoke fn function twice   */
// instead of executing the inner function with in outer function we are returning it and then invoking it twice 

/* Closure is created when a function is returned from another function, on line 25 we are returning an inner  
function from an outer function and it turns out from such a scnerio JS doest return just inner function it reutrns 
inner function as well as it scope and in exm below function scope has 1 variable counter initilaized to "1", so 
function inner is bundled together with counter which together termed as a closure, so in such situations the function
will persists or remember the value of counter variable, so invoking fn function for the first time  counter incremented to 
1 and valued logged, but fn function though remeber counter value 1 so invoking it next time it increments the counter
value to 1+2 which isd 3 thts the reason we see output 2 and 2. */

/* Key Point: with closures an inner function has access to variables in the outer function scope even 
when the outer function has finished execution, seesing at line 40 it completes its execution but inner function still
have access to counter variable which is actually availbale defined in the outer function scope  */




function outer1() {
    let counter = 1
    function inner1() {
        counter ++
        console.log(counter);
    } 
    return inner1
}
const fn = outer1()  // we will invoke inner function within outer function
fn()
fn() // answer is 2 and 3 this is because the concept of Closures within JS