function pageLoad () {
    console.log("Loaded recipe!");
    let reclist = document.querySelectorAll('[class=recipeCard]');
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

window.addEventListener('load', pageLoad);