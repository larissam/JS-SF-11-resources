/*
 * Fetch codealong
 */


const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appID = ''; // your api key here (from last class)

$('#zip').on('keyup', function() {
  const zipString = $('#zip').val(); 
  if (zipString.length === 5) {
      console.log(zipString);

      // use zipString to get a city and state from: http://api.zippopotam.us/
      // then, just log out the result

  } 
});



