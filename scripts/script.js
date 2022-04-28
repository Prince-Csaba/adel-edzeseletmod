function pageLoad() {
    console.log("Loaded nav!");

    let elem = document.getElementById('mobileNav');

    console.log(elem);

    elem.addEventListener("click", openNav);

    function openNav() {
        console.log("Hiii");
        let nav = document.getElementById("mobileNavBar");
        console.log(nav);
        nav.classList.toggle("navVisible");
    }
}
window.addEventListener('load', pageLoad);