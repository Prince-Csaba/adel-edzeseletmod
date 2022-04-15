function pageLoad () {
    console.log("Loaded");

    function openNav() {
        console.log("Hiii");
        var elem = document.getElementById('mobileNav');
        elem.classList.toggle("navVisible");
    }
}

window.addEventListener('load', pageLoad);