/* 
Use DOM manipulation to create the sidebar elements (heading and paragraphs) 
and text content shown in the mocks.pdf image, and then append them to the DOM.

For styling purposes, use the following HTML elements and structure:

div class="sidebar"   // parent element: already in the HTML file
  h3
  p
  p
  img    // BONUS
  h3     // BONUS
  ul     // BONUS
    li   // BONUS
    ...
*/

// * STEP 1
// Write a statement to create the h3 element, then write statements to create 
// the two p elements.
// (HINT: Create variables to store each of the newly created elements.)
let h3 = document.createElement('h3');
let p1 = document.createElement('p');
let p2 = document.createElement('p');




// * STEP 2
// Set the h3 element's text content to be "About Us"
h3.textContent = 'About us';


// Set the two p elements' text content to be the following:

//     Text for the first paragraph:
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.



//     Text for the second paragraph:
//     Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.
p1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.';
p2.textContent = 'Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.';




// * STEP 3
// Write a statement to create a variable called sidebar and set its value to reference the div with class 'sidebar'.
let sidebar = document.querySelector('.sidebar');


// * STEP 4
// Make the h3 a child of the sidebar
// Make the 2 paragraphs children of the sidebar
sidebar.appendChild(h3);
sidebar.appendChild(p1);
sidebar.appendChild(p2);




// * STEP 5
// Save your changes, open index.html in your browser, then compare the web page to the mocks.pdf image.


// ** BONUS 1: Add the image shown in the mocks-bonus.pdf image. Specify 
// "images/about.jpg" as the source file.
// (HINT: The image should be a sibling of the h3 and p elements you already added.)
let img = document.createElement('img');
img.src = 'images/about.jpg';

sidebar.appendChild(img);



// ** BONUS 2: Add "Recent issues" heading and the list of issues, as shown in 
// the mocks-bonus.pdf image.
// (HINT: The list should be a sibling to the h3 and p elements you already added.)

let recentIssuesHeading = document.createElement('h3');
recentIssuesHeading.textContent = 'Recent Issues';
sidebar.appendChild(recentIssuesHeading);

let issueList = document.createElement('ul');

let issue19 = document.createElement('li');
issue19.textContent = 'Issue Nineteen - Camping';
issueList.appendChild(issue19);

let issue18 = document.createElement('li');
issue18.textContent = 'Issue Eighteen - Food';
issueList.appendChild(issue18);

let issue17 = document.createElement('li');
issue17.textContent = 'Issue Seventeen - Signs';
issueList.appendChild(issue17);

let issue16 = document.createElement('li');
issue16.textContent = 'Issue Sixteen - Friends';
issueList.appendChild(issue16);

let issue15 = document.createElement('li');
issue15.textContent = 'Issue Fifteen - Carnivals';
issueList.appendChild(issue15);

let issue14 = document.createElement('li');
issue14.textContent = 'Issue Fourteen - Gatherings';
issueList.appendChild(issue14);

sidebar.appendChild(issueList);