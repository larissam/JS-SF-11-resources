//
// Selecting elements
//

// Select the element with the id "main"
// Log it to the console
const main = document.querySelector('#main');
console.log('main: ', main)





//
// Modifying elements
// 

// Select the elements with the class "sidebar"
// Set the innerHTML of that element to be <h2>Sidebar</h2>
const sidebar = document.querySelector('.sidebar');
console.log('sidebar: ', sidebar);
sidebar.innerHTML = '<h2>Sidebar</h2>';

// Select the elements with tag name "p" in the footer (ie. <p></p>)
const copyright = document.querySelector('footer p');
// Set the className to be "copyright"
copyright.className = 'copyright';
// If you did it correctly, there should be a bar above the copyright at the bottom of the page

// Give the copyright an additional class called "bold"
// Use the classList property
copyright.classList.add('bold');
