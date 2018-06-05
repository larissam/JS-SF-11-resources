// ____________________________________________________________________________
// SECTION 1: Arrays
// ____________________________________________________________________________


console.log('SECTION 1 - Arrays');
// Create an array of your favorite foods
let foods = ['tacos', 'sushi', 'coffee'];

// Log out the first item in the array
console.log(foods[0]);

// Log out the length of the array
console.log(foods.length);

// Log out the last item in the array
console.log(foods[foods.length - 1]);


// ____________________________________________________________________________
// SECTION 2: Array methods
// ____________________________________________________________________________

// push(item1, item2, ... , itemN)
// pop()
// reverse()
// unshift(item1, item2, ... , itemN)
// shift()

console.log('SECTION 2 - Array methods');
// Pretend we're a pet store. 
// Create an array of pets we are going to sell: cat, dog, hamster, guinea pig
let pets = ['cat', 'dog', 'hamster', 'guinea pig'];

// Add 'lizard' to the end of the list
// Log out the array to confirm it was added
pets.push('lizard');
console.log('pets after adding lizard: ', pets);

// Add 'turtle' to the beginning of the list
// Log out the array to confirm it was added
pets.unshift('turtle');
console.log('pets after adding turtle: ', pets);

// Remove the first pet from the list (the turtle)
// Log out the array to confirm it was removed
pets.shift();
console.log('pets after removing first pet: ', pets);

// Remove the last pet from the list (the lizard)
// Log out the array to confirm it was removed
pets.pop();
console.log('pets after removing last pet: ', pets);