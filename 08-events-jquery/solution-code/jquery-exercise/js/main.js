/**
 * Part 0:
 * 
 * In the index.html file, add links for the jQuery file and this file at the bottom of the body section.
 */

/**
* Part 1a:
*/

// 1. Remove the 'highlight' class from element with id 'box2' (use the .removeClass() method)
// 2. Select the anchor within the element with id 'box3'. Change the HTML to 'jQuery!'

$('#box2').removeClass('highlight');
$('#box3').html('jQuery!');




/**
* Part 1b:
*/

// 1. Add the 'highlight' class to the element with id 'box4' (use the .addClass() method)
// 2. Select the p element within the footer element. Change the HTML to 'jQuery syntax is simpler!'

$('#box4').addClass('highlight');
$('footer p').html('jQuery syntax is simpler!');





/**-----------------------------------------------------------------------------------------------*/


/**
*
* Part 2a:
*
*/

// 1. When the anchor within the element with id 'box3' is clicked
	// a) Slide toggle the element with id 'box4'
	// b) Fade out the element with id 'box1' slowly

$('#box3').on('click', function() {
	$('#box4').slideToggle();
	$('#box1').fadeOut('slow');
});

/**
*
* Part 2b:
*
*/

// 1. When the h2 is clicked on
	// a) Slide up the h2
	// b) Add the snazzy class to the h1

$('h2').on('click', function() {
	$('h2').slideUp();
	$('h1').addClass('snazzy');
});