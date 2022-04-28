function pageLoad () {
    console.log("Loaded table!");
    let basic = document.getElementById('basic');
    let full = document.getElementById('full');
    document.getElementById("basicCB").addEventListener("click", showBasic);
    document.getElementById("fullCB").addEventListener("click", showFull);

    document.getElementById("basicB").addEventListener("click", showBasic);
    document.getElementById("fullB").addEventListener("click", showFull);

    function showBasic() {
        console.log("Basic");

        full.classList.add('d-none');
        basic.classList.remove('d-none');
        basic.classList.add('d-flex');
    }

    function showFull() {
        console.log("Full");

        basic.classList.add('d-none');
        full.classList.remove('d-none');
        full.classList.add('d-flex');
    }
}

window.addEventListener('load', pageLoad);