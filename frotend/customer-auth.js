const customerForm = document.getElementById("customerForm");

customerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your login details.");
        return;
    }

    alert("Customer login successful!");

    // Later we will connect this to the backend.
    // For now, it will go to the Customer Home page.

    window.location.href = "customer-home.html";
});


/* Forgot Password */

document.getElementById("forgotPassword").addEventListener("click", function (event) {

    event.preventDefault();

    alert("Forgot password feature will be added later.");

});


/* Create Account */

document.getElementById("registerLink").addEventListener("click", function (event) {

    event.preventDefault();

    alert("Customer registration page will be added next.");

});