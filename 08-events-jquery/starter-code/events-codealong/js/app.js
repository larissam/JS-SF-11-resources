let mainHeading = document.createElement("h1");
mainHeading.textContent = "Reminders";
document.querySelector('header').appendChild(mainHeading);


// STEP 1 - select the element with id 'addReminder' and store it in a variable
// STEP 2 - select the element with id 'reminder' and store it in a variable
// STEP 3 - select the element with id 'reminderList' and store it in a variable

// STEP 4 - add a click event listener for the 'addReminder' button

// STEP 5 - when the user clicks the 'addReminder' button, we should:
    // - prevent the form from being submitted
    // - get the value from the 'reminder' input
    // - create a new li and textnode with the 'reminder' input value
    // - set the new li's className to be 'list-group-item'
    // - attach the new li to the DOM
    // - clear the 'reminder' input
  