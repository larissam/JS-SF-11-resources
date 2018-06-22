// STEP 1 - Create a new li element
// Add the 'list-group-item' class to it
let li = document.createElement('li');
li.classList.add('list-group-item');


// STEP 2 - Set the new element's textContent to be 'Walk the dog'
li.textContent = 'Walk the dog';



// STEP 3 - Find the element you want to attach the new li element to
let parent = document.querySelector('#surveyList');



// STEP 4 - Attach the new li element to the element you found in STEP 3
parent.appendChild(li);