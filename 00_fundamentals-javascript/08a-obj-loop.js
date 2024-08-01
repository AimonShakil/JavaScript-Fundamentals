//Loops on Objects
// use forIn loop for Objects

const myObj  = {
    js: " java Script",
    TS: "TypeScript",
    Sw: "Swift"
}

for (const key in myObj) {
    console.log(`${key} shorcut is for ${myObj[key]}`);
}

// for in Loop on Arrays also gives us Keys but if put like object name[key] it gives us values