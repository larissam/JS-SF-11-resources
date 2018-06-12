/* Create objects for three different monkeys (called monkey1, monkey2, monkey3),
each with the following properties:
* name
* species
* foodsEaten

And the following methods:
* eat(food)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. 
Switch roles after creating the first object, then again after creating the second. 
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).
*/

let monkey1 = {
  name: "Hermione",
  species: "howler",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey1.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey1.name +". I come from the "+ monkey1.species + " family. I have eaten these foods: "+ monkey1.foodsEaten.join(", ") + ".");
  }
};

let monkey2 = {
  name: "Severus",
  species: "pygmy marmoset",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey2.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey2.name +". I come from the "+ monkey2.species + " family. I have eaten these foods: "+ monkey2.foodsEaten.join(", ") + ".");
  }
};

let monkey3 = {
  name: "Jane",
  species: "squirrel monkey",
  foodsEaten: [],
  eatSomething: function(food) {
    monkey3.foodsEaten.push(food);
  },
  introduce: function() {
    console.log("My name is "+ monkey3.name +". I come from the "+ monkey3.species + " family. I have eaten these foods: "+ monkey3.foodsEaten.join(", ") + ".");
  }
};