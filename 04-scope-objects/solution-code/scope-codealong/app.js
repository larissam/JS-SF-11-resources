// PART 1 - Let & Const

// Look at this code.
// Which variable has global scope?
// Which variable has block scope?
// Open the index.html file in the browser and open the console for a hint!
console.log('PART 1 - Let & Const');

let temp = 75;
function predict() {
  let weather = "Sunny";
  console.log('temp inside function: ', temp);
  console.log('weather inside function: ', weather);
}
predict();

console.log('temp outside function: ', temp);
console.log('weather outside function: ', weather);

// ANSWER
// temp has global scope (notice it exists both inside and outside the predict function)
// weather has block scope (notice it does not exist outside the predict function)


// PART 2 - Var
// Look at this code.
// What will message be outside of the if block?
console.log('PART 2 - Var');

if(temp < 70) {
  var message = 'Bring a jacket!';
  console.log('message inside block: ', message);
}

console.log('message outside block: ', message);

// ANSWER
// message is 'Bring a jacket!' outside the if block
