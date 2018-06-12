/*
  Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
  If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  
  Be sure that all of your output includes proper spacing (no words or values running into each other).

  Hint: Each console.log will place your statement on a new line.
  
  For an extra challenge, improve this code to print "1 bottle" rather than "1 bottles." (Hint: read up on if/else
  conditional statements at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else). 
*/

// 99 to 3 bottles
for(let i = 99; i >= 3; i--) {
  console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
  console.log('Take one down, pass it around, ' + (i-1) + ' bottles of beer on the wall.');
}

// 2 bottles
console.log(`2 bottles of beer on the wall, 2 bottles of beer.`);
console.log(`Take one down, pass it around, one bottle of beer on the wall.`);

// 1 bottle
console.log(`1 bottle of beer on the wall, 1 bottle of beer.`);
console.log(`Take one down, pass it around, no more bottles of beer on the wall.`);

// 0 bottles
console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
