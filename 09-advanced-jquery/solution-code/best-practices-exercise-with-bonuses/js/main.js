/* 

Improving a favorites list

*/

function addToList($list, thing) {

  // 1. Comment out the following three lines of code, then below them 
  //    write a single statement to replace them, using chaining.
  // Start of code to replace
  //  const $thingLi = $('<li>');
  //  $thingLi.html(thing);
  //  $thingLi.addClass('fav-thing');
  // End of code to replace

  // Add refactored statement here:
  const $thingLi = $('<li>').html(thing).addClass('fav-thing');

  // Changed for Bonus 2
  // addCrossOffLink($thingLi);
  addLinks($thingLi);
  $list.append($thingLi);

}

// Removed for Bonus 2
//function addCrossOffLink($li) {

  // 2. Comment out the following three lines of code, then below them 
  //    write a single statement to replace them, using chaining.
  // Start of code to replace
  //  const $crossOffLink = $('<span>');
  //  $crossOffLink.html(' cross off');
  //  $crossOffLink.addClass('cross-off');
  // End of code to replace

  // Add refactored statement here:
  //  const $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');


  // 3. Comment out the following three lines of code, then below them
  //    write a single statement to replace them, using implicit iteration.
  // Start of code to replace
  // $li.each(function() {
  //   $(this).append($crossOffLink);
  // });
  // End of code to replace

  // Add refactored statement here:
  //  $li.append($crossOffLink);
//}

// Bonus 2
function addLinks($li) {
  const $crossOffLink = $('<span>').html(' cross off').addClass('cross-off');
  const $deleteLink= $('<span>').html(' delete item').addClass('delete');
  $li.append($crossOffLink, $deleteLink);
}

$(function() {
  const $thingList = $('#fav-list');
  const $things = $('.fav-thing');
  const $button = $('#new-thing-button');
  const $newThingInput = $('#new-thing');

  $things.toArray().forEach(function(li) {
    // Changed for Bonus 2
    // addCrossOffLink($(li));
    addLinks($(li));
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

  // 4. Update the event listener code below to use event delegation.
  //    - Change the selector to set the on event on the unordered list, rather
  //      than on the list items themselves.
  //    - Specify the child elements with the class value of cross-off as the
  //      elements to which the event is delegated.

  // Start of code to update
  $thingList.on('click', '.cross-off', function(event) { // updated
    $(this).parent().addClass('crossed-off');
    $(this).html('');
  });
  // End of code to update


  // BONUS 1: When the user mouses over each item, the item should turn grey. 
  //          Don't use the CSS :hover pseudo-class for this.

  $thingList.on('mouseenter', 'li', function() {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  }).on('mouseleave', 'li', function(){
    $(this).siblings().removeClass('inactive');
  });

  // BONUS 2: Add another link after each item that allows you to delete the item.
  $thingList.on('click', '.fav-thing .delete', function() {
    const $thingItem = $(this).parent();
    $thingItem.addClass('deleted');
  });
});