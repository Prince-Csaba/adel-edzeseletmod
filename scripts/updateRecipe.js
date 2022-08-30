import data from "./recipes.json" assert { type: "json" };

function pageLoad() {
  console.log("Loaded recipe updater!");
  console.log(data);
  let recipes = data.recipes;
  console.log(recipes);
  let rBody = document.getElementById("recipeBody");
  console.log(rBody);
  for (let recipe of recipes) {
    console.log(recipe.ingredients);
    let ingredientsList = [];
    for (let i = 0; i < recipe.ingredients.length; i++) {
      console.log(i);
      ingredientsList += `<li>${recipe.ingredients[i]}</li>`;
    }
    console.log(ingredientsList);
    let elem = document.createElement("div");
    elem.classList.add("recipeCard");
    elem.innerHTML += `<div class="recImage"><img src="./img/${recipe.img}" alt="${recipe.title}">
  </div>`;
    elem.innerHTML += `<h4 class="recTitle">${recipe.title}</h4>`;
    elem.innerHTML += `<p class="recText">${recipe.heading}</p>`;
    elem.innerHTML += `
    <div class="recDet">
    <h5>
      Hozzávalók:
    </h5>
    <ul>
    ${ingredientsList}
    </ul>
    <p></p>
    <p>
      ${recipe.text}
    </p>
    </div>`;
    elem.innerHTML += `<button><i class="fas fa-angle-down fa-3x"></i></button>`;

    rBody.appendChild(elem);
  }

  let reclist = document.querySelectorAll("[class=recipeCard]");
  console.log(reclist);
  for (let i = 0; i < reclist.length; i++) {
    let element = reclist[i];
    element.addEventListener("click", recVisible);
    console.log(element);
  }

  function recVisible() {
    console.log("Visible");
    this.classList.toggle("visibleCard");
  }
}
window.addEventListener("load", pageLoad);

// ``````
