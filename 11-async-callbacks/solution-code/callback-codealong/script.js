// PART 1
// Create a function called getName that takes a object and returns the value of its name property

// Example:
let cat = {
  name: 'Mint',
  age: 1
};
// getName(cat) should return 'Mint'

function getName(obj) {
  return obj.name;
}

console.log(getName(cat));

// PART 2
// Create a function called 'map' which takes an array and a function
// And returns a new array that contains the result of calling the function
// on each of the elements in the array.
// 
// Example:
let cats = [{
  name: 'Mint',
  age: 1
}, {
  name: 'Smoky',
  age: 2
}, {
  name: 'Napoleon',
  age: 3
}];
// map(cats, getName) should return a new array ['Mint', 'Smoky', 'Napoleon']

function map(arr, fn) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result.push(fn(item));
  }

  return result;
}

console.log(map(cats, getName));