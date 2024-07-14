// { } when comes with function or if Else or function or  if else scopw
// Scope when we check in Browser Environemt and when check throug node is different

// Nested Scopes:

// Closures always asked in Interviews and to answer well we have to know DOM means how a HTML page is manipuloated throug a JS

//Nested Scopes Function, could be inside a loop or 

function one () {
    const username = "Am"
    function two () {
        const website = "youtube";
        console.log(username);

    }
    console.log(website);
    two(), // if two is Commneted Out One is also not called, to some extent this is called as Closeure as Internal Function can access parent Function but parent cannot 
}
one()

//+++++++++++++++++++++= interesting++++++++++++++++++++++++++++++++++++++++++

function addOne (num) {
    return nm + 1
}


// Hositing Concept that how we hold a function i.e in a variable or so 
// will see in Hoisting and ow a final tree is being made where all variable anf functions are being helsd
