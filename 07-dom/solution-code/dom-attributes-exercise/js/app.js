////////////
// PART 1 //
////////////

/* Step 1a

Below the let statement below, add a statement that sets the value of the firstItem variable to reference the first list item in the unordered list
(HINT: Use the querySelector() method.)

*/

let firstItem;
// Write your statement below this line:
firstItem = document.querySelector('li');



/* Step 1b

Write a statement that logs the class value of the element referenced by firstItem to the console.
(HINT: Use the classList property's value property.)

*/
console.log(firstItem.classList.value);



/* Step 1c

Write a statement that adds the 'highlight' class to the element referenced by firstItem to highlight.
(HINT: Use the classList property's add method.)

*/
firstItem.classList.add('highlight');



/* Step 1d

Verify in the browser window that the first item in the list of parks now has a yellow background.

*/

/* Step 1e

Think about user interfaces you've seen or created that change the background of a web page element. List 2 situations where you've used this technique or seen it done:

1. 
2. 

*/


////////////
// PART 2 //
////////////

/* Step 2a

Write a statement that logs the class value of the element referenced by firstItem to the console.

*/

console.log(firstItem.classList.value);




/* Step 2b

Write a statement that sets the class value of the element referenced by firstItem to hidden.
(HINT: Use the classList property's add method.)

*/
firstItem.classList.add('hidden');


/* Step 2c

Verify that the first list item ("Buena Vista Park") is no longer displayed.

*/


/* Step 2d

Write a statement that removes the 'hidden' class.
(HINT: Use the classList property's remove method.)

*/

firstItem.classList.remove('hidden');



/* Step 2e

Verify that the first list item ("Buena Vista Park") is once again displayed.

*/

/* Step 2f

Think about user interfaces you've seen or created that change whether a web page element is hidden or displayed. List 2 situations where you've used this technique or seen it done:

1. 
2. 

*/


///////////
// BONUS //
///////////

/*

Write statements to do the following:

- Create a new variable called items
- In the items variable, select and store a reference to all of the list items (li elements) on the web page
- Add the 'hidden' class to each li element
(HINT: Use the forEach() method or a for loop.)

*/

let items = document.querySelectorAll('li');
items.forEach(function(item){
    item.classList.add('hidden');
});



