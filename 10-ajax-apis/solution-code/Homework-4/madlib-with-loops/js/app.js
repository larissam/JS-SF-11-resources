// const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
// const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

// const random1 = Math.floor((Math.random() * startupX.length));
// const random2 = Math.floor((Math.random() * startupY.length));

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);


function generateStartup() {
    const startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    const startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    const random1 = Math.floor((Math.random() * startupX.length));
    const random2 = Math.floor((Math.random() * startupY.length));

    return 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
}

const favorites = [];

$('#create').on('click', function(){
    const startup = generateStartup();
    $('#xForY').text(startup);
});

$('#save').on('click', function(){
    const startup = $('#xForY').text();
    favorites.push(startup);
});

$('#print').on('click', function(){
    $('#favorites').empty();
    favorites.forEach(function(favorite){
        $('#favorites').append('<li>' + favorite + '</li>');
    });
});
