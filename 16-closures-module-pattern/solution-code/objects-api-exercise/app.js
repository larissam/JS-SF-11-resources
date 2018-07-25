// Call the pokemon api

// Call the Pokemon API to get the first 20 Pokemon
// Add their names to the ul with id "pokemon" in the DOM

// This is the URL you will need:
const url = "https://pokeapi.co/api/v2/pokemon/";

// EXTRA CREDIT:
// Can you get the first 30 pokemon (instead of the first 20)?

// There is some code (see index.html) for a pokeball loader.
// Can you have it display before the API call completes and hide it when it's done?

// There is some code (see index.html) for a popup.
// When the user clicks a Pokemon's name, display the pokemon's sprite in the popup.
// DOCUMENTATION HERE: https://pokeapi.co/docsv2/#pokemon

$.get(url, function(data) {
  const results = data.results;
  for (let i = 0; i < results.length; i++) {
    const pokemon = results[i];
    $("#pokemon").append(`<li>${pokemon.name}</li>`);
  }
});
