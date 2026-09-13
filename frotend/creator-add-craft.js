
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("addCraftForm");
    const craftImage = document.getElementById("craftImage");
    const imagePreview = document.getElementById("imagePreview");

    let imageData = "";


    /* ============================= */
    /*        IMAGE PREVIEW            */
    /* ============================= */

    craftImage.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            imageData = "";
            imagePreview.innerHTML = "";
            imagePreview.style.display = "none";
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select an image file.");
            this.value = "";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            imageData = event.target.result;

            imagePreview.innerHTML =
                `<img src="${imageData}" alt="Craft Preview">`;

            imagePreview.style.display = "block";
        };

        reader.readAsDataURL(file);
    });


    /* ============================= */
    /*          ADD / EDIT CRAFT       */
    /* ============================= */

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("craftName").value.trim();

        const category =
            document.getElementById("craftCategory").value;

        const price =
            document.getElementById("craftPrice").value.trim();

        const story =
            document.getElementById("craftStory").value.trim();


        /* Check required fields */

        if (
            name === "" ||
            category === "" ||
            price === "" ||
            story === ""
        ) {
            alert("Please fill all craft details.");
            return;
        }


        /* Check image */

        if (!imageData) {
            alert("Please upload a craft image.");
            return;
        }


        /* Get existing crafts */

        let crafts = [];

        const savedCrafts =
            localStorage.getItem("creatorCrafts");

        if (savedCrafts) {

            try {
                crafts = JSON.parse(savedCrafts);
            } catch (error) {
                crafts = [];
            }

        }

        if (!Array.isArray(crafts)) {
            crafts = [];
        }


        /* Check edit mode */

        const editingIndex =
            localStorage.getItem("editingCraftIndex");


        /* Create craft object */

        const craft = {

            name: name,

            category: category,

            price: price,

            story: story,

            image: imageData,

            status: "Pending"

        };


        /* ============================= */
        /*          EDIT CRAFT             */
        /* ============================= */

        if (
            editingIndex !== null &&
            editingIndex !== "" &&
            !isNaN(editingIndex)
        ) {

            const index = Number(editingIndex);

            if (crafts[index]) {

                crafts[index] = craft;

            } else {

                crafts.push(craft);

            }

            localStorage.removeItem("editingCraftIndex");


            localStorage.setItem(
                "creatorCrafts",
                JSON.stringify(crafts)
            );

            alert("Craft updated successfully.");

        }


        /* ============================= */
        /*          ADD NEW CRAFT          */
        /* ============================= */

        else {

            crafts.push(craft);

            localStorage.setItem(
                "creatorCrafts",
                JSON.stringify(crafts)
            );

            alert("Craft added successfully.");

        }


        /* Go to My Crafts */

        window.location.href =
            "creator-my-crafts.html";

    });

});


/* ============================= */
/*          BACK BUTTON            */
/* ============================= */

function goBack() {

    window.location.href =
        "creator-my-crafts.html";

}
