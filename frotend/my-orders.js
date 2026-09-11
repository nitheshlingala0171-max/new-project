/* =========================================================
   KALASETU - MY ORDERS
   ========================================================= */

const ordersList = document.getElementById("ordersList");

let orders =
    JSON.parse(localStorage.getItem("orders")) || [];


/* ================= DISPLAY ORDERS ================= */

function displayOrders() {

    if (orders.length === 0) {

        ordersList.innerHTML = `
            <div class="empty-orders">

                <div class="empty-icon">
                    ✦
                </div>

                <h3>
                    No Orders Yet
                </h3>

                <p>
                    You haven't placed any orders yet.
                    Explore beautiful handmade crafts and
                    place your first order.
                </p>

                <a href="customer-home.html">
                    Explore Crafts
                </a>

            </div>
        `;

        return;
    }


    ordersList.innerHTML = "";


    orders.slice().reverse().forEach(function (order) {

        const orderCard =
            document.createElement("div");

        orderCard.className =
            "order-card";


        let itemsHTML = "";


        order.items.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 1;

            const price =
                Number(item.price) || 0;

            itemsHTML += `
                <div class="order-product">

                    <div class="order-product-image">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >

                    </div>

                    <div class="order-product-info">

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

                    <strong>
                        ₹${(price * quantity).toLocaleString("en-IN")}
                    </strong>

                </div>
            `;
        });


        orderCard.innerHTML = `

            <div class="order-header">

                <div>

                    <h3>
                        Order #${order.id}
                    </h3>

                    <p>
                        ${order.orderDate}
                    </p>

                </div>

                <span class="order-status">
                    ${order.status}
                </span>

            </div>


            <div class="order-products">

                ${itemsHTML}

            </div>


            <div class="order-delivery">

                <h4>
                    Delivery Details
                </h4>

                <p>
                    <strong>Name:</strong>
                    ${order.customerName}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${order.phone}
                </p>

                <p>
                    <strong>Address:</strong>
                    ${order.address}
                </p>

                <p>
                    ${order.city}, ${order.state}
                    - ${order.pincode}
                </p>

            </div>


            <div class="order-total">

                <span>
                    Total Amount
                </span>

                <strong>
                    ₹${Number(order.total).toLocaleString("en-IN")}
                </strong>

            </div>

        `;


        ordersList.appendChild(orderCard);

    });
}


displayOrders();