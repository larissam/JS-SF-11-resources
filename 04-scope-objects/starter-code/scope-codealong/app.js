// PART 1 - Let & Const

// Look at this code.
// Which variable has global scope?
// Which variable has block scope?
// Discuss with a partner.
// Then open the index.html file in the browser and open the console for a hint!
console.log('PART 1 - Let & Const');

let temp = 60;
function predict() {
  let weather = "Sunny";
  console.log('temp inside function: ', temp);
  console.log('weather inside function: ', weather);
}
predict();

console.log('temp outside function: ', temp);
console.log('weather outside function: ', weather);





// PART 2 - Var

// Look at this code.
// What will message be outside of the if block?
// Uncomment out the code and see - did you guess correctly?
console.log('PART 2 - Var');

// if(temp < 70) {
//   var message = 'Bring a jacket!';
//   console.log('message inside block: ', message);
// }

// console.log('message outside block: ', message);