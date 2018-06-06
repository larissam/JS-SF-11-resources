//
// Part 1 - Function Declarations
//
// Use a function declaration to make a function called catTalk, which logs 'Meow' to the console

// Your code here!
function catTalk() {
    console.log('Meow');
}





//
// Part 2 - Function Expressions
//
// Use a function expression to make a function called catTalkExpression, which logs 'Meow' to the console

// Your code here!
let catTalkExpression = function() {
    console.log('Meow');
}






//
// Part 3 - Calling vs Declaring
//
// Call your functions to make sure they work!

// Your code here!
catTalk();
catTalkExpression();




//
// Part 4 - Return
//

// 1. Look at the code as-is. What do you expect the value of answer to be?
// 2. Now uncomment out the 'return result;' line. What is the value of answer now?
function sum(num1, num2) {
    let result = num1 + num2;
    console.log(result);
    // return result;
}

let answer = sum(3, 4);
console.log('answer: ', answer);