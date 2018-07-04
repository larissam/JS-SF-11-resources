// let's get some data from:
// https://dog.ceo/api/breeds/image/random
// https://api.jquery.com/jquery.get/

let url = "https://dog.ceo/api/breeds/image/random";
$.get(url, function(data) {
    console.log('data: ', data)
});

// let's get some data from an api where you need queryparams
// https://newsapi.org/v2/top-headlines
let newsAPI = 'https://newsapi.org/v2/top-headlines';
$.get(newsAPI, {
    country: 'us',
    category: 'business',
    apiKey: 'dd591ea74bd0486ea58d22ea637a0b4e'
}, function(data){
    console.log('data: ', data)
})