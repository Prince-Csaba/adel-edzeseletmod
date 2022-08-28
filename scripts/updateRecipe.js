import data from './recipes.json' assert { type: 'json' };

function pageLoad () {
  console.log("Loaded recipe updater!");
  console.log(data);
  

}
window.addEventListener('load', pageLoad);