console.log("This is the IIFE exercise");

//
// STEP 1 - Why does the console count down but not up? HINT: how do we call a function?
//

function countUp() {
  console.log("Counting up");
  for (let counter = 1; counter <= 10; i++) {
    console.log(counter);
  }
}

(function countDown() {
  console.log("Counting down");
  for (let counter = 3; counter > 0; counter--) {
    console.log(counter);
  }
})();

//
// STEP 2 - Convert the following function into an IIFE (immediately-invoked function expression).
//
function meow() {
  console.log("Meeeeeeeeeow I am Milano!");
}
