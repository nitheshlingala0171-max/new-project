const wishlistList = document.getElementById("wishlistList");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayWishlist() {

    if (wishlist.length === 0) {

        wishlistList.innerHTML = `
            <div class="empty-wishlist">
                <div class="wishlist-icon">♡</div>

                <h3>Your Wishlist is Empty</h3>

                <p>
                    You haven't added any crafts to your wishlist yet.
                    Explore beautiful handmade crafts and save your favourites here.
                </p>

                <a href="customer-home.html" class="explore-btn">
                    Explore Crafts
                </a>
            </div>
        `;

        return;
    }

    wishlistList.innerHTML = "";

    wishlist.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "wishlist-item";

        card.innerHTML = `
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>

            <div class="wishlist-item-info">
                <h3>${item.name}</h3>

                <p>${item.category}</p>

                <span>₹${item.price}</span>
            </div>

            <button
                class="remove-wishlist"
                onclick="removeFromWishlist(${index})"
            >
                Remove
            </button>
        `;

        wishlistList.appendChild(card);
    });
}


function removeFromWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    displayWishlist();
}


displayWishlist();