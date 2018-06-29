// Templating lab
// Create a template literal and use it to display the data in the 'favorite' object.
// Use the following structure for the HTML elements you create:
// <div class="recipe">
//   <div><span class="label">Name: </span>Recipe Name</div>
//   <div><span class="label">Serves: </span>Number Servings</div>
//   <div><span class="label">Meal: </span>Meal</div>
// </div>

const favorite = {
  "name" : "Shakshuka",
  "serves" : 4,
  "meal" : "breakfast"
};

// When you are done, append it to the body
let template;
template = `
<div class="recipe">
  <div><span class="label">Name: </span>${favorite.name}</div>
  <div><span class="label">Serves: </span>${favorite.serves}</div>
  <div><span class="label">Meal: </span>${favorite.meal}</div>
</div>
`;
$('body').append(template);

// BONUS: Comment out your template above and create a template literal
//   that instead displays the contents of the 'recipes' array below.

const favorites = {
  "recipes" : [
    {
      "name" : "Shakshuka",
      "serves" : 4,
      "meal" : "breakfast"
    },
    {
      "name" : "Black Bean Chili",
      "serves" : 8,
      "meal" : "dinner"
    },
    {
      "name" : "Classic Peanut Butter Cookies",
      "serves" : "3 dozen",
      "meal" : "dessert"
    }
  ]
};

// let template = '';
// favorites.recipes.forEach(function(recipe){
//   template += `
//   <div class="recipe">
//     <div><span class="label">Name: </span>${recipe.name}</div>
//     <div><span class="label">Serves: </span>${recipe.serves}</div>
//     <div><span class="label">Meal: </span>${recipe.meal}</div>
//   </div>
//   `;
// })
// $('body').append(template);