/*

Add event listeners to the 3 buttons at the top of the page.
Clicking each button should hide the block below it with the corresponding color.

*/

// STEP 1
// After the variable declarations below, write statements setting the value of each variable to reference one of the three buttons at the top of the page.
// (HINT: The buttons are p elements with the id values r, b, and y.)

let redBtn;
let blueBtn;
let yellowBtn;

redBtn = document.querySelector('#redBtn');
blueBtn = document.querySelector('#blueBtn');
yellowBtn = document.querySelector('#yellowBtn');



// STEP 2
// After the variable declarations below, write statements setting the value of each variable to reference one of the three blocks in the middle of the page.
// (HINT: The blocks are div elements with the class values red, blue, and yellow.)

let redBlock;
let blueBlock;
let yellowBlock;

redBlock = document.querySelector('#redBlock');
blueBlock = document.querySelector('#blueBlock');
yellowBlock = document.querySelector('#yellowBlock');


// STEP 3
// Write a statement to add an event listener to the redBtn element. In response to the click event, it should add the class name 'hidden' to the redBlock element.

redBtn.addEventListener('click', function(){
    redBlock.classList.add('hidden');
});


// STEP 4
// Write a statement to add an event listener to the blueBtn element. In response to the click event, it should add the class name 'hidden' to the blueBlock element.

blueBtn.addEventListener('click', function() {
    blueBlock.classList.add('hidden');
});

// STEP 5
// Write a statement to add an event listener to the yellowBtn element. In response to the click event, it should add the class name 'hidden' to the yellowBlock element.

yellowBtn.addEventListener('click', function() {
    yellowBlock.classList.add('hidden');
});


// BONUS
// Add an event listener for the "Show all blocks" button that removes the hidden class from all the colored block elements.
// (HINT: Use a loop.)

const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', function() {
    document.querySelectorAll('.block').forEach(function(block) {
        block.classList.remove('hidden');
    });
});