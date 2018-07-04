/*

Create an ajax request for the following data source:
https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD

STEPS:
- Change the URL to the one shown below.
- Verify that a new set of results is shown in the console.

BONUSES: 
- Make the code to work with user interaction. In the index.html file
there is a "Get Health Data" button. Modify your code so data is only requested and
logged to the console after a user clicks the button.

*/

let url = 'https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD';
fetch(url).then(function(response){
    return response.json();
}).then(function(response){
    console.log('response: ', response);
});