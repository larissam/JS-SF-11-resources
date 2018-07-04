// Let's fetch something from this url!
// https://dog.ceo/api/breeds/image/random
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


let url = "https://dog.ceo/api/breeds/image/random";
fetch(url).then(function(response){
    return response.json();
}).then(function(response){
    console.log('response: ', response);
    $('img').attr('src', response.message);
})