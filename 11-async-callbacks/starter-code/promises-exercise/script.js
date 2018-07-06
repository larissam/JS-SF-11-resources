/*
 * Fetch exercise
 */


const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const appID = ''; // your api key here (from last class)

$('#zip').on('keyup', function() {
  const zipString = $('#zip').val(); 
  if (zipString.length === 5) {
      console.log(zipString);

      // use zipString to get a city and state from: http://api.zippopotam.us/
      // then, just log out the result

      $.get(`http://api.zippopotam.us/us/${zipString}`).then(function(result){
        console.log('response from zippopotam API: ', result);

        const placeName = result.places[0]["place name"];
        return placeName;
      }).then(function(placeName){
        console.log('placeName: ', placeName);

        // Discuss: where did the placeName variable come from?

        // Then: make a second api request to open weather using the placeName variable
        // you got from the zippopotam API

        // Update the UI elements with id location and temp

      });
  } 
});


