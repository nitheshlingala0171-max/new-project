/* =========================================================
   KALASETU - CART
   ========================================================= */

const cartList = document.getElementById("cartList");
const cartSummary = document.getElementById("cartSummary");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* ================= DISPLAY CART ================= */

function displayCart() {

    if (cart.length === 0) {

        cartList.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your Cart is Empty
                </h3>

                <p>
                    You haven't added any crafts to your cart yet.
                    Explore beautiful handmade crafts and add your favourites here.
                </p>

                <a
                    href="customer-home.html"
                    class="explore-btn"
                >
                    Explore Crafts
                </a>

            </div>
        `;

        cartSummary.style.display = "none";

        return;
    }


    cartSummary.style.display = "block";

    cartList.innerHTML = "";


    cart.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "cart-item";


        card.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="cart-item-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.category}
                </p>

                <span class="cart-item-price">
                    ₹${item.price}
                </span>

            </div>


            <div class="quantity-box">

                <button
                    type="button"
                    onclick="decreaseQuantity(${index})"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    type="button"
                    onclick="increaseQuantity(${index})"
                >
                    +
                </button>

            </div>


            <button
                type="button"
                class="remove-cart"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>

        `;


        cartList.appendChild(card);

    });


    updateTotal();
}


/* ================= INCREASE ================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();
}


/* ================= DECREASE ================= */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

    displayCart();
}


/* ================= REMOVE ================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();
}


/* ================= TOTAL ================= */

function updateTotal() {

    let subtotal = 0;


    cart.forEach(item => {

        subtotal +=
            Number(item.price) *
            Number(item.quantity);

    });


    subtotalElement.textContent =
        "₹" + subtotal.toLocaleString("en-IN");

    totalElement.textContent =
        "₹" + subtotal.toLocaleString("en-IN");
}


/* ================= SAVE ================= */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


/* ================= CHECKOUT ================= */

function proceedToCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    window.location.href = "checkout.html";
}


/* ================= START ================= */

displayCart();