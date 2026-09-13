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

    if (item === "Profile") {

        window.location.href = "customer-profile.html";

        return;
    }

    alert(
        item +
        " feature will be added soon."
    );

}
/* ================= WISHLIST ================= */

/* ================= WISHLIST ================= */

function addToWishlist(event, productName, category, price, image) {

    event.stopPropagation();

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if already added
    const alreadyExists = wishlist.some(
        item => item.name === productName
    );

    if (alreadyExists) {
        alert("Already added to Wishlist ❤️");
        return;
    }

    // Add product
    wishlist.push({
        name: productName,
        category: category,
        price: price,
        image: image
    });

    // Save wishlist
    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert(productName + " added to Wishlist ❤️");
}
/* ================= SEARCH WITH SUGGESTIONS ================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    // Browser's built-in suggestion dropdown
    searchInput.setAttribute("list", "searchSuggestions");

    let dataList = document.getElementById("searchSuggestions");

    if (!dataList) {
        dataList = document.createElement("datalist");
        dataList.id = "searchSuggestions";
        document.body.appendChild(dataList);
    }

    // Get existing products from the Home page
    function getProducts() {
        const cards = document.querySelectorAll(".product-card");

        return Array.from(cards).map(card => {
            const title = card.querySelector("h3");
            const category = card.querySelector("p");

            return {
                name: title ? title.innerText.trim() : "",
                category: category ? category.innerText.trim() : "",
                card: card
            };
        }).filter(product => product.name !== "");
    }

    // Show suggestions while typing
    searchInput.addEventListener("input", function () {

        const value = searchInput.value.trim().toLowerCase();

        dataList.innerHTML = "";

        if (value === "") {
            return;
        }

        const products = getProducts();

        const matches = products.filter(product =>
            product.name.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value)
        );

        matches.forEach(product => {

            const option = document.createElement("option");

            option.value = product.name;

            dataList.appendChild(option);
        });
    });


    // Search button / Enter key
    function searchProducts() {

        const value = searchInput.value.trim().toLowerCase();

        const products = getProducts();

        if (value === "") {
            alert("Please enter something to search.");
            return;
        }

        let found = false;

        products.forEach(product => {

            const productName =
                product.name.toLowerCase();

            const productCategory =
                product.category.toLowerCase();

            if (
                productName.includes(value) ||
                productCategory.includes(value)
            ) {
                product.card.style.display = "";
                found = true;
            } else {
                product.card.style.display = "none";
            }
        });

        if (found) {

            const firstResult = products.find(product =>
                product.name.toLowerCase().includes(value) ||
                product.category.toLowerCase().includes(value)
            );

            if (firstResult) {
                firstResult.card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        } else {

            alert("No crafts found for: " + searchInput.value);

            // Show all products again
            products.forEach(product => {
                product.card.style.display = "";
            });
        }
    }


    // Enter key
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            event.preventDefault();
            searchProducts();
        }

    });


    // Make search button work
    window.searchProducts = searchProducts;
}

/* ================= INITIAL SLIDE ================= */

showFestival(0);
