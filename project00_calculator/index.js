import { select, number, Separator, } from '@inquirer/prompts';
import chalkAnimation from 'chalk-animation';
const stop = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let karoke_Title = chalkAnimation.rainbow('Lets start Calculations');
    await stop();
    karoke_Title.stop();
    console.log(`

  
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
  
`);
    let num_1 = await number({ message: 'Please Enter first number' });
    let num_2 = await number({ message: 'Please Enter second number' });
    let operator = await select({ message: 'Pls choose operator, to perform calculation',
        choices: [
            { name: "Add", value: "+" },
            { name: "Subtract", value: "-" },
            { name: "Multiplication", value: "*" },
            { name: "Divide", value: "/" },
            new Separator(),
        ],
    });
    if (num_1 && num_2 !== undefined) {
        let result;
        switch (operator) {
            case '+':
                result = num_1 + num_2;
                console.log("The answer for addition is: " + result);
                break;
            case '-':
                result = num_1 - num_2;
                console.log("The answer for subtraction is: " + result);
                break;
            case '*':
                result = num_1 * num_2;
                console.log("The answer for multiplication is: " + result);
                break;
            case '/':
                result = num_1 / num_2;
                console.log("The answer for division is: " + result);
                break;
        }
    }
    else {
        console.log("Enter numeric only");
    }
}
welcome();
