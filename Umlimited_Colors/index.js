//generate random colors
//random colors generate from Hex code

const randomColor =  function() {
const hex = "0123456789ABCDEF";
let color ='#'
for(let i=0; i<6; i++){
color += hex[Math.floor(Math.random() * 16 )]
}
return color
};

let intervalID;
const startChangingColor = function () {

    if (!intervalID) {
    intervalID = setInterval(changBGColor, 1000)}
    
    const changBGColor = function () {  
    document.body.style.backgroundColor = randomColor();
    } 
};
    const stopChangingColor = function () {
    clearInterval(intervalID)
    intervalID =null; // means after clear we are flushing out , added professionalism and make code clearer as we have clear the value also we are derefrancing and setting value to null
};


document.querySelector("#start"). addEventListener('click', startChangingColor);
document.querySelector("#stop"). addEventListener('click', stopChangingColor)

