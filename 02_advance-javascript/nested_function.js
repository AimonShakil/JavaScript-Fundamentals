/* LEXICAL SCOPE */

/*this is an exmple of lexical scoping which describes how JS resolves variable names when functions are nested.
JS starts looking from inner most function and moves outwoards until it reaches the global scope
Nested functions have access to variables in thier own scope as well as outer scope. */ 


let a = 10;
function outer () {
    let b = 20
    function inner () {
        let c = 30 
        console.log(a,b,c);
    }
    inner()
} outer ()