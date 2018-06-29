/* 

Improving a favorites list

*/

//
// PART 1
//

function addToList($list, thing) {

  // Comment out the following three lines of code, then below them 
  // write a single statement to replace them, using chaining.

  // Start of code to replace
  const $thingLi = $('<li>');
  $thingLi.html(thing);
  $thingLi.addClass('fav-thing');
  // End of code to replace

  // Add refactored statement here:



  addCrossOffLink($thingLi);
  $list.append($thingLi);
}

function addCrossOffLink($li) {
  //  Comment out the following three lines of code, then below them 
  //  write a single statement to replace them, using chaining.

  // Start of code to replace
  const $crossOffLink = $('<span>');
  $crossOffLink.html(' cross off');
  $crossOffLink.addClass('cross-off');
  // End of code to replace

  // Add refactored statement here:




  $li.append($crossOffLink);
}





//
// PART 2 - Event Delegation
//

const $thingList = $('#fav-list');
const $things = $('.fav-thing');
const $button = $('#new-thing-button');
const $newThingInput = $('#new-thing');

$things.toArray().forEach(function(li) {
  addCrossOffLink($(li));
});


$button.on('click', function(event) {
  event.preventDefault();
  const newThing = $newThingInput.val();
  if (newThing === '') {
    alert('You must type in a value!');
  } else {
    addToList($thingList, newThing);
    $newThingInput.val('');
  }
});

// Update the event listener code below to use event delegation.
//   - Change the selector to set the on event on the unordered list, rather
//     than on the list items themselves.
//   - Specify the child elements with the class 'cross-off' as the
//     elements to which the event is delegated.

// Start of code to replace
const $crossOffLink = $('.cross-off');
$crossOffLink.on('click', function(event) {
  $(this).parent().addClass('crossed-off');
  $(this).html('');
});
// End of code to replace


// BONUS 1: When the user mouses over each item, the item should turn grey. 
//          Don't use the CSS :hover pseudo-class for this.

// BONUS 2: Add another link after each item that allows you to delete the item.