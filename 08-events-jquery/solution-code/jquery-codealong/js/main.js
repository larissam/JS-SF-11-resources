// PART 1: SELECT ELEMENTS
// find/select elements to work with 

// $()

// 1. select the h1
// 2. select the li elements
// 3. select the li element that's red (view index.html in the browser!)

console.log('h1: ', $('h1'));
console.log('li elements: ', $('li'));
console.log('li element that\'s red: ', $('.special'));





// PART 2: GET AND SET CONTENT
// Get/change content of elements, attributes, text nodes

// .html()
// .attr()
// .addClass()
// .removeClass()

// 1. change the text of the h1
// 2. set the img src to be 'images/moto.jpg'
// 3. remove the 'special' class from the second li
// 4. BONUS: add the 'special' class to the first li

$('h1').text('jQuery Ninja');
$('img').attr('src', 'images/moto.jpeg');
$('.special').removeClass('special');
$('li:first-child').addClass('special');







// PART 3: EFFECTS/ANIMATION 
// Get/change content of elements, attributes, text nodes

// .show()
// .hide()
// .fadeIn()
// .fadeOut()
// .slideUp()
// .slideDown()
// .slideToggle()

// 1. hide the img

$('img').hide();







