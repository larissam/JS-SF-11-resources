//
// Selecting elements
//

// Select the element with the id "main"
// Log it to the console
const el = document.querySelector('#main');
console.log(el);






//
// Modifying elements
// 

// Select the elements with the class "sidebar"
// Set the innerHTML of that element to be <h2>Sidebar</h2>
const sidebar = document.querySelector('.sidebar');
sidebar.innerHTML = '<h2>Sidebar</h2>';

// Select the elements with tag name "p" in the footer (ie. <p></p>)
// Set the className to be "copyright"
// If you did it correctly, there should be a bar above the copyright at the bottom of the page
const copyright = document.querySelector('footer p');
copyright.className = 'copyright';