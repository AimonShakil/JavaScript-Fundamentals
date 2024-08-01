
// break and Continue Key Words
// How to break a flow of a Control flow


for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(" Detected 5");
        break;

    }
    console.log(` value of i is ${i}`);  
};

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(" Detected 5");
       continue; // skips one condition and continue other

    }
    console.log(` value of i is ${i}`);  
};

