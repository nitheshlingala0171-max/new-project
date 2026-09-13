 console.log("REGISTER JS LOADED");
 document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (
            name === "" ||
            contact === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const customer = {
            name: name,
            contact: contact,
            password: password
        };

        localStorage.setItem(
            "customerAccount",
            JSON.stringify(customer)
        );

        alert("Account created successfully.");

        window.location.href = "customer-auth.html";
    });


/* Login */

const loginLink = document.getElementById("loginLink");

if (loginLink) {
    loginLink.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "customer-auth.html";

    });
}