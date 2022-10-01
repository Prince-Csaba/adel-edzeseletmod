import data from "./recipes.json" assert { type: "json" };

function pageLoad() {
//  console.log("Loaded recipe updater!");
//  console.log(data);
  let recipes = data.recipes;
//  console.log(recipes);
  let rBody = document.getElementById("recipeBody");
//  console.log(rBody);
  for (let recipe of recipes) {
    let ing = recipe.ingredients;
//    console.log(ing);
    let recArr = ing.split(",");
  //  console.log(recArr);
  //  console.log(recipe.ingredients);
    let ingredientsList = [];
    for (let i = 0; i < recArr.length; i++) {
      console.log(recArr[i]);
      console.log(recArr[i][0]);
      recArr[i][0] === "$" ? ingredientsList += `<li style="list-style-type:none;font-weight:bold;">${recArr[i].substring(1)}</li>` :
      ingredientsList += `<li>${recArr[i]}</li>`;
    }      

//    console.log(ingredientsList);
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

/*   let reclist = document.querySelectorAll("[class=recipeCard]");
  console.log('End function reclist:'+reclist);
  for (let i = 0; i < reclist.length; i++) {
    let element = reclist[i];
    element.addEventListener("click", recVisible);
    element.setAttribute("onclick", recVisible);
    console.log(element);
  }

  function recVisible() {
    console.log("Visible");
    this.classList.toggle("visibleCard");
  } */
}
window.addEventListener("load", pageLoad);

// ``````
