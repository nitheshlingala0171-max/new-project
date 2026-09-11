/* =========================================================
   KALASETU - CHECKOUT JAVASCRIPT
   ========================================================= */


/* ================= LOAD CART ================= */

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");



/* ================= DISPLAY ORDER ================= */

function displayCheckout() {

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-order">
                <h3>Your Cart is Empty</h3>

                <p>
                    Please add a craft to your cart before checkout.
                </p>

                <a href="customer-home.html">
                    Explore Crafts
                </a>
            </div>
        `;

        checkoutTotal.textContent = "₹0";

        return;
    }


    checkoutItems.innerHTML = "";

    let total = 0;


    cart.forEach(function (item) {

        const quantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const itemTotal =
            price * quantity;

        total += itemTotal;


        const itemElement =
            document.createElement("div");

        itemElement.className = "order-item";


        itemElement.innerHTML = `

            <div class="order-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="order-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ${item.category}
                </p>

                <p>
                    Quantity: ${quantity}
                </p>

            </div>


            <div class="order-item-price">

                ₹${itemTotal.toLocaleString("en-IN")}

            </div>

        `;


        checkoutItems.appendChild(itemElement);

    });


    checkoutTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

}



/* ================= PLACE ORDER ================= */

document
    .getElementById("checkoutForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;
        }


        const customerName =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const city =
            document.getElementById("city").value.trim();

        const state =
            document.getElementById("state").value.trim();

        const pincode =
            document.getElementById("pincode").value.trim();


        /* ================= VALIDATION ================= */

        if (
            customerName === "" ||
            phone === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            pincode === ""
        ) {

            alert(
                "Please fill all delivery details."
            );

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10-digit phone number."
            );

            return;
        }


        if (!/^[0-9]{6}$/.test(pincode)) {

            alert(
                "Please enter a valid 6-digit pincode."
            );

            return;
        }



        /* ================= TOTAL ================= */

        let total = 0;


        cart.forEach(function (item) {

            total +=
                Number(item.price) *
                Number(item.quantity);

        });



        /* ================= ORDER OBJECT ================= */

        const order = {

            id: Date.now(),

            customerName: customerName,

            phone: phone,

            address: address,

            city: city,

            state: state,

            pincode: pincode,

            items: cart,

            total: total,

            status: "ORDER PLACED",

            orderDate:
                new Date().toLocaleString("en-IN")

        };



        /* ================= SAVE ORDER ================= */

        let orders =
            JSON.parse(localStorage.getItem("orders")) || [];


        orders.push(order);


        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );



        /* ================= CLEAR CART ================= */

        localStorage.removeItem("cart");



        /* ================= SUCCESS ================= */

        alert(
            "Order placed successfully!"
        );


        /* ================= MY ORDERS ================= */

        window.location.replace("my-orders.html");

    });



/* ================= START ================= */
function useCurrentLocation() {

    const address = document.getElementById("address");
    const locationStatus = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        locationStatus.textContent =
            "Location is not supported by this browser.";
        return;
    }

    locationStatus.textContent =
        "Getting your current location...";

    navigator.geolocation.getCurrentPosition(
        function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            address.value =
                "Current Location\n" +
                "Latitude: " + latitude +
                "\nLongitude: " + longitude;

            locationStatus.textContent =
                "✓ Current location added";
        },

        function () {

            locationStatus.textContent =
                "Unable to get location. Please allow location access.";
        }
    );
}

displayCheckout();