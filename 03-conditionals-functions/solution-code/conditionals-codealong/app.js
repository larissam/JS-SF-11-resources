// ____________________________________________________________________________
// SECTION 1: If/Else
// ____________________________________________________________________________
console.log('SECTION 1 - If/Else');
let score = 90;
// Write a conditional statement that logs 'Taking you to the next level!' if score 
// is greater than or equal to 90 and 'Try again?' otherwise

// Your code here!
if(score >= 90) {
    console.log('Taking you to the next level!');
} else {
    console.log('Try again?');
}



// ____________________________________________________________________________
// SECTION 2: Ternary operator
// ____________________________________________________________________________
console.log('SECTION 2 - Ternary operator');
let userInDatabase = false;
let headingText;
// Write a ternary operator that assigns the value 'Edit user' to the headingText
// variable if userInDatabase is true and 'Create user' if userInDatabase is false.
// Log headingText to the console to verify your answer!

// Your code here!
headingText = userInDatabase ? 'Edit user' : 'Create user';


// ____________________________________________________________________________
// SECTION 3: Logical operators
// ____________________________________________________________________________
console.log('SECTION 3 - Logical operators');

let isSuperuser = false;
let hasCompanyAccess = true;
let hasAdminPermissions = true;

// Write a control flow statement that logs 'Logging in!' to the console if isSuperuser is true
// OR hasCompanyAccess AND hasAdminPermissions is true
// Otherwise, log 'Access denied!' to the console

// Your code here!
if(isSuperuser || hasCompanyAccess && hasAdminPermissions) {
    console.log('Logging in!');
} else {
    console.log('Access denied!');
}