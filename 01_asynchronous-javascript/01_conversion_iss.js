
/* Notes:
we can do type conversion into number string and Boolean as well, with writing it with Capital DataTypes this is associated with Class Names names
Importantly Browsers returns us values in string and that we need to convert. This issue is with JS and is eradicated in TS.

*/


let isLoggedIn = 1
letBooleanLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn); 

/* 1 => true
   0 => False
   " " => False
   " value " => True */