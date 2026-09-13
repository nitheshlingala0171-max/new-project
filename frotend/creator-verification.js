document.addEventListener("DOMContentLoaded", function () {

    const craftPhoto = document.getElementById("craftPhoto");
    const photoPreview = document.getElementById("photoPreview");

    let photoData = "";


    /* Photo Preview */

    craftPhoto.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            photoPreview.style.display = "none";
            return;
        }

        if (!file.type.startsWith("image/")) {

            alert("Please upload an image file.");

            this.value = "";

            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            photoData = event.target.result;

            photoPreview.innerHTML =
                `<img src="${photoData}" alt="Craft Preview">`;

            photoPreview.style.display = "block";
        };

        reader.readAsDataURL(file);

    });


    /* Verification */

    const verificationForm =
        document.getElementById("verificationForm");


    verificationForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const craftType =
            document.getElementById("craftType").value;

        const location =
            document.getElementById("location").value.trim();

        const experience =
            document.getElementById("experience").value.trim();


        if (
            craftType === "" ||
            location === "" ||
            experience === ""
        ) {

            alert("Please fill all verification details.");

            return;
        }


        if (!photoData) {

            alert("Please upload a photo of your handmade craft.");

            return;
        }


        const creatorData =
            localStorage.getItem("creatorAccount");

        let creator = {};

        if (creatorData) {

            creator = JSON.parse(creatorData);

        }


        const verificationData = {

            name: creator.name || "",

            contact: creator.contact || "",

            craft: craftType,

            location: location,

            experience: experience,

            craftPhoto: photoData,

            status: "Pending"

        };


        localStorage.setItem(
            "creatorVerification",
            JSON.stringify(verificationData)
        );


        alert(
            "Verification submitted successfully. Your profile is pending admin approval."
        );


        window.location.href = "creator-pending.html";

    });

});