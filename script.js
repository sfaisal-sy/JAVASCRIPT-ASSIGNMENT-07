// Online JavaScript Compiler (interpreter) - Run JavaScript Code Instantly
// Use this powerful online JavaScript editor to write and test code in real-time.
console.log("Run Javascript code online with WsCube Tech")

/*
Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number

*/

/////////////////////////////////////////
/// 1

let intergerNumber = 3.45214;

console.log(`Round of value of Number:  ${Math.round(intergerNumber)}`);
console.log(`Floor value of Number : ${Math.floor(intergerNumber)}`);
console.log(`Ceil value of Number : ${Math.ceil(intergerNumber)}`);

/////////////////////////////////////////
///2


let negitiveNumber = -2.673;

console.log(`Round of value of Number:  ${Math.round(negitiveNumber)}`);
console.log(`Floor value of Number : ${Math.floor(negitiveNumber)}`);
console.log(`Ceil value of Number : ${Math.ceil(negitiveNumber)}`);

/////////////////////////////////////////
///3


let num = -4;   // you can change this number

if (num < 0) {
    num = -num;
}

console.log("Absolute value is:", num);




////////////////////////////////////////
///4

let diceNumber = Math.floor(Math.random() * 6 + 1);

console.log(`Random Value of Dice is : ${diceNumber}`);


///////////////////////////////////////
///5


let randomNumber = Math.floor(Math.random()* 2 + 1);

if (randomNumber === 1){
    console.log(`Random Coin Value is : TAILS`)
} else {
    console.log(`Random Coin Value is : HEAD`)
}


//////////////////////////////////////
///6

let randonNumber1To100 = Math.floor(Math.random() * 100 + 1);

console.log(`Random Number Between 1 to 100 is : ${randonNumber1To100}`);


//////////////////////////////////////
///7

let userInput = prompt('Enter your weigth in Kgs');

console.log(`The weight of the user is : ${userInput}`)


//////////////////////////////////////
///8



let userNumber = Number(prompt('Enter a number between 1 to 10'));
let secretNumber = Math.floor(Math.random() * 10) + 1;

if (userNumber < 1 || userNumber > 10) {
    console.log('Please enter a number between 1 and 10');
} else if (userNumber === secretNumber) {
    console.log(`Congratulations! You matched the secret number: ${secretNumber}`);
} else {
    console.log(`Try again! The secret number was: ${secretNumber}`);
}