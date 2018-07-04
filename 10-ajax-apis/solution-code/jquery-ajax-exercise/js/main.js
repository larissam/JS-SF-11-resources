// 1. Sign up for openweathermap.org and generate an API key.
// 2. Create a jQuery AJAX request to pull current weather data for San Francisco.
//    (Hint: http://api.openweathermap.org/data/2.5/weather?q=...).
// 3. Log the temperature to the console. Note that the temperature will be in
//    Kelvin.
// 4. Incorporate the following code into your app to log a Fahrenheit value for 
//    the temperature to the console (Fahrenheit temperature is stored in the 
//    degFInt variable):
//    const degF = (temp - 273.15) * 1.8 + 32;
//    const degFInt = Math.floor(degF);
// 5. Use DOM manipulation to add the returned temperature to the span element with
//    the id "openWeatherTemp".


// BONUS 1: Weather Unlocked API
//     1. Sign up for developer.weatherunlocked.com and obtain your application ID and 
//        application key.
//     2. Repeat the above steps to obtain the current temperature from this data 
//        source, log it to the console. 
//     3. Uncomment out the code in index.html for bonus 3 then add the temperature you
//        get from the API to the span element with the id "weatherUnlockedTemp".
// BONUS 2: Try implementing the same functionality using the Fetch API instead of jQuery.
// BONUS 3: Implement a form that prompts users for a city and state and returns
//    data for the location they specify 
//    (Uncomment out the existing form code in index.html as marked).

function kelvinToFahrenheit(temp) {
   return (temp - 273.15) * 1.8 + 32;
}

// open weather
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = ''; // replace with your own

$.get(weatherUrl, {
    q: 'San Francisco',
    appId: apiKey
}, function(response){
    const temp = response.main.temp;
    const tempF = kelvinToFahrenheit(temp);

    $('#openWeatherTemp').text(tempF);
});

// weather unlocked
const weatherUnlockedUrl = 'http://api.weatherunlocked.com/api/current/us.94107';

$.get(weatherUnlockedUrl, {
    app_id: '', // replace with your own
    app_key: '' // replace with your own
}, function(response){
    const tempF = response.temp_f;

    $('#weatherUnlockedTemp').text(tempF);
});