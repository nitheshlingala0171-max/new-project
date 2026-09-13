 document.addEventListener("DOMContentLoaded", function () {

    const customerData = localStorage.getItem("customerAccount");

    if (customerData) {
        const customer = JSON.parse(customerData);

        const nameElement = document.getElementById("profileName");
        const contactElement = document.getElementById("profileContact");

        if (nameElement) {
            nameElement.textContent = customer.name || "Customer";
        }

        if (contactElement) {
            contactElement.textContent = customer.contact || "Not available";
        }
    }

    // Logout
    const logoutButton = document.querySelector(".logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {
                localStorage.removeItem("customerAccount");
                window.location.href = "customer-auth.html";
            }

        });
    }

});