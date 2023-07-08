
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

// When the user submits the form
function formSubmit() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("msg");

    document.getElementById("submit-response").style.visibility = "hidden";

    if(name.value == "") {
        name.style.border = "2px solid red";
    } else {
        name.style.border = "2px solid white";
    }

    if(email.value == "") {
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid white";
    }

    if(msg.value == "") {
        msg.style.border = "2px solid red";
    } else {
        msg.style.border = "2px solid white";
    }

    if(name.value != "" && email.value != "" && msg.value != "") {
        sendMail();
    }
}

function sendMail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value
    }

    document.getElementById("contact-btn").innerHTML = "<i class='bx bx-loader-circle bx-spin'></i>";

    emailjs
        .send("service_etgdhzb","template_6ntgkzp",tempParams)
        .then(function(res) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("msg").value = "";

            document.getElementById("contact-btn").innerHTML = "Submit";
            document.getElementById("submit-response").style.visibility = "visible";

            console.log("Success", res.status);
        });
}