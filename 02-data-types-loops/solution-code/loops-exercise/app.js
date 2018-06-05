// Write code that logs the first 10 powers of 2 (ie. 2^1, 2^2, 2^3...) to the console

// BONUS 1: Rewrite your code to allow a user to enter the number of powers they want (instead of 10)
// (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

let numPowers = parseInt(window.prompt('Enter your exponent: '), 10);
for(let i = 1; i <= numPowers; i++) {
    console.log(2**i);
}

// BONUS 2: Rewrite your code to use a while loop rather than a for loop. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

console.log('BONUS 2');
let i = 1;
while(i <= numPowers) {
    console.log(2**i);

    i += 1;
}

// BONUS 3: Rewrite your code to use a do/while loop rather than a for loop or while loop. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

console.log('BONUS 3');
i = 1;
do {
    console.log(2**i);

    i++;
} while(i <= numPowers);