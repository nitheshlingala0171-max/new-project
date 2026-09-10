 /* ================= FESTIVAL CAROUSEL ================= */

let currentFestival = 0;

const festivalTrack = document.getElementById("festivalTrack");

const totalFestivals = 3;


function showFestival(index) {

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


function nextFestival() {
    showFestival(currentFestival + 1);
}


function previousFestival() {
    showFestival(currentFestival - 1);
}


/* Automatic carousel */

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

    alert(
        productName +
        " selected."
    );
}


/* ================= HEADER ICONS ================= */

function showMessage(item) {

    alert(item + " feature will be added soon.");
}


/* ================= SEARCH ================= */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const value =
        searchInput.value.trim();

    if (value === "") {

        alert("Please enter something to search.");

        return;
    }

    alert(
        "Searching for: " + value
    );
}


/* ================= ENTER KEY SEARCH ================= */

document
    .getElementById("searchInput")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    });