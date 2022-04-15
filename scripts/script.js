function pageLoad () {

    function openNav() {
        console.log("Hiii");
        var elem = document.getElementById('mobileNav');
        elem.style.width = "100vw";
    }
}

window.addEventListener("load", pageLoad);