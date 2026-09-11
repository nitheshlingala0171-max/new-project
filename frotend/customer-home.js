/* =========================================================
   KALASETU - CUSTOMER HOME JAVASCRIPT
   Clean version - Git conflicts removed
   ========================================================= */


/* ================= FESTIVAL CAROUSEL ================= */

let currentFestival = 0;

const festivalTrack = document.getElementById("festivalTrack");

const totalFestivals = 3;


/* Show selected festival */

function showFestival(index) {

    if (!festivalTrack) {
        return;
    }

    if (index < 0) {
        currentFestival = totalFestivals - 1;
    }

    else if (index >= totalFestivals) {
        currentFestival = 0;
    }

    else {
        currentFestival = index;
    }

    festivalTrack.style.transform =
        `translateX(-${currentFestival * 100}%)`;
}


/* Next festival */

function nextFestival() {

    showFestival(currentFestival + 1);

}


/* Previous festival */

function previousFestival() {

    showFestival(currentFestival - 1);

}


/* Automatic festival carousel */

setInterval(function () {

    nextFestival();

}, 5000);



/* ================= FESTIVAL BUTTON ================= */

function exploreFestival(festivalName) {

    alert(
        festivalName +
        " collection will be available here."
    );

}



/* ================= CATEGORY ================= */

function openCategory(categoryName) {

    alert(
        categoryName +
        " category selected."
    );

}



/* ================= PRODUCT ================= */

function openProduct(productName) {

    window.location.href =
        "craft-details.html?product=" +
        encodeURIComponent(productName);

}



/* ================= HEADER ICONS ================= */

function showMessage(item) {

    alert(
        item +
        " feature will be added soon."
    );

}



/* ================= SEARCH ================= */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const value =
        searchInput.value.trim();

    if (value === "") {

        alert(
            "Please enter something to search."
        );

        return;
    }

    alert(
        "Searching for: " + value
    );

}



/* ================= ENTER KEY SEARCH ================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );

}



/* ================= INITIAL SLIDE ================= */

showFestival(0);