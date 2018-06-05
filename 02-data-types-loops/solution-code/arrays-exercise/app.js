/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * See Question 0, which is already completed, for an example.
 */

/*
 * Question 0
 * Create a variable that stores the string "GA JSD Class 2 lab".
 */

// This question is already completed for you as an example:
let answer0 = 'GA JSD Class 2 lab';
console.log('Question 0 - answer0: ', answer0);

// ____________________________________________________________________________
// SECTION 1: Arrays
// ____________________________________________________________________________


/**
 * Question 1
 * Create a array called answer1 that holds 3 filenames:
 * "image1.png", "image2.png", and "image3.png".
 */

// Your code here
let answer1 = ['image1.png', 'image2.png', 'image3.png'];
console.log('Question 1 - answer1: ', answer1);

/**
 * Question 2
 * Create a variable called answer2 whose value is the value of the first
 * element in answer1.
 */

// Your code here
let answer2 = answer1[0];
console.log('Question 2 - answer2: ', answer2);

/**
 * Question 3
 * Create a variable called answer3 that stores the length of the answer1 array (number
 * of elements in the array).
 */

// Your code here
let answer3 = answer1.length;
console.log('Question 3 - answer3: ', answer3);

/**
 * Question 4
 * Create a variable called answer4 that stores the last element of the answer1 array
 * Hint: How can we identify the index number of the last element in the array?
 */


// Your code here
let answer4 = answer1[answer3 - 1];
console.log('Question 4 - answer4: ', answer4);

// ____________________________________________________________________________
// SECTION 2: Iterating through array elements
// ____________________________________________________________________________

/**
 * Question 5
 * Create a array called numbers that contains the values 1, 2, 3, and 4.
 * Create a variable called average which equals the average of the values in 
 * the numbers array. (average = sum of all numbers/number of numbers). 
 * Hint: Use a forEach statement to accomplish this.
 */

// Your code here
let numbers = [1,2,3,4];
let sum = 0;
numbers.forEach(function(number){
    sum += number;
});
let average = sum/numbers.length;
console.log('Question 5 - bigNumbers: ', average);


/**
 * BONUS:
 * Question 6
 * Create an array called bigNumbers that contains
 * 100, 200, 300, 400, and 500 as values.
 * Use a forEach function to increase each value by 5, updating the values
 * in the bigNumbers. At the end, bigNumbers should store the values
 * 105, 205, 305, 405, and 505.
 */

// Your code here
let bigNumbers = [100, 200, 300, 400, 500];
bigNumbers.forEach(function(number, idx){
    bigNumbers[idx] += 5;
});
console.log('Question 6 - bigNumbers: ', bigNumbers);


// ____________________________________________________________________________
// BONUS - SECTION 3: Creating a mapped array
// ____________________________________________________________________________


/**
 * Question 7
 * Create a variable called mappedArray. Set its value to the result of running the 
 * map method on the numbers array you created in Question 5, increasing each
 * value by 1.
 * At the end, mappedArray should store the values 2, 3, 4, and 5.
 */

// Your code here
let mappedArray = numbers.map(function(number){
    return number + 1;
});
console.log('Question 7 - mappedArray: ', mappedArray);



