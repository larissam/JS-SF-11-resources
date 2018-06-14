// ____________________________________________________________________________
// SECTION 1: Scope
// ____________________________________________________________________________
console.log('SECTION 1 - Scope');

let cat = 'Garfield';
function meow(cat){
    console.log(cat + ' says "Meow!"'); // what will this log to the console?
    
    let cat = 'Pusheen';
    console.log(cat + ' says "Meow!"'); // what will this log to the console?
}

meow();
console.log(cat + ' says "Meow!"'); // what will this log to the console?







// ____________________________________________________________________________
// SECTION 2: Objects
// ____________________________________________________________________________
console.log('SECTION 2 - Objects');

// Revisit the "Real World Scenarios" exercise we did in the last class.
// Create objects for each of the scenarios.



