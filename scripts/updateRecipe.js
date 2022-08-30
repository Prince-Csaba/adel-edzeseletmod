import data from './recipes.json' assert { type: 'json' };

function pageLoad () {
  console.log("Loaded recipe updater!");
  console.log(data);
  let recipes = data.recipes;
  console.log(recipes);
  for (let recipe of recipes) {
    console.log(recipe);
  }

}
window.addEventListener('load', pageLoad);