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


document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();

    const customerData = localStorage.getItem("customerAccount");

    if (!customerData) {
        alert("No registered account found. Please create an account first.");
        return;
    }

    const customer = JSON.parse(customerData);

    const contact = prompt("Enter your registered email or mobile number:");

    if (contact === null) {
        return;
    }

    if (contact.trim() !== customer.contact) {
        alert("Email or mobile number does not match.");
        return;
    }

    const newPassword = prompt("Enter your new password:");

    if (newPassword === null || newPassword.trim() === "") {
        alert("Please enter a new password.");
        return;
    }

    customer.password = newPassword.trim();

    localStorage.setItem(
        "customerAccount",
        JSON.stringify(customer)
    );

    alert("Password changed successfully. Please login again.");
});


/* Create Account */

document.getElementById("registerLink").addEventListener("click", function () {

    window.location.href = "customer-register.html";

});