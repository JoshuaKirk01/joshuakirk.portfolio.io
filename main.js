
// When user clicks menu icon
function navToggle() {
    document.getElementById("dropdown").classList.toggle("active");
    console.log("Toggled");
}

// When user clicks anywhere else
window.onclick = function(event) {
    if(!event.target.matches(".bx-menu")) {
        var dropdown = document.getElementById("dropdown");
        if(dropdown.classList.contains("active")) {
            dropdown.classList.remove("active");
            console.log("Removed");
        }
    }
}