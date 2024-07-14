// why we want an IIFE -->
// 1: EXample Some times we write a file whch only contains a DB function and we want that as our application starts our DB connection Immediately starts aswell
// 2: Other reason is that as in Global scope variables are declared and we are writing in a function and we dont want that global variable do problems as they are available( as child can access parents) so whatever we are declaring they can get polluted from Global variable
// these are the two main reasons we don not want pollution fro global variables
// so we make a seperate scope and also wants that it will imediately execute there

function newOne () {
    console.log(" DB Connected");
}
newOne(), // here function is immediately Invoked but what about pollution from Global Scope

//() ();  --> this is syntax for IIFI semicolon is must and we out function iside first parenthesis


// This is a Named IIFI
( function newOne2 () {
    console.log(" DB Connected 2");
}) (); // remember if dont putting semicolon next will not execute and give error, as it is invoked but dont know where to stop context

// Arrow Function can also be put inside IIFI

//  
((name ) => { 
    console.log(`DB Connectted 1 ${name}`);
}) ("amCucum"); 