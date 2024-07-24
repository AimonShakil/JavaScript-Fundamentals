import { input, confirm, select } from '@inquirer/prompts';

//Input name
let player_name = await input ({message : 'Please enter your name: '}, )
console.log(player_name);

//Choice
let consent =await confirm ({message : `Dear ${player_name}, do you want to play a game`})
console.log(consent);

//game start
if (consent == true) {
   let secret_num = Math.floor(Math.random() * 10) +1;
   console.log(`computer Player, I have picked my number now its your turn!`);
   

   // players choice
let choice = await select (
    {message : "please select some random number", choices: [
    {name : "1", value: 1}, 
    {name : "2", value: 2 }, 
    {name : "3", value: 3 },
    {name : "4", value: 4},
    {name : "5", value: 5 }
]})

if (secret_num === choice) {
    console.log(`congratulations 🎉 ${player_name} you won!`);  
}  else {
    console.log(`${player_name} you have chosen ${choice} and i've picked ${secret_num}, you Loose \n Better Lucl next time`);  
}


}else {
    console.log(`see u soon ${player_name}!`);    
}



