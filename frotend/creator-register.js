document
    .getElementById("creatorRegisterForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const contact =
            document.getElementById("contact").value.trim();

        const craft =
            document.getElementById("craft").value.trim();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (
            name === "" ||
            contact === "" ||
            craft === "" ||
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


        const creator = {
            name: name,
            contact: contact,
            craft: craft,
            password: password
        };


        localStorage.setItem(
            "creatorAccount",
            JSON.stringify(creator)
        );


        alert("Creator account created successfully.");


        window.location.href = "creator-auth.html";

    });


/* Login */

const loginLink =
    document.getElementById("loginLink");

if (loginLink) {

    loginLink.addEventListener("click", function(event) {

        event.preventDefault();

        window.location.href = "creator-auth.html";

    });

}