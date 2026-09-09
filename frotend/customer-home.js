// ================= SEARCH =================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter what you are looking for.");
        return;
    }

    alert("Searching for: " + searchText);
});


// Press Enter to search
searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// ================= WISHLIST =================

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.classList.toggle("active");

        if (this.classList.contains("active")) {
            this.textContent = "♥";
        } else {
            this.textContent = "♡";
        }

    });

});


// ================= CATEGORIES =================

const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const category = this.dataset.category;

        alert("You selected: " + category);

    });

});


// ================= VIEW ALL CATEGORIES =================

document.getElementById("viewCategories").addEventListener("click", function () {

    alert("All craft categories will be available here.");

});


// ================= VIEW FEATURED =================

document.getElementById("viewFeatured").addEventListener("click", function () {

    alert("More featured crafts will be available here.");

});


// ================= CRAFT DETAILS =================

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Craft details page will open here.");

    });

});


// ================= DISCOVER =================

document.getElementById("discoverBtn").addEventListener("click", function () {

    alert("Discover page will be created next.");

});


// ================= HEADER WISHLIST =================

document.getElementById("wishlistBtn").addEventListener("click", function () {

    alert("Wishlist page will be created next.");

});


// ================= CART =================

document.getElementById("cartBtn").addEventListener("click", function () {

    alert("Cart page will be created later.");

});


// ================= PROFILE =================

document.getElementById("profileBtn").addEventListener("click", function () {

    alert("Customer profile will be created later.");

});


// ================= BOTTOM NAVIGATION =================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const page = this.dataset.page;

        if (page === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        else if (page === "discover") {
            alert("Discover page will be created next.");
        }

        else if (page === "wishlist") {
            alert("Wishlist page will be created later.");
        }

        else if (page === "orders") {
            alert("Orders page will be created later.");
        }

        else if (page === "profile") {
            alert("Profile page will be created later.");
        }

    });

});