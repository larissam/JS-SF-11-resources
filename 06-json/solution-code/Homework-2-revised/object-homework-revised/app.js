// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. 
// In comments, list at least three reasonable abstractions that you might use to build this program.
  // (ie. "What types of objects would you have in this program? A calendar? A user? A week? Events?")
// For each abstraction, list out at least two properties or behaviors that it would make sense for that abstraction to have. 
// Below is an example - please write your answer in the same format.
  // 'car'
  // description: our app manages car sales.
  // every 'car' has
  // - a make
  // - a model
  // - a year
  // every 'car' can
  // - drive
  // - brake
  // - park


// Answer Starts Here

  // 'calendar'
  // description: the calendar object in our application.
  // every 'calendar' has
  // - a year
  // - a current month
  // - a current day
  // every 'calendar' can
  // - change current month
  // - change current day

  // 'user'
  // description: the user object in our application.
  // every 'user' has
  // - a username
  // - a password
  // - a timezone
  // every 'user' can
  // - login
  // - change username
  // - change password
  // - change timezone

  // 'event'
  // description: the event object in our application. Users have events, which appear on the calendar.
  // every 'event' has
  // - a name
  // - a start time
  // - a duration
  // every 'event' can
  // - change name
  // - change start time
  // - change duration

// Answer Ends Here




// 2. Create an object literal that represents your calendar program.
// For example:
  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

  // let pet_owner = {
  //   name: 'Bob',
  //   address: '225 Bush St, San Francisco, CA 94104'
  // };

// Answer Starts Here
let calendar = {
  year: 2018,
  month: 6,
  day: 14,
  changeMonth: function(updatedMonth) {
    calendar.month = updatedMonth;
  },
  changeWeek: function(updatedDay) {
    calendar.day = updatedDay;
  }
};

let user = {
  username: 'larissam',
  password: 'generalassembly',
  timezone: 'PST',
  login: function() {
    // make an API call with user.username and user.password
    // to log user in

    // No real code here since we haven't learned how to do this yet!
  },
  changeUsername: function(updatedUsername) {
    user.username = updatedUsername;
  },
  changePassword: function(updatedPassword) {
    user.password = updatedPassword;
  },
  changeTimezone: function(updatedTimezone) {
    user.timezone = updatedTimezone;
  }
};

let event = {
  name: 'Teach JS class',
  startTime: '6:30PM', // in reality this would be a timestamp, but making it a string for clarity
  duration: 3,
  changeName: function(updatedName) {
    event.name = updatedName;
  },
  changeStartTime: function(updatedStartTime) {
    event.startTime = updatedStartTime;
  },
  changeDuration: function(updatedDuration) {
    event.duration = updatedDuration;
  }
};

// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_animal`, below.

  // Animal
  // Description: We are making an app for a zoo - it manages animals' information
  // Every animal has:
  // - a name
  // - a species
  // - a weight
  // - a place it is originally from (eg. 'Africa', 'Antarctica')
  // - a list of food it eats (eg. 'chicken', 'beef', and 'fish')
  // - an amount of sleep it needs
  // - a noise that it can make (e.g. 'howl')
  // Every animal can:
  // - eat
  // - sleep
  // - make noise (each animal makes its own unique noise, as specified by `noise`.

  // Example:
  // let some_pet = {
  //   name: 'Mint',
  //   species: 'cat',
  //   breed: 'persian',
  //   noise: 'meow',
  //   makeNoise: function() {
  //     console.log(some_pet.noise);
  //   }
  // };


// Answer Starts Here
let some_animal = {
  name: 'Alex',
  species: 'Lion',
  weight: 420,
  origin: 'Africa',
  food: ['chicken', 'beef', 'fish'],
  sleepNeeded: 20,
  noise: 'Roar!!!',
  eat: function(food) {
    if(!some_animal.food.includes(food)) {
      console.log('I dont eat ' + food);
    } else {
      console.log('Nom nom nom');
    }
  },
  sleep: function(duration) {
    console.log('Zzzzzz for ' + duration + ' hours');
  },
  makeNoise: function() {
    console.log(some_animal.noise);
  }
};

// Answer Ends Here