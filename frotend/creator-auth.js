const creatorForm = document.getElementById("creatorForm");

creatorForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your login details.");
        return;
    }

    alert("Creator login successful!");

    window.location.href = "creator-verification.html";

});


/* Forgot Password */

document
    .getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert("Forgot password feature will be added later.");

    });


/* Create Account */

document
    .getElementById("registerLink")
    .addEventListener("click", function (event) {

        event.preventDefault();

        window.location.href = "creator-register.html";

    });