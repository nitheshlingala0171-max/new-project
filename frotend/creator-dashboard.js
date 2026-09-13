 document.addEventListener("DOMContentLoaded", function () {

    /* Creator Account */

    const creatorData = localStorage.getItem("creatorAccount");

    const creatorName = document.getElementById("creatorName");

    if (creatorData) {
        try {
            const creator = JSON.parse(creatorData);

            if (creatorName) {
                creatorName.textContent = creator.name || "Creator";
            }

        } catch (error) {
            console.log("Creator account data error:", error);

            if (creatorName) {
                creatorName.textContent = "Creator";
            }
        }

    } else {

        if (creatorName) {
            creatorName.textContent = "Creator";
        }

        console.log("creatorAccount data not found in localStorage.");
    }


    /* Verification Data */

    const verificationData =
        localStorage.getItem("creatorVerification");

    if (verificationData) {

        try {

            const verification =
                JSON.parse(verificationData);

            const craft =
                document.getElementById("creatorCraft");

            const location =
                document.getElementById("creatorLocation");

            const experience =
                document.getElementById("creatorExperience");

            const status =
                document.getElementById("verificationStatus");


            if (craft) {
                craft.textContent =
                    verification.craft || "Not available";
            }

            if (location) {
                location.textContent =
                    verification.location || "Not available";
            }

            if (experience) {
                experience.textContent =
                    verification.experience
                        ? verification.experience + " years"
                        : "Not available";
            }

            if (status) {

                status.textContent =
                    verification.status || "Under Review";


                if (verification.status === "Approved") {

                    status.style.background = "#dfead9";
                    status.style.color = "#557047";

                } else if (verification.status === "Rejected") {

                    status.style.background = "#f2d9d4";
                    status.style.color = "#9b4034";

                }
            }

        } catch (error) {

            console.log(
                "Creator verification data error:",
                error
            );

        }
    }

});


/* My Crafts */

function openMyCrafts() {
    window.location.href = "creator-my-crafts.html";
}


/* Add New Craft */

function addNewCraft() {
    window.location.href = "creator-add-craft.html";
}


/* Orders */

function openOrders() {
    window.location.href = "creator-orders.html";
}


/* Creator Profile */

function openProfile() {
    window.location.href = "creator-profile.html";
}


/* Logout */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        window.location.href = "creator-auth.html";
    }

}