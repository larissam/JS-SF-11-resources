//
// PART 1 - Returning primitive data types
//

// 1. what type of thing does this function return?
function getName() {
  const name = "Milano";
  return name;
}

let catName = "Satan";
// 2. what is catName equal to after line 11 runs?

catName = getName();
// 3. what is catName equal to after line 14 runs?

function getName2() {
  return "Smoky";
}

catName = getName2();
// 4. what is catName equal to after line 21 runs?

function getName3() {
  console.log("Mint");
}

catName = getName3();
// 5. what is catName equal to after line 28 runs?

//
// PART 2 - Returning other data types
//

// 1. What type of thing does this function return?
function getCat() {
  const cat = {
    name: "Milano",
    age: 7
  };

  return cat;
}

let cat = {
  name: "Satan",
  age: 2
};
// 2. what is cat equal to after lines 45-48 run?

cat = getCat();
// 3. what is cat equal to after line 51 runs?

function getCat2() {
  return {
    name: "fluffy",
    age: 1
  };
}

cat = getCat2();
// 4. what is cat equal to after line 61 runs?

function getCat3() {
  const cat = {
    name: "Peekaboo",
    age: 5
  };

  console.log(cat);
}

cat = getCat3();
// 5. what is cat equal to after line 73 runs?

//
// PART 3 - Returning Objects with methods
//

function getCatWithMeow() {
  const cat = {
    name: "Milano",
    age: 7,
    meow: function() {
      console.log(`Meeeeeeeeeeeeow, I am ${cat.name}`);
    }
  };

  return cat;
}

cat = getCatWithMeow();
cat.meow();
// 1. what does line 93 print to the console?

function getCatWithMeow2() {
  return {
    name: "Satan",
    age: 2,
    meow: function() {
      console.log(
        `Meeeeeeeeeeeeow, I am ${cat.name}. I will destroy your furniture!!!`
      );
    }
  };
}

cat = getCatWithMeow2();
// 2. what is cat equal to after line 108 runs?
cat.meow();
// 3. what does line 109 print to the console?
