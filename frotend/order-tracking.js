/* =========================================================
   KALASETU - ORDER TRACKING JAVASCRIPT
   ========================================================= */


/* ================= LOAD ORDERS ================= */

const orders =
    JSON.parse(localStorage.getItem("orders")) || [];


/* ================= GET ELEMENTS ================= */

const orderId =
    document.getElementById("orderId");

const orderDate =
    document.getElementById("orderDate");

const orderTotal =
    document.getElementById("orderTotal");


/* ================= DISPLAY LATEST ORDER ================= */

if (orders.length > 0) {

    const latestOrder =
        orders[orders.length - 1];


    /* Order ID */

    orderId.textContent =
        "#" + latestOrder.id;


    /* Order Date */

    orderDate.textContent =
        latestOrder.orderDate || "--";


    /* Total */

    orderTotal.textContent =
        "₹" +
        Number(latestOrder.total || 0)
            .toLocaleString("en-IN");

} else {

    orderId.textContent = "--";

    orderDate.textContent = "--";

    orderTotal.textContent = "₹0";

}